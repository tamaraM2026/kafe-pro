import sys, json, re
from pathlib import Path
from bs4 import BeautifulSoup

SRC = Path("/Users/tamaramedina/wix-blog-export/downloads/post")

# Matches a paragraph that is mostly/entirely a Wix auto-generated hashtag
# footer, even with minor scrape glitches (broken hashtags, stray words
# like a truncated "AUDIO" embed label, missing spaces before a "#").
HASHTAG_RE = re.compile(r"^(#\s*\w*\s*){4,}[\w ]{0,20}$")

def clean_text(el):
    return el.get_text(" ", strip=True).replace("\xa0", " ")

def parse_post(slug):
    f = SRC / slug / "_index.md"
    html = f.read_text(encoding="utf-8")
    soup = BeautifulSoup(html, "html.parser")

    title_el = soup.find("h1", attrs={"data-hook": "post-title"})
    title = clean_text(title_el) if title_el else None

    author_el = soup.find(attrs={"data-hook": "user-name"})
    author = clean_text(author_el) if author_el else None

    date_els = soup.find_all(attrs={"data-hook": "time-ago"})
    date = date_els[0].get("title") if date_els else None

    readtime_el = soup.find(attrs={"data-hook": "time-to-read"})
    readtime = clean_text(readtime_el) if readtime_el else None

    # cover image: post-hero-image section, if present
    cover = None
    hero_section = soup.find("section", attrs={"data-hook": "post-hero-image"})
    if hero_section:
        img = hero_section.find("img")
        if img and img.get("src"):
            cover = img["src"]

    content = soup.find("div", attrs={"data-id": "content-viewer"})
    blocks = []
    seen_images = set()

    if content:
        breakouts = content.find_all("div", attrs={"data-breakout": "normal"})
        for b in breakouts:
            imgs = b.find_all("img")
            if imgs:
                for img in imgs:
                    src = img.get("src")
                    if src and src not in seen_images:
                        seen_images.add(src)
                        blocks.append({"type": "image", "src": src, "alt": img.get("alt", "") or ""})
                continue

            ul = b.find(["ul", "ol"])
            if ul:
                items = [clean_text(li) for li in ul.find_all("li", recursive=False)]
                items = [i for i in items if i]
                if items:
                    blocks.append({"type": "list", "ordered": ul.name == "ol", "items": items})
                continue

            heading = b.find(["h1", "h2", "h3", "h4"])
            if heading:
                text = clean_text(heading)
                if text:
                    blocks.append({"type": "heading", "level": int(heading.name[1]), "text": text})
                continue

            blockquote = b.find("blockquote")
            if blockquote:
                text = clean_text(blockquote)
                if text:
                    blocks.append({"type": "quote", "text": text})
                continue

            text = clean_text(b)
            if not text:
                continue
            if HASHTAG_RE.match(text):
                continue
            blocks.append({"type": "paragraph", "text": text})

    return {
        "slug": slug,
        "title": title,
        "author": author,
        "date": date,
        "readTime": readtime,
        "cover": cover,
        "blocks": blocks,
    }

if __name__ == "__main__":
    slug = sys.argv[1]
    result = parse_post(slug)
    print(json.dumps(result, indent=2, ensure_ascii=False))
