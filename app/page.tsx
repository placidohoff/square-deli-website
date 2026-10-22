import Image from 'next/image';
import Link from 'next/link';

type FeaturedItem = {
  name: string;
  image: string;
  description: string;
  price?: string;
  prices?: Record<string, string>;
};

const featuredItems: FeaturedItem[] = [
  {
    name: 'Chopped Cheese',
    image: '/images/sandwiches/chopped.png',
    price: '$10.99',
    description: 'American yellow cheese, lettuce, tomatoes, grilled onions, chili sauce',
  },
  {
    name: 'Chicken Wings & Tenders',
    image: '/images/wings.png',
    prices: {'6pc': '$8.99', '12pc': '$14.99', '1lb of tenders': '$8.99'},
    description: 'Enjoy golden-fried, juicy wings or tenders cooked to perfection and served hot with a variety of flavorful sauces.',
  },
  {
    name: 'N.Y. Style Pizza',
    image: '/images/sandwiches/pizza.png',
    prices: {slice: '$2.99', pie: '$22.99'},
    description: 'Thin, foldable crust, a flavorful tomato sauce, and perfectly melted cheese.',
  },
  {
    name: 'Steak n Cheese',
    image: '/images/sandwiches/steak-n-cheese.png',
    price: '$12.99',
    description: '1/2 pound of shaved steak, provolone cheese, grilled onions, peppers',
  },
];

const menuHighlights = [
  {
    label: 'Know the classics',
    title: 'Sandwiches & subs',
    description: 'Stacked high, toasted fresh, and made the way you like it.',
  },
  {
    label: 'Neighborhood favorite',
    title: 'Freshly made every day',
    description: 'We serve comfort classics and hot, crispy favorites all day long.',
  },
];

const hours = [
  { day: 'Mon – Sat', value: '10:30am – 9:00pm' },
  { day: 'Sunday', value: 'Closed' },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Square Deli',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    telephone: '(401) 251-0121',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '334 Broad St',
      addressLocality: 'Providence',
      addressRegion: 'RI',
      postalCode: '02907',
      addressCountry: 'US',
    },
    openingHours: ['Mo-Sa 10:30-21:00'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-brand-cream text-brand-ink">
        <section id="top" className="mx-auto max-w-6xl px-5 pb-10 pt-10 sm:px-8 lg:px-10 lg:pb-16 lg:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
                Providence, Rhode Island
              </p>

              <h1 className="text-balance text-5xl font-bold leading-[0.9] tracking-[-0.04em] text-brand-ink sm:text-6xl lg:text-6xl">
                <span className="block">Come hungry.</span>
                <span className="block text-brand-orange">Leave happy.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
                Your neighborhood deli for big sandwiches, crispy wings, and the kind of pizza you fold in half.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center rounded-md bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-dark"
                >
                  See what&apos;s cooking
                </a>
                <a
                  href="tel:4012510121"
                  className="inline-flex items-center justify-center rounded-md border border-brand-border bg-transparent px-6 py-3 font-semibold text-brand-ink transition hover:border-brand-orange hover:text-brand-orange"
                >
                  (401) 251-0121
                </a>
              </div>

              <div className="mt-8 border-t border-brand-border pt-5 text-sm text-brand-muted sm:flex sm:items-start sm:justify-between sm:gap-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                  <dl className="grid grid-cols-[auto_auto] gap-x-4 gap-y-1">
                    {hours.map((entry) => (
                      <div key={entry.day} className="contents">
                        <dt>{entry.day}</dt>
                        <dd className="font-semibold text-brand-ink">{entry.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="mt-3 flex items-center gap-3 sm:mt-0">
                  <span className="inline-flex h-3 w-3 rounded-full bg-brand-orange" aria-hidden="true" />
                  <span>Find us at</span>
                  <span className="font-semibold text-brand-ink">334 Broad St, Providence</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[1.25rem] border border-brand-border bg-brand-card shadow-[0_24px_70px_rgba(28,25,23,0.08)]">
                <div
                  className="h-[460px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80')",
                  }}
                  aria-label="A table of sandwiches and fries at Square Deli"
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-orange/20">
                Made fresh<br className="sm:hidden" /> every day
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
                The good stuff
              </p>
              <h2 className="brand-font text-4xl leading-none text-brand-ink sm:text-6xl">
                What's Popular
              </h2>
            </div>
            <div className="hidden rounded-full border border-brand-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange lg:inline-flex">
              Fresh bread every order
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredItems.map((item) => (
              <article
                key={item.name}
                className="rounded-lg border border-brand-border bg-white/60 p-4 shadow-[0_8px_25px_rgba(28,25,23,0.02)]"
              >
                <div className="relative mb-4 h-40 overflow-hidden rounded-md bg-brand-card">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-brand-ink">{item.name}</h3>
                <p className="mt-3 text-base leading-6 text-brand-muted">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-md bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-dark"
            >
              View the full menu <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </section>

        <section id="story" className="border-y border-brand-border bg-brand-card/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:px-10 lg:py-20">
            <div>
              <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
                Our story
              </p>
              <h2 className="brand-font text-5xl leading-[0.92] text-brand-ink sm:text-7xl">
                Built for the
                <span className="block text-brand-orange">neighborhood.</span>
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-xl leading-8 text-brand-muted">
                Square Deli started with a simple idea: make the food people crave, treat everyone like family, and keep the door open for the next good conversation.
              </p>
              <p className="mt-5 max-w-xl text-xl leading-8 text-brand-muted">
                Our menu is a mix of the classics we grew up on and the things we still order for ourselves: loaded sandwiches, crispy wings, foldable pizza, and plenty of comfort in between.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {menuHighlights.map((card, index) => (
              <div key={card.title} className="rounded-xl border border-brand-border bg-white/70 p-7 shadow-sm">
                <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
                  {index === 0 ? 'The good stuff' : 'What matters to us'}
                </p>
                <h3 className="text-3xl font-bold tracking-[-0.04em] text-brand-ink sm:text-4xl">{card.title}</h3>
                <p className="mt-4 text-lg leading-7 text-brand-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="visit" className="bg-brand-dark text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:py-20">
            <div>
              <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
                Come hungry
              </p>
              <h2 className="brand-font text-5xl leading-[0.92] sm:text-7xl">
                We&apos;ll see you
                <span className="block text-brand-orange">on Broad Street.</span>
              </h2>
            </div>

            <div className="flex flex-col justify-center lg:items-end">
              <div className="mb-5 text-lg text-brand-border">
                <p>334 Broad St</p>
                <p>Providence, RI 02907</p>
              </div>

              <div className="mb-5 flex flex-col gap-2 text-base text-brand-border">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true">⏰</span>
                  <span>Mon–Sat, 10:30am–9:00pm</span>
                </div>
                <div className="flex items-center gap-3">
                  <span aria-hidden="true">📞</span>
                  <span>(401) 251-0121</span>
                </div>
              </div>

              <a
                href="tel:4012510121"
                className="inline-flex items-center justify-center rounded-md bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-dark"
              >
                Call to order
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
