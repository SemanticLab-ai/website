import { spawn } from "node:child_process";

function run(command, args, extraEnvironment = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      env: { ...process.env, ...extraEnvironment },
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

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const wranglerCommand =
  process.platform === "win32"
    ? "node_modules\\.bin\\wrangler.cmd"
    : "node_modules/.bin/wrangler";

await run(npmCommand, ["run", "typecheck"]);

await run("node", ["scripts/build-cloudflare.mjs"], {
  SEMANTICLAB_BUILD_ENV: "preview",
  WORKERS_CI_BRANCH: "codex/check-preview",
});
await run("node", ["scripts/assert-deployment.mjs", "preview"]);
await run(wranglerCommand, ["versions", "upload", "--dry-run"]);

await run("node", ["scripts/build-cloudflare.mjs"], {
  SEMANTICLAB_BUILD_ENV: "production",
  WORKERS_CI_BRANCH: "main",
});
await run("node", ["scripts/assert-deployment.mjs", "production"]);
await run(wranglerCommand, ["deploy", "--dry-run"]);
