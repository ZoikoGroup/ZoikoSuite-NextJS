import React from "react";

export default function CommonQuestionsSection() {
  const faqs = [
    {
      question: "What technologies does ZoikoSuite use?",
      answer:
        "Answered from the published, registry-derived inventory covering cookies, storage, pixels, scripts, and SDKs — not a generic list.",
    },
    {
      question: "Can I reject optional cookies?",
      answer:
        "Yes, through Cookie Preferences — rejecting is as easy as accepting, and public content remains accessible after rejection.",
    },
    {
      question: "Does ZoikoSuite use advertising cookies?",
      answer:
        'Only if the registry proves current use; the Advertising/Marketing category is shown as "not currently used" otherwise.',
    },
    {
      question: "Does deleting cookies delete my data?",
      answer:
        "Deleting a browser cookie clears local storage only — it does not delete server-side records unless verified and disclosed separately.",
    },
    {
      question: "Does ZoikoSuite honor Global Privacy Control?",
      answer:
        "Where legally applicable and technically supported, the recognized signal feeds the same suppression state as the dedicated opt-out control.",
    },
    {
      question: "How is this different from the Privacy Policy?",
      answer:
        "This policy covers cookies and similar technologies specifically; the Privacy Policy covers the full scope of personal-data practices.",
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
