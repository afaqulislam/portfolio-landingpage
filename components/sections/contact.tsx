"use client";

import { useState } from "react";

import { contact, profile, socials } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="bg-paper-raised/45">
      <div className="shell py-24 lg:py-32">
        <p className="index">06 / Contact</p>

        <h2 className="mt-6 max-w-[20ch] font-serif text-[clamp(2.25rem,6vw,4rem)] leading-[0.98] tracking-[-0.02em] text-balance">
          {contact.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 border-t border-rule pt-12 lg:mt-24 lg:grid-cols-12">
          {/* Direct line */}
          <div className="lg:col-span-7">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-baseline gap-3 break-words font-serif text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight tracking-[-0.02em] transition-colors duration-300 hover:text-brand"
            >
              <span className="sweep">{profile.email}</span>
              <span
                aria-hidden="true"
                className="text-brand transition-transform duration-300 ease-editorial group-hover:animate-arrow-nudge motion-reduce:group-hover:animate-none"
              >
                ↗
              </span>
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 border border-rule px-3 py-2 font-mono text-2xs uppercase tracking-micro text-ink-muted transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                {copied ? "Copied to clipboard" : "Copy address"}
              </button>

              <a
                href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}
                className="sweep font-mono text-2xs uppercase tracking-micro text-ink-muted transition-colors duration-200 hover:text-brand"
              >
                {profile.phone}
              </a>
            </div>

            <p className="mt-10 max-w-measure text-pretty text-sm leading-[1.75] text-ink-muted">
              {contact.note}
            </p>
            <p className="mt-5 max-w-measure border-l-2 border-brand pl-4 text-pretty text-sm leading-[1.75] text-ink-faint">
              {contact.expect}
            </p>
          </div>

          {/* Elsewhere */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
              <span className="label">Elsewhere</span>
              <span className="font-mono text-2xs uppercase tracking-micro text-ink-faint">
                {profile.timezoneLabel}
              </span>
            </div>

            <ul className="mt-2">
              {socials.map((item) => (
                <li key={item.label} className="border-b border-rule/60 last:border-b-0">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between gap-4 py-4 font-mono text-2xs uppercase tracking-micro text-ink-muted transition-colors duration-200 hover:text-brand"
                  >
                    <span className="sweep">{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="text-brand transition-transform duration-300 ease-editorial group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <dl className="mt-10 space-y-5">
              <div>
                <dt className="font-mono text-2xs uppercase tracking-micro text-ink-faint">
                  Based in
                </dt>
                <dd className="mt-1.5 text-sm text-ink">{profile.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-2xs uppercase tracking-micro text-ink-faint">
                  Reply time
                </dt>
                <dd className="mt-1.5 text-sm text-ink">Within two working days</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}