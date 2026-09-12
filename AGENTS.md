# Prototype Instructions

## Current design direction — September 2026

The user requested a refactor using the supplied Baseline specification. Preserve Casto Associados' black-and-green identity and accounting content; adapt the photographic hero, Onest typography, rounded section framing, carousels, spring motion, fullscreen navigation, and consultation modal. This supersedes the initial option-1 mock as the current layout direction.

The new implementation is `src/landing.html`, with inline CSS and vanilla JavaScript. Run `node scripts/assemble-standalone.mjs` after edits to embed local images/fonts into `index.html`. That generated HTML can open directly without a build step. Lenis is an optional CDN enhancement with a native-scroll fallback. Existing React source is retained as the previous version, not mounted by the current HTML.

Do not invent client testimonials, firm statistics, employee identities, or contact details. Keep demonstration forms explicit about not sending data.

The post-hero proof strip follows the user-provided four-column reference and uses `#199962`. Keep its content grounded in the existing page structure rather than introducing unverified performance figures.

The service overview immediately below that strip adapts the supplied bento-grid component to the standalone HTML architecture. It links each visual card to the corresponding expandable service row later on the page.

The service overview uses 9:16 portrait cards in one row. Show all four cards at once on desktop; use the horizontal scroll-snap carousel with previous/next arrows, a live counter, keyboard navigation, and touch swiping on smaller screens.

Use `public/images/logo1.png` as the official brand mark in the header, loader, fullscreen menu, and footer. Inline it through the standalone assembler so the generated page remains portable.

The hero background uses `public/videos/vd01.mp4` as a muted, looping, inline video. Preserve the existing office image as its loading poster, pause playback for reduced-motion preferences, and inline the video through the standalone assembler.

On mobile, keep the hero logo, primary title, supporting copy, and main call-to-action centered. Position the menu control independently at the right edge so it does not shift the logo off center.

The detailed accounting solutions section follows the supplied September 2026 reference: large editorial heading with a green phrase, a compact trust banner with a professional smartphone portrait, and four tall white service cards with green icon medallions and rule-style footers. Preserve the existing expandable details and service-to-contact flow.

The benefits section at `#parceria` follows the supplied September 2026 split-panel reference: an overlapping tablet/dashboard visual above a dark-green editorial panel, paired with three light benefit boards. Use `public/images/casto-dashboard-tablet.png` as its visual and keep benefit copy grounded in organization, clarity, time, and routine rather than unverified tax savings or performance promises.

The FAQ follows the September 2026 screenshot reference: oversized centered title, category pills, rounded white disclosure cards on a warm surface, and a separate contact panel. Use real filtering behavior, retain verified questions, and route the contact action to the existing local consultation dialog without inventing email addresses or employee identities.

The testimonials section follows the supplied September 2026 reference: centered editorial heading with a green brand phrase, compact trust chips, three light testimonial cards, and responsive carousel arrows. Keep every quote, identity, rating, and company detail explicitly marked as pending until the firm supplies approved client material.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Responsive defaults: stable 16px root sizing, page width capped at 1920px, two-row FAQ tabs on phones, and stacked contact panels below tablet widths. Check narrow 320px layouts as well as standard phone, tablet, and desktop sizes when editing sections.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
