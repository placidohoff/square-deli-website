# Mobile Menu Screen Toggle
## Goals
For mobile screen viewing the /menu page, I would like a toggle option, or fixed buttons that will scroll the user to the sandwiches section or the more food section respectively.

## ImplementationBranch: `feature/mobile-menu-toggle`

### Behavior
- Below the `md` breakpoint (768px), a floating pill toggle is pinned to the bottom center of the `/menu` page with two buttons: **Sandwiches** and **More food**.
- Tapping a button smooth-scrolls to that section (`html { scroll-behavior: smooth }` is already set globally).
- The button for the section currently in the middle of the screen is highlighted orange.
- Once the user scrolls past the food (into the dark "Plan your visit" band and footer), the toggle fades out so it never covers that content. It fades back in when scrolling up.
- Desktop (`md` and up) is unchanged.

### Files
| File | Change |
| --- | --- |
| `components/menu/MenuJumpToggle.tsx` | New. Client component (`'use client'`) that renders the toggle and tracks the active section. |
| `app/menu/page.tsx` | Adds `id="sandwiches"` and `id="more-food"` to the two sections, `scroll-mt-20` so the sticky header doesn't cover headings after a jump, and renders `<MenuJumpToggle />`. Stays a server component. |

### How it works
- The page passes the targets as a module-level constant, so the reference is stable and the observer is only set up once:
  ```ts
  const JUMP_TARGETS = [
    { id: 'sandwiches', label: 'Sandwiches' },
    { id: 'more-food', label: 'More food' },
  ];
  ```
- Each button is a plain `<a href="#id">`, so it works even before JavaScript loads.
- An `IntersectionObserver` with `rootMargin: '-50% 0px -50% 0px'` shrinks the observed area to a line across the middle of the viewport. Whichever section crosses that line is active. If none does, the toggle hides.
- When hidden, the toggle uses `opacity-0 pointer-events-none` plus `inert`, so it can't be tapped or tabbed to.

### Accessibility
- The toggle is a `<nav aria-label="Jump to menu section">`.
- The active link gets `aria-current="true"`.
- Tap targets are at least 44px tall (`min-h-11`).

### Testing
1. Run `npm run dev` and open `/menu`.
2. Narrow the browser below 768px, or use the browser's device mode.
3. Check that the toggle appears at the bottom with **Sandwiches** highlighted.
4. Tap **More food** and check that the page scrolls to the pizza section and the highlight moves.
5. Scroll to the bottom and check that the toggle fades out over the dark CTA band and footer.
6. Widen past 768px and check that the toggle is gone.
