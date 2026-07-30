# State

Status: production live at https://struhala.cz

Current work:

- Single-page public site implemented
- Company facts verified against ARES on 2026-07-29
- Lint, production build and rendered-page test pass
- Production dependency audit reports zero vulnerabilities
- Owner-only production deployment is live and response-verified:
  <https://casa-buena-import.parraga336185.chatgpt.site>
- GitHub Pages custom domain is configured as <https://struhala.cz>
- The replacement WEDOS DNS zone is active with serial `2026073002`
- Website records point to GitHub Pages; the live Google MX, verification,
  `mail`, and legacy `wp` records were preserved
- WEDOS completed the registry NSSET change from `SAVANA` to `WEDOS` at
  2026-07-30 07:54:42 CEST
- CZ.NIC's public `.cz` zone delegates to all four WEDOS nameservers
- Cloudflare and Google public resolvers return the GitHub Pages addresses and
  the preserved Google MX record
- GitHub Pages reports the certificate approved for `struhala.cz` and
  `www.struhala.cz`, expiring 2026-10-28
- HTTPS enforcement is enabled
- HTTP redirects to HTTPS; `www` redirects to the root domain
- The real Chrome tab on Jan's Mac rendered the complete Casa Buena page over
  HTTPS with no browser warning
- Tailscale DNS was restored to its original enabled state after clearing the
  final local macOS cache

Next action: leave the old Savana zone available as a rollback reference for 24
hours, then handle obsolete `wp` records and email authentication as a separate
cleanup rather than changing them during this migration.
