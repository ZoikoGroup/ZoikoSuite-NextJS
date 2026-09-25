"use client"
import React, { useState } from "react";

export default function FrequentlyAskedQuestionsSection() {
  const faqs = [
    {
      question: "What is the ZoikoSuite Data Processing Agreement?",
      answer:
        "It governs in-scope processing of customer personal data where an applicable Zoiko entity acts as processor/subprocessor, subject to the executed agreement and schedules.",
    },
    {
      question: "Do I need to sign the DPA separately?",
      answer:
        "Depends on the actual execution model — standalone signature, incorporation, click acceptance, or negotiated agreement. Not assumed by default.",
    },
    {
      question: "Who is the processor?",
      answer:
        "The applicable Zoiko legal entity and role depend on the customer, service, and processing context; the operative DPA identifies the parties.",
    },
    {
      question: "Does the DPA include SCCs?",
      answer:
        "Only where applicable. EU SCC/UK transfer modules are activated according to the actual transfer context.",
    },
    {
      question: "What happens to data when the service ends?",
      answer:
        "Customer return/delete choice and exceptions are described only as stated in the operative schedule.",
    },
    {
      question: "Can we negotiate the DPA?",
      answer:
        "Standard vs. negotiated paths both exist — the request-review workflow does not promise acceptance of any specific change.",
    },
  ] as const;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#DCD6C8] py-6 first:border-t"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#A8843A] text-xl font-medium transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
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
