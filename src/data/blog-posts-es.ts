// Spanish blog posts. Each post is a folder in src/content/blog-es/<slug>/
// with a post.md file (and optionally a cover image next to it). The folder
// name is the post's URL: /es/blog/<slug>/. Folders starting with "_" (like
// the _plantilla template) are ignored.
//
// Kept separate from src/data/blog-posts.ts so the English blog never shows
// Spanish posts and vice versa.

import type { BlogBlock } from "@/data/blog-posts";

export type BlogPostEs = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  author: string;
  cover?: string;
  coverAlt?: string;
  tags: string[];
  questions: string[];
  readMinutes: number;
  body: BlogBlock[];
};

const DEFAULT_AUTHOR = "Tamara Medina Sapovalova";

const postFiles = import.meta.glob("/src/content/blog-es/*/post.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const imageFiles = import.meta.glob("/src/content/blog-es/*/*.{jpg,jpeg,png,webp,gif}", {
  import: "default",
  eager: true,
}) as Record<string, string>;

type FrontMatter = Record<string, string | string[]>;

function unquote(value: string): string {
  const v = value.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

// Minimal front matter reader: "key: value", "key: [a, b]" and
// "key:" followed by "  - item" lines.
function parseFrontMatter(source: string): { data: FrontMatter; content: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: source };

  const data: FrontMatter = {};
  let currentList: string[] | null = null;
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;

    const item = line.match(/^\s*-\s+(.*)$/);
    if (item && currentList) {
      currentList.push(unquote(item[1]));
      continue;
    }

    const pair = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!pair) continue;
    const [, key, value] = pair;
    if (value === "") {
      currentList = [];
      data[key] = currentList;
    } else if (value.startsWith("[") && value.endsWith("]")) {
      currentList = null;
      data[key] = value.slice(1, -1).split(",").map(unquote).filter(Boolean);
    } else {
      currentList = null;
      data[key] = unquote(value);
    }
  }
  return { data, content: match[2] };
}

// Turns the Markdown body into the same block types the English blog uses.
function parseBody(markdown: string): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  for (const chunk of markdown.trim().split(/\r?\n\s*\r?\n/)) {
    const lines = chunk
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) continue;

    const heading = lines[0].match(/^(#{2,4})\s+(.*)$/);
    if (heading && lines.length === 1) {
      blocks.push({ type: "heading", level: heading[1].length as 2 | 3 | 4, text: heading[2] });
    } else if (lines.every((l) => /^[-*]\s+/.test(l))) {
      blocks.push({
        type: "list",
        ordered: false,
        items: lines.map((l) => l.replace(/^[-*]\s+/, "")),
      });
    } else if (lines.every((l) => /^\d+\.\s+/.test(l))) {
      blocks.push({
        type: "list",
        ordered: true,
        items: lines.map((l) => l.replace(/^\d+\.\s+/, "")),
      });
    } else if (lines.every((l) => l.startsWith(">"))) {
      blocks.push({ type: "quote", text: lines.map((l) => l.replace(/^>\s?/, "")).join(" ") });
    } else {
      blocks.push({ type: "paragraph", text: lines.join(" ") });
    }
  }
  return blocks;
}

function asString(value: string | string[] | undefined): string | undefined {
  return typeof value === "string" && value !== "" ? value : undefined;
}

function asList(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
}

function loadPost(path: string, source: string): BlogPostEs {
  const slug = path.split("/").at(-2)!;
  const { data, content } = parseFrontMatter(source);

  const title = asString(data.title);
  const date = asString(data.date);
  const description = asString(data.description);
  if (!title || !date || !description) {
    throw new Error(`Spanish blog post "${slug}" needs title, date and description in post.md`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`Spanish blog post "${slug}": date must look like 2026-09-24, got "${date}"`);
  }

  const coverFile = asString(data.cover);
  const cover = coverFile ? imageFiles[`/src/content/blog-es/${slug}/${coverFile}`] : undefined;
  if (coverFile && !cover) {
    throw new Error(
      `Spanish blog post "${slug}": cover image "${coverFile}" not found in its folder`,
    );
  }

  const words = content.split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title,
    date,
    description,
    author: asString(data.author) ?? DEFAULT_AUTHOR,
    cover,
    coverAlt: asString(data.coverAlt) ?? title,
    tags: asList(data.tags),
    questions: asList(data.preguntas),
    readMinutes: Math.max(1, Math.round(words / 200)),
    body: parseBody(content),
  };
}

export const blogPostsEs: BlogPostEs[] = Object.entries(postFiles)
  .filter(([path]) => !path.split("/").at(-2)!.startsWith("_"))
  .map(([path, source]) => loadPost(path, source))
  .sort((a, b) => (a.date < b.date ? 1 : -1));
