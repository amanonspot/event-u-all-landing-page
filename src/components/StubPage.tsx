import Link from "next/link";

export default function StubPage({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="min-h-[70vh] flex items-center px-6 md:px-12 pt-32 pb-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
          {eyebrow}
        </div>
        <h1 className="font-display text-[clamp(30px,5vw,56px)] font-extrabold leading-tight mb-5">
          {title}
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-9">{desc}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-flex px-7 py-3.5 bg-accent text-white text-[15px] font-semibold rounded-lg hover:opacity-90 transition"
          >
            Get Proposal
          </Link>
          <Link
            href="/"
            className="inline-flex px-7 py-3.5 border border-border text-fg text-[15px] font-semibold rounded-lg hover:bg-surface transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
