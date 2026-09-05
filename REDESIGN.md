# Qlavo: design and implementation notes

## Identity
Qlavo is a GEO agency. White-label delivery is a service for agency partners, not a separate company identity. The visual identity is black and white, with the original Q monogram and Qlavo wordmark.

## Visual system
- Background `#08090a`; surfaces `#101214` and `#171a1d`.
- Primary type `#f1f0eb`; secondary type `#a5a8ad`; rules `#2a2d31`.
- Inter for body text; Space Grotesk for display text. Fonts are self-hosted WOFF2 with swap fallbacks.
- Typography, numbered editorial rows and restrained Q imagery carry the design. Avoid fabricated dashboards, stock client logos, glossy effects and custom cursors.
- Shared shell and tokens: `public/index.css`. Commercial layouts: `pages/Commercial.css`. Agency layouts: `pages/Partners.css`. Resource hub: `pages/Editorial.css`.
- Content must remain readable with JavaScript disabled and reduced motion enabled. Use visible keyboard focus, native disclosure controls and adequate touch targets.

## Content and booking
- Hero: “Be the brand in the answer.” Explain generative engine optimization in plain language rather than assuming familiarity.
- Services and pricing describe agreed deliverables, scope and review—not guaranteed citations, leads or rankings.
- Sample deliverables are explicitly illustrative, never presented as client evidence.
- Booking uses `https://calendly.com/anshnb07/30min`. The iframe requests a light neutral theme and applies an iframe-only grayscale inversion, since Calendly can ignore dark customization on free plans. Forced-color mode disables the filter. Keep the exact direct booking link outside the frame.

## Rendering and speed
- Tailwind is compiled with PostCSS. Do not restore the browser-side Tailwind compiler or CDN import map.
- The homepage is eager-loaded; other pages use route chunks. Preload the initial route before hydration and preserve anchor behavior during navigation.
- All marketing URLs are prerendered. Route registration, the prerender list, sitemap and Vercel slash/no-slash rewrites must agree.
- React 19 metadata can arrive in the rendered markup rather than Helmet context. `scripts/html-shell.mjs` moves only metadata spans into the actual document head, preserving hydration markers and JSON-LD.

## Quality checks
Run `node --test --test-concurrency=1 tests/*.mjs`, `npx tsc --noEmit`, `npm run build`, then `PRERENDER_VERIFY_DIST=1 node --test tests/prerender-head.test.mjs` and `git diff --check`.

Check every generated route against `dist/prerender-report.json`, including raw-head metadata, JSON-LD, internal links and responsive layout. Inspect screenshots and exercise keyboard navigation and the real Calendly interface without creating a booking. Vite preview can return homepage HTML for extensionless URLs; use trailing-slash URLs or a static server matching Vercel's exact rewrites before diagnosing hydration errors.
