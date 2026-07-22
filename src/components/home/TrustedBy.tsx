import { CLIENT_LOGOS } from "@/lib/site";

export default function TrustedBy() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="bg-hero-bg border-t border-hero-border py-10 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-hero-muted mb-7">
        Trusted by 1000+ leading brands
      </p>
      <div className="euall-marquee relative w-full">
        <div className="euall-marquee-track flex w-max items-center gap-14 px-7">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl md:text-2xl font-bold text-white/45 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-hero-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-hero-bg to-transparent" />
      </div>
    </section>
  );
}
