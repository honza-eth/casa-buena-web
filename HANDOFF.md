# Handoff

## Bootstrap

The 2026-08-29 visual-improvement phase uses the binding staged process in
`METHODOLOGY.md`.

- The current live release is the preserved production baseline.
- Research is complete: the verified method is reference-led, concept-first
  and gated by Jan before production code.
- `frontend-design` supports craft and `imagegen` supports concept images and
  original raster assets; neither may override the approved direction.
- Stage 1 is complete in `REFERENCE_BOARD.md`.
- Current stage: Stage 2, materially different desktop image concepts.
- No website code, generated production asset or deployment may change before
  Gate A and Gate B are passed.

## Current milestone

A premium bilingual Casa Buena redesign is live in production:

- English at `/`; Czech at `/cs`
- visible EN/CZ switcher
- concise equivalent offer and service boundary in both languages
- direct email conversion
- responsive editorial transit-dossier visual system with retained CB identity
- language-specific document language, canonical/hreflang and social metadata
- bespoke social preview asset

The key concept is **European transit dossier meets luxury automotive
editorial**: warm paper, matte black, international orange, precision-grid
details, oversized route typography and a memorable EU→CZ graphic spine.

## Verification completed on 2026-08-01

- `npm run lint` passes
- `npm test` passes: static production build plus 4/4 tests
- `/`, `/cs` and `/og.png` return `200` from the local production server
- English and Czech output have correct `lang`, canonical and alternate links
- direct mail, identity, scope, exclusions, per-vehicle confirmation and the
  separate buy/resell assessment are rendered and test-covered
- the social image is verified as a 1200 × 630 PNG
- independent audits cleared an implied-control phrase, incomplete Czech
  localization and low-contrast accent states
- Sites version 3 deployed successfully from commit `3854dda`
- `https://casabuena.cz/` served the new English page and the live language
  switcher navigated to the new Czech page at `/cs`
- both live routes exposed the expected localized content, direct email path and
  company identity with no captured console warnings

The live interaction check succeeded, but screenshot capture failed after the
browser target closed. The new phase supersedes the old unstructured review:
fixed-viewport reference-versus-build comparisons are now mandatory after the
new direction is approved and implemented.

## Production baseline

Production is the bilingual redesign at <https://casabuena.cz>. The 2026-07-31
hostname migration and email records remain preserved. Direct HTTP checks on
2026-08-01 showed `www.casabuena.cz`, `struhala.cz` and `www.struhala.cz` serving
the same canonical page with `200` rather than returning an HTTP redirect.

## Guardrails

- Do not claim proven independent end-to-end importing
- Do not publish fixed prices, timelines, country/model coverage or success
  claims
- Do not identify third parties as committed partners without current evidence
- Keep the standard scope boundary at the agreed European port
- Keep deployment and email/DNS work as separate operator-approved actions

## Next

Generate three materially different high-fidelity desktop concepts from the
cinematic, editorial and technical lanes defined in `REFERENCE_BOARD.md`. Stop
at Gate A for Jan's selection. Do not change the website implementation or
deploy anything during this work.
