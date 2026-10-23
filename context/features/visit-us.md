# Visit Us Page
## Goals
Create the visit-us page. Mockup references below:
    Mockup References:
        context/screenshots/visit-us/visit-top.png
        context/screenshots/visit-us/visit-bottom.png

## Implementation
Branch: `feature/visit-us`

### Page sections
The page is at `/visit-us` and has three sections, top to bottom:

1. **Find us**
   - Eyebrow "Find us" with a short coral line in front.
   - Headline "Come by / for a bite." (second line in orange) and a short intro line.
   - Orange **Call to order** button that dials the deli.
   - Google Maps embed of 334 Broad St on the right (stacks under the text on mobile).
2. **Right where you need us**
   - Separated from the hero by a thin divider.
   - Left side: headline, intro text, the address, and a black **Get directions** button.
   - Right side: the weekly hours table.
3. **Good to know**
   - Light tan band with an orange icon circle.
   - Headline "Bring your appetite. / We'll handle the rest." and a short paragraph.

All three sections stack into a single column below the `lg` breakpoint.

### Files
| File | Change |
| --- | --- |
| `app/visit-us/page.tsx` | New. The page, its metadata, and all three sections. Server component. |
| `components/visit/HoursTable.tsx` | New. Monday–Sunday hours table. Server component. |
| `components/layout/navLinks.ts` | "Visit Us" now links to `/visit-us` instead of the `/#visit` section on the home page. Applies to both the desktop and mobile menus. |
| `app/globals.css` | Added `--color-brand-rust: #b9490a` to the theme for the "Closed" label. |

### How it works
**Metadata**
- Title: `Visit Us | Square Deli`.
- The description mentions the address, the hours, directions and calling to order.

**Map**
- The map is an `<iframe>` pointed at a Google Maps embed URL for the address. It needs no API key.
- It uses `loading="lazy"` so it doesn't slow down the first paint, and it has a descriptive `title` for screen readers.
- The embed URL is kept in the `MAP_EMBED_URL` constant at the top of the page file.

**Get directions**
- The button links to Google Maps directions with the deli as the destination (`DIRECTIONS_URL` constant).
- On a phone, this usually opens the Maps app.
- It opens in a new tab with `rel="noopener noreferrer"`, and includes screen-reader text saying so.

**Call to order**
- Uses `phoneHref` from `navLinks.ts`, so the number is defined in one place for the header, mobile menu and this page.

**Hours table** (`HoursTable.tsx`)
- Hours live in the `WEEKLY_HOURS` array, one entry per day.
- A day with `hours: null` shows "Closed" in rust. Every other day shows its hours in bold.
- It's built as a `<dl>` (day = `<dt>`, hours = `<dd>`), so screen readers read each day with its hours.
- To change hours, edit `WEEKLY_HOURS`. The home page has its own summary of hours in `app/page.tsx`, so update both.

### Differences from the mockup
- **Hours:** the mockup shows Friday and Saturday until 10:00pm. The project overview and the home page say 10:30am–9:00pm every day except Sunday, so the page follows the overview.
- **Map:** the mockup shows a drawn map. The project overview asks for an embedded map, so the page uses a real Google Maps embed.
- **"Closed" color:** the mockup's coral (#F67065) fails WCAG AA contrast on the cream background. The page uses rust #B9490A from the project palette instead.
- **Icons:** drawn as inline SVGs, since the project has no icon library.

### Accessibility
- One `<h1>` ("Come by for a bite."), with `<h2>`s for "Right where you need us", "Hours" and "Good to know".
- The address uses an `<address>` element.
- Decorative icons and the coral line are `aria-hidden`.
- The map `<iframe>` has a descriptive `title`.

### Testing
1. Run `npm run build` and confirm it passes and lists `/visit-us`.
2. Run `npm run dev` and open `/visit-us`.
3. Check that the map loads and shows 334 Broad St.
4. Check that **Get directions** opens Google Maps directions in a new tab.
5. Check that **Call to order** starts a call to (401) 251-0121 (on a phone).
6. Check that the header's "Visit Us" link, desktop and mobile, goes to `/visit-us`.
7. Narrow the window below 1024px and check that the sections stack cleanly.
