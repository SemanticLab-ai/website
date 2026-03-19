import { SAHero } from "~/components/marketing/smartapply/SAHero";
import { SAHowItWorks } from "~/components/marketing/smartapply/SAHowItWorks";
import { SAFeatures } from "~/components/marketing/smartapply/SAFeatures";
import { UmbrellaCTA } from "~/components/marketing/home/UmbrellaCTA";

export function meta() {
  const title =
    "SmartApply — AI Resume Tailoring for Job Seekers | SL";
  const description =
    "Tailored resumes in minutes, not hours. Upload your work artifacts, paste a job description, and let AI generate a role-specific resume that gets interviews.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/products/smartapply";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export default function SmartApplyPage() {
  return (
    <>
      <SAHero />
      <SAHowItWorks />
      <SAFeatures />
      <UmbrellaCTA />
    </>
  );
}
