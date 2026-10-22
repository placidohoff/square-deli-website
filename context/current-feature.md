# Current Feature

<!-- Feature Name -->

Create the Menu Page

## Status

<!-- Not Started|In Progress|Completed -->

In Progress

## Goals

<!-- Goals & requirements -->

- Build the menu page at `/menu`, matching the mockups:
  - `context/sceenshots/menu/menu-top.png`
  - `context/sceenshots/menu/menu-middle.png`
  - `context/sceenshots/menu/menu-bottom.png`
- Take all items, descriptions and prices from `public/menu.json`.
- Show each sandwich's photo from `public/images/sandwiches/`.
- Sandwiches as cards; every other category as a price list.
- Share the site header and footer between the home and menu pages.
- Unique page title and meta description.
- `npm run build` passes with no errors.

## Notes

<!-- Any extra notes -->

- Branch: `feature/menu-page`.
- Spec: `context/features/menu-page.md`.
- `public/menu.json` is the source of truth. Where the mockups show different items or prices, the JSON wins.
- The mockups show no photos; sandwich photos were added because the spec asks for `public/images/`.

## History

<!-- Keep this updated. Earliest to latest -->

- 2026-10-08: Created the `feature/menu-page` branch and documented the feature.
- 2026-10-08: Built `/menu` (`app/menu/page.tsx`, `components/menu/`, `lib/menu.ts`, `types/menu.ts`). Moved the header and footer into `components/layout/` and `app/layout.tsx` so both pages share them. Build passes; not yet reviewed in a browser or committed.
