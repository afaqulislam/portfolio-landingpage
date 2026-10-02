import { recognition } from "@/lib/data";

export default function Recognition() {
  return (
    <section id="recognition" className="border-b border-rule bg-ink text-paper">
      <div className="shell py-20 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="flex items-center gap-3 font-mono text-2xs font-medium uppercase tracking-micro text-paper/50">
            05 / Recognition
            <span aria-hidden="true" className="h-px flex-1 bg-paper/20" />
          </p>
          <p className="max-w-measure text-pretty text-sm leading-[1.7] text-paper/60 md:text-right">
            Competitions and programmes where the work was judged against other
            people&rsquo;s, which is the only honest benchmark there is.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-y-0 border-t border-paper/20 md:grid-cols-3 md:gap-x-10">
          {recognition.map((item, index) => (
            <li
              key={item.award}
              className="group border-b border-paper/20 py-8 md:border-b-0 md:pb-0 md:pt-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-2xs uppercase tracking-micro text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-2xs uppercase tracking-micro text-paper/40 nums">
                  {item.year}
                </span>
              </div>

              <p className="mt-5 font-serif text-[clamp(1.5rem,2.8vw,2rem)] leading-[1.1] tracking-[-0.015em] text-balance">
                {item.award}
              </p>
              <p className="mt-3 max-w-[34ch] text-pretty text-sm leading-[1.7] text-paper/60">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
