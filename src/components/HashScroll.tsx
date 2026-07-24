"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Scrolls to the URL hash target after a client navigation (e.g. arriving on
// "/#industries" from another page). Runs on mount and whenever the pathname
// changes. Same-page hash clicks are handled directly in Nav's onClick.
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    // Wait for layout to settle before measuring the target position.
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView();
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
