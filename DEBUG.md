# Bug: struhala.cz points to a broken website and its DNS zone is not visible

## Symptoms

- `struhala.cz` resolves to `62.109.154.147`.
- HTTP returns `403 Forbidden`.
- HTTPS presents a certificate that does not match `struhala.cz`.
- `casabuena.struhala.cz` has no DNS record.
- The logged-in Webglobe account shows the hosting container
  `struhala.savana-hosting.cz`, but not a manageable `struhala.cz` DNS service.
- The Casa Buena GitHub Pages build exists, but its custom domain is not
  connected.

## Hypotheses

### H1: Registration, DNS and hosting are split, and the web-hosting pointer is stale

- **Evidence for:** CZ.NIC WHOIS names WEDOS as registrar; authoritative
  nameservers are `ns1/ns2/ns3.savana.cz`; the apex A record still points to a
  Webglobe/Savana hosting IP; prior project records say `struhala.cz` was removed
  from multihosting while DNS was preserved.
- **Evidence against:** The exact current Webglobe control surface for the
  preserved zone has not yet been identified.

### H2: The hosting is still active and only its HTTPS certificate is broken

- **Evidence for:** The apex still reaches a responding Webglobe nginx server.
- **Evidence against:** HTTP also returns 403, and the Webglobe account no longer
  lists `struhala.cz` as a hosted domain.

### H3: DNS control has moved to WEDOS, but public nameserver data is stale

- **Evidence for:** WEDOS is the registrar and has a customer account for the
  domain.
- **Evidence against:** All public authoritative delegation and SOA data still
  identify Savana/Webglobe, so WEDOS DNS edits would not currently be live.

### H4: The authoritative DNS zone is attached to a different or legacy
Webglobe/Savana account

- **Evidence for:** The zone remains active on Savana nameservers, while the
  current Webglobe account exposes only a hosting container; the old
  `webcontrol.savana.cz` login is known to have existed.
- **Evidence against:** The exact alternate account or legacy-zone link has not
  yet been found.

## Best candidate: H1, with H4 explaining the missing editor

The observed split cleanly explains the registrar, working email records, stale
website pointer, invalid HTTPS and missing DNS editor without requiring a cache
or certificate-only failure.

## Experiment

Query the authoritative nameservers directly for the apex, web, mail and Casa
Buena records; inspect the live TLS certificate and hosting IP; inspect the
GitHub Pages custom-domain state; and read the prior Webglobe correspondence to
confirm what happened when `struhala.cz` was removed from multihosting.

## Results

- CZ.NIC and the logged-in WEDOS account confirm that WEDOS is the registrar,
  while the domain delegates DNS to `ns1/ns2/ns3.savana.cz`.
- All three Savana nameservers return the same live zone. The apex A and AAAA
  records still point to the former Webglobe hosting server. Google mail and
  verification records remain present.
- Both HTTP and HTTPS reach that server and return `403 Forbidden`. HTTPS serves
  Webglobe's fallback `*.nameserver.sk` certificate, not a certificate for
  `struhala.cz`.
- The 6 July 2026 Gmail thread confirms Webglobe's stated behavior: removing the
  domain from multihosting preserves its DNS records, and the hosting service
  can then be cancelled at expiry.
- The current Webglobe account has no editor for the preserved `struhala.cz`
  zone.
- WEDOS contains a disabled DNS zone for `struhala.cz`, but it is an obsolete
  2023 copy and must not be activated as-is.
- GitHub Pages is deployed and HTTPS-enabled at its project address, but no
  custom domain is configured there yet.

## Diagnosis

H1 is confirmed. H2 and H3 are rejected. H4 explains why the live DNS zone is
not editable through the current Webglobe interface.

Webglobe did exactly what its email described: it removed the website from the
hosting container but preserved the DNS zone. The preserved zone still points
the root domain at the removed website. Consequently nginx returns 403 and
serves its default certificate. This is not a mysterious HTTPS failure and does
not require another support email.

## Recommended fix

Keep WEDOS as registrar and move authoritative DNS management from the legacy
Savana/Webglobe zone to WEDOS:

1. Rebuild the disabled WEDOS zone from the currently live records so Google
   mail and verification records are preserved.
2. Replace only the obsolete website records with GitHub Pages records and set
   `www` to `honza-eth.github.io`.
3. Configure `struhala.cz` as the GitHub Pages custom domain.
4. Switch the domain from the SAVANA NSSET to WEDOS nameservers.
5. Verify DNS on every authoritative nameserver, inbound and outbound email,
   the root website, `www`, certificate issuance, and HTTPS enforcement.

Use the root domain for Casa Buena. This matches the requested public address
and fixes the currently broken `struhala.cz` website and HTTPS in one migration.
Adding only `casabuena.struhala.cz` would leave the broken root domain in place.

## WEDOS staging note

The WEDOS records page reloads asynchronously after every saved record.
Two batch attempts stopped after 2 and 7 total records respectively because the
next modal was requested before the refreshed page exposed its Add Record
control.

**Hypothesis:** the saved records are valid; only the automation pacing is
wrong.

**Evidence:** every form that returned `submitted` appears in the readback, no
unexpected records were created, and the live Savana zone remains untouched.

**Next experiment:** gate each record on two observed UI states: wait for the
Add Record control, open it, wait for the modal form, submit once, then wait for
the resulting record count to increase before continuing. Stop immediately on
any missing or duplicate readback.

## Migration execution

- The guarded WEDOS save completed with 18 expected records and no duplicates.
- WEDOS activated the zone and published serial `2026073002`.
- All four WEDOS nameservers return identical A, AAAA, MX, TXT, `www`, `mail`,
  and `wp` answers.
- GitHub Pages accepted `struhala.cz` as the custom domain and serves the
  deployed HTML when addressed directly with that host header.
- WEDOS completed the NSSET-change request at 2026-07-30 07:54:42 CEST.
- CZ.NIC WHOIS now shows NSSET `WEDOS`.
- The `.cz` authoritative nameservers still publish the old Savana delegation
  while awaiting the next zone generation. CZ.NIC operating documentation says
  the `.cz` zone is generated every 30 minutes.

Do not claim the migration complete until the public `.cz` delegation changes,
normal recursive DNS returns the GitHub records and GitHub serves a certificate
covering `struhala.cz`.

The `.cz` delegation subsequently published the four WEDOS nameservers.
Cloudflare and Google public resolvers return the correct GitHub A/AAAA records,
the preserved Google MX and both verification TXT records. GitHub's origin
serves the deployed site for the custom host. The remaining incomplete check is
certificate issuance; the current fallback `*.github.io` certificate does not
cover `struhala.cz`. This Mac also retains the former Savana AAAA answer until
its 1800-second TTL expires.

## Resolved

GitHub issued and approved a Let's Encrypt certificate for both `struhala.cz`
and `www.struhala.cz`, expiring 2026-10-28. HTTPS enforcement is enabled. HTTP
redirects to HTTPS, `www` redirects to the root, the HTML and CSS return 200,
and the actual Chrome tab on Jan's Mac rendered the complete Casa Buena page
without a browser warning.

The final local false negative was a two-layer cache: Tailscale's DNS forwarder
and then macOS `mDNSResponder`. Tailscale's cache expired normally. A reversible
`accept-dns` off/on toggle made macOS refresh its host cache, after which both
IPv4 and IPv6 resolved only to GitHub. Tailscale `CorpDNS` was confirmed restored
to `true`.
