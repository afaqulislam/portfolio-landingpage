import { heroFacts, profile } from "@/lib/data";

function Asterisk({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="square"
    >
      <path d="M50 12V88" />
      <path d="M15.6 31L84.4 69" />
      <path d="M84.4 31L15.6 69" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="shell pb-20 pt-12 sm:pt-14 lg:pb-28 lg:pt-16">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 animate-rise-in" style={{ animationDelay: "30ms" }}>
          <p className="label">{profile.role}</p>
          <span aria-hidden="true" className="hidden h-3 w-px bg-rule-strong sm:block" />
          <p className="label text-ink-muted">{profile.roleSecondary}</p>
        </div>

        <h1 className="mt-6 font-serif text-[clamp(3.25rem,13.5vw,11rem)] font-normal leading-[0.84] tracking-[-0.025em] text-balance">
          <span className="block animate-rise-in" style={{ animationDelay: "90ms" }}>
            Afaq Ul
          </span>
          <span
            className="block animate-rise-in pl-[0.12em] italic"
            style={{ animationDelay: "150ms" }}
          >
            Islam
            <span className="not-italic text-brand">.</span>
          </span>
        </h1>

        <p className="mt-10 max-w-[46ch] font-serif text-[clamp(1.5rem,3.4vw,2.25rem)] leading-[1.18] tracking-[-0.015em] text-ink-muted text-balance animate-rise-in sm:mt-12">
          Web apps, AI agents, and the automation in between — designed, built, and
          deployed end to end.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-y-14 border-t border-rule pt-10 lg:mt-24 lg:grid-cols-12 lg:gap-x-10">
          {/* Positioning copy + calls to action */}
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="max-w-measure text-pretty text-[1.0625rem] leading-[1.7] text-ink-muted">
              {profile.summary} Most projects start as a spec and end as a deployed
              system somebody else has to maintain, so I optimise for the second half
              of that sentence: honest scope, working error paths, and code that still
              makes sense six months later.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap border border-brand bg-brand px-5 py-3 font-mono text-2xs uppercase tracking-micro text-white transition-colors duration-300 ease-editorial hover:border-brand-deep hover:bg-brand-deep"
              >
                See selected work
                <span
                  aria-hidden="true"
                  className="ml-3 inline-block transition-transform duration-300 ease-editorial group-hover:translate-y-0.5 motion-reduce:group-hover:translate-y-0"
                >
                  ↓
                </span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="sweep font-mono text-2xs uppercase tracking-micro text-ink-muted transition-colors duration-200 hover:text-brand"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Spec sheet — technical drawing panel, no stock photography */}
          <div className="lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
            <div className="relative overflow-hidden border border-rule bg-paper-raised/50">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.55]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, hsl(var(--rule)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--rule)) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <Asterisk className="absolute -right-8 -top-8 h-32 w-32 text-brand/15" />

              <div className="relative flex items-center justify-between border-b border-rule px-5 py-3">
                <span className="label">Spec sheet</span>
                <span className="flex items-center gap-2 font-mono text-2xs uppercase tracking-micro text-brand">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand motion-safe:animate-pulse-dot"
                  />
                  Online
                </span>
              </div>

              <dl className="relative">
                {heroFacts.map((fact) => (
                  <div
                    key={fact.term}
                    className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-rule px-5 py-4 last:border-0"
                  >
                    <dt className="font-mono text-2xs uppercase tracking-micro text-ink-faint">
                      {fact.term}
                    </dt>
                    <dd className="text-sm leading-snug text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="relative border-t border-rule px-5 py-4 font-mono text-2xs uppercase tracking-micro text-ink-faint">
                Also on{" "}
                <span className="text-ink">GitHub · 70+ repos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
