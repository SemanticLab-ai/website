import assert from "node:assert/strict";
import test from "node:test";
import { readLimitedRequestBody } from "../app/lib/read-limited-request-body.ts";

function post(body) {
  return new Request("https://semanticlab.ai/services", {
    method: "POST",
    body,
    duplex: "half",
  });
}

test("accepts a body at the byte limit", async () => {
  const body = "é".repeat(8_192);
  assert.equal(await readLimitedRequestBody(post(body), 16_384), body);
});

test("cancels a headerless stream as soon as it exceeds the limit", async () => {
  let pulls = 0;
  let cancelled = false;
  const stream = new ReadableStream({
    pull(controller) {
      pulls += 1;
      controller.enqueue(new Uint8Array(8_192));
    },
    cancel() {
      cancelled = true;
    },
  }, { highWaterMark: 0 });

  assert.equal(await readLimitedRequestBody(post(stream), 16_384), null);
  assert.equal(pulls, 3);
  assert.equal(cancelled, true);
});
