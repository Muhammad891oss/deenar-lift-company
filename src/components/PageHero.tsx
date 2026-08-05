import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
  image?: string;
}

export default function PageHero({ eyebrow, title, description, crumb, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0b0e]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={
            image ??
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          }
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e]/95 via-[#0b0b0e]/80 to-[#0b0b0e]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0e]/40 via-transparent to-[#0b0b0e]" />
      </div>
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-500/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <Reveal>
          <nav className="flex items-center gap-2 text-xs text-zinc-500">
            <Link href="/" className="transition-colors hover:text-brand-500">
              Home
            </Link>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-300">{crumb}</span>
          </nav>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
