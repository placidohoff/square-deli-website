# Current Feature

<!-- Feature Name -->

Hosting on Render

## Status

<!-- Not Started|In Progress|Completed -->

In Progress

## Goals

<!-- Goals & requirements -->

- Host the website on Render.
- Deploy automatically when `main` is pushed to GitHub.
- Keep Next.js image optimization working in production.
- `npm run build` passes with no errors.

## Notes

<!-- Any extra notes -->

- Branch: `feature/hosting`.
- Spec and implementation steps: `context/features/hosting.md`.
- Runs as a Render Node web service defined in `render.yaml`, not a static site, so `next/image` can shrink the very large photos in `public/images`.
- Upgraded Next.js from 16.4.0 to 16.4.3 to fix critical security advisories (16.4.0 also stopped the build, which would fail every Render deploy).
- Free plan: the site sleeps after 15 minutes idle. Starter plan (about $7/month) stays awake.

## History

<!-- Keep this updated. Earliest to latest -->

- 2026-10-08: Created the `feature/menu-page` branch and documented the feature.
- 2026-10-08: Built `/menu` (`app/menu/page.tsx`, `components/menu/`, `lib/menu.ts`, `types/menu.ts`). Moved the header and footer into `components/layout/` and `app/layout.tsx` so both pages share them. Build passes; not yet reviewed in a browser or committed.
- 2026-10-22: Merged the menu page, the new hero headline, and the mobile menu (`feature/mobile-menu`) into `main`.
- 2026-10-23: Created the `feature/visit-us` branch and documented the feature.
- 2026-10-23: Built `/visit-us` (`app/visit-us/page.tsx`, `components/visit/HoursTable.tsx`). Header "Visit Us" now links to `/visit-us`. Added `brand-rust` (#B9490A) to the theme for the "Closed" label. Build passes; not yet reviewed in a browser or committed.
- 2026-10-23: Merged `feature/visit-us` into `main` and pushed.
- 2026-10-23: Created the `feature/hosting` branch. Added `render.yaml` and documented the setup in `context/features/hosting.md`. Production server tested locally. Next.js 16.4.3 upgrade pending.
- 2026-10-23: Upgraded `next` and `eslint-config-next` to 16.4.3. `npm audit` is clean, fresh build passes, and the production server serves all pages. Not yet committed or deployed.
- 2026-10-23: Merged `feature/hosting` into `main` and pushed. Render service setup (New → Blueprint) is next.
