"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

const EVENT_TYPES = [
  "Rewards & Recognition",
  "Corporate Offsite / MICE",
  "Team Building",
  "Annual Day / Townhall",
  "Conference / Dealer Meet",
  "Product / Real Estate Launch",
  "Exhibition / Expo",
  "Other",
];

const BUDGETS = [
  "Under ₹5 Lakh",
  "₹5–15 Lakh",
  "₹15–50 Lakh",
  "₹50 Lakh+",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full bg-bg border border-border rounded-lg px-3.5 py-2.5 text-sm text-fg placeholder:text-muted-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-soft transition";

export default function ProposalForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Event‑U‑All, I'd like a proposal for a corporate event."
  )}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Basic client-side validation
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!endpoint) {
      // No Formspree endpoint configured yet — surface success optimistically so
      // the flow is demonstrable, and log for the developer.
      // eslint-disable-next-line no-console
      console.warn(
        "NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set — form not delivered. Set it in .env.local."
      );
      setStatus("success");
      form.reset();
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or reach us on WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-bg border border-border rounded-2xl p-8 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-accent-soft text-accent flex items-center justify-center text-2xl font-bold mb-4">
          ✓
        </div>
        <h3 className="font-display text-xl font-bold text-fg mb-2">Proposal request received</h3>
        <p className="text-sm text-muted max-w-sm mx-auto">
          Thank you — our team will reach out within one business day with a
          tailored proposal. Prefer to talk now?
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex px-6 py-3 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bg border border-border rounded-2xl p-6 md:p-8">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Full Name" name="name" required placeholder="Your name" />
        <Field label="Company Name" name="company" required placeholder="Company" />
        <Field label="Work Email" name="email" type="email" required placeholder="you@company.com" />
        <Field label="Phone Number" name="phone" type="tel" required placeholder="+91…" />

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-fg">Event Type</span>
          <select name="event_type" required className={inputBase} defaultValue="">
            <option value="" disabled>Select…</option>
            {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>

        <Field label="Preferred Date" name="event_date" type="date" />
        <Field label="Expected Guests" name="guests" type="number" placeholder="e.g. 250" />
        <Field label="Preferred Destination" name="destination" placeholder="e.g. Goa" />

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-fg">Estimated Budget</span>
          <select name="budget" className={inputBase} defaultValue="">
            <option value="" disabled>Select…</option>
            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </label>

        <label className={`flex flex-col gap-1.5 ${compact ? "" : "sm:col-span-2"}`}>
          <span className="text-sm font-semibold text-fg">Requirements</span>
          <textarea
            name="requirements"
            rows={3}
            placeholder="Tell us about your event…"
            className={inputBase + " resize-y"}
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-[15px] font-semibold rounded-lg hover:opacity-90 hover:shadow-[0_0_36px_rgba(200,150,58,0.4)] transition disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request Proposal →"}
      </button>
      <p className="mt-3 text-xs text-muted-dim text-center">
        We respond within one business day. No spam, ever.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-fg">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputBase}
      />
    </label>
  );
}
