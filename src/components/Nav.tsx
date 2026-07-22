"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The homepage opens with a dark hero, so the nav starts light-on-transparent
  // there and flips to a solid light bar on scroll. Other routes have light
  // content at the top, so the nav is solid from the start.
  const overHero = pathname === "/";
  const solid = scrolled || !overHero || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const linkColor = solid
    ? "text-muted hover:text-fg"
    : "text-white/80 hover:text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[900] flex items-center gap-8 px-6 md:px-12 h-[68px] border-b transition-colors duration-300 ${
          solid
            ? "bg-bg/95 backdrop-blur-xl border-border"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" aria-label="Event‑U‑All — home" className="flex items-center">
          {/* Black artwork on transparent bg → shown as-is on the light (solid)
              bar, flipped to white over the dark hero. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Event‑U‑All"
            className={`h-7 w-auto transition ${solid ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <ul className="hidden lg:flex gap-7 items-center ml-auto">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    active && solid ? "text-fg" : linkColor
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3 ml-2">
          <a
            href={SITE.phoneHref}
            className={`text-sm font-semibold transition-colors ${linkColor}`}
          >
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex px-5 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:opacity-90 hover:shadow-[0_0_24px_var(--accent-soft)] transition"
          >
            Get Proposal
          </Link>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 ml-auto p-1"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-[22px] h-[2px] rounded-sm transition-transform ${
                solid ? "bg-fg" : "bg-white"
              } ${
                open && i === 0 ? "translate-y-[7px] rotate-45" : ""
              } ${open && i === 1 ? "opacity-0" : ""} ${
                open && i === 2 ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          ))}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[800] bg-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-7 transition-opacity lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-2xl font-bold text-fg hover:text-accent transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-2 px-9 py-3.5 bg-accent text-white rounded-lg text-lg font-semibold"
        >
          Get Proposal
        </Link>
      </div>
    </>
  );
}
