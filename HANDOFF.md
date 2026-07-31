# Handoff

## Current milestone

Casa Buena's English-first company landing page is public at
<https://casabuena.cz>.

Latest verification completed on 2026-07-31:

- `npm run lint` passes
- `npm test` passes
- the canonical page, redirects, DNS, TLS and preserved mail records were
  response-verified
- Sites production version 2 is public and live

## Public-domain migration

The production domain moved from `struhala.cz` to `casabuena.cz` on
2026-07-31:

- `casabuena.cz` serves the actual Casa Buena website and is the canonical URL
- `www.casabuena.cz`, `struhala.cz`, and `www.struhala.cz` permanently redirect
  to `https://casabuena.cz`, preserving path and query
- all four custom domains report active routing and SSL
- WEDOS zone serials are `2026073102` for `casabuena.cz` and `2026073101` for
  `struhala.cz`
- all four authoritative WEDOS nameservers agree
- Cloudflare and Google public resolvers return the Sites addresses
- the `struhala.cz` Google MX, root verification TXT, `mail`, and legacy `wp`
  records remain unchanged
- GitHub Pages was disabled after the Sites cutover
- deployment source is commit `2c396149bcc99c58b5cb225800d0dde3c7ddf39a`
  and Sites production version 2

## Guardrails

- Do not claim proven independent end-to-end importing
- Do not publish fixed prices, lead times or country coverage
- Do not identify third-party partners as committed without current evidence
- Keep the standard scope boundary at the agreed European port

## Next

No migration action remains. If Casa Buena needs an address such as
`info@casabuena.cz`, set up that mailbox separately before changing the
currently published `casabuena@struhala.cz` contact address. Treat removal of
obsolete `wp` records and SPF/DKIM/DMARC work as a separate DNS cleanup.
