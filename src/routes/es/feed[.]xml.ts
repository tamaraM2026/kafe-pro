import { createFileRoute } from "@tanstack/react-router";
import { blogPostsEs } from "@/data/blog-posts-es";
import { esBlog, SITE_URL } from "@/i18n/es-blog";

// RSS feed for the Spanish blog only, served at /es/feed.xml.
function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rssDate(isoDate: string): string {
  return new Date(`${isoDate}T09:00:00Z`).toUTCString();
}

function buildFeed(): string {
  const blogUrl = `${SITE_URL}/es/blog/`;
  const items = blogPostsEs
    .map((post) => {
      const url = `${SITE_URL}/es/blog/${post.slug}/`;
      const categories = post.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join("\n");
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rssDate(post.date)}</pubDate>
      <description>${escapeXml(post.description)}</description>
${categories}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(esBlog.feedTitle)}</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(esBlog.metaDescription)}</description>
    <language>es</language>
    <atom:link href="${SITE_URL}/es/feed.xml" rel="self" type="application/rss+xml" />
${blogPostsEs[0] ? `    <lastBuildDate>${rssDate(blogPostsEs[0].date)}</lastBuildDate>\n` : ""}${items}
  </channel>
</rss>
`;
}

export const Route = createFileRoute("/es/feed.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildFeed(), {
          headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
        }),
    },
  },
});
