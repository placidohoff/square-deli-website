# Current Feature

<!-- Feature Name -->

Create the Visit Us Page

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

<!-- Goals & requirements -->

- Build the visit-us page at `/visit-us`, matching the mockups:
  - `context/screenshots/visit-us/visit-top.png`
  - `context/screenshots/visit-us/visit-bottom.png`
- "Find us" hero with a map and a call-to-order button.
- Address with a "Get directions" link, and a full weekly hours table.
- "Good to know" band at the bottom.
- Point the header's "Visit Us" link at the new page.
- Unique page title and meta description.
- `npm run build` passes with no errors.

## Notes

<!-- Any extra notes -->

- Branch: `feature/visit-us`.
- Spec: `context/features/visit-us.md`.
- Hours follow `context/project-overview.md` (10:30am–9:00pm, closed Sunday). The mockup shows Friday and Saturday until 10:00pm; the spec wins.
- The mockup shows a drawn map. The project overview asks for an embedded map, so the page uses a Google Maps embed (no API key needed).

## History

<!-- Keep this updated. Earliest to latest -->

- 2026-10-08: Created the `feature/menu-page` branch and documented the feature.
- 2026-10-08: Built `/menu` (`app/menu/page.tsx`, `components/menu/`, `lib/menu.ts`, `types/menu.ts`). Moved the header and footer into `components/layout/` and `app/layout.tsx` so both pages share them. Build passes; not yet reviewed in a browser or committed.
- 2026-10-22: Merged the menu page, the new hero headline, and the mobile menu (`feature/mobile-menu`) into `main`.
- 2026-10-23: Created the `feature/visit-us` branch and documented the feature.
- 2026-10-23: Built `/visit-us` (`app/visit-us/page.tsx`, `components/visit/HoursTable.tsx`). Header "Visit Us" now links to `/visit-us`. Added `brand-rust` (#B9490A) to the theme for the "Closed" label. Build passes; not yet reviewed in a browser or committed.
- 2026-10-23: Merged `feature/visit-us` into `main` and pushed.
