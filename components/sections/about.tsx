import BrandMark from "@/components/brand-mark";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-rule bg-paper-raised/45">
      <div className="shell py-24 lg:py-32">
        <p className="index">02 / About</p>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 lg:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="max-w-[16ch] font-serif text-[clamp(2.25rem,6vw,4rem)] leading-[0.98] tracking-[-0.02em] text-balance">
              {about.heading}
            </h2>

            <div className="mt-10 max-w-prose space-y-6">
              {about.body.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={`text-pretty leading-[1.75] ${
                    index === 0
                      ? "text-[1.0625rem] text-ink"
                      : "text-[0.9375rem] text-ink-muted"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            {/* Monogram plate — the brand mark instead of a stock portrait */}
            <figure className="border border-ink bg-paper">
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-brand-wash">
                <BrandMark className="w-1/2 max-w-[13rem] text-brand" />
              </div>
              <figcaption className="flex items-center justify-between border-t border-ink px-4 py-3">
                <span className="font-mono text-2xs uppercase tracking-micro text-ink-muted">
                  Portrait withheld
                </span>
                <span className="font-mono text-2xs uppercase tracking-micro text-ink-faint nums">
                  Fig. 01
                </span>
              </figcaption>
            </figure>

            <dl className="mt-8 border-t border-rule">
              {about.facts.map((fact) => (
                <div
                  key={fact.term}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-b border-rule py-3.5"
                >
                  <dt className="font-mono text-2xs uppercase tracking-micro text-ink-faint">
                    {fact.term}
                  </dt>
                  <dd className="text-sm leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-y-0 border-t border-rule sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {about.markers.map((marker, index) => (
            <li
              key={marker}
              className="flex items-baseline gap-3 border-b border-rule py-5 sm:border-b-0 lg:border-b lg:pr-6"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand"
              />
              <span className="font-mono text-2xs uppercase leading-relaxed tracking-micro text-ink-muted">
                {String(index + 1).padStart(2, "0")} — {marker}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
