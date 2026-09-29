"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Can I try ZoikoSuite before paying?",
    answer:
      "Yes. Starter and Growth have a 30-day free trial. Enterprise uses a guided demo/pilot based on scope.",
  },
  {
    question: "Which plan should I choose?",
    answer:
      "Choose Starter for small businesses needing a controlled financial foundation, Growth for scaling teams needing multi-entity operations and automation, or Enterprise for complex organizations requiring advanced governance and custom controls.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or modify your subscription tier as your organization grows and your operational requirements evolve.",
  },
  {
    question: "Will I lose data if I downgrade?",
    answer:
      "No, your historical data is retained according to our secure compliance policies, though access to certain advanced features or limits will adjust to match the new plan tier.",
  },
  {
    question: "Are payroll and workforce services included?",
    answer:
      "Workforce and payroll services may be included via standard allowances or scaled with active employee counts depending on your specific configuration.",
  },
  {
    question: "Are AI and API features unlimited?",
    answer:
      "AI and API usage are provided with standard or expanded allowances tailored to your plan tier, with high-volume enterprise options available.",
  },
  {
    question: "Are taxes included in the displayed price?",
    answer:
      "Displayed prices exclude applicable local taxes and regulatory fees, which are calculated and presented prior to checkout or activation.",
  },
  {
    question: "What is included in Enterprise?",
    answer:
      "Enterprise includes group consolidation, intercompany controls, SSO/SCIM, custom compliance frameworks, dedicated data feeds, and contracted SLAs.",
  },
  {
    question: "Do you charge implementation fees?",
    answer:
      "Standard plans feature self-service onboarding without implementation fees, whereas Enterprise onboarding and custom deployment are scoped individually based on your requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Tag / Subheading */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="h-[1px] w-6 bg-[#B8913F]" />
          <span className="text-xs font-bold tracking-widest text-[#B8913F] uppercase">
            FAQ
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] text-center mb-12">
          Pricing questions
        </h2>

        {/* FAQ List Container */}
        <div className="max-w-4xl mx-auto divide-y divide-[#e2e8f0]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none group"
                >
                  <span className="text-sm sm:text-[15px] font-bold text-[#101E2B] group-hover:text-[#dfb36a] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#8B959D] rounded-full">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 pr-12">
                    <p className="text-sm text-[#66727C] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
