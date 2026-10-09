import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="border-b border-rule">
      <div className="shell py-24 lg:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="index">01 / Selected work</p>
            <h2 className="mt-6 max-w-[18ch] font-serif text-[clamp(2.25rem,6vw,4rem)] leading-[0.98] tracking-[-0.02em] text-balance">
              Ten things that actually shipped.
            </h2>
          </div>
          <p className="max-w-measure text-pretty text-sm leading-[1.7] text-ink-muted md:text-right">
            Client work, hackathon builds, and client-side experiments — each one
            deployed, not just a repository that stops at the README.
          </p>
        </div>

        <ol className="mt-16 border-t border-rule lg:mt-24">
          {projects.map((project) => {
            const title = (
              <span className="sweep font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.015em] transition-colors duration-300">
                {project.title}
              </span>
            );

            return (
              <li key={project.index}>
                <article className="group grid grid-cols-1 gap-x-10 gap-y-5 border-b border-rule py-10 transition-colors duration-500 ease-editorial hover:bg-paper-raised/60 md:grid-cols-12 md:py-12">
                  <p className="font-mono text-2xs uppercase tracking-micro text-ink-faint transition-colors duration-300 group-hover:text-brand md:col-span-1">
                    {project.index}
                  </p>

                  <div className="md:col-span-6">
                    <h3 className="text-ink transition-colors duration-300 group-hover:text-brand">
                      <a
                        href={project.live ?? project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-3"
                      >
                        {title}
                        <span
                          aria-hidden="true"
                          className="translate-y-[-0.1em] text-brand transition-transform duration-300 ease-editorial group-hover:animate-arrow-nudge motion-reduce:group-hover:animate-none"
                        >
                          ↗
                        </span>
                      </a>
                    </h3>

                    <p className="mt-4 max-w-prose text-pretty text-[0.9375rem] leading-[1.7] text-ink-muted">
                      {project.blurb}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-rule px-2.5 py-1 font-mono text-2xs uppercase tracking-micro text-ink-muted transition-colors duration-300 group-hover:border-rule-strong"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sweep font-mono text-2xs uppercase tracking-micro text-ink-muted transition-colors duration-200 hover:text-brand"
                      >
                        Repository
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sweep font-mono text-2xs uppercase tracking-micro text-ink-muted transition-colors duration-200 hover:text-brand"
                        >
                          Live site
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between gap-6 md:col-span-4 md:col-start-9 md:flex-col md:items-end md:justify-start md:text-right">
                    <p className="font-mono text-2xs uppercase tracking-micro text-ink-faint nums">
                      {project.period}
                    </p>
                    <p className="font-mono text-2xs uppercase tracking-micro text-brand">
                      {project.metric}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
