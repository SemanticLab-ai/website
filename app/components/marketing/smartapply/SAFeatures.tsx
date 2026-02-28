import { Shield, Target, FileText, Mail, Sparkles } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { FeatureCard } from "~/components/shared/FeatureCard";

export function SAFeatures() {
  const features = [
    {
      icon: Shield,
      title: "ATS Optimization",
      description: "Resumes structured and formatted to pass Applicant Tracking Systems, with the right keywords in the right places.",
    },
    {
      icon: Target,
      title: "Role-Specific Tailoring",
      description: "Every resume is customized for the specific role — not a one-size-fits-all template with swapped job titles.",
    },
    {
      icon: FileText,
      title: "Work Artifact Parsing",
      description: "Upload past resumes, portfolios, project docs, and performance reviews. SmartApply extracts and highlights what matters.",
    },
    {
      icon: Mail,
      title: "Cover Letters",
      description: "Generate matching cover letters that complement your resume and speak directly to the job requirements.",
    },
  ];

  return (
    <SectionWrapper bg="dark-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Features"
          badgeIcon={Sparkles}
          title={
            <>
              Built for{" "}
              <span className="gradient-text-lime italic">Real Job Seekers</span>
            </>
          }
          subtitle="Not another AI gimmick. SmartApply is built to help you land interviews faster."
        />

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
