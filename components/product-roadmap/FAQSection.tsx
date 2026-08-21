"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is the ZoikoSuite Product Roadmap a commitment?",
    answer: (
      <div className="flex flex-col space-y-3">
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
          No. The roadmap communicates approved public direction and may change;
          current availability and commitments are governed by approved
          documentation and agreements.
        </p>
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
          Nothing on this page creates an entitlement, a warranty, or a
          contractual obligation, and it should not be relied upon in making a
          purchasing decision.{" "}
          <a href="#" className="text-[#0F476A] hover:underline font-semibold">
            Read the forward-looking statement
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "faq-2",
    question: "Why are exact dates not always shown?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        Target qualification dates reflect estimated delivery windows or
        released status. Specific dates are only provided when target criteria
        and dependency gates have been fully qualified.
      </p>
    ),
  },
  {
    id: "faq-3",
    question: "What do roadmap statuses mean?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        Each status represents a specific stage in our governance lifecycle,
        indicating whether an item is under evaluation, in active development,
        in controlled validation, or released.
      </p>
    ),
  },
  {
    id: "faq-4",
    question: "Can customers vote on roadmap items?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        We prioritize feedback and evidence sufficiency over public voting. You
        can submit context and structured feedback directly through our feedback
        channels.
      </p>
    ),
  },
  {
    id: "faq-5",
    question: "How can I submit a feature request?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        Feature requests can be submitted via your account team or the
        designated intake portal, where they enter Stage 01 (Capture) for
        evidence evaluation.
      </p>
    ),
  },
  {
    id: "faq-6",
    question: "What is early access?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        Early access allows selected participants to test and validate features
        under controlled conditions before general availability.
      </p>
    ),
  },
  {
    id: "faq-7",
    question: "How do I know what is available now?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        Currently available capabilities are listed in our official product
        documentation and system status archive, strictly separated from future
        roadmap directions.
      </p>
    ),
  },
  {
    id: "faq-8",
    question: "Can roadmap availability vary by region or deployment?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        Yes. Availability is qualified separately across regional jurisdictions,
        entities, and deployment models. Direction in one market does not imply
        availability in another.
      </p>
    ),
  },
  {
    id: "faq-9",
    question: "What happens when a roadmap item is paused or deferred?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        When an item is paused or deferred, an appended event log explains the
        reason category without silently overwriting previous history.
      </p>
    ),
  },
  {
    id: "faq-10",
    question: "How can I follow changes?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        You can subscribe to roadmap update notifications for specific records
        or themes through your preference center.
      </p>
    ),
  },
  {
    id: "faq-11",
    question:
      "Does the roadmap include confidential or security-sensitive work?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        No. Security-sensitive details, partner co-development, and confidential
        initiatives are excluded from the public roadmap.
      </p>
    ),
  },
  {
    id: "faq-12",
    question: "Does roadmap content constitute professional advice?",
    answer: (
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
        No. Roadmap content is for informational purposes only and does not
        constitute legal, compliance, financial, or professional advice.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] max-w-xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Timing, commitment, voting, and access
            </h2>
          </motion.div>

          {/* Right Column: Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </motion.div>
        </div>

        {/* Accordion Container */}
        <div className="border-t border-[#E2E8F0] divide-y divide-[#E2E8F0]">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-4 sm:py-5">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
                >
                  <span className="text-sm sm:text-base font-bold text-[#334155] group-hover:text-[#0F172A] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-[#c5a059] shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 max-w-3xl">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
