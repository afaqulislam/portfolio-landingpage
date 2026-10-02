import { education, roles } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-rule">
      <div className="shell py-24 lg:py-32">
        <p className="index">04 / Track</p>

        <h2 className="mt-6 max-w-[24ch] font-serif text-[clamp(2.25rem,6vw,4rem)] leading-[0.98] tracking-[-0.02em] text-balance">
          Where I have been, and what I built there.
        </h2>

        <ol className="mt-16 border-t border-rule lg:mt-24">
          {roles.map((role) => (
            <li
              key={`${role.company}-${role.period}`}
              className="group grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-10 md:grid-cols-12 md:py-12"
            >
              <p className="font-mono text-2xs uppercase tracking-micro text-ink-faint transition-colors duration-300 nums group-hover:text-brand md:col-span-3 lg:col-span-2">
                {role.period}
              </p>

              <div className="md:col-span-9 lg:col-span-10">
                <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.015em]">
                  {role.title}
                  <span className="text-ink-faint"> · </span>
                  <span className="italic text-ink-muted">{role.company}</span>
                </h3>
                <p className="mt-4 max-w-prose text-pretty text-[0.9375rem] leading-[1.75] text-ink-muted">
                  {role.note}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mt-20 font-mono text-2xs font-medium uppercase tracking-wide2 text-ink lg:mt-28">
          Education
        </h3>

        <ol className="mt-8 border-t border-rule">
          {education.map((item) => (
            <li
              key={item.degree}
              className="group grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 md:grid-cols-12"
            >
              <p className="font-mono text-2xs uppercase tracking-micro text-ink-faint transition-colors duration-300 nums group-hover:text-brand md:col-span-3 lg:col-span-2">
                {item.period}
              </p>

              <div className="md:col-span-9 lg:col-span-10">
                <h4 className="font-serif text-[clamp(1.25rem,2.4vw,1.625rem)] leading-tight tracking-[-0.015em]">
                  {item.degree}
                  <span className="text-ink-faint"> · </span>
                  <span className="italic text-ink-muted">{item.school}</span>
                </h4>
                {item.note && (
                  <p className="mt-3 max-w-prose text-pretty text-sm leading-[1.75] text-ink-muted">
                    {item.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
