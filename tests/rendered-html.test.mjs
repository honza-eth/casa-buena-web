import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("server-renders the Casa Buena landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Casa Buena \| European Vehicle Import Coordination<\/title>/i,
  );
  assert.match(html, /From European port/);
  assert.match(html, /casabuena@struhala\.cz/);
  assert.match(html, /IČO 23325151/);
  assert.match(html, /Our standard scope begins at the agreed European port/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/);
});
