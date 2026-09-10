export type DeploymentEnvironment = "preview" | "production";

export const deploymentEnvironment: DeploymentEnvironment =
  import.meta.env.VITE_SL_DEPLOY_ENV === "preview" ? "preview" : "production";

export const isPreviewBuild = deploymentEnvironment === "preview";

export const analyticsEnabled =
  deploymentEnvironment === "production" &&
  import.meta.env.VITE_SL_ANALYTICS_ENABLED !== "false";

export const indexingAllowed =
  deploymentEnvironment === "production" &&
  import.meta.env.VITE_SL_INDEXING_ALLOWED !== "false";

export const salesDeckEnabled =
  deploymentEnvironment === "preview" &&
  import.meta.env.VITE_SL_FEATURE_SALES_DECK === "true";

export const googleTagManagerId = analyticsEnabled
  ? import.meta.env.VITE_SL_GTM_ID || "GTM-XXXXXXX"
  : null;
