import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";
import { blogPosts, type BlogBlock } from "@/data/blog-posts";

export const Route = createFileRoute("/$lang/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!blogPosts.some((p) => p.slug === params.slug)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    const pagePath = `/blog/${params.slug}`;
    return {
      meta: post
        ? [
            { title: `${post.title} — Kafe con Propósito` },
            { name: "description", content: post.excerpt },
          ]
        : [],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: BlogPostNotFound,
});

function BlogPostNotFound() {
  const t = useTranslations();
  const lang = useLang();
  return (
    <section className="py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-display text-4xl text-burgundy">Post not found</h1>
        <Link to={"/$lang/blog"} params={{ lang }} className="mt-6 inline-block text-burgundy hover:text-terracotta transition-colors underline underline-offset-4">
          {t.blog.backToBlog}
        </Link>
      </div>
    </section>
  );
}

function BlogBlockView({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading": {
      const sizes = { 2: "text-3xl md:text-4xl mt-4", 3: "text-2xl md:text-3xl mt-2", 4: "text-xl md:text-2xl" } as const;
      return <h2 className={`font-display text-burgundy ${sizes[block.level]}`}>{block.text}</h2>;
    }
    case "list":
      return block.ordered ? (
        <ol className="space-y-3 list-decimal list-inside marker:text-terracotta">
          {block.items.map((item, i) => <li key={i} className="text-foreground/80 leading-relaxed">{item}</li>)}
        </ol>
      ) : (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-terracotta pl-6 py-2 font-display text-xl md:text-2xl text-burgundy italic leading-snug">
          {block.text}
        </blockquote>
      );
    case "paragraph":
    default:
      return <p className="text-foreground/80 leading-relaxed">{block.text}</p>;
  }
}

function BlogPostPage() {
  const t = useTranslations();
  const lang = useLang();
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug)!;

  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <Link to={"/$lang/blog"} params={{ lang }} className="text-sm text-burgundy hover:text-terracotta transition-colors">
              {t.blog.backToBlog}
            </Link>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-xs tracking-[0.25em] text-terracotta font-medium">{post.dateLabel.toUpperCase()} · {post.readTime.toUpperCase()}</p>
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
                <img src={post.cover} alt={post.coverAlt} className="w-full aspect-[16/9] object-cover shadow-2xl" />
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
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link to={"/$lang/blog"} params={{ lang }} className="inline-block px-7 py-4 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
            {t.blog.backToBlog}
          </Link>
        </div>
      </section>
    </>
  );
}
