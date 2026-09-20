"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: "Why is the catalog empty?",
    answer: (
      <div className="flex flex-col gap-2">
        <p className="text-base text-[#101828] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
          No approved utility records exist in the Resource Utility Registry yet.
        </p>
        <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
          Rather than show sample files or placeholder calculators, the catalog stays empty until a governed asset is published with its owner, version, access state and methodology. Nothing is substituted.{" "}
          <a
            href="#catalog"
            className="text-[#08222F] font-semibold underline hover:text-orange-500 transition-colors"
          >
            See the catalog
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "When will templates be available?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        Templates and tools are published as they clear formal governance and technical verification.
      </p>
    ),
  },
  {
    question: "Will I have to fill in a form to download?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        No. Public assets do not require form completion for access.
      </p>
    ),
  },
  {
    question: "How do I know a template is current?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        Every utility detail page includes the last-reviewed date, version number, and named owner.
      </p>
    ),
  },
  {
    question: "What happens to data I enter into a tool?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        All processing occurs locally within your browser unless explicit server processing is declared.
      </p>
    ),
  },
  {
    question: "Are the calculators based on industry benchmarks?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        No unverified benchmark or industry-average figures are used without explicit citation.
      </p>
    ),
  },
  {
    question: "Do tools produce ROI or maturity scores?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        No. Unsubstantiated ROI, savings, or maturity scores are not generated.
      </p>
    ),
  },
  {
    question: "Are downloads scanned?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        All downloadable files undergo security scanning prior to registry publication.
      </p>
    ),
  },
  {
    question: "Is any of this professional advice?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        No. Utilities support internal planning and decision-making but do not constitute legal, tax, or financial advice.
      </p>
    ),
  },
  {
    question: "Can I ask for a specific template?",
    answer: (
      <p className="text-base text-[#475467] leading-6 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        Yes. Use the request form above to submit your task requirements directly to the resource owner.
      </p>
    ),
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-orange-400" />
            <span
              className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Frequently asked questions
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Availability, access, accuracy
              <br />
              and privacy
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#475467] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Direct first sentences, then qualified detail. Every answer is
              <br />
              present in the page source.
            </p>
          </div>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-[#c5d4e8] w-full max-w-[990px]"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#c5d4e8]">
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`templates-faq-answer-${index}`}
                  className="w-full min-h-14 py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span
                    className="text-base font-semibold text-[#101828] leading-7"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="text-orange-400 ml-4 shrink-0 font-mono text-lg font-semibold"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`templates-faq-answer-${index}`}
                    className="pb-5 max-w-[845px]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
