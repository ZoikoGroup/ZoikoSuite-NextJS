"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answerParagraph1: string;
  answerParagraph2: string;
  linkText?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Why are there no customer stories on this page?",
    answerParagraph1:
      "Because no story currently has all three approvals — source record, evidence record and rights record — that publication requires.",
    answerParagraph2:
      "Any one of those failing blocks publication. Placeholder logos, illustrative company names or representative outcomes would be fabricated proof, which is the specific thing this page exists to prevent.",
    linkText: "See the inventory state",
  },
  {
    question: "What does a story actually prove?",
    answerParagraph1:
      "A story proves that one named or approved organization achieved a specific outcome under stated conditions, over a specific period, supported by verifiable records.",
    answerParagraph2:
      "It does not prove generalizability, future performance, or compliance across other organizations or environments.",
  },
  {
    question: "How are quantitative claims handled?",
    answerParagraph1:
      "Every quantitative claim is wrapped in a twelve-field metric disclosure pattern covering definitions, periods, methods, scope, and exclusions.",
    answerParagraph2:
      "A number without these surrounding constraints is treated as non-evidence and is prohibited from publication.",
  },
  {
    question: "What do the evidence classes mean?",
    answerParagraph1:
      "Evidence classes categorize the verification level behind a claim, ranging from fully audited metrics to customer-attested outcomes.",
    answerParagraph2:
      "Every material outcome must display its evidence class adjacent to the text, ensuring the reader immediately knows the verification depth.",
  },
  {
    question: "Can a customer stay anonymous?",
    answerParagraph1:
      "Yes. Anonymity is supported via approved anonymized identities.",
    answerParagraph2:
      "Identity is never implied through context, logo shapes, or descriptive hints. If re-identification risk rises, the story is automatically paused.",
  },
  {
    question: "What happens if a customer withdraws consent?",
    answerParagraph1:
      "Customer control is operational and immediate. Withdrawal triggers automated suppression across hubs, details, search, schema, and social channels.",
    answerParagraph2:
      "Suppression happens upon the event itself, ensuring compliance without requiring manual follow-up requests.",
  },
  {
    question: "What if a claim is disputed?",
    answerParagraph1:
      "When evidence is challenged, the claim or metric fails closed.",
    answerParagraph2:
      "It is immediately removed rather than carrying an unresolved caveat, protecting the integrity of the published record until investigation concludes.",
  },
  {
    question: "Does a story tell me what the product does today?",
    answerParagraph1:
      "No. Stories are historical records of past implementations under past conditions.",
    answerParagraph2:
      "Current authority always rests in platform documentation, trust pages, and current solution specifications, which supersede historical case studies.",
  },
  {
    question: "Does a customer story prove compliance or certification?",
    answerParagraph1:
      "Never. Professional boundaries strictly prohibit using customer stories as proof for regulatory approval, audit opinions, tax compliance, or legal authority.",
    answerParagraph2:
      "One organization's experience cannot be extrapolated into a universal compliance certification.",
  },
  {
    question: "Do I have to fill in a form to read stories?",
    answerParagraph1:
      "No. When stories are published, they are fully accessible without gating.",
    answerParagraph2:
      "Proof should never be locked behind a lead-capture form; transparency requires unhindered public access.",
  },
];

export default function FrequentlyAskedQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Rights, evidence, metrics, anonymity and currency
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-[#DBE3E8]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#DBE3E8] py-5 transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#A07A2E] transition-colors">
                    {item.question}
                  </h3>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[#A07A2E]">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 flex flex-col gap-3 pr-12 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                      {item.answerParagraph1}
                    </p>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.answerParagraph2}
                      {item.linkText && (
                        <>
                          {" "}
                          <a
                            href="#"
                            className="text-[#0F172A] font-semibold underline hover:text-[#A07A2E]"
                          >
                            {item.linkText}
                          </a>
                        </>
                      )}
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
