export interface BlogBlock {
  heading?: string;
  body?: string;
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "elevator-cost-pakistan-2026",
    title: "How Much Does an Elevator Cost in Pakistan in 2026?",
    date: "2026-07-18",
    category: "Pricing",
    readTime: "6 min read",
    excerpt:
      "A realistic breakdown of lift prices in PKR for homes, apartments, offices and industrial buildings — plus what actually moves the final number.",
    content: [
      {
        body: "One of the first questions every client asks is \"kitna banayega?\" (how much will it cost?). The honest answer is that lift pricing in Pakistan varies widely depending on the type of lift, the number of stops, capacity, finish and the building itself. In this guide we break down the realistic 2026 price bands so you can budget with confidence.",
      },
      {
        heading: "Ballpark prices for 2026",
        body: "These are indicative ranges for a fully installed lift in Karachi, including commissioning and a short warranty period:",
        list: [
          "Home / villa lift (2-3 stops, 4 persons): Rs. 3.5 - 6 million",
          "Passenger lift (8 stops, 8 persons, standard finish): Rs. 9 - 13 million",
          "Passenger lift (16 stops, 10 persons, premium): Rs. 16 - 22 million",
          "Hospital lift (10 stops): Rs. 12 - 18 million",
          "Freight lift (1,000 - 2,000 kg): Rs. 14 - 24 million",
          "Panoramic glass lift: 20-30% above a standard passenger lift",
        ],
      },
      {
        heading: "What drives the price up?",
        body: "Five factors influence cost more than anything else:",
        list: [
          "Number of stops & floors — every extra stop adds landing doors, wiring and levelling equipment.",
          "Capacity and speed — larger cabins and faster speeds need bigger machines and drives.",
          "Finish level — stainless steel, glass and stone interiors cost significantly more than laminate.",
          "Building conditions — retrofits into existing shafts are more labour-intensive than new construction.",
          "Brand of components — imported VVVF drives and controllers carry a premium over local equivalents.",
        ],
      },
      {
        heading: "Hidden costs to plan for",
        body: "Beyond the lift itself, budget for the machine-room, shaft civil works, electrical supply upgrading, and periodic maintenance. Ask for an all-inclusive quotation that clearly separates lift supply from civil and electrical works so there are no surprises later.",
      },
      {
        heading: "Get an accurate figure",
        body: "Use our pricing calculator to get an instant estimate for your building, then talk to our engineers for a free site survey. A quick measurement of your shaft and building plans gives you a firm, no-obligation quotation within a few days.",
      },
    ],
  },
  {
    slug: "passenger-vs-home-lift",
    title: "Passenger Lift vs Home Lift: Which One Do You Need?",
    date: "2026-06-25",
    category: "Buying Guide",
    readTime: "5 min read",
    excerpt:
      "Not every lift is built for every building. Here's how to decide between a compact home lift and a full passenger lift for your project.",
    content: [
      {
        body: "Homeowners and developers often ask whether a \"passenger lift\" and a \"home lift\" are the same thing. They are not — and choosing the wrong one can cost you money in both the purchase price and the space it occupies.",
      },
      {
        heading: "The main differences",
        list: [
          "Home lifts are designed for private residential use — typically 2-4 persons, lower speeds and minimal space requirements.",
          "Passenger lifts are built for public use — higher capacities (6-16 persons), faster travel and compliance with stricter building codes.",
          "Home lifts can often be installed with a smaller pit and headroom, making them practical for existing villas.",
          "Passenger lifts are the right choice for apartment towers, offices, hospitals and any building where many people will ride daily.",
        ],
      },
      {
        heading: "When a home lift makes sense",
        body: "If you are building or retrofitting a private villa of 2-4 floors, a home lift is almost always the smarter, more affordable choice. It gives elderly parents easy access to bedrooms, moves groceries and luggage, and adds real resale value to the property.",
      },
      {
        heading: "When you need a passenger lift",
        body: "For apartment buildings, commercial offices, showrooms, hotels and any building with regular public traffic, invest in a certified passenger lift. Public-use lifts must meet safety and capacity standards that home lifts are not designed for.",
      },
      {
        heading: "Still unsure?",
        body: "Send us your building's plans or shaft dimensions. Our team will recommend the right lift type, size and budget for your specific building — free of charge.",
      },
    ],
  },
  {
    slug: "elevator-maintenance-guide",
    title: "A Practical Guide to Elevator Maintenance Contracts (AMC)",
    date: "2026-05-30",
    category: "Maintenance",
    readTime: "7 min read",
    excerpt:
      "A good Annual Maintenance Contract keeps your lift safe, quiet and reliable for decades. Here's what to look for and what it should cost.",
    content: [
      {
        body: "An elevator is a machine with thousands of moving parts, and like any machine it needs regular care. An Annual Maintenance Contract (AMC) is the most cost-effective way to protect your investment and, more importantly, the safety of everyone who rides it.",
      },
      {
        heading: "Why maintenance matters",
        list: [
          "Preventive servicing catches wear before it becomes a breakdown.",
          "Regular inspections keep the lift compliant with safety standards.",
          "Well-maintained lifts use up to 15% less electricity.",
          "A documented service history protects your building's resale value.",
        ],
      },
      {
        heading: "What a good AMC covers",
        list: [
          "Scheduled preventive visits (monthly or quarterly, depending on traffic)",
          "All labour and minor consumables",
          "Priority breakdown response within 8-12 hours",
          "Annual load-tests and safety-gear inspections",
          "A dedicated service record log for your lift",
        ],
      },
      {
        heading: "What it should cost",
        body: "Annual maintenance typically runs between 3% and 6% of the lift's installed value per year, depending on usage. A busy office lift needs more frequent visits than a low-usage villa lift. Always get the contract in writing with response times clearly stated.",
      },
      {
        heading: "Red flags to avoid",
        body: "Beware of AMCs that exclude emergency call-outs, charge separately for every spare part, or never actually visit on schedule. Choose a company with its own technicians in your city, and one that keeps genuine spare parts in stock.",
      },
    ],
  },
  {
    slug: "commercial-elevator-guide",
    title: "Choosing the Right Elevator for Your Commercial Building",
    date: "2026-04-12",
    category: "Buying Guide",
    readTime: "6 min read",
    excerpt:
      "Traffic analysis, capacity, speed and zoning: the engineering decisions that decide whether your office tower's lifts will feel fast or frustrating.",
    content: [
      {
        body: "Nothing frustrates office tenants more than a slow, crowded lift lobby at 9 AM. For commercial buildings, the lift system is not an afterthought — it is core infrastructure that directly affects rentability and tenant satisfaction.",
      },
      {
        heading: "Start with traffic analysis",
        body: "A simple rule: plan for one lift car of capacity for roughly every 40-50 floors of office traffic, and size total capacity so the building clears its peak morning flow within five minutes. Your engineer should run a basic traffic study before finalising the number and speed of lifts.",
      },
      {
        heading: "Capacity and speed decisions",
        list: [
          "Low-rise buildings (up to 8 floors): 8-10 person lifts at 1.0 m/s are usually sufficient.",
          "Mid-rise (9-16 floors): 10-13 person lifts at 1.0-1.6 m/s.",
          "High-rise (17+ floors): consider 13-16 person cars, speeds above 1.6 m/s and destination dispatch.",
        ],
      },
      {
        heading: "Consider zoning",
        body: "In tall towers, split lifts into low, mid and high zones so cars only serve a few floors. This dramatically cuts waiting times and lets the building use smaller, cheaper lifts instead of a single oversized bank.",
      },
      {
        heading: "Don't forget the machine room",
        body: "Machine-room-less (MRL) designs save valuable rooftop space and suit modern towers, while conventional machine rooms are easier to maintain in older buildings. Ask which configuration fits your structural design best.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
