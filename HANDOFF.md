# Handoff

## Bootstrap

This project uses `/bootstrap` for the website-improvement phase.

- Discovery skipped: Jan supplied the approved objective, constraints and
  success criteria.
- Step 2 completed: `BRIEF.md`, `METHODOLOGY.md` and `JOURNAL.md` govern and
  record the improvement phase.
- Steps 3–4 skipped: this was an approved, bounded single-session redesign.
- Step 5 completed locally: implementation, build, tests and independent audit
  pass. No deployment or push was performed.
- Next gate: Jan's visual and copy approval in a local desktop/mobile browser.

## Current milestone

A premium bilingual Casa Buena redesign is ready as a local candidate:

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

Browser-based screenshots and interaction inspection were not available because
the in-app browser had no backend. Desktop/mobile appearance, keyboard traversal
and reduced-motion behavior are supported by the markup/CSS but remain the one
unverified operator surface.

## Production baseline

Production remains the previously verified Sites version at
<https://casabuena.cz>. The 2026-07-31 hostname migration is complete, legacy
web hostnames still redirect, and email records remain preserved. This local
redesign has not been deployed or pushed.

## Guardrails

- Do not claim proven independent end-to-end importing
- Do not publish fixed prices, timelines, country/model coverage or success
  claims
- Do not identify third parties as committed partners without current evidence
- Keep the standard scope boundary at the agreed European port
- Keep deployment and email/DNS work as separate operator-approved actions

## Next

Jan reviews both local routes visually. If approved, deploy and push only after
a new explicit instruction.
