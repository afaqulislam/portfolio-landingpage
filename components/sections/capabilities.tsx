import { capabilityGroups } from "@/lib/data";

export default function Capabilities() {
  return (
    <section id="stack" className="border-b border-rule">
      <div className="shell py-24 lg:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="index">03 / Capabilities</p>
            <h2 className="mt-6 max-w-[20ch] font-serif text-[clamp(2.25rem,6vw,4rem)] leading-[0.98] tracking-[-0.02em] text-balance">
              The tools, and what I use them for.
            </h2>
          </div>
          <p className="max-w-measure text-pretty text-sm leading-[1.7] text-ink-muted md:text-right">
            Listed by how I actually spend my week rather than by how the categories
            are normally organised.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {capabilityGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`border-b border-rule py-8 sm:pr-8 ${
                groupIndex % 2 === 0 ? "sm:border-r sm:pl-0 sm:pr-8" : "sm:pl-8 sm:pr-0"
              } lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0`}
            >
              <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
                <h3 className="font-mono text-2xs font-medium uppercase tracking-wide2 text-ink">
                  {group.title}
                </h3>
                <span className="font-mono text-2xs text-ink-faint nums">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 translate-y-[-0.15em] rotate-45 bg-brand/80"
                    />
                    <span className="text-[0.9375rem] leading-snug text-ink-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
