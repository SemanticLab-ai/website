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
  wrangler.workers_dev === false,
  "The production workers.dev route must stay disabled in Wrangler.",
);
assert(
  packageJson.scripts.build === "node scripts/build-cloudflare.mjs",
  "The shared build command must use the branch-aware selector.",
);

assert(
  contract.preview.analyticsEnabled === false &&
    contract.preview.indexingAllowed === false &&
    contract.preview.features.directForm === true &&
    contract.preview.leadEmailEnabled === false &&
    contract.preview.turnstileSiteKey === null &&
    contract.preview.features.networkMotion === true &&
    contract.preview.features.workHeroVideo === true &&
    contract.preview.features.workProductsGallery === true &&
    contract.preview.features.founderExperienceGallery === true &&
    contract.preview.cloudflareCommand === "wrangler versions upload",
  "The preview source contract must enable network motion, disable analytics/indexing and upload a version.",
);

assert(
  contract.production.analyticsEnabled === true &&
    contract.production.indexingAllowed === true &&
    contract.production.features.directForm === false &&
    contract.production.leadEmailEnabled === false &&
    typeof contract.production.turnstileSiteKey === "string" &&
    contract.production.features.networkMotion === true &&
    contract.production.features.workHeroVideo === true &&
    contract.production.features.workProductsGallery === true &&
    contract.production.features.founderExperienceGallery === true &&
    contract.production.cloudflareCommand === "wrangler deploy" &&
    contract.production.canonicalOrigin === "https://semanticlab.ai" &&
    typeof contract.production.googleTagManagerId === "string",
  "The production source contract must enable the approved staging visuals and retain analytics, indexing and canonical origin.",
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
    artifact.features.directForm === contract[expectedEnvironment].features.directForm &&
      artifact.leadEmailEnabled === contract[expectedEnvironment].leadEmailEnabled &&
      artifact.turnstileSiteKey === contract[expectedEnvironment].turnstileSiteKey,
    `${name} form delivery contract does not match the source contract.`,
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
    artifact.features.networkMotion === contract[expectedEnvironment].features.networkMotion,
    `${name} artifact network-motion flag does not match the source contract.`,
  );
  assert(
    artifact.features.workHeroVideo === contract[expectedEnvironment].features.workHeroVideo,
    `${name} artifact work-hero-video flag does not match the source contract.`,
  );
  assert(
    artifact.features.workProductsGallery ===
      contract[expectedEnvironment].features.workProductsGallery,
    `${name} artifact work-products-gallery flag does not match the source contract.`,
  );
  assert(
    artifact.features.founderExperienceGallery ===
      contract[expectedEnvironment].features.founderExperienceGallery,
    `${name} artifact founder-experience-gallery flag does not match the source contract.`,
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
      clientArtifact.features.networkMotion === true &&
      clientArtifact.features.workHeroVideo === true &&
      clientArtifact.features.workProductsGallery === true &&
      clientArtifact.features.founderExperienceGallery === true &&
      clientArtifact.canonicalOrigin === "https://semanticlab.ai" &&
      clientArtifact.googleTagManagerId ===
        contract.production.googleTagManagerId,
    "Production artifacts must preserve approved visuals, SEO and analytics.",
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
    wrangler.vars.SL_FEATURE_DIRECT_FORM === "false" &&
    wrangler.vars.SL_LEAD_EMAIL_ENABLED === "false" &&
    wrangler.vars.SL_FEATURE_NETWORK_MOTION === "true" &&
    wrangler.vars.SL_FEATURE_WORK_HERO_VIDEO === "true" &&
    wrangler.vars.SL_FEATURE_WORK_PRODUCTS_GALLERY === "true" &&
    wrangler.vars.SL_FEATURE_FOUNDER_EXPERIENCE_GALLERY === "true" &&
    wrangler.vars.SL_INDEXING_ALLOWED === "true" &&
    wrangler.vars.SL_ANALYTICS_ENABLED === "true",
  "Source bindings must match the approved production defaults.",
);
assert(
  wrangler.send_email?.length === 1 &&
    wrangler.send_email[0].name === "LEAD_EMAIL" &&
    wrangler.send_email[0].destination_address === "hello@semanticlab.ai" &&
    JSON.stringify(wrangler.send_email[0].allowed_sender_addresses) ===
      JSON.stringify(["forms@semanticlab.ai"]) &&
    wrangler.ratelimits?.length === 1 &&
    wrangler.ratelimits[0].name === "LEAD_RATE_LIMIT" &&
    wrangler.secrets_store_secrets?.length === 1 &&
    wrangler.secrets_store_secrets[0].binding === "TURNSTILE_SECRET" &&
    wrangler.secrets_store_secrets[0].store_id === "725326749fcd41b5b4d752f88c911231" &&
    wrangler.secrets_store_secrets[0].secret_name === "SEMANTICLAB_STRATEGY_TURNSTILE_SECRET",
  "Source bindings must restrict lead mail to the SemanticLab inbox.",
);
assert(
  !("SL_FEATURE_GALAXY_MOTION" in wrangler.vars),
  "Retired galaxy flag must not remain in source bindings.",
);
const expected = contract[expectedEnvironment];
for (const [key, value] of Object.entries({
  SL_DEPLOY_ENV: expectedEnvironment,
  SL_FEATURE_DIRECT_FORM: String(expected.features.directForm),
  SL_LEAD_EMAIL_ENABLED: String(expected.leadEmailEnabled),
  SL_FEATURE_NETWORK_MOTION: String(expected.features.networkMotion),
  SL_FEATURE_WORK_HERO_VIDEO: String(expected.features.workHeroVideo),
  SL_FEATURE_WORK_PRODUCTS_GALLERY: String(expected.features.workProductsGallery),
  SL_FEATURE_FOUNDER_EXPERIENCE_GALLERY: String(expected.features.founderExperienceGallery),
  SL_INDEXING_ALLOWED: String(expected.indexingAllowed),
  SL_ANALYTICS_ENABLED: String(expected.analyticsEnabled),
})) {
  assert(
    flattened.vars[key] === value,
    `Flattened runtime binding ${key} does not match ${value}.`,
  );
}
assert(
  flattened.name === wrangler.name &&
    flattened.preview_urls === true &&
    flattened.workers_dev === false,
  "Flattened artifact must retain the shared Worker and previews while disabling the production workers.dev route.",
);
if (expectedEnvironment === "preview") {
  assert(
    !flattened.send_email?.length && !flattened.ratelimits?.length &&
      !flattened.secrets_store_secrets?.length,
    "Preview artifact must have no email, rate-limit, or secret binding.",
  );
} else {
  assert(
    JSON.stringify(flattened.send_email) === JSON.stringify(wrangler.send_email) &&
      JSON.stringify(flattened.ratelimits) === JSON.stringify(wrangler.ratelimits) &&
      JSON.stringify(flattened.secrets_store_secrets) === JSON.stringify(wrangler.secrets_store_secrets),
    "Production artifact must retain restricted lead bindings.",
  );
}
assert(
  !("SL_FEATURE_GALAXY_MOTION" in flattened.vars),
  "Retired galaxy flag must not remain in flattened bindings.",
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
