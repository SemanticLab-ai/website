import { Shield, Target, FileText, Mail, Sparkles } from "lucide-react";

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
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-smart-indigo/5 backdrop-blur rounded-full border border-smart-indigo/20 shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-smart-indigo" />
              <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">Features</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
              Built for{" "}
              <span className="gradient-text-indigo italic">Real Job Seekers</span>
            </h2>

            <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
              Not another AI gimmick. SmartApply is built to help you land interviews faster.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-3xl p-8 border border-slate/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-smart-indigo/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-smart-indigo" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-slate leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
