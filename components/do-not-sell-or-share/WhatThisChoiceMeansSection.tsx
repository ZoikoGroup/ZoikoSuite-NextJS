export default function WhatThisChoiceMeansSection() {
  const cards = [
    {
      title: 'What "sell" means',
      description: "[ Plain-language summary tied to California-law terminology — links to California Privacy Notice for category-level disclosures. ]"
    },
    {
      title: 'What "share" means',
      description: "[ Statutory advertising-related concept explained only after Legal validation. ]"
    },
    {
      title: "What changes after opt-out",
      description: "[ Actual categories of processing/vendor behavior that cease or are restricted — sourced from the approved privacy data inventory. ]"
    },
    {
      title: "What may continue",
      description: "Service delivery, security, fraud prevention, legal obligations, service-provider/contractor processing, and other lawful/exempt activity as validated."
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-[#f6f1e6] pb-[48px] pt-[47px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            WHAT THIS CHOICE MEANS
          </p>
          <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
            Plain-language explanation, no wall of legal text
          </h2>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#dcd6c8] rounded-[8px] flex flex-col items-start p-5 gap-2"
            >
              <h5 className="font-['Inter'] font-bold text-[14px] text-[#16223a] leading-[22.4px]">
                {card.title}
              </h5>
              <p className="font-['Inter'] font-normal text-[12.5px] text-[#4b5872] leading-[20px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}