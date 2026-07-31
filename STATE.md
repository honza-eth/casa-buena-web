# State

Status: production live at https://casabuena.cz

Current work:

- Single-page public site implemented
- Company facts verified against ARES on 2026-07-29
- Lint, production build and rendered-page tests pass
- Production dependency audit reports zero vulnerabilities
- Public Sites production version 2 is live and response-verified
- <https://casabuena.cz> is the canonical address and serves the complete site
  over HTTPS
- `www.casabuena.cz`, `struhala.cz`, and `www.struhala.cz` return permanent
  `308` redirects to `https://casabuena.cz`, preserving path and query
- All four custom hostnames report active routing and active SSL
- WEDOS zones are active at serial `2026073102` for `casabuena.cz` and
  `2026073101` for `struhala.cz`
- All four WEDOS nameservers and both Cloudflare and Google public resolvers
  return the new Sites addresses
- The existing `struhala.cz` Google MX, verification, `mail`, and legacy `wp`
  records were preserved
- The old GitHub Pages deployment and workflow are disabled

Next action: no domain-migration work remains. Treat a future
`@casabuena.cz` mailbox and the legacy `wp`/email-authentication cleanup as
separate tasks.
