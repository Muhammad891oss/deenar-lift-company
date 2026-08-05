"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname);

  if (previousPath !== pathname) {
    setPreviousPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08080a]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`hidden border-b border-white/5 bg-[#0b0b0e]/80 lg:block ${
          scrolled ? "lg:hidden" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-zinc-500">
          <div className="flex items-center gap-7">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-2 transition-colors hover:text-brand-400"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-500 transition-transform duration-300 group-hover:-rotate-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-2 transition-colors hover:text-brand-400"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Karachi, Pakistan
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link href="/" aria-label="Deenar Lift Company — Home" className="transition-transform duration-300 hover:scale-[1.02]">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`nav-underline px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? "is-active text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group ml-4 inline-flex items-center gap-2 rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] shadow-[0_8px_24px_-10px_rgba(34,211,238,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-[0_12px_32px_-10px_rgba(34,211,238,0.9)] active:scale-[0.98]"
          >
            Get a Quote
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-zinc-200 hover:bg-white/5 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h10" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#08080a] px-6 pb-8 pt-3 lg:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ animationDelay: `${i * 40}ms` }}
              className={`reveal is-visible flex items-center justify-between border-b border-white/5 py-3.5 text-base ${
                isActive(link.href) ? "text-brand-500" : "text-zinc-300"
              }`}
            >
              {link.label}
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-5 flex items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-3 text-base font-semibold text-[#0a0a0a] shadow-[0_8px_24px_-10px_rgba(34,211,238,0.7)]"
          >
            Get a Quote
          </Link>
          <div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
            <a href={site.phoneHref} className="hover:text-brand-500">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-brand-500">
              {site.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
