import type { Metadata } from 'next';
import HoursTable from '@/components/visit/HoursTable';
import { phoneHref } from '@/components/layout/navLinks';

export const metadata: Metadata = {
  title: 'Visit Us | Square Deli',
  description:
    'Find Square Deli at 334 Broad Street in Providence, RI. Open Monday to Saturday, 10:30am to 9:00pm. Get directions or call to order.',
};

const MAP_EMBED_URL = 'https://www.google.com/maps?q=334+Broad+St,+Providence,+RI+02907&output=embed';
const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=334+Broad+St,+Providence,+RI+02907';

export default function VisitUsPage() {
  return (
    <main className="bg-brand-cream text-brand-ink">
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
              <span aria-hidden="true" className="h-px w-7 bg-brand-coral" />
              Find us
            </p>
            <h1 className="text-6xl font-light leading-[0.95] tracking-[-0.04em] text-brand-ink sm:text-7xl">
              Come by
              <span className="block text-brand-orange">for a bite.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-brand-muted">
              We&apos;re on Broad Street, ready with a hot slice, a stacked sandwich, and a seat saved for you.
            </p>
            <a
              href={phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-dark"
            >
              Call to order
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
            </a>
          </div>

          <div className="overflow-hidden rounded-md border border-brand-border bg-brand-card">
            <iframe
              src={MAP_EMBED_URL}
              title="Map showing Square Deli at 334 Broad Street, Providence"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full border-0 lg:h-96"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 border-t border-brand-border py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
              Your neighborhood stop
            </p>
            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] text-brand-ink sm:text-6xl">
              Right where
              <span className="block text-brand-orange">you need us.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-brand-muted">
              Easy to find, easy to love. Pull up, walk in, or give us a call and we&apos;ll have your order ready.
            </p>

            <address className="mt-6 flex items-start gap-3 not-italic">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>
                <span className="block font-semibold text-brand-ink">334 Broad Street</span>
                <span className="block text-sm text-brand-muted">Providence, RI 02907</span>
              </span>
            </address>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-ink px-6 py-3 font-semibold text-white transition hover:bg-brand-soft-ink"
            >
              Get directions <span aria-hidden="true">→</span>
              <span className="sr-only">(opens Google Maps in a new tab)</span>
            </a>
          </div>

          <HoursTable />
        </div>
      </section>

      <section className="bg-brand-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[auto_1fr_0.8fr] lg:items-center lg:gap-8 lg:px-10 lg:py-20">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-white lg:self-start"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 3v8m-3-8v5a3 3 0 0 0 6 0V3M7 11v10m10-18c-2 0-3 2.5-3 6s1 4 3 4v8" />
            </svg>
          </span>

          <div>
            <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
              Good to know
            </p>
            <h2 className="text-4xl font-light leading-[1] tracking-[-0.04em] text-brand-ink sm:text-5xl">
              Bring your appetite.
              <span className="block text-brand-orange">We&apos;ll handle the rest.</span>
            </h2>
          </div>

          <p className="max-w-sm leading-7 text-brand-muted">
            Whether you&apos;re grabbing lunch between errands or settling in for a slice, there&apos;s no dress code and no wrong order.
          </p>
        </div>
      </section>
    </main>
  );
}
