# State

Updated: 2026-08-01

## Status

Production remains live and unchanged at <https://casabuena.cz>. A new premium
bilingual redesign is implemented and verified locally but has not been pushed
or deployed.

## Local candidate

- Complete English version at `/` and complete Czech version at `/cs`
- Clear EN/CZ switcher with correct current-language state
- Radically reduced, semantically equivalent copy in both languages
- Agreed-EU-port boundary and exporter exclusions visible in the first viewport
- Coordination offer separated from any case-by-case Casa buy/resell transaction
- Direct email remains the primary conversion
- New editorial transit-dossier visual system with retained CB identity
- Responsive layouts, semantic structure, keyboard focus and reduced-motion CSS
- Language-specific titles, descriptions, document language, canonical URLs,
  hreflang alternates and social metadata
- Bespoke 1200 × 630 social preview at `public/og.png`

## Verification

- `npm run lint` passes
- `npm test` passes, including the production build and four rendered-output
  tests covering both languages, truth boundaries, metadata, social asset and
  legacy redirects
- The production server returns `200` for `/`, `/cs` and `/og.png`
- Independent truth and technical audits found and cleared wording,
  localization and colour-contrast issues
- Browser-based desktop/mobile visual inspection was not available in this
  session; runtime appearance, keyboard traversal and reduced-motion behavior
  still require operator review

## Production baseline

- `casabuena.cz` remains the live canonical hostname
- `www.casabuena.cz`, `struhala.cz` and `www.struhala.cz` remain permanent
  redirects to the canonical hostname
- The verified 2026-07-31 migration is complete and no migration work remains
- Existing email records and the published `casabuena@struhala.cz` address are
  unchanged

## Next action

Jan reviews the local English and Czech pages on desktop and mobile. If the
visual direction and copy are approved, deployment and push require a separate
explicit instruction.
