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

export const networkMotionEnabled =
  deploymentEnvironment === "preview" &&
  import.meta.env.VITE_SL_FEATURE_NETWORK_MOTION === "true";

export const workHeroVideoEnabled =
  deploymentEnvironment === "preview" &&
  import.meta.env.VITE_SL_FEATURE_WORK_HERO_VIDEO === "true";

export const productGalleryEnabled =
  deploymentEnvironment === "preview" &&
  import.meta.env.VITE_SL_FEATURE_WORK_PRODUCTS_GALLERY === "true";

export const founderExperienceGalleryEnabled =
  deploymentEnvironment === "preview" &&
  import.meta.env.VITE_SL_FEATURE_FOUNDER_EXPERIENCE_GALLERY === "true";

export const googleTagManagerId = analyticsEnabled
  ? import.meta.env.VITE_SL_GTM_ID || "GTM-XXXXXXX"
  : null;
