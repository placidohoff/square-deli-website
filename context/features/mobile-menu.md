# Mobile Menu
## Goals
There is no menu on mobile screens. Please include a sticky menu for mobile.

## Implementation
Branch: `feature/mobile-menu`

### Behavior
- Below the `md` breakpoint (768px), the desktop links are hidden and a hamburger button appears on the right side of the header.
- Tapping the button opens a full-width panel directly under the header with Menu, Our Story, Visit Us, and a full-width **Call to Order** button.
- The icon switches to an X while the menu is open.
- The menu closes when a link is tapped, the X is tapped, or Escape is pressed.
- The header was already `sticky top-0`, so the button and the open panel stay pinned to the top of the screen while scrolling.
- Desktop (`md` and up) is unchanged.

### Files
| File | Change |
| --- | --- |
| `components/layout/navLinks.ts` | New. Shared list of nav links and the phone number, so the desktop and mobile menus stay in sync. |
| `components/layout/MobileMenu.tsx` | New. Client component (`'use client'`) with the hamburger button, open/closed state, and the dropdown panel. |
| `components/layout/SiteHeader.tsx` | Builds the desktop links from `navLinks` and renders `<MobileMenu />`. Stays a server component. |

### How it works
**Shared links** (`navLinks.ts`)
```ts
export const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/#story', label: 'Our Story' },
  { href: '/#visit', label: 'Visit Us' },
];

export const phoneHref = 'tel:4012510121';
```
To add or rename a page, edit this list and both menus update.

**Header** (`SiteHeader.tsx`)
- The desktop `<nav>` uses `hidden md:flex`, so it only shows on larger screens.
- `<MobileMenu />` sits next to it inside the same flex row.
- Only `MobileMenu` needs client-side JavaScript, so the rest of the header stays a server component.

**Mobile menu** (`MobileMenu.tsx`)
- The wrapper uses `md:hidden`, so the button and panel never show on desktop.
- `useState` tracks whether the panel is open. The button toggles it.
- A `useEffect` adds an Escape key listener only while the menu is open, and removes it on close.
- The panel is `absolute inset-x-0 top-full`. The sticky header acts as its positioning parent, so the panel drops down right under the header bar and moves with it.
- Each link calls `setOpen(false)` on click, so the panel closes after navigating, including the same-page `/#story` and `/#visit` jumps.

### Accessibility
- The button has `aria-expanded`, `aria-controls="mobile-menu"`, and an `aria-label` that switches between "Open menu" and "Close menu".
- The panel is a `<nav aria-label="Mobile navigation">`, separate from the desktop "Main navigation".
- The SVG icons are `aria-hidden`.
- The tap target is 44×44px (`h-11 w-11`).

### Testing
1. Run `npm run dev`.
2. Narrow the browser below 768px, or use the browser's device mode.
3. Check that the hamburger appears, opens and closes the panel, closes on link tap and on Escape, and stays at the top while scrolling.
4. Widen past 768px and check that the desktop links return and the hamburger is gone.
