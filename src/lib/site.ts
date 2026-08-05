export const site = {
  name: "Deenar Lift Company",
  shortName: "Deenar",
  tagline: "Engineering Vertical Mobility for Pakistan",
  description:
    "Deenar Lift Company is a Karachi-based manufacturer of passenger lifts, home lifts, freight lifts, hospital lifts and escalators. We design, manufacture, install and maintain elevators built for Pakistan's buildings.",
  phone: "03132477205",
  phoneHref: "tel:03132477205",
  whatsappNumber: "923132477205",
  whatsappMessage:
    "Assalam-o-Alaikum! I would like to enquire about lifts from Deenar Lift Company.",
  email: "msiddiqui78640@gmail.com",
  address: "Karachi, Pakistan",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  facebook: "https://facebook.com/deenarlifts",
  instagram: "https://instagram.com/deenarlifts",
  linkedin: "https://linkedin.com/company/deenarlifts",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const whatsappLink = (text: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
