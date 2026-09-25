import React from "react";

export default function CommonQuestionsSection() {
  const faqs = [
    {
      question: "What personal data does ZoikoSuite collect?",
      answer:
        "Answered from the published category matrix — no generic categories are listed that aren't actually processed.",
    },
    {
      question: "Does ZoikoSuite sell or share personal information?",
      answer:
        "Stated only from the California/privacy registry status, with a route to opt-out where applicable.",
    },
    {
      question: "Does ZoikoSuite use my data to train AI models?",
      answer:
        "Answered by product/context/provider/deployment only where verified, linking to Responsible AI.",
    },
    {
      question: "Where is my data stored?",
      answer:
        "Storage/processing/residency varies by service/deployment — linked to Data Residency.",
    },
    {
      question: "How do I delete or access my data?",
      answer: "Directed to the rights request flow or account controls.",
    },
    {
      question: "Who are ZoikoSuite's subprocessors?",
      answer: "Directed to the current Subprocessor List.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ List Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#F6F1E6]"
            >
              <div className="flex flex-col gap-2 max-w-4xl">
                <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
                  {faq.question}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                  {faq.answer}
                </p>
              </div>

              {/* Plus Icon Indicator */}
              <div className="text-[#A8843A] text-xl font-medium self-start md:self-center">
                +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
