import React from "react";

export default function CommonQuestionsAlternativeSection() {
  const faqs = [
    {
      question: "Can I reject optional cookies?",
      answer:
        "Yes. Where optional technologies are present, the interface provides a direct way to reject them, subject to the applicable rules for the technology and jurisdiction.",
    },
    {
      question: "Can I change my mind later?",
      answer:
        "Yes — reopen Cookie Preferences from the footer and save a new choice. Withdrawal is designed to be as easy as granting consent.",
    },
    {
      question: "Why can't I turn off strictly necessary technologies?",
      answer:
        "They support approved essential functions such as requested service delivery, security, authentication, routing, or storing the privacy choice itself. Each item remains inspectable.",
    },
    {
      question: "What is Global Privacy Control?",
      answer:
        "GPC is a browser/device opt-out preference signal. Where applicable and supported, ZoikoSuite's resolver processes the signal according to the relevant privacy rules and shows the resulting state.",
    },
    {
      question: "Does rejecting cookies delete data already collected?",
      answer:
        "Not necessarily. Rejecting/withdrawing controls future optional activation; separate privacy rights may apply to existing personal information.",
    },
    {
      question: "Why am I being asked again?",
      answer:
        "A request can reappear after storage is cleared, the preference expires, the rules materially change, or a new purpose requires a fresh decision.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
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

        {/* Semantic HTML Table / List Structure */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8]">
                <th className="py-0"></th>
                <th className="py-0"></th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-white"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top w-3/4">
                    <div className="mb-2">{faq.question}</div>
                    <div className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                      {faq.answer}
                    </div>
                  </td>
                  <td className="py-6 text-right text-[#A8843A] font-semibold text-lg align-top w-1/4">
                    +
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
