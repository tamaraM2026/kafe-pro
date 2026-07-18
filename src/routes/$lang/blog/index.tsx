import { createFileRoute, Link } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";
import { blogPosts } from "@/data/blog-posts";

export const Route = createFileRoute("/$lang/blog/")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    const pagePath = "/blog";
    return {
      meta: [
        { title: t.meta.blogTitle },
        { name: "description", content: t.meta.blogDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: BlogIndex,
});

function BlogIndex() {
  const t = useTranslations();
  const lang = useLang();
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.blog.label}</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">{t.blog.heading}</h1>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">{t.blog.intro}</p>
          </Animate>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Animate key={post.slug} delay={((i % 3) * 100) as 0 | 100 | 200}>
              <Link
                to={"/$lang/blog/$slug"}
                params={{ lang, slug: post.slug }}
                className="block bg-white/50 backdrop-blur-sm rounded-3xl border border-white/30 h-full overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img src={post.cover} alt={post.coverAlt} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.15em] text-terracotta">{post.dateLabel.toUpperCase()} · {post.readTime.toUpperCase()}</p>
                  <h2 className="mt-3 font-display text-xl text-burgundy leading-snug">{post.title}</h2>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="mt-4 inline-block text-sm text-burgundy hover:text-terracotta transition-colors">{t.blog.readMoreCta}</span>
                </div>
              </Link>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
