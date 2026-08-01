# Methodology

## Content

Start with the evidence boundary, then remove every sentence that does not help
a visitor understand the offer, the operating boundary or the next action.
English and Czech must carry equivalent meaning; neither language is a shortened
or secondary version.

## Design

Commit to one strong visual concept. Use typography, composition, colour and
purposeful motion instead of generic sections, stock imagery or decorative
features without meaning. Keep the recognisable Casa Buena/CB identity.

## Implementation

Share the page structure and content model where practical, while rendering
distinct English and Czech routes with correct document language and metadata.
Prefer semantic HTML, CSS and server-rendered content over client-side state.

## Verification

- Test both routes and their canonical/hreflang metadata
- Test the service boundary, contact path and company identity
- Run lint and the production build/test suite
- Inspect rendered desktop and mobile output, keyboard focus and reduced motion
- Keep deployment as a separate operator-approved action
