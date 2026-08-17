import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { products, services } from "@/lib/products";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        eyebrow="Our Products"
        title="Elevators & escalators for every building"
        description="Six product families, each one custom-engineered and manufactured for your site. Browse the range below or ask us for a tailored recommendation."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {products.map((product, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={product.id}
                id={product.id}
                className="grid items-center gap-10 lg:grid-cols-12"
              >
                <Reveal className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <div
                      className={`absolute h-full w-full border border-white/10 ${
                        reversed ? "-right-4 -top-4" : "-left-4 -top-4"
                      }`}
                    />
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#101013]">
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-25`} />
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover opacity-85 transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/70 via-transparent to-transparent" />
                      <span className="absolute left-5 top-4 text-sm font-semibold tracking-wider text-white/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  delay={120}
                  className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-brand-500" />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-500">
                      {product.tagline}
                    </p>
                  </div>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-400">
                    {product.description}
                  </p>

                  <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="bg-[#0b0b0e] px-4 py-4 transition-colors duration-300 hover:bg-[#131316]">
                        <dt className="text-[11px] uppercase tracking-wider text-zinc-400">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-zinc-100">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-zinc-300"
                      >
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/pricing"
                      className="inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
                    >
                      Estimate Price
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
                    >
                      Enquire About This Product
                    </Link>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0b0b0e] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0e] via-[#0b0b0e]/85 to-[#0b0b0e]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="After-Sales"
                  title="Your lift is only as good as its service"
                  description="Every Deenar lift is backed by our own technicians, genuine spare parts and nationwide service."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2">
                {services.map((service, i) => (
                  <Reveal key={service.id} delay={i * 80} className="group border-t border-white/10">
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
          <Reveal delay={120} className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-500 px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
            >
              Request a Service Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
