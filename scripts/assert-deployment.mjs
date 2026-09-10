import { readFile } from "node:fs/promises";

const expectedEnvironment = process.argv[2];

if (expectedEnvironment !== "preview" && expectedEnvironment !== "production") {
  throw new Error("Usage: node scripts/assert-deployment.mjs <preview|production>");
}

const [contract, wrangler, packageJson, clientArtifact, serverArtifact] =
  await Promise.all([
    readFile(new URL("../config/deployment-contract.json", import.meta.url), "utf8").then(
      JSON.parse,
    ),
    readFile(new URL("../wrangler.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../package.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(
      new URL("../build/client/deployment-contract.json", import.meta.url),
      "utf8",
    ).then(JSON.parse),
    readFile(
      new URL("../build/server/deployment-contract.json", import.meta.url),
      "utf8",
    ).then(JSON.parse),
  ]);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(wrangler.name === "semanticlab-website", "Wrangler must target the shared Worker.");
assert(wrangler.preview_urls === true, "Cloudflare preview URLs must remain enabled.");
assert(
  packageJson.scripts.build === "node scripts/build-cloudflare.mjs",
  "The shared build command must use the branch-aware selector.",
);

assert(
  contract.preview.analyticsEnabled === false &&
    contract.preview.indexingAllowed === false &&
    contract.preview.features.salesDeck === true &&
    contract.preview.cloudflareCommand === "wrangler versions upload",
  "The preview source contract must disable analytics/indexing, enable the deck and upload a version.",
);

assert(
  contract.production.analyticsEnabled === true &&
    contract.production.indexingAllowed === true &&
    contract.production.features.salesDeck === false &&
    contract.production.cloudflareCommand === "wrangler deploy" &&
    contract.production.canonicalOrigin === "https://semanticlab.ai" &&
    typeof contract.production.googleTagManagerId === "string",
  "The production source contract must retain analytics, indexing, canonical origin and disable the unreleased deck.",
);

for (const [name, artifact] of [
  ["client", clientArtifact],
  ["server", serverArtifact],
]) {
  assert(
    artifact.environment === expectedEnvironment,
    `${name} artifact is ${artifact.environment}, expected ${expectedEnvironment}.`,
  );
  assert(
    artifact.analyticsEnabled === contract[expectedEnvironment].analyticsEnabled,
    `${name} artifact analytics flag does not match the source contract.`,
  );
  assert(
    artifact.indexingAllowed === contract[expectedEnvironment].indexingAllowed,
    `${name} artifact indexing flag does not match the source contract.`,
  );
  assert(
    artifact.features.salesDeck === contract[expectedEnvironment].features.salesDeck,
    `${name} artifact sales-deck flag does not match the source contract.`,
  );
  assert(
    artifact.cloudflareCommand === contract[expectedEnvironment].cloudflareCommand,
    `${name} artifact Cloudflare command does not match the source contract.`,
  );
}

if (expectedEnvironment === "preview") {
  assert(
    clientArtifact.analyticsEnabled === false &&
      clientArtifact.indexingAllowed === false &&
      clientArtifact.googleTagManagerId === null,
    "Preview artifacts must be non-indexable and contain no production analytics identifier.",
  );
} else {
  assert(
    clientArtifact.analyticsEnabled === true &&
      clientArtifact.indexingAllowed === true &&
      clientArtifact.features.salesDeck === false &&
      clientArtifact.canonicalOrigin === "https://semanticlab.ai" &&
      clientArtifact.googleTagManagerId === contract.production.googleTagManagerId,
    "Production artifacts must preserve approved SEO/analytics and keep the deck disabled.",
  );
}

console.log(`${expectedEnvironment} source and flattened deployment artifacts verified.`);
