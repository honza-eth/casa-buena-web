# Handoff

## Current milestone

Casa Buena's English-first company landing page has been implemented around the
verified operating model from `/Users/jan/Projects/import-service`.

Verification completed on 2026-07-29:

- `npm run lint` passes
- `npm test` passes
- production dependency audit reports zero vulnerabilities
- owner-only production deployment succeeded and its rendered content was
  response-verified

Production URL:
<https://casa-buena-import.parraga336185.chatgpt.site>

## Public-domain migration

Migration to <https://struhala.cz> began on 2026-07-30:

- The GitHub Pages custom domain is `struhala.cz`
- GitHub's origin serves the deployed site for that hostname
- The active WEDOS DNS zone has serial `2026073002`
- Four GitHub Pages A records and four AAAA records are present
- `www` points to `honza-eth.github.io`
- The existing Google MX, root verification TXT, `mail`, and `wp` records were
  copied from all three agreeing Savana nameservers
- All four WEDOS nameservers return the same replacement zone
- WEDOS completed the registry NSSET change from `SAVANA` to `WEDOS` at
  2026-07-30 07:54:42 CEST
- CZ.NIC's public `.cz` zone delegates to all four WEDOS nameservers
- Cloudflare and Google resolvers return the GitHub A/AAAA records and the
  preserved Google MX record
- GitHub Pages reports the certificate approved for `struhala.cz` and
  `www.struhala.cz`, expiring 2026-10-28
- HTTPS enforcement is enabled
- HTTP redirects to HTTPS and `www` redirects to the root domain
- A normal `curl` request through the Mac's system resolver returns GitHub's
  HTTPS site after local cache expiry
- The actual Chrome tab on Jan's Mac rendered the complete Casa Buena landing
  page at <https://struhala.cz> with no browser warning
- Tailscale DNS was briefly toggled off and back on to make macOS discard its
  stale Webglobe host cache; `CorpDNS` is restored to `true`

The rollback reference is Savana zone serial `2026070603`. Do not reactivate
the obsolete 2023 WEDOS record set; it was replaced before the NSSET change.

## Guardrails

- Do not claim proven independent end-to-end importing
- Do not publish fixed prices, lead times or country coverage
- Do not identify third-party partners as committed without current evidence
- Keep the standard scope boundary at the agreed European port

## Next

Keep the Savana zone as a rollback reference for 24 hours. Treat removal of the
obsolete `wp` records and addition of SPF/DKIM/DMARC as a separate DNS cleanup,
not part of this completed migration.
