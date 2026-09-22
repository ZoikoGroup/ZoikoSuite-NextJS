"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is ZoikoSuite Knowledge Base?",
    answer:
      "A public Resources destination for approved ZoikoSuite self-service help. Exact products, topics, and versions shown depend on the published Knowledge Base Registry.",
  },
  {
    question: "How do I know whether an article is current?",
    answer:
      "Check the article's currentness and status information before following its guidance. Published current articles are approved for normal use, while review-due, deprecated, or superseded articles include clear status indicators and links to newer guidance when available.",
  },
  {
    question: "Are diagnostic commands safe to run?",
    answer:
      "Diagnostic commands provided in approved Knowledge Base articles are intended to help identify issues without changing system configuration. Always review the command and its stated scope before running it, and follow any permissions or safety requirements included in the article.",
  },
  {
    question: "What if this article doesn't solve my issue?",
    answer:
      "Check the related documentation and troubleshooting guidance linked from the article. If the issue remains unresolved, use the available support handoff to contact the appropriate ZoikoSuite support team with the relevant symptoms, error details, and diagnostic information.",
  },
  {
    question: "Does Knowledge Base require a sales conversation?",
    answer:
      "No. The Knowledge Base provides approved self-service documentation that can be browsed without starting a sales conversation. If you need help evaluating ZoikoSuite for your organization, you can separately contact a solutions architect or sales representative.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-72 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 bg-color-grey-95"
      style={{
        backgroundColor:
          "var(--color-color-grey-95, var(--color-grey-95, #F7F6F2))",
      }}
    >
      <div className="w-full max-w-[880px] mx-auto px-0 sm:px-6 lg:px-12 flex flex-col justify-start items-start gap-2.5">
        {/* Header */}
        <div className="self-stretch pb-6 sm:pb-8 flex flex-col justify-start items-start gap-3">
          {/* Eyebrow */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <div
              className="self-stretch text-color-orange-40 text-xs font-normal leading-5 tracking-wider"
              style={{
                color:
                  "var(--color-color-orange-40, var(--color-orange-40, #C65D1E))",
              }}
            >
              09 / FAQ
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <div
              className="self-stretch text-color-azure-14 text-2xl sm:text-3xl font-semibold leading-8 sm:leading-10"
              style={{
                color:
                  "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
              }}
            >
              Frequently asked questions
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="self-stretch bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-azure-88 flex flex-col justify-start items-start overflow-hidden"
              style={{
                backgroundColor:
                  "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
                outlineColor:
                  "var(--color-color-azure-88, var(--color-azure-88, #DCEAEC))",
              }}
            >
              {/* Question */}
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
                className="w-full px-4 sm:px-5 py-4 flex justify-between items-center gap-4 text-left cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex-1 min-w-0">
                  <div
                    className="text-color-azure-14 text-sm sm:text-base font-semibold"
                    style={{
                      color:
                        "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                    }}
                  >
                    {faq.question}
                  </div>
                </div>

                <div className="shrink-0">
                  <div
                    className="text-color-orange-40 text-lg font-semibold leading-none"
                    style={{
                      color:
                        "var(--color-color-orange-40, var(--color-orange-40, #C65D1E))",
                    }}
                  >
                    {isOpen ? "–" : "+"}
                  </div>
                </div>
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="self-stretch px-4 sm:px-5 pb-4">
                  <div
                    className="max-w-[700.21px] text-color-azure-41 text-sm font-normal leading-6"
                    style={{
                      color:
                        "var(--color-color-azure-41, var(--color-azure-41, #5B7178))",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}