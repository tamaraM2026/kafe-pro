import { createFileRoute, Link } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { blogPostsEs } from "@/data/blog-posts-es";
import { esBlog, formatDateEs } from "@/i18n/es-blog";

// Spanish-only blog list. Lives outside /$lang/ on purpose: the rest of the
// site is English-only, so only the blog gets a Spanish version.
export const Route = createFileRoute("/es/blog/")({
  head: () => ({
    meta: [
      { title: esBlog.metaTitle },
      { name: "description", content: esBlog.metaDescription },
      { property: "og:title", content: esBlog.metaTitle },
      { property: "og:description", content: esBlog.metaDescription },
      { property: "og:locale", content: "es_ES" },
    ],
    links: [
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: esBlog.feedTitle,
        href: "/es/feed.xml",
      },
    ],
  }),
  component: BlogIndexEs,
});

function BlogIndexEs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{esBlog.label}</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
              {esBlog.heading}
            </h1>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">{esBlog.intro}</p>
          </Animate>
        </div>

        {blogPostsEs.length === 0 && (
          <p className="mt-16 text-center text-foreground/75">{esBlog.empty}</p>
        )}

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPostsEs.map((post, i) => (
            <Animate key={post.slug} delay={((i % 3) * 100) as 0 | 100 | 200}>
              <Link
                to={"/es/blog/$slug"}
                params={{ slug: post.slug }}
                className="block bg-white/50 backdrop-blur-sm rounded-3xl border border-white/30 h-full overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="overflow-hidden">
                  {post.cover ? (
                    <img
                      src={post.cover}
                      alt={post.coverAlt}
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-burgundy/15 to-terracotta/15 flex items-center justify-center">
                      <span className="font-display text-3xl text-burgundy/40 italic">
                        Kafe con Propósito
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.15em] text-terracotta">
                    {formatDateEs(post.date).toUpperCase()} · {post.readMinutes}{" "}
                    {esBlog.minRead.toUpperCase()}
                  </p>
                  <h2 className="mt-3 font-display text-xl text-burgundy leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-block text-sm text-burgundy hover:text-terracotta transition-colors">
                    {esBlog.readMoreCta}
                  </span>
                </div>
              </Link>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
