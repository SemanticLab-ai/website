import { HelpCircle } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { FAQAccordion } from "~/components/shared/FAQAccordion";

const faqs = [
  {
    question: "What is Pinnacle and who is this app for?",
    answer:
      "Pinnacle is a popular inventory management system used by auto parts businesses across Australia and New Zealand. Syncd is built specifically for Pinnacle users who also sell on Shopify - it bridges the gap between your parts catalog and your online store.",
  },
  {
    question: "How long does the initial sync take?",
    answer:
      "The initial setup takes about 5 minutes. Your first full product sync depends on catalog size - typically 10–30 minutes for most stores. After that, syncs run automatically on your chosen schedule.",
  },
  {
    question: "Can I customize how product titles and descriptions appear?",
    answer:
      "Yes. The field mapping system includes a drag-and-drop template builder for product titles and supports custom formatting (uppercase, lowercase, title case). You can also use our AI Descriptions add-on to generate SEO-optimized descriptions automatically.",
  },
  {
    question: "What happens if a product is removed from Pinnacle?",
    answer:
      "You control this behavior in your sync settings. Products can be archived, set to draft, or left as-is when they're no longer in Pinnacle. No products are deleted without your explicit configuration.",
  },
  {
    question: "Do I need technical skills to set this up?",
    answer:
      "Not at all. The 3-step setup wizard guides you through everything. Smart Defaults pre-configure the most common settings so you can be live in minutes. If you get stuck, our support team is available via email.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade anytime. Changes take effect on your next billing cycle. All plans are billed monthly through Shopify with no long-term contracts.",
  },
  {
    question: "Is my API data secure?",
    answer:
      "Absolutely. API credentials are encrypted at rest and never exposed to the browser. All communication uses HTTPS, and internal API calls use timing-safe authentication. We run on Cloudflare's edge network with enterprise-grade security.",
  },
  {
    question: "What are the AI add-ons?",
    answer:
      "We offer two optional AI modules: AI Product Descriptions (generates SEO-optimized descriptions from your part data) and AI Image Enhancement (professional background removal and image cleanup). Both are built specifically for auto parts and can be added to any plan.",
  },
];

export function SyncdFAQ() {
  return (
    <SectionWrapper bg="dark-surface">
      <SectionHeader
        badge="FAQ"
        badgeIcon={HelpCircle}
        title={
          <>
            Frequently Asked{" "}
            <span className="gradient-text-lime">Questions</span>
          </>
        }
      />

      <div className="max-w-3xl mx-auto">
        <FAQAccordion faqs={faqs} />
      </div>
    </SectionWrapper>
  );
}
