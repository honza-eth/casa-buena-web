# Handoff

## Bootstrap

The 2026-08-29 visual-improvement phase uses the binding staged process in
`METHODOLOGY.md`.

- The current live release is the preserved production baseline.
- Research is complete: the verified method is reference-led, concept-first
  and gated by Jan before production code.
- `frontend-design` supports craft. `imagegen` may create only bounded raster
  assets or textures; full generated interfaces are prohibited after the second
  set converged on generic AI-infographic language.
- The original Stage 1 thesis was superseded after Jan's correction.
- Original Stage 2 directions A, B and C are rejected in full; no hybrid.
- `REFERENCE_BOARD.md` is re-evaluated around reliable service and wayfinding.
- Corrected Stage 2 is rejected in full in `DESIGN_DIRECTIONS_V2.md`; no hybrid.
- Casa Buena s.r.o. is the legal operator, not the future public brand.
- Current gate: Gate N, public-brand naming and preliminary collision screening.
- `ARTIFACT_RESEARCH.md` records the strongest post-name art-direction anchor:
  a private rear-view-mirror vehicle movement hanger based on real cargo-
  handling practice, with strict controls against fake documents or status.
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

The live key concept remains **European transit dossier meets luxury automotive
editorial**, but Jan has explicitly rejected this framing for the next redesign.
It is a production-baseline description, not a direction to preserve.

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

Produce `BRAND_NAMING.md` with distinct naming territories, preliminary Czech/
English and collision checks, three finalists and one evidence-backed
recommendation. Jan selects or rejects the public name at Gate N. Only then
turn the researched private movement hanger into a hand-authored Gate A concept
surface. Do not change the website implementation or deploy.
