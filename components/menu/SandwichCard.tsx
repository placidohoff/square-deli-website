import Image from 'next/image';
import { formatSandwichPrices } from '@/lib/menu';
import type { Sandwich } from '@/types/menu';

interface SandwichCardProps {
  sandwich: Sandwich;
}

export default function SandwichCard({ sandwich }: SandwichCardProps) {
  return (
    <article className="overflow-hidden border border-brand-border bg-white">
      <div className="relative aspect-[4/3] bg-brand-card">
        <Image
          src={`/images/sandwiches/${sandwich.image}`}
          alt={sandwich.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-tight text-brand-burnt">{sandwich.name}</h3>
          <p className="shrink-0 whitespace-nowrap pt-0.5 text-sm font-bold text-brand-ink">
            {formatSandwichPrices(sandwich.prices)}
          </p>
        </div>
        <p className="mt-3 text-sm italic leading-relaxed text-brand-muted">{sandwich.description}</p>
      </div>
    </article>
  );
}
