import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import type { BlogBlock } from "@/data/blog-posts";
import { blogPostsEs } from "@/data/blog-posts-es";
import { esBlog, formatDateEs, SITE_URL } from "@/i18n/es-blog";

export const Route = createFileRoute("/es/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!blogPostsEs.some((p) => p.slug === params.slug)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const post = blogPostsEs.find((p) => p.slug === params.slug);
    if (!post) return {};
    const title = `${post.title} — Kafe con Propósito`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "es_ES" },
        ...(post.cover ? [{ property: "og:image", content: `${SITE_URL}${post.cover}` }] : []),
        ...(post.tags.length ? [{ name: "keywords", content: post.tags.join(", ") }] : []),
      ],
      links: [
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: esBlog.feedTitle,
          href: "/es/feed.xml",
        },
      ],
    };
  },
  component: BlogPostPageEs,
  notFoundComponent: BlogPostNotFoundEs,
});

function BlogPostNotFoundEs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-display text-4xl text-burgundy">{esBlog.postNotFound}</h1>
        <Link
          to={"/es/blog"}
          className="mt-6 inline-block text-burgundy hover:text-terracotta transition-colors underline underline-offset-4"
        >
          {esBlog.backToBlog}
        </Link>
      </div>
    </section>
  );
}

// Inline Markdown in post.md: [texto](https://...) or [texto](/en/events/...),
// **negrita** and *cursiva*.
const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
const linkClass =
  "text-burgundy underline underline-offset-4 hover:text-terracotta transition-colors";

function renderInline(text: string) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > lastIndex) nodes.push(text.slice(lastIndex, m.index));
    const [, label, url, bold, italic] = m;
    if (url) {
      const external = /^https?:\/\//.test(url);
      nodes.push(
        <a
          key={m.index}
          href={url}
          className={linkClass}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>,
      );
    } else if (bold) {
      nodes.push(<strong key={m.index}>{bold}</strong>);
    } else {
      nodes.push(<em key={m.index}>{italic}</em>);
    }
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function BlogBlockView({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading": {
      const sizes = {
        2: "text-3xl md:text-4xl mt-4",
        3: "text-2xl md:text-3xl mt-2",
        4: "text-xl md:text-2xl",
      } as const;
      return (
        <h2 className={`font-display text-burgundy ${sizes[block.level]}`}>
          {renderInline(block.text)}
        </h2>
      );
    }
    case "list":
      return block.ordered ? (
        <ol className="space-y-3 list-decimal list-inside marker:text-terracotta">
          {block.items.map((item, i) => (
            <li key={i} className="text-foreground/80 leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-terracotta pl-6 py-2 font-display text-xl md:text-2xl text-burgundy italic leading-snug">
          {renderInline(block.text)}
        </blockquote>
      );
    case "paragraph":
    default:
      return <p className="text-foreground/80 leading-relaxed">{renderInline(block.text)}</p>;
  }
}

function BlogPostPageEs() {
  const { slug } = Route.useParams();
  const post = blogPostsEs.find((p) => p.slug === slug)!;

  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <Link
              to={"/es/blog"}
              className="text-sm text-burgundy hover:text-terracotta transition-colors"
            >
              {esBlog.backToBlog}
            </Link>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-xs tracking-[0.25em] text-terracotta font-medium">
              <time dateTime={post.date}>
                {`${esBlog.publishedOn} ${formatDateEs(post.date)}`.toUpperCase()}
              </time>
              {" · "}
              {post.readMinutes} {esBlog.minRead.toUpperCase()}
            </p>
          </Animate>
          <Animate delay={200}>
            <h1 className="mt-4 font-display text-4xl md:text-5xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.1]">
              {post.title}
            </h1>
          </Animate>
          <Animate delay={300}>
            <p className="mt-4 text-sm text-muted-foreground">{post.author}</p>
          </Animate>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {post.cover && (
            <Animate>
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src={post.cover}
                  alt={post.coverAlt}
                  className="w-full aspect-[16/9] object-cover shadow-2xl"
                />
              </div>
            </Animate>
          )}
          <div className="mt-12 space-y-6">
            {post.body.map((block, i) => (
              <Animate key={i} delay={(Math.min(i, 3) * 100) as 0 | 100 | 200 | 300}>
                <BlogBlockView block={block} />
              </Animate>
            ))}
          </div>

          {post.questions.length > 0 && (
            <Animate>
              <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm">
                <h2 className="font-display text-3xl md:text-4xl text-burgundy">
                  {esBlog.reflectionHeading}
                </h2>
                <ol className="mt-6 space-y-4 list-decimal list-inside marker:text-terracotta">
                  {post.questions.map((q, i) => (
                    <li key={i} className="text-foreground/80 leading-relaxed">
                      {renderInline(q)}
                    </li>
                  ))}
                </ol>
              </div>
            </Animate>
          )}

          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="sr-only">{esBlog.tagsLabel}:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-cream text-xs tracking-[0.1em] text-terracotta"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            to={"/es/blog"}
            className="inline-block px-7 py-4 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {esBlog.backToBlog}
          </Link>
        </div>
      </section>
    </>
  );
}
