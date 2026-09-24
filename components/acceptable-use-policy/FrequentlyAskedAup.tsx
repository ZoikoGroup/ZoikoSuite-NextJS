'use client';
import React, { useState } from 'react';

const FAQItem = ({ question, answer, isLast }: { question: string, answer: string, isLast?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className={`self-stretch pt-9 pb-4 border-t border-color-orange-82 flex flex-col justify-start items-start gap-5 cursor-pointer ${isLast ? 'border-b' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="self-stretch inline-flex justify-between items-start">
        <div className="justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-6">{question}</div>
        <div className="justify-center text-color-orange-44 text-sm font-extrabold font-['Inter'] leading-6">{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export const FrequentlyAskedAup = () => {
  const faqs = [
    {
      question: "Does the AUP apply to APIs and integrations?",
      answer: "Yes, where the operative policy includes them — use approved interfaces and authorization."
    },
    {
      question: "Can I run automated agents?",
      answer: "Only within approved product, contract, authorization, and technical limits; the account remains responsible for actions."
    },
    {
      question: "Can I perform security testing?",
      answer: "Use the Security Disclosure / vulnerability-research route — the AUP alone does not grant authorization."
    },
    {
      question: "What happens if ZoikoSuite suspects abuse?",
      answer: "ZoikoSuite may investigate, contain, restrict, or take other action under the policy/contract; serious risks can require immediate measures."
    },
    {
      question: "Can I appeal an enforcement action?",
      answer: "Where an appeal route is available, the notice explains how — not every action or legal obligation permits the same review process."
    },
    {
      question: "How does this apply to AI?",
      answer: "AI/agents do not remove user/account responsibility — all authorization, privacy, security, fraud, and evidence rules still apply."
    }
  ];

  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            FREQUENTLY ASKED
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Common questions
          </div>
        </div>
        <div className="self-stretch pt-2 flex flex-col justify-start items-start">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isLast={index === faqs.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
