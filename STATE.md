# State

Updated: 2026-08-29

## Status

The premium bilingual redesign is live at <https://casabuena.cz>. Sites version
3 was deployed on 2026-08-01 from commit `3854dda`.

## Live release

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
- The live custom domain returns the new English page at `/` and the new Czech
  page at `/cs`
- The live language switcher was clicked in the in-app browser and navigated
  from `/` to `/cs`; both pages showed the expected localized headings, scope,
  contact path and company identity with no captured console warnings
- The Sites deployment completed successfully and its deployed source matches
  commit `3854dda`
- Independent truth and technical audits found and cleared wording,
  localization and colour-contrast issues
- Pixel-level screenshot capture failed because the browser target closed, so
  desktop/mobile visual polish, keyboard traversal and reduced-motion behavior
  still require Jan's live review

## Production baseline

- `casabuena.cz` remains the live canonical hostname
- `www.casabuena.cz`, `struhala.cz` and `www.struhala.cz` currently serve the
  same canonical Casa Buena page with `200`; they do not return an HTTP redirect
- The verified 2026-07-31 migration is complete and no migration work remains
- Existing email records and the published `casabuena@struhala.cz` address are
  unchanged

## Active improvement phase

A new visual-improvement phase is active, with the current live release kept as
the production baseline. Jan rejected both Gate A sets: the first sold luxury;
the second replaced luxury with generic AI-infographic language. Casa Buena
s.r.o. is now explicitly the legal operator, not the public brand name.

Current work is Gate N: develop and preliminarily screen a distinct Czech/
English service brand. After Jan selects it, Stage 1 restarts from an authentic
vehicle-movement artifact. `ARTIFACT_RESEARCH.md` identifies a private rear-
view-mirror movement hanger as the strongest anchor. The next concepts are
hand-authored; `imagegen` cannot generate a full interface. Do not change
production website code, assets or deployment before Gate A and Gate B are
subsequently passed.
