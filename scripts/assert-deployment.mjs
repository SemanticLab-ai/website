import { readFile } from "node:fs/promises";

const expectedEnvironment = process.argv[2];

if (expectedEnvironment !== "preview" && expectedEnvironment !== "production") {
  throw new Error(
    "Usage: node scripts/assert-deployment.mjs <preview|production>",
  );
}

const [contract, wrangler, packageJson, clientArtifact, serverArtifact] =
  await Promise.all([
    readFile(
      new URL("../config/deployment-contract.json", import.meta.url),
      "utf8",
    ).then(JSON.parse),
    readFile(new URL("../wrangler.json", import.meta.url), "utf8").then(
      JSON.parse,
    ),
    readFile(new URL("../package.json", import.meta.url), "utf8").then(
      JSON.parse,
    ),
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

assert(
  wrangler.name === "semanticlab-website",
  "Wrangler must target the shared Worker.",
);
assert(
  wrangler.preview_urls === true,
  "Cloudflare preview URLs must remain enabled.",
);
assert(
  packageJson.scripts.build === "node scripts/build-cloudflare.mjs",
  "The shared build command must use the branch-aware selector.",
);

assert(
  contract.preview.analyticsEnabled === false &&
    contract.preview.indexingAllowed === false &&
    contract.preview.features.galaxyMotion === true &&
    contract.preview.cloudflareCommand === "wrangler versions upload",
  "The preview source contract must disable analytics/indexing, enable the variation and upload a version.",
);

assert(
  contract.production.analyticsEnabled === true &&
    contract.production.indexingAllowed === true &&
    contract.production.features.galaxyMotion === false &&
    contract.production.cloudflareCommand === "wrangler deploy" &&
    contract.production.canonicalOrigin === "https://semanticlab.ai" &&
    typeof contract.production.googleTagManagerId === "string",
  "The production source contract must retain analytics, indexing, canonical origin and disable the unreleased variation.",
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
    artifact.analyticsEnabled ===
      contract[expectedEnvironment].analyticsEnabled,
    `${name} artifact analytics flag does not match the source contract.`,
  );
  assert(
    artifact.indexingAllowed === contract[expectedEnvironment].indexingAllowed,
    `${name} artifact indexing flag does not match the source contract.`,
  );
  assert(
    artifact.features.galaxyMotion ===
      contract[expectedEnvironment].features.galaxyMotion,
    `${name} artifact galaxy-motion flag does not match the source contract.`,
  );
  assert(
    artifact.cloudflareCommand ===
      contract[expectedEnvironment].cloudflareCommand,
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
      clientArtifact.features.galaxyMotion === false &&
      clientArtifact.canonicalOrigin === "https://semanticlab.ai" &&
      clientArtifact.googleTagManagerId ===
        contract.production.googleTagManagerId,
    "Production artifacts must preserve approved SEO/analytics and keep the variation disabled.",
  );
}

console.log(
  `${expectedEnvironment} source and flattened deployment artifacts verified.`,
);

const flattened = JSON.parse(
  await readFile(
    new URL("../build/server/wrangler.json", import.meta.url),
    "utf8",
  ),
);
assert(
  wrangler.vars.SL_DEPLOY_ENV === "production" &&
    wrangler.vars.SL_FEATURE_GALAXY_MOTION === "false",
  "Ambiguous source configuration must be production-safe.",
);
const expected = contract[expectedEnvironment];
for (const [key, value] of Object.entries({
  SL_DEPLOY_ENV: expectedEnvironment,
  SL_FEATURE_GALAXY_MOTION: String(expected.features.galaxyMotion),
  SL_INDEXING_ALLOWED: String(expected.indexingAllowed),
  SL_ANALYTICS_ENABLED: String(expected.analyticsEnabled),
})) {
  assert(
    flattened.vars[key] === value,
    `Flattened runtime binding ${key} does not match ${value}.`,
  );
}
assert(
  flattened.name === wrangler.name && flattened.preview_urls === true,
  "Flattened artifact must retain shared Worker and preview URLs.",
);
const { readdir } = await import("node:fs/promises");
async function scriptsUnder(path) {
  const entries = await readdir(path, { withFileTypes: true });
  const chunks = await Promise.all(
    entries.map(async (entry) =>
      entry.isDirectory()
        ? scriptsUnder(new URL(`${entry.name}/`, path))
        : entry.name.endsWith(".js")
          ? readFile(new URL(entry.name, path), "utf8")
          : "",
    ),
  );
  return chunks.join("\n");
}
const serverCode = await scriptsUnder(
  new URL("../build/server/", import.meta.url),
);
const clientCode = await scriptsUnder(
  new URL("../build/client/", import.meta.url),
);
if (expectedEnvironment === "preview") {
  assert(
    !serverCode.includes("googletagmanager.com") &&
      !clientCode.includes("googletagmanager.com"),
    "Preview JavaScript must not contain production analytics.",
  );
  assert(
    !serverCode.includes("GTM-XXXXXXX") && !clientCode.includes("GTM-XXXXXXX"),
    "Preview JavaScript must not contain production analytics ID.",
  );
  assert(
    serverCode.includes("noindex, nofollow, noarchive"),
    "Preview server must retain non-indexing response protection.",
  );
} else {
  assert(
    serverCode.includes("googletagmanager.com"),
    "Production server must retain approved analytics code.",
  );
  assert(
    serverCode.includes("https://semanticlab.ai/"),
    "Production server must retain canonical URLs.",
  );
}
console.log(
  `${expectedEnvironment} runtime bindings and emitted JavaScript verified.`,
);
