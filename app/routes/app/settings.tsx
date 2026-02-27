import { useState } from "react";
import { User, CreditCard, Key } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Settings — SemanticLab" },
    { name: "description", content: "Account settings" },
  ];
}

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "api", label: "API Keys", icon: Key },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function Settings() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");

  return (
    <div className="p-6 md:p-8 max-w-3xl">
      <h1 className="text-2xl font-display font-bold text-charcoal mb-8">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-1 bg-pearl rounded-xl p-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-white text-charcoal shadow-sm"
                : "text-slate hover:text-charcoal"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "profile" && (
        <div className="bg-white rounded-2xl p-6 border border-slate/10 shadow-sm space-y-6">
          <div>
            <label className="text-sm font-semibold text-charcoal block mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate/20 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-vector-rose/50 focus:ring-2 focus:ring-vector-rose/10"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-charcoal block mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-slate/20 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-vector-rose/50 focus:ring-2 focus:ring-vector-rose/10"
            />
          </div>
          <Button className="rounded-full px-6 bg-charcoal text-white hover:bg-vector-rose">
            Save Changes
          </Button>
          <p className="text-xs text-slate">Demo only — changes are not saved.</p>
        </div>
      )}

      {activeTab === "billing" && (
        <div className="bg-white rounded-2xl p-6 border border-slate/10 shadow-sm">
          <div className="text-center py-12">
            <CreditCard className="w-12 h-12 text-slate/30 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-charcoal mb-2">Free Plan</h3>
            <p className="text-slate mb-6">
              You're on the free plan with 3 images. Upgrade for more processing power.
            </p>
            <Button
              className="rounded-full px-6 bg-gradient-to-r from-vector-rose to-vector-rose-dark text-white"
              asChild
            >
              <Link to="/products/image-enhancer/pricing">View Plans</Link>
            </Button>
          </div>
        </div>
      )}

      {activeTab === "api" && (
        <div className="bg-white rounded-2xl p-6 border border-slate/10 shadow-sm">
          <div className="text-center py-12">
            <Key className="w-12 h-12 text-slate/30 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-charcoal mb-2">API Access</h3>
            <p className="text-slate mb-6">
              API keys are available on Pro plans and above. Integrate image processing into your workflow.
            </p>
            <Button
              className="rounded-full px-6 bg-gradient-to-r from-vector-rose to-vector-rose-dark text-white"
              asChild
            >
              <Link to="/products/image-enhancer/pricing">Upgrade to Pro</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
