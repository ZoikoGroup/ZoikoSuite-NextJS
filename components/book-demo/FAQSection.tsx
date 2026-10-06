"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long is the demo?",
    answer:
      "Most sessions are 30 minutes. If your priorities involve multi-entity, security, or migration complexity, a 45-minute specialist session may be offered.",
  },
  {
    question: "What information do I need to bring?",
    answer:
      "Nothing is required. A rough idea of your entities, close timeline and current systems helps us focus the session, but the demo runs on sample data.",
  },
  {
    question: "Who should attend from our side?",
    answer:
      "Whoever owns the outcomes you selected — typically finance leadership, a controller or operations lead, and anyone responsible for systems or security review.",
  },
  {
    question: "Can we see our own integrations during the demo?",
    answer:
      "The demo uses sample data and standard connectors. If specific integrations matter, list them in your priorities and we will show the closest equivalent and discuss scope.",
  },
  {
    question: "How does this relate to signing up for a trial?",
    answer:
      "They are separate. Booking a demo never creates an account or starts a trial. You can start a trial at any time from the pricing page.",
  },
  {
    question: "Can I reschedule or cancel?",
    answer:
      "Yes. Your confirmation email includes links to reschedule or cancel at any time, with no obligation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[756px] mx-auto flex flex-col items-center">
        <div className="max-w-[640px] pb-10 flex flex-col gap-3.5">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-5 h-px bg-[#B8913F]" />
            <span className="text-xs font-semibold tracking-wide text-[#B8913F]">
              FAQ
            </span>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#101E2B] leading-9">
            Common questions about the demo
          </h2>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-4 border-b border-[#E4E1D8]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-base font-bold text-[#101E2B]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-xl text-[#8B959D]">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pt-2 pb-3 text-sm text-[#66727C] leading-5">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
