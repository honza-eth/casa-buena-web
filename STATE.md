# State

Status: public DNS cutover complete; HTTPS certificate pending

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
- GitHub serves the deployed site for the `struhala.cz` host header
- GitHub certificate issuance and local expiry of the old cached IPv6 record
  are still pending

Next action: wait for GitHub's certificate, enforce HTTPS, then verify root and
`www` through normal public resolution and record the final live result.
