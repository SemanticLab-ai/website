export type DeploymentEnvironment = "preview" | "production";

export const deploymentEnvironment: DeploymentEnvironment =
  import.meta.env.VITE_SL_DEPLOY_ENV === "preview" ? "preview" : "production";

export const isPreviewBuild = deploymentEnvironment === "preview";

export const directFormEnabled =
  import.meta.env.VITE_SL_FEATURE_DIRECT_FORM === "true";

export const turnstileSiteKey =
  import.meta.env.VITE_SL_TURNSTILE_SITE_KEY || null;

export const analyticsEnabled =
  deploymentEnvironment === "production" &&
  import.meta.env.VITE_SL_ANALYTICS_ENABLED !== "false";

export const indexingAllowed =
  deploymentEnvironment === "production" &&
  import.meta.env.VITE_SL_INDEXING_ALLOWED !== "false";

export const networkMotionEnabled =
  import.meta.env.VITE_SL_FEATURE_NETWORK_MOTION === "true";

export const workHeroVideoEnabled =
  import.meta.env.VITE_SL_FEATURE_WORK_HERO_VIDEO === "true";

export const productGalleryEnabled =
  import.meta.env.VITE_SL_FEATURE_WORK_PRODUCTS_GALLERY === "true";

export const founderExperienceGalleryEnabled =
  import.meta.env.VITE_SL_FEATURE_FOUNDER_EXPERIENCE_GALLERY === "true";

export const googleTagManagerId = analyticsEnabled
  ? import.meta.env.VITE_SL_GTM_ID || null
  : null;
