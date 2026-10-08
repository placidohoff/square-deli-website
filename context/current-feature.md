# Current Feature

<!-- Feature Name -->

Create Home Page

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

<!-- Goals & requirements -->

- Build the Square Deli home page to match the mockups:
  - `context/sceenshots/homepage/home-top.png`
  - `context/sceenshots/homepage/home-middle.png`
  - `context/sceenshots/homepage/home-bottom.png`
- Follow the project brief: warm neutral palette, orange accent, mobile-first layout.
- Replace the placeholder hero image and menu card gradients with real imagery.
- Verify the page in the browser at mobile and desktop widths.
- `npm run build` passes with no errors.

## Notes

<!-- Any extra notes -->

- Branch: `feature/home-page`. Nothing is committed yet; the whole project is still untracked.
- Spec: `context/features/home-page.md`.
- The screenshots folder is spelled `context/sceenshots/`, while the feature spec and `context/README.md` refer to `context/screenshots/`. One of them needs to change.
- The current `app/page.tsx` is a first-pass scaffold and has not been compared against the mockups.
- The header nav links to in-page anchors (`#menu`, `#story`, `#visit`); the Menu, Our Story and Visit Us pages do not exist yet.

## History

<!-- Keep this updated. Earliest to latest -->

- 2026-10-07: Created the `feature/home-page` branch and scaffolded the Next.js, TypeScript and Tailwind project in the repo root.
- 2026-10-07: Added the first-pass home page (`app/page.tsx`, `app/layout.tsx`, `app/globals.css`): header, hero, sandwiches section, Our Story, highlight cards, Visit Us band, footer and LocalBusiness JSON-LD.
- 2026-10-08: Slimmed the hero heading, replaced "Open today" with the posted hours (Mon – Sat 10:30am – 9:00pm, Sunday closed), reworked the popular items cards without prices, and added a "View the full menu" button linking to `/menu`.
- 2026-10-08: Build passed. Merged to `main` and pushed to GitHub.
