import LiveYear from "@/components/live-year";
import LocalClock from "@/components/local-clock";
import { nav, profile, socials } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="shell py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label">Available for new work</p>
            <p className="mt-5 max-w-[24ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance">
              Let&rsquo;s build something worth maintaining.
            </p>          </div>

          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-baseline gap-3 font-mono text-sm text-brand transition-colors duration-200 hover:text-brand-deep lg:pb-2"
          >
            <span className="sweep">{profile.email}</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-editorial group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
            >
              →
            </span>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-rule pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label">Location</p>
            <p className="mt-3 text-sm text-ink">{profile.location}</p>
            <p className="mt-1 text-sm text-ink-muted">{profile.phone}</p>
          </div>

          <div>
            <p className="label">Local time</p>
            <p className="mt-3">
              <LocalClock label={profile.timezoneLabel} />
            </p>
          </div>

          <div>
            <p className="label">Index</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="sweep text-sm text-ink-muted transition-colors duration-200 hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sweep inline-flex items-baseline gap-1 text-sm text-ink-muted transition-colors duration-200 hover:text-brand"
                  >
                    {social.label}
                    <span aria-hidden="true" className="text-2xs">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark anchors the page bottom without shouting */}
        <p
          aria-hidden="true"
          className="mt-16 select-none whitespace-nowrap font-serif text-[clamp(3.5rem,15vw,12rem)] leading-[0.8] tracking-[-0.035em] text-ink/[0.07]"
        >
          {profile.name}
        </p>

        <div className="mt-8 border-t border-rule pt-6">
          <p className="font-mono text-2xs uppercase tracking-micro text-ink-faint">
            © <LiveYear /> {profile.name} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
