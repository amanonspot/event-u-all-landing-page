"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { INDUSTRY_DETAILS } from "@/lib/industries";

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

  // Same-page anchor links (e.g. "/#industries" while already on "/") need a
  // manual scroll — the App Router doesn't perform the native hash jump for a
  // same-route <Link>. Cross-page hash links fall through to normal navigation
  // and are handled by <HashScroll> on arrival.
  const handleNav = (href: string) => (e: React.MouseEvent) => {
    setOpen(false);
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;
    const targetPath = href.slice(0, hashIndex) || "/";
    if (pathname !== targetPath) return; // cross-page → let Link navigate
    const el = document.getElementById(href.slice(hashIndex + 1));
    if (el) {
      e.preventDefault();
      el.scrollIntoView();
      history.replaceState(null, "", href);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[900] flex items-center gap-4 xl:gap-8 px-6 md:px-12 h-[68px] border-b transition-colors duration-300 ${
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

        <ul className="hidden lg:flex gap-4 xl:gap-6 items-center ml-auto">
          {NAV_LINKS.map((l) => {
            const active =
              pathname === l.href || (l.dropdown && pathname.startsWith(l.href));
            const linkClass = `text-sm font-medium whitespace-nowrap transition-colors ${
              active && solid ? "text-fg" : linkColor
            }`;

            if (l.dropdown) {
              return (
                <li key={l.href} className="relative group">
                  <Link href={l.href} className={`inline-flex items-center gap-1 ${linkClass}`}>
                    {l.label}
                    <span aria-hidden className="text-[10px] mt-0.5 transition-transform group-hover:rotate-180">▾</span>
                  </Link>
                  {/* pt-3 keeps the hover bridge between label and panel */}
                  <div className="absolute right-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all">
                    <div className="w-[380px] bg-bg border border-border rounded-xl shadow-[0_20px_50px_rgba(11,18,32,0.18)] p-2 grid grid-cols-2 gap-0.5">
                      {INDUSTRY_DETAILS.map((ind) => (
                        <Link
                          key={ind.slug}
                          href={`/industries/${ind.slug}`}
                          className="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:bg-surface hover:text-accent transition-colors"
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={l.href}>
                <Link href={l.href} onClick={handleNav(l.href)} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3 ml-2 shrink-0">
          <a
            href={SITE.phoneHref}
            className={`text-sm font-semibold whitespace-nowrap transition-colors ${linkColor}`}
          >
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex whitespace-nowrap px-5 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:opacity-90 hover:shadow-[0_0_24px_var(--accent-soft)] transition"
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
            onClick={handleNav(l.href)}
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
