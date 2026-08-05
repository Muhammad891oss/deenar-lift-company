import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const storyImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80";

const values = [
  {
    title: "Safety First",
    description:
      "Every component is sourced from certified suppliers and every lift passes load testing before it leaves our facility.",
  },
  {
    title: "Quality Without Compromise",
    description:
      "We build lifts the way we would want them built for our own families — with genuine parts and honest workmanship.",
  },
  {
    title: "Accountability",
    description:
      "We manufacture, we install and we maintain. There's no middleman to blame — our name is on every lift we build.",
  },
  {
    title: "Pakistani Engineering",
    description:
      "Proudly designed, fabricated and assembled in Karachi by a team that understands Pakistan's buildings, power conditions and budgets.",
  },
];

const approach = [
  {
    step: "01",
    title: "Survey & Design",
    description:
      "Engineers measure the shaft, assess traffic and power, then prepare a tailored design with an itemized quotation in PKR.",
  },
  {
    step: "02",
    title: "Fabrication",
    description:
      "The lift is manufactured in-house using genuine, sourced components with checks at every stage of assembly.",
  },
  {
    step: "03",
    title: "Testing & Commissioning",
    description:
      "Every unit is load-tested, safety-checked and commissioned on site by certified technicians before handover.",
  },
  {
    step: "04",
    title: "Aftercare",
    description:
      "Maintenance contracts, genuine spare parts and responsive breakdown support keep the lift running for decades.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Us"
        title="A manufacturer that stands behind every lift it builds"
        description="Deenar Lift Company designs, manufactures, installs and maintains the lifts that families and businesses across Pakistan rely on every single day."
      />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="A Karachi company with an engineer's obsession"
              />
            </Reveal>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400">
              <Reveal delay={80}>
                <p>
                  Deenar Lift Company was founded on a simple frustration: buildings in
                  Pakistan were being forced to choose between expensive imported lifts
                  and unreliable local ones. We set out to build a better third option —
                  a lift manufactured locally, to international standards, with honest
                  pricing.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  Today we manufacture a complete range of lifts in our Karachi
                  facility: passenger lifts, home lifts, freight lifts, hospital lifts,
                  panoramic lifts and escalators. Every unit is designed for
                  Pakistan&apos;s reality — its summer heat, its power fluctuations and
                  its dense residential towers.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Our promise is simple. We build it. We install it. We stand behind it
                  for the life of the building.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full border border-white/10" />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#101013]">
                <Image
                  src={storyImage}
                  alt="Modern building architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/70 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#0b0b0e] py-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0e]/85 via-[#0b0b0e]/75 to-[#0b0b0e]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-px overflow-hidden border border-white/10 px-6 sm:grid-cols-3">
          {[
            {
              label: "Our Mission",
              text: "To make safe, modern vertical transportation accessible to every building in Pakistan — homes, offices, hospitals and industries.",
            },
            {
              label: "Our Vision",
              text: "To be Pakistan's most trusted lift brand — the first name that comes to mind when a building goes vertical.",
            },
            {
              label: "The Deenar Promise",
              text: "Free site survey. Itemized quotation in PKR. Certified installation. Genuine spare parts. Responsive breakdown support — for the life of your lift.",
            },
          ].map((card, i) => (
            <Reveal
              key={card.label}
              delay={i * 90}
              className="bg-[#0b0b0e]/80 px-6 py-12 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-500">
                  {card.label}
                </p>
              </div>
              <p className="mt-5 leading-relaxed text-zinc-300">{card.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="Our Values"
                  title="The principles behind every Deenar lift"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {values.map((value, i) => (
                <Reveal
                  key={value.title}
                  delay={i * 70}
                  className="group flex gap-5 border-b border-white/10 py-7"
                >
                  <span className="text-sm font-semibold text-brand-500">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-brand-400">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality approach */}
      <section className="border-t border-white/10 bg-[#0b0b0e] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="How We Build"
              title="A disciplined approach to every project"
            />
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, i) => (
              <Reveal key={item.step} delay={i * 90} className="relative border-t border-white/10 pt-6">
                <div className="group transition-all duration-300 hover:-translate-y-1.5">
                  <span className="text-5xl font-bold tracking-tight text-white/10 transition-colors duration-300 group-hover:text-brand-500/20">
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

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden border border-white/10 bg-[#0b0b0e] px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80"
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
                  Let&apos;s build something that moves
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                  Talk to our engineers about your project — whether it&apos;s a villa lift,
                  an office tower or a hospital.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-brand-500 px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
                  >
                    Contact Our Team
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-md border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
