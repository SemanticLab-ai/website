import { SAHero } from "~/components/marketing/smartapply/SAHero";
import { SAHowItWorks } from "~/components/marketing/smartapply/SAHowItWorks";
import { SAFeatures } from "~/components/marketing/smartapply/SAFeatures";
import { UmbrellaCTA } from "~/components/marketing/home/UmbrellaCTA";

export function meta() {
  return [
    { title: "SmartApply — AI Resume Tailoring | SemanticLab" },
    {
      name: "description",
      content:
        "Tailored resumes in minutes, not hours. Upload your work artifacts, paste a job description, and let AI generate a role-specific resume.",
    },
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
