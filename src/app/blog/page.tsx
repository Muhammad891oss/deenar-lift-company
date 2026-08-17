import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "Guides and insights on lift pricing, elevator buying, maintenance and modernization from Deenar Lift Company.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="Our Blog"
        title="Insights for smarter lift decisions"
        description="Practical guides on lift pricing, choosing the right elevator, maintenance contracts and more — written by the engineers who build them."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col border border-white/10 bg-[#101013] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)]"
                >
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-semibold text-brand-500">
                      {post.category}
                    </span>
                    <span className="text-zinc-400">{post.readTime}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-brand-400">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs text-zinc-400">
                      {new Date(post.date).toLocaleDateString("en-PK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                      Read article
                      <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
