import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { MenuData, Sandwich } from '@/types/menu';

const MENU_PATH = path.join(process.cwd(), 'public', 'menu.json');

export const menu = JSON.parse(readFileSync(MENU_PATH, 'utf8')) as MenuData;

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function formatSandwichPrices(prices: Sandwich['prices']): string {
  if (typeof prices === 'number') {
    return formatPrice(prices);
  }

  return Object.entries(prices)
    .map(([size, price], index) =>
      index === 0 ? formatPrice(price) : `${size.toLowerCase()} ${formatPrice(price)}`,
    )
    .join(' / ');
}
