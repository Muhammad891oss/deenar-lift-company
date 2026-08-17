import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PricingCalculator from "@/components/PricingCalculator";
import {
  calculateEstimate,
  formatPKRCompact,
  type ElevatorTypeId,
  type BuildingTypeId,
  type FinishId,
} from "@/lib/pricing";

const samples: {
  name: string;
  typeId: ElevatorTypeId;
  buildingId: BuildingTypeId;
  capacity: number;
  stops: number;
  finishId: FinishId;
}[] = [
  { name: "Home Lift — Villa", typeId: "home", buildingId: "residential", capacity: 4, stops: 3, finishId: "standard" },
  { name: "Passenger — Apartment Tower", typeId: "passenger", buildingId: "apartment", capacity: 8, stops: 10, finishId: "premium" },
  { name: "Passenger — Office Building", typeId: "passenger", buildingId: "commercial", capacity: 13, stops: 20, finishId: "premium" },
  { name: "Hospital Lift — Hospital", typeId: "hospital", buildingId: "hospital", capacity: 8, stops: 8, finishId: "standard" },
  { name: "Freight Lift — Warehouse", typeId: "freight", buildingId: "industrial", capacity: 2000, stops: 3, finishId: "standard" },
  { name: "Panoramic Lift — Hotel", typeId: "panoramic", buildingId: "hotel", capacity: 8, stops: 6, finishId: "luxury" },
];

const included = [
  "Complete lift supply and manufacturing",
  "On-site installation & commissioning",
  "Load testing and safety certification",
  "Civil & electrical coordination guidance",
  "Warranty and after-sales support",
];

const faqs = [
  {
    q: "Why does the price vary between the low and high estimate?",
    a: "The range accounts for site-specific factors like shaft dimensions, civil works, power supply conditions, door configuration and the brand of imported components chosen. A site survey narrows this down to an exact figure.",
  },
  {
    q: "Are installation and civil works included?",
    a: "Our estimates include the lift, installation and commissioning. Civil works on the shaft and electrical supply upgrading are quoted separately, based on your building's existing structure.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes. We offer flexible payment plans typically structured as 30% advance, 40% on manufacturing milestones and 30% before installation completes. Terms are agreed in writing.",
  },
  {
    q: "How long does installation take?",
    a: "A home lift is usually installed in 1-3 weeks after civil preparation. Passenger and freight lifts take 3-8 weeks depending on stops and building conditions.",
  },
  {
    q: "Do you service lifts outside Karachi?",
    a: "Yes. Our service network covers all of Pakistan, with scheduled preventive visits and priority breakdown response for AMC customers.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumb="Pricing"
        eyebrow="Pricing Estimator"
        title="Know your lift price in PKR — before you call"
        description="Answer a few questions and get an instant budget estimate for your building. Every figure includes supply, installation and commissioning."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <PricingCalculator />
        </div>
      </section>

      {/* Sample estimates */}
      <section className="border-y border-white/10 bg-[#0b0b0e] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Reference Prices"
              title="Sample estimates for common configurations"
              description="Realistic 2026 price bands for typical projects, computed with the same model as the calculator above."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14 overflow-x-auto border border-white/10">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-zinc-400">
                    <th className="px-6 py-4 font-semibold">Configuration</th>
                    <th className="px-6 py-4 font-semibold">Capacity</th>
                    <th className="px-6 py-4 font-semibold">Stops</th>
                    <th className="px-6 py-4 font-semibold">Finish</th>
                    <th className="px-6 py-4 text-right font-semibold">
                      Estimated Range (PKR)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {samples.map((sample, i) => {
                    const result = calculateEstimate(sample);
                    return (
                      <tr key={sample.name} className={i % 2 ? "bg-white/[0.02]" : ""}>
                        <td className="px-6 py-4 font-medium text-zinc-100">
                          {sample.name}
                        </td>
                        <td className="px-6 py-4 text-zinc-400">{sample.capacity}</td>
                        <td className="px-6 py-4 text-zinc-400">{sample.stops}</td>
                        <td className="px-6 py-4 capitalize text-zinc-400">
                          {sample.finishId}
                        </td>
                        <td className="px-6 py-4 text-right font-mono font-semibold text-zinc-100">
                          {formatPKRCompact(result.low)} — {formatPKRCompact(result.high)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-4 text-xs text-zinc-400">
            Indicative figures for budgeting only. Final pricing is confirmed after a
            free site survey and is subject to PKR exchange-rate movements on imported
            components.
          </p>
        </div>
      </section>

      {/* Included */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Transparent Quotations"
                title="What every Deenar quotation includes"
              />
            </Reveal>
            <ul className="mt-10 space-y-4">
              {included.map((item, i) => (
                <Reveal key={item} delay={i * 60} className="border-b border-white/10 pb-4">
                  <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-[#0a0a0a]">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="font-medium text-zinc-200 transition-colors group-hover:text-white">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={120}>
            <div className="border border-white/10 bg-[#101013] p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-white">Not sure where to start?</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Share your building&apos;s floor count, shaft dimensions and expected daily
                traffic. Our engineers will recommend the right lift type, size and
                budget — free of charge.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
                >
                  Request Free Survey
                </Link>
                <Link
                  href="/blog/elevator-cost-pakistan-2026"
                  className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  Read the Cost Guide
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#0b0b0e] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Pricing questions, answered" />
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <details className="group border border-white/10 bg-[#101013] px-6 py-5 transition-colors duration-300 hover:border-brand-500/40 open:border-brand-500/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-zinc-100 transition-colors group-hover:text-white">
                    {faq.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-brand-500 transition-transform group-open:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
