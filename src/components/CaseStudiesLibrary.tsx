"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import CaseStudyCard from "@/components/CaseStudyCard";
import {
  CASE_STUDIES,
  CASE_SERVICES,
  serviceLabel,
  type ServiceId,
} from "@/lib/case-studies";

const clientSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function CaseStudiesLibrary() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const industry = params.get("industry") ?? "";
  const service = params.get("service") ?? "";
  const client = params.get("client") ?? "";
  const anyFilter = Boolean(industry || service || client);

  // Filter option lists derived from the data (only what actually exists)
  const industries = useMemo(
    () => Array.from(new Set(CASE_STUDIES.map((c) => c.industry))).sort(),
    []
  );
  const services = useMemo(
    () => CASE_SERVICES.filter((s) => CASE_STUDIES.some((c) => c.service === s.id)),
    []
  );
  const companies = useMemo(
    () =>
      Array.from(new Set(CASE_STUDIES.map((c) => c.client))).map((name) => ({
        name,
        slug: clientSlug(name),
      })),
    []
  );

  const results = useMemo(() => {
    const filtered = CASE_STUDIES.filter(
      (c) =>
        (!industry || c.industry === industry) &&
        (!service || c.service === service) &&
        (!client || clientSlug(c.client) === client)
    );
    if (anyFilter) return filtered;
    // Default view: featured first, then the rest
    return [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [industry, service, client, anyFilter]);

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value && next.get(key) !== value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const clearAll = () => router.replace(pathname, { scroll: false });

  return (
    <section className="px-6 md:px-12 py-16 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col gap-4 mb-10">
          <FilterRow label="Industry">
            {industries.map((v) => (
              <Chip key={v} active={industry === v} onClick={() => setParam("industry", v)}>
                {v}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="Service">
            {services.map((s) => (
              <Chip key={s.id} active={service === s.id} onClick={() => setParam("service", s.id as ServiceId)}>
                {s.label}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="Company">
            {companies.map((c) => (
              <Chip key={c.slug} active={client === c.slug} onClick={() => setParam("client", c.slug)}>
                {c.name}
              </Chip>
            ))}
          </FilterRow>

          {anyFilter && (
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted">
                {results.length} {results.length === 1 ? "result" : "results"}
                {service ? ` · ${serviceLabel(service as ServiceId)}` : ""}
              </span>
              <button onClick={clearAll} className="font-semibold text-accent hover:opacity-80">
                Clear filters ✕
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map((s, i) => (
              <FadeIn key={s.slug} delay={(i % 6) * 0.05}>
                <CaseStudyCard study={s} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-2xl">
            <p className="font-display text-xl font-bold text-fg mb-2">No case studies match those filters</p>
            <p className="text-sm text-muted mb-5">Try a different combination, or clear the filters.</p>
            <button onClick={clearAll} className="inline-flex px-6 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:opacity-90 transition">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-dim sm:w-20 shrink-0 pt-1.5">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
        active
          ? "bg-accent text-white border-accent"
          : "bg-bg text-muted border-border hover:border-accent/50 hover:text-accent"
      }`}
    >
      {children}
    </button>
  );
}
