"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is ZoikoSuite Training Academy?",
    answer:
      "A ZoikoSuite Resources destination for published learning paths and training. Exact courses, access, prerequisites, and learning formats depend on the current Academy catalog.",
  },
  {
    question: "Do I need an account?",
    answer:
      "Some Academy content is available through open access, while other courses require a ZoikoSuite account. Access requirements are shown on each course and learning path.",
  },
  {
    question: "Can I track progress?",
    answer:
      "Yes. Where progress tracking is enabled, your completed courses and learning activity can be tracked through the Academy experience. Available tracking features may vary by course and access level.",
  },
  {
    question: "Does Training Academy provide certificates?",
    answer:
      "Certificate availability depends on the specific course or learning path. When a certificate is offered, the course details will indicate the completion requirements and certificate information.",
  },
  {
    question: "Can my organization arrange team training?",
    answer:
      "Yes. Organizations can discuss structured team training and learning plans with a ZoikoSuite solutions architect to determine the appropriate training approach for their teams.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[880px]
          flex-col
          items-start
          gap-2.5
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-3
            pb-8
          "
        >
          <span
            className="
              w-full
              text-xs
              font-normal
              leading-5
              tracking-[0.12em]
              text-[#C28A27]
            "
          >
            09 / FAQ
          </span>

          <h2
            className="
              w-full
              text-2xl
              font-semibold
              leading-8
              text-[#193B4A]
              sm:text-3xl
              sm:leading-10
            "
          >
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="w-full overflow-hidden rounded-xl border border-[#D7E2E6] bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  w-full
                  border-b
                  border-[#D7E2E6]
                  last:border-b-0
                `}
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-5
                    py-4
                    text-left
                  "
                >
                  <span
                    className="
                      text-base
                      font-semibold
                      leading-6
                      text-[#193B4A]
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-center
                      text-lg
                      font-semibold
                      leading-5
                      text-[#C28A27]
                    "
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p
                      className="
                        max-w-[732px]
                        text-sm
                        font-normal
                        leading-6
                        text-[#58727D]
                      "
                    >
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