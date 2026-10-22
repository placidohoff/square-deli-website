import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { navLinks, phoneHref } from './navLinks';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border/80 bg-brand-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="brand-font text-3xl tracking-tight text-brand-mauve sm:text-4xl">
          Square Deli
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-orange">
              {link.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            className="inline-flex items-center rounded-md bg-brand-orange px-4 py-2 font-semibold text-white transition hover:bg-brand-orange-dark"
          >
            Call to Order
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
