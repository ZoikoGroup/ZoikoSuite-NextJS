"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-[#E5E7EB]">
      <button
        onClick={onClick}
        className="w-full min-h-[56px] py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-base font-semibold text-[#111827]">
          {question}
        </span>
        <span className="text-[#D4AF37] ml-4 flex-shrink-0">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      
      {isOpen && (
        <div className="pb-5 pr-8 animate-in slide-in-from-top-1 fade-in duration-200">
          <div className="text-base text-[#4B5563] leading-relaxed space-y-4">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Why is the catalog empty?",
      answer: (
        <>
          <p className="text-[#111827] font-medium">No approved utility records exist in the Resource Utility Registry yet.</p>
          <p>
            Rather than show sample files or placeholder calculators, the catalog stays empty until a governed asset is published with its
            owner, version, access state and methodology. Nothing is substituted.
          </p>
          <a href="#" className="font-semibold text-[#0F476A] hover:underline mt-2 inline-block">See the catalog</a>
        </>
      ),
    },
    {
      question: "When will templates be available?",
      answer: <p>Templates and tools are published dynamically once they pass the required governance and diligence reviews. The timeline depends on the specific asset being assessed.</p>,
    },
    {
      question: "Will I have to fill in a form to download?",
      answer: <p>Public assets are available without gating. For assets that require an account or specific entitlement, this requirement is clearly marked on the utility card before you click.</p>,
    },
    {
      question: "How do I know a template is current?",
      answer: <p>Every template displays its owner, calculation version, or last-reviewed date in its detail record, giving you clear visibility into its currentness.</p>,
    },
    {
      question: "What happens to data I enter into a tool?",
      answer: <p>Interactive tools declare their data handling before input. This includes whether processing happens in your browser or on a server, and whether any data is retained.</p>,
    },
    {
      question: "Are the calculators based on industry benchmarks?",
      answer: <p>We do not claim industry-average figures without approved evidence. Any benchmarks or assumptions used in calculations will be explicitly detailed in the methodology section.</p>,
    },
    {
      question: "Do tools produce ROI or maturity scores?",
      answer: <p>Tools do not produce arbitrary scores unless backed by an approved, published methodology. Read the methodology disclosure for details on any specific calculator.</p>,
    },
    {
      question: "Are downloads scanned?",
      answer: <p>Yes, all downloadable assets are managed through a secure pipeline, though you should always follow your organization&apos;s own security protocols.</p>,
    },
    {
      question: "Is any of this professional advice?",
      answer: <p>No. These utilities support your own planning and decision-making. They do not provide legal, tax, accounting, audit or other regulated professional advice.</p>,
    },
    {
      question: "Can I ask for a specific template?",
      answer: <p>Yes, you can request specific templates using the form on this page. Requests help prioritize our utility backlog.</p>,
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-28 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full mb-12">
          {/* Text Content */}
          <div className="flex flex-col flex-1">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1.5px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-xs font-semibold tracking-widest uppercase font-mono">
                Frequently asked questions
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Availability, access, accuracy<br className="hidden md:block" />
              and privacy
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed max-w-xl">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="w-full max-w-4xl border-t border-[#E5E7EB]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
