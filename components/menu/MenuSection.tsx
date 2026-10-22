import { formatPrice } from '@/lib/menu';
import type { MenuItem } from '@/types/menu';

interface MenuSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  items: MenuItem[];
}

export default function MenuSection({ eyebrow, title, description, items }: MenuSectionProps) {
  return (
    <section>
      <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-orange">{eyebrow}</p>
      <h2 className="text-4xl font-light tracking-[-0.04em] text-brand-ink">{title}</h2>
      {description && <p className="mt-2 text-sm text-brand-muted">{description}</p>}

      <ul className="mt-4 border-t border-brand-coral">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline justify-between gap-4 border-b border-brand-coral px-0.5 py-2"
          >
            <span className="font-semibold text-brand-burnt">{item.name}</span>
            <span className="font-bold text-brand-ink">{formatPrice(item.price)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
