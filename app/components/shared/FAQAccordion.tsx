import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-slate/10 shadow-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-6 flex items-start justify-between gap-4"
          >
            <h3 className="text-lg font-semibold text-charcoal flex items-start gap-3">
              <span className="text-vector-rose mt-0.5">Q:</span>
              {faq.question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-slate flex-shrink-0 mt-1 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6">
              <p className="text-slate pl-7">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
