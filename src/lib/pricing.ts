export type ElevatorTypeId =
  | "home"
  | "passenger"
  | "freight"
  | "hospital"
  | "panoramic";

export type BuildingTypeId =
  | "residential"
  | "apartment"
  | "commercial"
  | "hotel"
  | "hospital"
  | "industrial";

export type FinishId = "standard" | "premium" | "luxury";

export interface ElevatorType {
  id: ElevatorTypeId;
  name: string;
  description: string;
  base: number;
  perStop: number;
  minStops: number;
  maxStops: number;
  baseWeeks: number;
  capacityUnit: string;
  capacities: number[];
  capFactor: Record<number, number>;
}

export const elevatorTypes: ElevatorType[] = [
  {
    id: "home",
    name: "Home / Villa Lift",
    description:
      "Compact, quiet hydraulic lifts for private residences and villas. Sized for 2-6 persons.",
    base: 3200000,
    perStop: 210000,
    minStops: 2,
    maxStops: 5,
    baseWeeks: 10,
    capacityUnit: "persons",
    capacities: [2, 3, 4, 6],
    capFactor: { 2: 1, 3: 1.06, 4: 1.12, 6: 1.24 },
  },
  {
    id: "passenger",
    name: "Passenger Lift",
    description:
      "High-rise geared or gearless traction lifts for residential towers, offices and commercial buildings.",
    base: 8500000,
    perStop: 420000,
    minStops: 3,
    maxStops: 30,
    baseWeeks: 16,
    capacityUnit: "persons",
    capacities: [6, 8, 10, 13, 16],
    capFactor: { 6: 1, 8: 1.14, 10: 1.28, 13: 1.45, 16: 1.62 },
  },
  {
    id: "freight",
    name: "Freight / Goods Lift",
    description:
      "Heavy-duty lifts for warehouses, factories and shops, with capacities up to 3,000 kg.",
    base: 14500000,
    perStop: 680000,
    minStops: 2,
    maxStops: 10,
    baseWeeks: 20,
    capacityUnit: "kg",
    capacities: [1000, 2000, 3000],
    capFactor: { 1000: 1, 2000: 1.35, 3000: 1.7 },
  },
  {
    id: "hospital",
    name: "Hospital Lift",
    description:
      "Wide, smooth, medical-grade lifts with stretcher cabins and precision levelling for hospitals and clinics.",
    base: 9800000,
    perStop: 470000,
    minStops: 2,
    maxStops: 15,
    baseWeeks: 18,
    capacityUnit: "persons",
    capacities: [6, 8, 10],
    capFactor: { 6: 1, 8: 1.15, 10: 1.3 },
  },
  {
    id: "panoramic",
    name: "Panoramic / Glass Lift",
    description:
      "Sleek glass lifts for atriums, showrooms and luxury retail, offering full outward views.",
    base: 10200000,
    perStop: 460000,
    minStops: 2,
    maxStops: 15,
    baseWeeks: 18,
    capacityUnit: "persons",
    capacities: [6, 8, 10, 13],
    capFactor: { 6: 1, 8: 1.12, 10: 1.25, 13: 1.4 },
  },
];

export const buildingTypes: {
  id: BuildingTypeId;
  name: string;
  factor: number;
}[] = [
  { id: "residential", name: "Private Residence / Villa", factor: 1.0 },
  { id: "apartment", name: "Apartment Building", factor: 1.06 },
  { id: "commercial", name: "Commercial Building", factor: 1.09 },
  { id: "hotel", name: "Hotel", factor: 1.06 },
  { id: "hospital", name: "Hospital", factor: 1.1 },
  { id: "industrial", name: "Industrial / Warehouse", factor: 1.18 },
];

export const finishes: {
  id: FinishId;
  name: string;
  multiplier: number;
  note: string;
}[] = [
  {
    id: "standard",
    name: "Standard",
    multiplier: 1.0,
    note: "Laminate / PVC interior, durable finish",
  },
  {
    id: "premium",
    name: "Premium",
    multiplier: 1.28,
    note: "Stainless steel cabin, LED lighting, VVVF drive",
  },
  {
    id: "luxury",
    name: "Luxury",
    multiplier: 1.58,
    note: "Full stainless / stone finish, panoramic glass, destination dispatch",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export interface EstimateInput {
  typeId: ElevatorTypeId;
  buildingId: BuildingTypeId;
  capacity: number;
  stops: number;
  finishId: FinishId;
}

export interface EstimateResult {
  low: number;
  mid: number;
  high: number;
  machineCost: number;
  shaftAndDoors: number;
  installation: number;
  misc: number;
  timelineWeeks: number;
  validCapacities: number[];
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const type = elevatorTypes.find((t) => t.id === input.typeId) ?? elevatorTypes[1];
  const building =
    buildingTypes.find((b) => b.id === input.buildingId) ?? buildingTypes[0];
  const finish = finishes.find((f) => f.id === input.finishId) ?? finishes[0];

  const stops = clamp(input.stops, type.minStops, type.maxStops);
  const capFactor = type.capFactor[input.capacity] ?? 1;
  const buildingFactor = building.factor;
  const finishMultiplier = finish.multiplier;

  const machine = type.base * capFactor;
  const shaft = type.perStop * (stops - type.minStops);

  const subtotal = (machine + shaft) * finishMultiplier * buildingFactor;

  // Round every figure to the nearest lakh (Rs 100,000)
  const roundToLakh = (n: number) => Math.round(n / 100000) * 100000;

  const mid = roundToLakh(subtotal);
  const low = roundToLakh(subtotal * 0.9);
  const high = roundToLakh(subtotal * 1.15);

  const machineCost = roundToLakh(machine * finishMultiplier * buildingFactor);
  const shaftAndDoors = roundToLakh(shaft * finishMultiplier * buildingFactor);
  const installation = roundToLakh(mid * 0.12);
  const misc = Math.max(0, mid - machineCost - shaftAndDoors - installation);

  const timelineWeeks = Math.round(type.baseWeeks + (stops - type.minStops) * 0.5);

  return {
    low,
    mid,
    high,
    machineCost,
    shaftAndDoors,
    installation,
    misc,
    timelineWeeks,
    validCapacities: type.capacities,
  };
}

export function formatPKR(value: number): string {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value);
}

const compactNumber = (value: number) => {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded)
    ? String(rounded)
    : rounded.toFixed(2).replace(/\.?0+$/, "");
};

export function formatPKRCompact(value: number): string {
  const crore = 10000000;
  const lakh = 100000;
  if (value >= crore) {
    return `Rs ${compactNumber(value / crore)} crore`;
  }
  if (value >= lakh) {
    return `Rs ${compactNumber(value / lakh)} lakh`;
  }
  return `Rs ${new Intl.NumberFormat("en-PK").format(value)}`;
}
