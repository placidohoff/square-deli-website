import type { Metadata } from 'next';
import Link from 'next/link';
import MenuJumpToggle from '@/components/menu/MenuJumpToggle';
import MenuSection from '@/components/menu/MenuSection';
import SandwichCard from '@/components/menu/SandwichCard';
import { menu } from '@/lib/menu';
import type { MenuListKey } from '@/types/menu';

export const metadata: Metadata = {
  title: 'Menu | Square Deli',
  description:
    'The full Square Deli menu: sandwiches and subs, N.Y. style pizza, chicken wings, empanadas, yaroa, fresh juice, sides and desserts.',
};

interface MenuSectionConfig {
  key: MenuListKey;
  eyebrow: string;
  title: string;
  description?: string;
}

const MAIN_SECTIONS: MenuSectionConfig[] = [
  {
    key: 'pizza',
    eyebrow: '18 inch',
    title: 'N.Y. style pizza',
    description: 'Big, foldable slices with a crisp edge and plenty of cheese.',
  },
  {
    key: 'chickenWings',
    eyebrow: 'Crispy & saucy',
    title: 'Chicken wings',
    description: 'Choose your favorite sauce or keep them plain.',
  },
  { key: 'empanadas', eyebrow: 'Handheld', title: 'Empanadas' },
  { key: 'yaroa', eyebrow: 'Hearty plates', title: 'Yaroa' },
  { key: 'freshJuice', eyebrow: 'Made fresh', title: 'Fresh juice' },
  { key: 'chilliDogs', eyebrow: 'Loaded up', title: 'Chili dogs' },
];

const EXTRA_SECTIONS: MenuSectionConfig[] = [
  { key: 'sides', eyebrow: 'On the side', title: 'Sides' },
  { key: 'desserts', eyebrow: 'Something sweet', title: 'Desserts' },
];

const JUMP_TARGETS = [
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'more-food', label: 'More food' },
];

export default function MenuPage() {
  return (
    <main className="bg-brand-cream text-brand-ink">
      <h1 className="sr-only">Square Deli menu</h1>

      <section id="sandwiches" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
              The main event
            </p>
            <h2 className="text-5xl font-light tracking-[-0.04em] text-brand-ink sm:text-6xl">
              Sandwiches <span className="text-brand-orange">&amp; subs</span>
            </h2>
            <p className="mt-3 text-brand-muted">Stacked high, toasted fresh, and made the way you like it.</p>
          </div>
          <p className="hidden shrink-0 border-l border-brand-coral py-3 pl-4 text-xs uppercase tracking-[0.12em] text-brand-muted lg:block">
            Fresh bread
            <span className="block text-sm font-bold normal-case tracking-normal text-brand-orange">every order</span>
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {menu.sandwiches.map((sandwich) => (
            <SandwichCard key={sandwich.id} sandwich={sandwich} />
          ))}
        </div>
      </section>

      <div id="more-food" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <div className="grid gap-x-14 gap-y-14 md:grid-cols-2">
          {MAIN_SECTIONS.map(({ key, ...section }) => (
            <MenuSection key={key} items={menu[key]} {...section} />
          ))}
        </div>

        <hr className="my-14 border-brand-border" />

        <div className="grid gap-x-14 gap-y-14 md:grid-cols-2">
          {EXTRA_SECTIONS.map(({ key, ...section }) => (
            <MenuSection key={key} items={menu[key]} {...section} />
          ))}
        </div>
      </div>

      <MenuJumpToggle targets={JUMP_TARGETS} />

      <section className="bg-brand-dark text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div>
            <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">
              Ready when you are
            </p>
            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Good food is
              <span className="block text-brand-orange">worth the trip.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start justify-center gap-5">
            <p className="max-w-md text-sm leading-6 text-brand-border">
              Taxes not included. Please inform your server of any allergies. Our food is prepared in kitchens that
              may use nuts, dairy, gluten, shellfish, and other allergens.
            </p>
            <Link
              href="/#visit"
              className="inline-flex items-center justify-center rounded-md bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-dark"
            >
              Plan your visit <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
