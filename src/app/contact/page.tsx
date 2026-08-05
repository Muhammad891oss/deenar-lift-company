import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

const contactCards = [
  {
    title: "Call Us",
    lines: [site.phone, site.hours],
    href: site.phoneHref,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.21 2.22z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    lines: [site.phone, "Fastest response"],
    href: whatsappLink(),
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    lines: [site.email, "Replies within one working day"],
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    title: "Location",
    lines: [site.address, "Pakistan"],
    href: "https://maps.google.com/?q=Karachi+Pakistan",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact Us"
        title="Let's talk about your lift project"
        description="Tell us about your building and our engineers will get back to you within one working day with recommendations and a free site-survey appointment."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="Send an Enquiry"
                  title="Request a quotation"
                  description="Fill in the form below and your enquiry will open in WhatsApp — ready to send to our team."
                />
              </Reveal>
              <Reveal delay={100} className="mt-8">
                <ContactForm />
              </Reveal>
            </div>

            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Direct contact
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  Prefer to reach us directly? Any of these channels works.
                </p>
              </Reveal>
              <div className="mt-7 space-y-3">
                {contactCards.map((card, i) => (
                  <Reveal key={card.title} delay={i * 60}>
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 border border-white/10 bg-[#101013] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.25)]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 text-brand-500 transition-colors group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-[#0a0a0a]">
                        {card.icon}
                      </span>
                      <span>
                        <span className="block font-semibold text-white">{card.title}</span>
                        {card.lines.map((line, j) => (
                          <span
                            key={line}
                            className={`block text-sm ${j === 0 ? "text-zinc-300" : "text-zinc-500"}`}
                          >
                            {line}
                          </span>
                        ))}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200} className="mt-6">
                <div className="relative overflow-hidden border border-white/10 bg-[#101013] p-6 transition-all duration-300 hover:border-brand-500/40">
                  <h3 className="font-semibold text-white">Need urgent support?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    For breakdowns and urgent repairs, call our helpline — a technician
                    will be dispatched to your site.
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
                  >
                    Call {site.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="overflow-hidden border border-white/10">
              <iframe
                title="Deenar Lift Company location — Karachi, Pakistan"
                src="https://www.openstreetmap.org/export/embed.html?bbox=66.95%2C24.77%2C67.30%2C24.97&layer=mapnik&marker=24.8607%2C67.0011"
                className="h-[380px] w-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
