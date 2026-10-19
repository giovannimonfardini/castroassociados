# Prototype Instructions

## Current design direction — September 2026

The user requested a refactor using the supplied Baseline specification. Preserve Casto Associados' black-and-green identity and accounting content; adapt the photographic hero, Onest typography, rounded section framing, carousels, spring motion, fullscreen navigation, and consultation modal. This supersedes the initial option-1 mock as the current layout direction.

The new implementation is `src/landing.html`, with inline CSS and vanilla JavaScript. `npm run assemble` (run automatically before `dev` and `build`) replaces the `__TOKEN__` asset placeholders and writes two files: `index.html`, which links assets from `public/` and is the Vite/production entry, and `standalone.html` (gitignored), which inlines everything as base64 and opens directly without a server. Never ship the inlined version to production. Lenis is an optional CDN enhancement with a native-scroll fallback. The project no longer uses React.

Do not invent client testimonials, firm statistics, employee identities, or contact details. Keep demonstration forms explicit about not sending data.

Directly below the hero, the `#apresentacao` section adapts the October 2026 "Testimonial01Blaze" reference: a centered host pill (brand logo avatar, "Castro Associados", call button that opens the local consultation dialog), a short firm-voice quote, and two full-width marquee rows of rounded service chips scrolling in opposite directions (pause on hover and for reduced motion). The host is the firm, not an invented employee. Chip images are local 128px thumbnails in `public/images/chips/` (cropped from card01–04, consultation and office), wired through `__CHIP_*__` assembler tokens — never hotlinked stock photos.

The post-hero proof strip follows the user-provided four-column reference and uses `#199962`. It was made about 25% more compact in October 2026, and its values count up from zero (ease-out, ~1.4s, staggered by `data-delay`) the first time they scroll into view; the final text stays in `data-target`/`aria-label`, and reduced-motion users see the final values immediately. Keep its content grounded in the existing page structure rather than introducing unverified performance figures.

The service overview immediately below that strip adapts the supplied bento-grid component to the standalone HTML architecture. It links each visual card to the corresponding expandable service row later on the page.

The service overview uses 9:16 portrait cards in one row. Show all four cards at once on desktop; use the horizontal scroll-snap carousel with previous/next arrows, a live counter, keyboard navigation, and touch swiping on smaller screens.

Use `public/images/logo1.png` (white/green) as the official brand mark on dark surfaces: loader and fullscreen menu. On light surfaces (hero nav, footer) use `public/images/logo-dark.png` (`__LOGO_DARK__`), a recolor of the same mark with the white parts in `#101512`. Inline both through the standalone assembler so the generated page remains portable.

The hero (`.lead`, October 2026) adapts the "OnlineAiLearningPlatformWebsite" reference: white background with a 3rem line grid and floating translucent squares, a white pill nav (dark logo left, uppercase links center, green "Vamos conversar" pill with a dark arrow circle right; links collapse into the menu button below 1024px), a centered proof line with chip avatars, a two-line headline with "crescer." in `#199962`, a green CTA pill, floating white badges and chip images on wide screens only, and a single full-width bottom card (the user removed the two side photo cards). That card plays `public/videos/vd01.mp4` (class `hero-video`, office poster, paused for reduced motion), centered at max 64rem wide and 24rem tall, with no overlay button and no click action. Badges and cards use qualitative copy, never invented numbers or people. The reference's lime accent is replaced by the brand green.

The footer (`.site-footer#contato`, October 2026) adapts the "Footer01Pixa" reference: light `#f6f8f6` rounded panel, four columns (dark logo + firm description, Soluções buttons that open service rows, A Castro anchor links with the current item in green, and a "Vamos conversar?" email pill whose "Começar" button opens the local consultation dialog with the email prefilled), then a bottom bar with ©, Privacidade and Voltar ao topo. Social icons and the language selector were left out until the firm supplies real profiles; never add placeholder social links or a newsletter that implies sending data.

The detailed accounting solutions section follows the supplied September 2026 reference: large editorial heading with a green phrase, a compact trust banner with a professional smartphone portrait, and four tall white service cards with green icon medallions and rule-style footers. Preserve the existing expandable details and service-to-contact flow. Its background is the same white 3rem CSS line grid as the hero (no raster image).

The benefits section at `#parceria` follows the supplied September 2026 split-panel reference: an overlapping tablet/dashboard visual above a dark-green editorial panel, paired with three light benefit boards. Use `public/images/mockup.png` (the `__DASHBOARD_TABLET__` token) as its visual and keep benefit copy grounded in organization, clarity, time, and routine rather than unverified tax savings or performance promises. The section background is the hero's white 3rem CSS line grid (no raster image).

The FAQ follows the September 2026 screenshot reference: oversized centered title, category pills, rounded white disclosure cards on a warm surface, and a separate contact panel. Use real filtering behavior, retain verified questions, and route the contact action to the existing local consultation dialog without inventing email addresses or employee identities.

The testimonials section (`.reviews#depoimentos`, October 2026) adapts the "Testimonial02Blaze" reference: a spinning sparkle tag + "Depoimentos" pill, a left-aligned headline with "sobre a Castro." in green and a short right-aligned note, then three equal 35rem columns — a light panel ("Relatos reais" publication note, three icon facts, contact CTA), a feature photo (consultation image) with an overlaid quote, and a vertical auto-scrolling marquee of review cards that pauses on hover/focus. The reference's rating, review counts, numeric stats, star ratings, and avatar photos are intentionally omitted. Keep every quote, identity, rating, and company detail explicitly marked as pending until the firm supplies approved client material.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Responsive defaults: stable 16px root sizing, page width capped at 1920px, two-row FAQ tabs on phones, and stacked contact panels below tablet widths. Check narrow 320px layouts as well as standard phone, tablet, and desktop sizes when editing sections.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
