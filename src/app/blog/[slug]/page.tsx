import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <nav className="flex items-center gap-2 text-xs text-zinc-400">
          <Link href="/" className="hover:text-brand-500">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" className="hover:text-brand-500">
            Blog
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-zinc-300">{post.category}</span>
        </nav>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-semibold text-brand-500">
              {post.category}
            </span>
            <span className="text-zinc-400">{post.readTime}</span>
            <span className="text-zinc-400">
              {new Date(post.date).toLocaleDateString("en-PK", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">{post.excerpt}</p>
        </header>

        <div className="mt-10 border-t border-white/10 pt-8">
          {post.content.map((block, i) => (
            <div key={i} className="mb-7">
              {block.heading && (
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  {block.heading}
                </h2>
              )}
              {block.body && (
                <p className="mt-3 leading-relaxed text-zinc-300">{block.body}</p>
              )}
              {block.list && (
                <ul className="mt-3 space-y-2.5">
                  {block.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border border-white/10 bg-[#101013] p-7">
          <h2 className="text-lg font-bold text-white">Need a lift for your building?</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Get a free site survey and an itemized quotation in PKR — usually within
            48 hours. Use our pricing calculator for an instant estimate.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
            >
              Estimate Price
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
            >
              Contact {site.name}
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-white/10 bg-[#0b0b0e] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Continue reading
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border border-white/10 bg-[#101013] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)]"
                >
                  <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-500">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-white transition-colors group-hover:text-brand-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
