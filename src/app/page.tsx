import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { images, products, services } from "@/lib/products";

const capabilities = [
  { value: "3,000 kg", label: "Max freight capacity" },
  { value: "2.0 m/s", label: "Max passenger speed" },
  { value: "30", label: "Max stops travelled" },
  { value: "Turnkey", label: "Supply · Install · Maintain" },
];

const whyUs = [
  {
    title: "In-House Manufacturing",
    description:
      "Lifts engineered and fabricated in our Karachi facility, giving us full control over quality, cost and delivery timelines.",
  },
  {
    title: "Safety-First Engineering",
    description:
      "Every lift is built to international safety standards with genuine components and redundant safety systems.",
  },
  {
    title: "Nationwide Service",
    description:
      "Our own technicians — not third-party contractors — keep your lifts running across Pakistan.",
  },
  {
    title: "Transparent PKR Pricing",
    description:
      "Clear, itemized quotations in PKR with no hidden charges. Use our online calculator and get a firm quote within days.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Site Survey",
    description:
      "Our engineers visit your building, measure the shaft and understand your traffic, power and space requirements.",
  },
  {
    step: "02",
    title: "Design & Proposal",
    description:
      "You receive a tailored lift design with an itemized, all-inclusive quotation in PKR — no hidden costs.",
  },
  {
    step: "03",
    title: "Manufacturing",
    description:
      "Your lift is fabricated in-house with strict quality checks on every component before it leaves our factory.",
  },
  {
    step: "04",
    title: "Installation & Handover",
    description:
      "Certified technicians install, commission and load-test your lift, then train your team on operation and care.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#08080a]">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/60 via-[#08080a]/85 to-[#08080a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/70 via-transparent to-[#08080a]/40" />
        </div>
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-500/[0.05] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
                  Lift Manufacturer — Karachi, Pakistan
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Vertical mobility,
                <br />
                <span className="text-brand-500">engineered</span> in Pakistan.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                {site.name} designs, manufactures, installs and maintains passenger
                lifts, home lifts, freight lifts, hospital lifts and escalators —
                built for reliability and priced in PKR.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/pricing"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
                >
                  Estimate Your Lift Price
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  Book a Free Site Survey
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-zinc-400">
                {["Passenger", "Home", "Freight", "Hospital", "Panoramic", "Escalators"].map(
                  (item, i, arr) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="text-zinc-200">{item}</span>
                      {i < arr.length - 1 && <span className="text-zinc-600">/</span>}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} className="flex justify-center">
              <div className="relative">
                <div className="animate-float-slow">
                  <HeroLift />
                </div>
                <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap border border-white/10 bg-[#101013] px-4 py-2 text-xs text-zinc-300 shadow-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Designed, built &amp; installed in Karachi
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.label} delay={i * 80} className="group border-b border-white/10 bg-[#08080a]">
                <div className="px-2 py-6 transition-transform duration-300 group-hover:-translate-y-1 lg:py-8">
                  <p className="font-mono text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-brand-400 sm:text-3xl">
                    {cap.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
                    {cap.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="What We Do"
                  title="Complete elevator solutions, under one roof"
                  description="From the first site survey to decades of maintenance, Deenar handles every stage of your lift's life cycle."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2">
                {services.map((service, i) => (
                  <Reveal
                    key={service.id}
                    delay={i * 80}
                    className="group border-t border-white/10"
                  >
                    <div className="py-8 pr-6 transition-colors duration-300 hover:border-l-2 hover:border-brand-500 hover:pl-5 sm:px-6 sm:py-10">
                      <span className="text-sm font-semibold text-brand-500">
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-brand-400">
                        {service.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {service.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-white/10 bg-[#0b0b0e] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Products"
              title="A lift for every building"
              description="Six product families, each one custom-engineered and manufactured for your site."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={(i % 3) * 90}>
                <Link
                  href="/products"
                  className="group block overflow-hidden border border-white/10 bg-[#101013] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-30`} />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent" />
                    <span className="absolute left-5 top-4 text-sm font-semibold tracking-wider text-white/70">
                      0{i + 1}
                    </span>
                    <span className="absolute right-5 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-[#0a0a0a]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-brand-400">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-400">{product.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12 text-center">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-400"
            >
              View all products
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why Deenar */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-white/10" />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#101013]">
                <Image
                  src={images.engineering}
                  alt="Deenar engineering team at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/80 to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-6 border border-white/10 bg-[#101013] px-5 py-3">
                <p className="text-sm font-semibold text-white">In-house manufacturing</p>
                <p className="text-xs text-zinc-400">Korangi Industrial Area, Karachi</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Why Deenar"
                title="A local manufacturer you can rely on"
                description="When you buy from Deenar, you're dealing directly with the people who build your lift — not a middleman. That means better quality control, real accountability and support for years to come."
              />
            </Reveal>
            <div className="mt-10 space-y-0">
              {whyUs.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 70}
                  className="group flex gap-5 border-b border-white/10 py-6"
                >
                  <span className="mt-0.5 text-sm font-semibold text-brand-500">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white transition-colors group-hover:text-brand-400">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 bg-[#0b0b0e] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="From first call to final ride, in four steps"
            />
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 90} className="relative">
                <div className="group transition-all duration-300 hover:-translate-y-1.5">
                  <span className="block text-5xl font-bold tracking-tight text-white/10 transition-colors duration-300 group-hover:text-brand-500/25">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-brand-400">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statement band */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={images.skyline}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080a] via-[#08080a]/70 to-[#08080a]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
              The Deenar Standard
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              “Lifts are infrastructure.
              <br className="hidden sm:block" /> They should be built like it.”
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
              Every Deenar lift is engineered, fabricated and load-tested before
              commissioning — then serviced by our own team for the life of the
              building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden border border-white/10 bg-[#0b0b0e] px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=80"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e]/90 via-[#0b0b0e]/75 to-[#0b0b0e]/90" />
              </div>
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
              <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to install your lift?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                  Get a free site survey and an itemized quotation in PKR — usually
                  within 48 hours of your enquiry.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-brand-500 px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
                  >
                    Get a Free Quotation
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center rounded-md border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
                  >
                    Call {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function HeroLift() {
  return (
    <svg viewBox="0 0 400 520" className="w-full max-w-md" aria-hidden="true">
      <defs>
        <linearGradient id="shaftGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0a0a0c" />
          <stop offset="50%" stopColor="#1a1c20" />
          <stop offset="100%" stopColor="#0a0a0c" />
        </linearGradient>
        <linearGradient id="carGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5f3fc" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="cabGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2d33" />
          <stop offset="100%" stopColor="#141518" />
        </linearGradient>
      </defs>

      <rect x="40" y="20" width="320" height="480" rx="10" fill="#101013" stroke="#26282e" strokeWidth="1.5" />
      <rect x="56" y="36" width="160" height="448" rx="8" fill="url(#shaftGrad)" />

      {[88, 168, 248, 328, 408].map((y) => (
        <rect key={y} x="60" y={y} width="24" height="8" rx="2" fill="#2a2d33" />
      ))}

      <line x1="136" y1="20" x2="136" y2="36" stroke="#22d3ee" strokeWidth="4" />
      <line x1="136" y1="16" x2="136" y2="0" stroke="#22d3ee" strokeWidth="3" />
      <rect x="126" y="0" width="20" height="6" rx="3" fill="#22d3ee" />

      <g transform="translate(64, 150)">
        <rect x="0" y="0" width="144" height="150" rx="5" fill="url(#cabGrad)" />
        <rect x="10" y="10" width="124" height="130" rx="3" fill="url(#carGrad)" />
        <rect x="68" y="20" width="8" height="110" rx="2" fill="#155e75" />
        <rect x="30" y="70" width="26" height="10" rx="2" fill="#1c1d21" />
        <rect x="88" y="70" width="26" height="10" rx="2" fill="#1c1d21" />
        <circle cx="100" cy="94" r="4" fill="#1c1d21" />
        <circle cx="100" cy="110" r="4" fill="#1c1d21" />
        <circle cx="100" cy="126" r="4" fill="#1c1d21" />
      </g>

      <rect x="60" y="148" width="152" height="4" rx="2" fill="#22d3ee" />
      <rect x="60" y="298" width="152" height="4" rx="2" fill="#22d3ee" />

      {[
        { y: 140, on: true },
        { y: 220, on: false },
        { y: 300, on: false },
        { y: 380, on: false },
        { y: 460, on: false },
      ].map((f, i) => (
        <g key={f.y}>
          <rect
            x="240"
            y={f.y - 14}
            width="44"
            height="28"
            rx="5"
            fill={f.on ? "#22d3ee" : "#17181c"}
            stroke={f.on ? "#22d3ee" : "#26282e"}
            strokeWidth="1.5"
          />
          <text
            x="262"
            y={f.y + 5}
            fontSize="13"
            fontWeight="700"
            textAnchor="middle"
            fill={f.on ? "#0a0a0a" : "#5a5f6a"}
          >
            {i + 1}
          </text>
        </g>
      ))}

      <g transform="translate(320, 90)">
        <rect x="0" y="0" width="24" height="24" rx="5" fill="#17181c" stroke="#26282e" strokeWidth="1.5" />
        <path d="M12 5l5 7h-10l5-7z M12 10v9 M8 14.5l4 4 4-4" stroke="#22d3ee" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
