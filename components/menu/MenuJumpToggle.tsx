'use client';

import { useEffect, useState } from 'react';

interface JumpTarget {
  id: string;
  label: string;
}

interface MenuJumpToggleProps {
  targets: JumpTarget[];
}

export default function MenuJumpToggle({ targets }: MenuJumpToggleProps) {
  const [active, setActive] = useState<string | null>(targets[0]?.id ?? null);

  useEffect(() => {
    const elements = targets
      .map((target) => document.getElementById(target.id))
      .filter((element): element is HTMLElement => element !== null);

    // Shrink the observed area to a line across the middle of the screen, so the
    // section crossing that line is the active one. When neither section crosses
    // it (e.g. the CTA band or footer), nothing is active and the toggle hides.
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActive(targets.find((target) => visible.has(target.id))?.id ?? null);
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [targets]);

  const hidden = active === null;

  return (
    <nav
      aria-label="Jump to menu section"
      inert={hidden}
      className={`fixed inset-x-0 bottom-4 z-30 flex justify-center px-5 transition duration-200 md:hidden ${
        hidden ? 'pointer-events-none translate-y-4 opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex rounded-full bg-brand-dark p-1 shadow-lg">
        {targets.map((target) => {
          const isActive = target.id === active;
          return (
            <a
              key={target.id}
              href={`#${target.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold transition ${
                isActive ? 'bg-brand-orange text-white' : 'text-brand-border hover:text-white'
              }`}
            >
              {target.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
