export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-border bg-brand-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="brand-font text-3xl text-brand-mauve">Square Deli</div>
        <div className="flex items-center gap-3">
          <span>Made for the neighborhood.</span>
          <a href="tel:4012510121" className="font-semibold text-brand-orange">
            Call us
          </a>
        </div>
      </div>
    </footer>
  );
}
