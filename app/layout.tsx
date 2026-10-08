import type { Metadata } from 'next';
import { Anton } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: 'Square Deli | Providence Deli & Pizza',
  description:
    'Square Deli serves neighborhood favorites like chopped cheese, wings, and NY-style pizza in Providence, Rhode Island.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={anton.variable}>{children}</body>
    </html>
  );
}
