"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Are you GDPR or CCPA compliant?",
    answer: (
      <>
        <p>
          Neither claim is made. Those are absolute statements requiring
          independently verified scope, contractual accuracy and publication
          approval.
        </p>

        <div className="relative mt-2.5 min-h-[88px]">
          <p className="max-w-[783px] pr-0 text-[#5B7178]">
            What is published instead: architecture and control status per
            domain, with explicit scope. Four of the seven posture domains
            currently read &quot;status required&quot; rather than implemented.
          </p>

          <a
            href="#"
            className="mt-2 inline-flex min-h-11 items-center border-b border-transparent py-2.5 text-base font-semibold leading-6 text-[#073B47] transition hover:border-[#073B47]"
          >
            See the claim classes
          </a>
        </div>
      </>
    ),
  },
  {
    question: "Do you use our data to train AI models?",
    answer: (
      <p>
        AI processing is governed by the recorded purpose and applicable data
        classification. Restricted-class data is excluded from AI processing
        paths.
      </p>
    ),
  },
  {
    question: "Does all our data stay in one region?",
    answer: (
      <p>
        Not as a universal claim. Storage, processing, backup, recovery,
        support access and key custody depend on the deployment and configured
        privacy mode.
      </p>
    ),
  },
  {
    question: "What happens when a deletion request hits a legal hold?",
    answer: (
      <p>
        The retention rule and preservation obligation are evaluated together.
        When a hold conflicts with deletion, the conflict is surfaced and an
        owner is identified rather than resolving it silently.
      </p>
    ),
  },
  {
    question: "Do you handle data subject rights requests automatically?",
    answer: (
      <p>
        No material rights decision is made autonomously. Verification, scope
        resolution, conflict checks and a human decision form part of the
        governed workflow.
      </p>
    ),
  },
  {
    question: "How is sensitive data protected from misuse?",
    answer: (
      <p>
        Sensitive data is controlled according to its classification. Access
        can be restricted by role, attribute, entity scope and recorded
        purpose, with access events retained as evidence.
      </p>
    ),
  },
  {
    question: "Do you determine our lawful basis for processing?",
    answer: (
      <p>
        No. The processing activity can reference a legal basis, but the
        customer's lawful basis is not determined by the system.
      </p>
    ),
  },
  {
    question: "Where is your subprocessor list?",
    answer: (
      <p>
        The authoritative subprocessor list is owned by Policies. Until that
        destination is published, the current list is provided through an
        enterprise privacy review.
      </p>
    ),
  },
  {
    question: "What is your breach notification window?",
    answer: (
      <p>
        No universal notification window is committed on this page. Applicable
        notification obligations and contractual commitments depend on the
        approved commercial and contractual documents.
      </p>
    ),
  },
  {
    question: "Is a sovereign deployment available?",
    answer: (
      <p>
        Sovereign deployment is planned, but no availability date is committed
        and no sovereign claim is made on this page.
      </p>
    ),
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-10 lg:gap-14 lg:px-12">
          
          {/* HEADER */}
          <div className="flex w-full flex-col items-start">
            <div className="flex flex-col items-start gap-4 pt-2.5">
              
              {/* Eyebrow */}
              <div className="flex h-5 items-center gap-[9px]">
                <div className="h-[1.5px] w-4 bg-orange-400" />

                <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                  Frequently asked questions
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-semibold leading-tight text-[#073B47] sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
                Compliance, data use,
                <br />
                transfers, rights and AI
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-[691px] text-base font-normal leading-7 text-[#5B7178] sm:text-lg lg:text-xl lg:leading-8">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="w-full max-w-[990px] border-t border-[#B7C7CC]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="w-full border-b border-[#B7C7CC]"
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="flex min-h-14 w-full items-center justify-between gap-6 px-0.5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold leading-7 text-[#073B47]">
                      {faq.question}
                    </span>

                    <span className="flex h-7 w-3 shrink-0 items-center justify-center text-lg font-semibold leading-7 text-orange-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div className="max-w-[846px] px-0.5 pb-5 text-base font-normal leading-6 text-[#073B47]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}