"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "How much does ZoikoSuite cost?",
    answer:
      "Starter is $49/mo, Growth is $199/mo, and Enterprise pricing starts from $999/mo based on contracted scope, entity structure and compliance requirements.",
  },
  {
    question: "Can I try ZoikoSuite before paying?",
    answer:
      "Yes. Starter and Growth offer a 30-day free trial with full eligible capabilities and controlled allowances. Enterprise uses a guided pilot based on verified scope.",
  },
  {
    question: "Which plan should I choose?",
    answer:
      "Choose Starter if you run a single legal entity needing controlled financial workflows, Growth if you have multiple entities or need workflow automation, and Enterprise for custom security, SLAs, and group governance.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. Upgrades apply immediately with prorated billing, and downgrades are preflighted to take effect at the conclusion of your current billing period.",
  },
  {
    question: "Will I lose data if I downgrade?",
    answer:
      "No. Existing records, audit trails and evidence are preserved under ZoikoSuite retention rules; capabilities above the lower-tier entitlement become read-only rather than deleted.",
  },
  {
    question: "Are payroll and workforce services included?",
    answer:
      "Workforce and payroll services include baseline access and may scale with active employee counts or transaction volume, shown transparently before activation.",
  },
  {
    question: "Are AI and API features unlimited?",
    answer:
      "Plans include designated allowances (standard in Starter, expanded in Growth, high-volume in Enterprise) with clear usage meters and optional add-ons.",
  },
  {
    question: "Are taxes included in the displayed price?",
    answer:
      "Displayed prices exclude applicable local sales taxes, VAT or GST, which are calculated and displayed transparently prior to checkout or contract execution.",
  },
  {
    question: "What is included in Enterprise?",
    answer:
      "Enterprise encompasses full multi-entity group consolidation, intercompany eliminations, custom governance, SSO/SCIM, enterprise data connectors, dedicated SLAs and success managers.",
  },
  {
    question: "Do you charge implementation fees?",
    answer:
      "Starter and Growth feature zero implementation fees and guided self-onboarding. Enterprise deployments are individually scoped and agreed in writing.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-[#FBF9F4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto text-left">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-4 h-[2px] bg-[#CDA85B]" />
          <span className="text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
            PRICING FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#08222F] tracking-tight mb-10 leading-tight">
          Pricing questions, answered plainly.
        </h2>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 10 Accordion Cards */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {faqList.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-none group"
                  >
                    <span className="text-xs sm:text-[13.5px] font-bold text-[#08222F] group-hover:text-[#CDA85B] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-slate-400 group-hover:text-[#08222F] transition-transform duration-200">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#08222F]" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal animate-fade-in border-t border-slate-100 mt-1">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: "Still deciding?" Contact Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-lg w-full max-w-sm sticky top-24">
              {/* Photo Header (pp10.png) */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src="/pricing-page/pp10.png"
                  alt="Still deciding specialist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#08222F] mb-1.5">
                  Still deciding?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                  Talk through your entities, users and controls with a specialist. We will tell you which plan fits &mdash; including when it is Starter.
                </p>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#08222F] hover:bg-[#0E3547] text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
