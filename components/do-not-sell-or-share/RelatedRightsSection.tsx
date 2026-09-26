export default function RelatedRightsSection() {
  const cards = [
    {
      title: "California Privacy Notice",
      description: "See categories, purposes, disclosures and California-specific rights."
    },
    {
      title: "Consumer Rights Request",
      description: "Submit access, deletion, correction or other supported privacy requests."
    },
    {
      title: "Limit Sensitive Personal Information",
      description: "Shown only if applicable and implemented."
    },
    {
      title: "Cookie Preferences",
      description: "Manage optional cookies and similar technologies — not necessarily the same as this statutory opt-out."
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-white pb-[48px] pt-[47px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            RELATED CALIFORNIA PRIVACY RIGHTS
          </p>
          <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
            Connected, not duplicative
          </h2>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#dcd6c8] rounded-[8px] flex flex-col items-start px-4 pt-[15px] pb-[38px] gap-2"
            >
              <h5 className="font-['Inter'] font-bold text-[13px] text-[#16223a] leading-[20.8px]">
                {card.title}
              </h5>
              <p className="font-['Inter'] font-normal text-[11.5px] text-[#4b5872] leading-[18.4px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}