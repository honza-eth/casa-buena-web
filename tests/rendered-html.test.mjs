import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function loadWorker(label) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${label}-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

async function render(pathname, label) {
  const worker = await loadWorker(label);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function assertAlternate(html, language, href) {
  const links = html.match(/<link\b[^>]*>/gi) ?? [];
  assert.ok(
    links.some(
      (link) =>
        /rel="alternate"/i.test(link) &&
        new RegExp(`hreflang="${language}"`, "i").test(link) &&
        link.includes(`href="${href}"`),
    ),
    `missing ${language} alternate ${href}`,
  );
}

function getVisibleMarkup(html) {
  const bodyStart = html.indexOf("<body");
  const hydrationStart = html.indexOf('<script id="_R_">', bodyStart);
  return html.slice(bodyStart, hydrationStart);
}

function assertSharedTruthAndIdentity(html) {
  const visibleMarkup = getVisibleMarkup(html);

  assert.match(visibleMarkup, /href="mailto:casabuena@struhala\.cz"/);
  assert.match(visibleMarkup, /Casa buena s\.r\.o\./);
  assert.match(visibleMarkup, /IČO 23325151/);
  assert.doesNotMatch(visibleMarkup, /\b(?:EUR|USD|CZK)\b|€|\$/);
  assert.doesNotMatch(visibleMarkup, /Casa Buena buys, imports and resells/i);
  assert.doesNotMatch(visibleMarkup, /proven (?:independent )?end-to-end/i);
  assert.doesNotMatch(visibleMarkup, /our partners|naši partneři/i);
  assert.doesNotMatch(visibleMarkup, /Your site is taking shape|react-loading-skeleton/);
}

test("server-renders the complete English landing page", async () => {
  const response = await render("/", "english");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="en"/i);
  assert.match(
    html,
    /<title>Casa Buena \| European Vehicle Import Coordination<\/title>/i,
  );
  assert.match(html, /From port\./);
  assert.match(html, /Our scope starts at the agreed EU port/);
  assert.match(html, /ocean-carrier booking and ocean freight stay with the exporter/);
  assert.match(html, /Route and responsibility are confirmed per vehicle/);
  assert.match(html, /One coordinated route\./);
  assert.match(html, /PORT \/ ROAD/);
  assert.match(html, /Czech Republic/);
  assert.match(html, /The European buyer normally remains the importer/);
  assert.match(html, /its commercial and regulatory structure is reviewed independently/);
  assert.match(html, /href="\/cs"/);
  assert.match(html, /href="\/" hrefLang="en" lang="en" aria-current="page"/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/casabuena\.cz\/?"/i,
  );
  assertAlternate(html, "en", "https://casabuena.cz/");
  assertAlternate(html, "cs", "https://casabuena.cz/cs");
  assertAlternate(html, "x-default", "https://casabuena.cz/");
  assert.match(html, /<meta name="description" content="European-side coordination/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
  assert.match(html, /property="og:image" content="https:\/\/casabuena\.cz\/og\.png"/i);
  assertSharedTruthAndIdentity(html);
});

test("server-renders the complete Czech landing page", async () => {
  const response = await render("/cs", "czech");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="cs"/i);
  assert.match(
    html,
    /<title>Casa Buena \| Koordinace dovozu vozidel v Evropě<\/title>/i,
  );
  assert.match(html, /Z přístavu\./);
  assert.match(html, /Náš rozsah začíná v dohodnutém evropském přístavu/);
  assert.match(html, /rezervaci námořního dopravce a námořní přepravu zajišťuje exportér/);
  assert.match(html, /Trasu a odpovědnosti potvrzujeme pro každé vozidlo zvlášť/);
  assert.match(html, /Jedna koordinovaná cesta\./);
  assert.match(html, /PŘÍSTAV \/ SILNICE/);
  assert.match(html, /Česká republika/);
  assert.doesNotMatch(getVisibleMarkup(html), /PORT \/ ROAD|Czech Republic/);
  assert.match(html, /Evropský kupující zpravidla zůstává dovozcem/);
  assert.match(html, /obchodní a regulatorní strukturu posoudíme samostatně/);
  assert.match(html, /href="\/"/);
  assert.match(html, /href="\/cs" hrefLang="cs" lang="cs" aria-current="page"/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/casabuena\.cz\/cs"/i,
  );
  assertAlternate(html, "en", "https://casabuena.cz/");
  assertAlternate(html, "cs", "https://casabuena.cz/cs");
  assertAlternate(html, "x-default", "https://casabuena.cz/");
  assert.match(html, /<meta name="description" content="Koordinace evropské části/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
  assert.match(html, /property="og:image" content="https:\/\/casabuena\.cz\/og\.png"/i);
  assertSharedTruthAndIdentity(html);
});

test("includes the production social preview asset", async () => {
  const image = await readFile(new URL("../public/og.png", import.meta.url));
  assert.deepEqual([...image.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
});

test("redirects legacy and www hosts to the canonical domain", async () => {
  const worker = await loadWorker("redirects");

  for (const source of [
    "https://struhala.cz/cs?vin=test",
    "https://www.struhala.cz/cs?vin=test",
    "https://www.casabuena.cz/cs?vin=test",
  ]) {
    const response = await worker.fetch(
      new Request(source, { redirect: "manual" }),
      {
        ASSETS: {
          fetch: async () => new Response("Not found", { status: 404 }),
        },
      },
      {
        waitUntil() {},
        passThroughOnException() {},
      },
    );

    assert.equal(response.status, 308);
    assert.equal(
      response.headers.get("location"),
      "https://casabuena.cz/cs?vin=test",
    );
  }
});
