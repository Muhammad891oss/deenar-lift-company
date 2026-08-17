"use client";

import { useMemo, useState } from "react";
import {
  buildingTypes,
  calculateEstimate,
  elevatorTypes,
  finishes,
  formatPKRCompact,
} from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";

export default function PricingCalculator() {
  const [typeId, setTypeId] = useState("passenger");
  const [buildingId, setBuildingId] = useState("commercial");
  const [capacity, setCapacity] = useState(8);
  const [stops, setStops] = useState(8);
  const [finishId, setFinishId] = useState("premium");

  const type = elevatorTypes.find((t) => t.id === typeId) ?? elevatorTypes[0];

  const selectType = (id: string) => {
    const next = elevatorTypes.find((t) => t.id === id) ?? elevatorTypes[0];
    setTypeId(id);
    setCapacity(next.capacities[1] ?? next.capacities[0]);
    setStops(Math.min(Math.max(stops, next.minStops), next.maxStops));
  };

  const result = useMemo(
    () =>
      calculateEstimate({
        typeId: typeId as never,
        buildingId: buildingId as never,
        capacity,
        stops,
        finishId: finishId as never,
      }),
    [typeId, buildingId, capacity, stops, finishId]
  );

  const building = buildingTypes.find((b) => b.id === buildingId) ?? buildingTypes[0];
  const finish = finishes.find((f) => f.id === finishId) ?? finishes[0];

  const breakdown = [
    { label: "Machine, drive & cabin", value: result.machineCost },
    { label: "Shaft works & landing doors", value: result.shaftAndDoors },
    { label: "Installation & commissioning", value: result.installation },
    { label: "Extras & contingency", value: result.misc },
  ];

  const waText = `Assalam-o-Alaikum! I used the Deenar Lift pricing calculator.\n\nElevator type: ${type.name}\nBuilding: ${building.name}\nCapacity: ${capacity} ${type.capacityUnit}\nStops: ${stops}\nFinish: ${finish.name}\nEstimated range: ${formatPKRCompact(result.low)} - ${formatPKRCompact(result.high)}\n\nPlease share an exact quotation.`;

  const controlLabel =
    "text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400";
  const controlInput =
    "w-full rounded-md border border-white/10 bg-[#0b0b0e] px-3 py-2.5 text-sm text-zinc-100 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/40";

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="border border-white/10 bg-[#101013] p-6 sm:p-8 lg:col-span-3">
        <div>
          <p className={controlLabel}>Step 1 · Elevator type</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {elevatorTypes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => selectType(t.id)}
                className={`rounded-md border px-4 py-3 text-left transition-colors ${
                  typeId === t.id
                    ? "border-brand-500 bg-brand-500/10"
                    : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className={`block text-sm font-semibold ${
                    typeId === t.id ? "text-white" : "text-zinc-200"
                  }`}
                >
                  {t.name}
                </span>
                <span className="mt-0.5 block text-xs text-zinc-400">
                  {t.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <div>
            <p className={controlLabel}>Step 2 · Building type</p>
            <select
              value={buildingId}
              onChange={(e) => setBuildingId(e.target.value)}
              className={`mt-2 ${controlInput}`}
            >
              {buildingTypes.map((b) => (
                <option key={b.id} value={b.id} className="bg-[#101013]">
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className={controlLabel}>Step 3 · Capacity</p>
            <select
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className={`mt-2 ${controlInput}`}
            >
              {type.capacities.map((c) => (
                <option key={c} value={c} className="bg-[#101013]">
                  {c} {type.capacityUnit}
                </option>
              ))}
            </select>
          </div>
        </div>

          <div className="mt-7">
            <div className="flex items-baseline justify-between">
              <label htmlFor="stops-slider" className={controlLabel}>
                Step 4 · Number of stops
              </label>
              <span className="text-lg font-bold text-white">
                {stops} <span className="text-sm font-medium text-zinc-400">stops</span>
              </span>
            </div>
            <input
              id="stops-slider"
              type="range"
              min={type.minStops}
              max={type.maxStops}
              value={stops}
              onChange={(e) => setStops(Number(e.target.value))}
              className="mt-3 h-2 w-full cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-xs text-zinc-400">
              <span>{type.minStops} stops</span>
              <span>{type.maxStops} stops</span>
            </div>
          </div>

        <div className="mt-7">
          <p className={controlLabel}>Step 5 · Finish &amp; technology</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {finishes.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFinishId(f.id)}
                className={`rounded-md border px-3 py-2.5 text-center transition-colors ${
                  finishId === f.id
                    ? "border-brand-500 bg-brand-500/10"
                    : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className={`block text-sm font-semibold ${
                    finishId === f.id ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {f.name}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-zinc-400">{finish.note}</p>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="sticky top-24 overflow-hidden border border-white/10">
          <div className="bg-brand-500 px-6 py-6 text-[#0a0a0a]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Estimated budget range
            </p>
            <p className="mt-1 font-mono text-2xl font-bold tracking-tight">
              {formatPKRCompact(result.low)} — {formatPKRCompact(result.high)}
            </p>
            <p className="mt-0.5 text-xs font-medium opacity-80">
              Midpoint: {formatPKRCompact(result.mid)} · Includes installation &amp;
              commissioning
            </p>
          </div>

          <div className="bg-[#101013] px-6 py-6">
            <div className="rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-sm text-zinc-300">
              {type.name} · {capacity} {type.capacityUnit} · {stops} stops ·{" "}
              {finish.name}
            </div>

            <dl className="mt-5 space-y-3 text-sm">
              {breakdown.map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <dt className="text-zinc-400">{row.label}</dt>
                  <dd className="font-mono font-semibold text-zinc-100">
                    {formatPKRCompact(row.value)}
                  </dd>
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <dt className="text-zinc-400">Estimated delivery</dt>
                <dd className="font-semibold text-zinc-100">
                  {result.timelineWeeks} weeks
                </dd>
              </div>
            </dl>

            <p className="mt-5 rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-xs leading-relaxed text-zinc-400">
              This is an indicative estimate in PKR for budgeting only. Final pricing
              depends on your site survey, shaft dimensions, civil works and choice of
              components.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={whatsappLink(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb857]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Exact Quote on WhatsApp
              </a>
              <a
                href="/contact"
                className="flex w-full items-center justify-center rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
              >
                Book a Free Site Survey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
