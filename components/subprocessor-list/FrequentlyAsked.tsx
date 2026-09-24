"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is a ZoikoSuite subprocessor?",
    answer: "A third party approved to process in-scope customer personal data on behalf of an applicable Zoiko processor role — not every supplier or integration qualifies."
  },
  {
    question: "Does every customer use every subprocessor?",
    answer: "No universal claim — applicability can depend on service, deployment, region, and customer configuration."
  },
  {
    question: "Where do subprocessors process data?",
    answer: "Registry locations reflect actual processing locations, not merely corporate headquarters."
  },
  {
    question: "How will I know when the list changes?",
    answer: "Through the subscription and contract-governed notice mechanism — exact timing comes from the applicable DPA."
  },
  {
    question: "Can I object to a new subprocessor?",
    answer: "Only as provided by the applicable DPA — routed to the contractual concern flow."
  },
  {
    question: "Does a subprocessor's country mean my data is transferred there?",
    answer: "Not necessarily — country, service region, actual processing, and legal transfer context are separate concepts."
  }
];

export const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open to match Figma

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            FREQUENTLY ASKED
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Common questions
          </div>
        </div>
        <div className="self-stretch pt-2 flex flex-col justify-start items-start">
          
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`self-stretch w-full pt-9 pb-4 border-t ${index === faqs.length - 1 ? 'border-b ' : ''}border-color-orange-82 flex flex-col justify-start items-start gap-5 cursor-pointer`}
              onClick={() => toggleOpen(index)}
            >
              <div className="self-stretch w-full inline-flex justify-between items-start">
                <div className="justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-6">{faq.question}</div>
                <div className="justify-center text-color-orange-44 text-sm font-extrabold font-['Inter'] leading-6">
                  {openIndex === index ? "−" : "+"}
                </div>
              </div>
              {openIndex === index && (
                <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
                  <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};
