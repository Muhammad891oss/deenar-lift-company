import Link from "next/link";
import Logo from "./Logo";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080a]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:text-brand-500"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:text-brand-500"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.75.07-1.1.05-1.7.24-2.1.39-.53.2-.9.45-1.3.84-.39.4-.64.77-.84 1.3-.15.4-.34 1-.39 2.1-.06 1.25-.07 1.61-.07 4.75s.01 3.5.07 4.75c.05 1.1.24 1.7.39 2.1.2.53.45.9.84 1.3.4.39.77.64 1.3.84.4.15 1 .34 2.1.39 1.25.06 1.61.07 4.75.07s3.5-.01 4.75-.07c1.1-.05 1.7-.24 2.1-.39.53-.2.9-.45 1.3-.84.39-.4.64-.77.84-1.3.15-.4.34-1 .39-2.1.06-1.25.07-1.61.07-4.75s-.01-3.5-.07-4.75c-.05-1.1-.24-1.7-.39-2.1-.2-.53-.45-.9-.84-1.3-.4-.39-.77-.64-1.3-.84-.4-.15-1-.34-2.1-.39-1.25-.06-1.61-.07-4.75-.07zm0 3.06a4.94 4.94 0 110 9.88 4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.14-3.06a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z" />
              </svg>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:text-brand-500"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-zinc-400 transition-colors hover:text-brand-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Products
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {products.map((product) => (
              <li key={product.id}>
                <Link href="/products" className="text-zinc-400 transition-colors hover:text-brand-500">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="font-medium text-zinc-200 transition-colors hover:text-brand-500">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-zinc-400 transition-colors hover:text-brand-500">
                {site.email}
              </a>
            </li>
            <li className="text-zinc-400">{site.address}</li>
            <li className="text-zinc-500">{site.hours}</li>
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-zinc-600 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed, manufactured &amp; serviced in Karachi, Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
