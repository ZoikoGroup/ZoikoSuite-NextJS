"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why is the catalog empty?",
    answer: (
      <>
        No approved utility records exist in the Resource Utility Registry yet.
        <br />
        <span className="text-[#475467]">
          Rather than show sample files or placeholder calculators, the catalog stays empty until a governed asset is published with its owner, version, access state and methodology. Nothing is substituted.{" "}
          <a href="/templates-tools" className="text-[#2A6386] font-semibold no-underline hover:text-[#08222F]">
            See the catalog
          </a>
        </span>
      </>
    ),
  },
  {
    question: "When will templates be available?",
    answer: (
      <>
        Templates are published individually as soon as their governance and quality checks clear.
        <br />
        <span className="text-[#475467]">
          There are no batch release dates; availability reflects the completion of our review pipeline.
        </span>
      </>
    ),
  },
  {
    question: "Will I have to fill in a form to download?",
    answer: (
      <>
        No gating forms or contact information collection are required for standard downloads.
        <br />
        <span className="text-[#475467]">
          Public resources are accessible directly without marketing registrations or sales follow-ups.
        </span>
      </>
    ),
  },
  {
    question: "How do I know a template is current?",
    answer: (
      <>
        Every template displays its exact version number, publication date, and governing owner.
        <br />
        <span className="text-[#475467]">
          Status indicators explicitly state whether a file is active, deprecated, or under review.
        </span>
      </>
    ),
  },
  {
    question: "What happens to data I enter into a tool?",
    answer: (
      <>
        Interactive tool inputs are processed entirely within your current session.
        <br />
        <span className="text-[#475467]">
          No user data or calculation parameters are persistently stored or transmitted back to our servers.
        </span>
      </>
    ),
  },
  {
    question: "Are the calculators based on industry benchmarks?",
    answer: (
      <>
        Yes, calculation models rely on documented methodologies and verified operational standards.
        <br />
        <span className="text-[#475467]">
          Each tool includes an explicit reference section detailing its underlying formulas and baseline assumptions.
        </span>
      </>
    ),
  },
  {
    question: "Do tools produce ROI or maturity scores?",
    answer: (
      <>
        Tools output structured analytical metrics based strictly on the parameters you supply.
        <br />
        <span className="text-[#475467]">
          Results are designed for internal evaluation and planning rather than generic scoring.
        </span>
      </>
    ),
  },
  {
    question: "Are downloads scanned?",
    answer: (
      <>
        All downloadable assets undergo automated security checks prior to registry publication.
        <br />
        <span className="text-[#475467]">
          Files are verified clean of malicious payloads and structural corruption.
        </span>
      </>
    ),
  },
  {
    question: "Is any of this professional advice?",
    answer: (
      <>
        Catalog resources serve as structured operational templates and calculators only.
        <br />
        <span className="text-[#475467]">
          They do not constitute formal legal, financial, or regulatory consultation.
        </span>
      </>
    ),
  },
  {
    question: "Can I ask for a specific template?",
    answer: (
      <>
        Requests for new templates or tools can be submitted through our task requirement portal.
        <br />
        <span className="text-[#475467]">
          Submissions are evaluated against our roadmap priorities and governance standards.
        </span>
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-6 lg:px-14 flex justify-center">
      <div className="max-w-[1320px] w-full flex flex-col gap-14">
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
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
            <span
              className="text-xs font-medium tracking-widest text-[#C5A059] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Frequently asked questions
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#08222F] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Availability, access, accuracy
              <br />
              and privacy
            </h2>
            <p
              className="text-xl font-normal text-[#64748B] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Direct first sentences, then qualified detail. Every answer is
              <br />
              present in the page source.
            </p>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-[990px] border-t border-[#2A6386]/20 flex flex-col justify-start items-start"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="self-stretch border-b border-[#2A6386]/20 flex flex-col justify-start items-start"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="self-stretch min-h-14 px-0.5 py-4 inline-flex justify-between items-center text-left w-full cursor-pointer focus:outline-none"
                >
                  <span
                    className="text-[#08222F] text-base font-semibold leading-7"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="text-[#C5A059] text-lg font-semibold leading-7"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && faq.answer && (
                  <div
                    className="w-full max-w-[845px] px-0.5 pb-5 flex flex-col justify-start items-start gap-2.5 text-[#08222F] text-base font-normal leading-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.answer}
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