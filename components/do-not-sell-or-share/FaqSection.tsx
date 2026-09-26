export default function FaqSection() {
  const faqs = [
    {
      question: "Do I need a ZoikoSuite account to opt out?",
      answer: "No account should be required solely to submit this opt-out. Additional information is requested only when needed to associate the preference with relevant personal information."
    },
    {
      question: "What is Global Privacy Control?",
      answer: "GPC is a browser- or device-enabled privacy signal that can communicate an opt-out preference. Qualifying signals must be handled in accordance with applicable California requirements."
    },
    {
      question: "Does opting out delete my information?",
      answer: "No. An opt-out of sale/sharing is different from a deletion request. Use the Consumer Rights Request path for deletion where available."
    },
    {
      question: "Is this the same as rejecting cookies?",
      answer: "Not necessarily. Cookie preferences and the statutory sale/share opt-out can overlap technically, but they are distinct rights and controls."
    },
    {
      question: "Will opting out affect my ZoikoSuite service?",
      answer: "Exercising a California privacy right must not result in prohibited discrimination. Some processing may continue where needed to provide the service, maintain security, comply with law, or for other permitted purposes."
    },
    {
      question: "How long does my choice last?",
      answer: "The interface states the actual persistence implemented for your browser, device, or account. Clearing site data or changing devices can affect locally stored preferences."
    },
    {
      question: "What if I live outside California?",
      answer: "Use the Consumer Rights Request page to see and exercise privacy rights available for your location."
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-[#f6f1e6] pb-[48px] pt-[47px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            FREQUENTLY ASKED
          </p>
          <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
            Common questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col mt-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`flex flex-col gap-[17px] pt-[31px] pb-[14px] border-[#dcd6c8] ${
                index === 0 ? 'border-t' : 'border-t'
              } ${index === faqs.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex justify-between items-start w-full">
                <h4 className="font-['Inter'] font-bold text-[13.5px] text-[#16223a] leading-[21.6px]">
                  {faq.question}
                </h4>
                <span className="font-['Inter'] font-extrabold text-[13.5px] text-[#a8843a] leading-[21.6px]">
                  +
                </span>
              </div>
              <p className="font-['Inter'] font-normal text-[12px] text-[#4b5872] leading-[19.2px] max-w-[744px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}