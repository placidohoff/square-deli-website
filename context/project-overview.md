# PROJECT SPECIFICATIONS


We are building a website for a small neighborhood deli. Build a complete, production-ready site and deliver all source files.

## Business Details
- **Name:** Square Deli
- **Location:** 334 Broad St, Providence, RI 02907
- **Hours:** 10:30am - 9:00pm, closed Sunday.
- **Phone:** (401) 251-0121
- **Known for (Highlight):** Chopped Cheese, Wings, NY Style Pizza
- **Audience:** Local, neighborhood people and families.
- **Tone:** warm, old-school, family-run, not trendy or corporate

## Pages
-  **Home:** hero with a strong tagline, 3 featured menu items in a carousel, hours, location, and a clear "View Menu" and "Call to Order" button.
    - Mockup References: 
        /context/screenshots/homepage/home-top.png
        /context/screenshots/homepage/home-middle.png
        /context/screenshots/homepage/home-bottom.png
-  **Menu/Services:**
-  **About:** short family story, placeholder for a photo
-  **Contact:** embedded map, address, phone, hours, contact form

## Design
- - **Color Palette:** Warm orange on warm neutrals. Primary/accent orange #F2600C (hover #D9540A); menu item text in burnt orange #CE5D2A; brand title in mauve #A96B92; thin coral dividers #F67065. Neutrals: near-black #1C1917 for dark surfaces and headings, #292524 for dark hover, #78716C for muted text, #E7E5E4 for borders, cream #FAF7F2 for page backgrounds, white for cards. Light orange tint #FDECD8 with #B9490A text for price badges. Green #28A745 for save/confirm, red #DC3545 for delete/cancel.
- **Typography:** Anton (Google Fonts) for the brand title only, in #A96B92. Everything else uses the system UI stack (system-ui, "Segoe UI", Roboto, Arial, sans-serif) at an 18px base with 1.5 line-height. Hierarchy comes from size and bold weight: section titles ~2.2rem bold, item names and prices ~24px bold, descriptions bold italic in muted grey. No uppercase or letter-spacing.
- **Note:** Use placeholder images with descriptive alt text; mark where real photos would go.
- **Mobile First:** Most traffic will be on people on phones looking for hours and the menu.
- **Sticky header** with tap-to-call button on mobile.

## Technical Requirements
- Latest Next.js. Tailwind CSS.
- Semantic HTML and WCAG 2.1 AA accessibility (contrast, labels, keyboard nav)
- Forms validate on the client and show clear error messages; for now, submissions can log to the console with a TODO for a real backend
- Basic SEO: unique titles and meta descriptions per page, LocalBusiness schema.org JSON-LD with address and hours.
- Fast: optimized images, no unused CSS, Lighthouse score 90+ on mobile

