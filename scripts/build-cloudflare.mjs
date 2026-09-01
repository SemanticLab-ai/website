import { mkdir, readFile, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";

const contract = JSON.parse(
  await readFile(new URL("../config/deployment-contract.json", import.meta.url), "utf8"),
);

function resolveEnvironment() {
  const explicitEnvironment = process.env.SEMANTICLAB_BUILD_ENV?.trim();
  const branch = process.env.WORKERS_CI_BRANCH?.trim();

  if (
    explicitEnvironment &&
    explicitEnvironment !== "preview" &&
    explicitEnvironment !== "production"
  ) {
    throw new Error(
      `SEMANTICLAB_BUILD_ENV must be preview or production, received ${explicitEnvironment}.`,
    );
  }

  if (explicitEnvironment) {
    return explicitEnvironment;
  }

  if (branch) {
    return branch === "main" ? "production" : "preview";
  }

  return "production";
}

function run(command, args, environment) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      env: environment,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(" ")} exited with code ${code}.`));
      }
    });
  });
}

const deploymentEnvironment = resolveEnvironment();
const selected = contract[deploymentEnvironment];
const branch = process.env.WORKERS_CI_BRANCH?.trim() || "local-ambiguous";
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

const buildEnvironment = {
  ...process.env,
  VITE_SL_DEPLOY_ENV: deploymentEnvironment,
  VITE_SL_ANALYTICS_ENABLED: String(selected.analyticsEnabled),
  VITE_SL_INDEXING_ALLOWED: String(selected.indexingAllowed),
  VITE_SL_FEATURE_SALES_DECK: String(selected.features.salesDeck),
  VITE_SL_GTM_ID:
    deploymentEnvironment === "production" ? selected.googleTagManagerId : "",
};

console.log(`Building SemanticLab for ${deploymentEnvironment} (${branch}).`);

await run(npmCommand, ["run", "build:app"], buildEnvironment);

const artifact = {
  schemaVersion: 1,
  environment: deploymentEnvironment,
  sourceBranch: branch,
  commit: process.env.WORKERS_CI_COMMIT_SHA || "local",
  analyticsEnabled: selected.analyticsEnabled,
  indexingAllowed: selected.indexingAllowed,
  features: selected.features,
  cloudflareCommand: selected.cloudflareCommand,
  canonicalOrigin: selected.canonicalOrigin || null,
  googleTagManagerId: selected.googleTagManagerId || null,
};

for (const directory of ["../build/client", "../build/server"]) {
  const targetDirectory = new URL(directory, import.meta.url);
  await mkdir(targetDirectory, { recursive: true });
  await writeFile(
    new URL("deployment-contract.json", `${targetDirectory.href}/`),
    `${JSON.stringify(artifact, null, 2)}\n`,
  );
}
