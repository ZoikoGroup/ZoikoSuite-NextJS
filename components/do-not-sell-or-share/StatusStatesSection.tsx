export default function StatusStatesSection() {
  const cards = [
    {
      dotColor: "bg-[#9aa5b8]",
      title: "No signal detected",
      description: '"You can submit an opt-out below." \u2192 Opt out',
    },
    {
      dotColor: "bg-[#a8843a]",
      title: "GPC detected",
      description:
        '"Your browser is sending an opt-out preference signal. We will apply it where required and supported." \u2192 View scope',
    },
    {
      dotColor: "bg-[#3d7a52]",
      title: "Preference recorded",
      description:
        '"This browser/device or identified profile has an active opt-out preference." \u2192 View details',
    },
    {
      dotColor: "bg-[#a8843a]",
      title: "Unknown",
      description:
        '"We could not confirm your status. You can still submit a manual opt-out." \u2192 Continue manually',
    },
    {
      dotColor: "bg-[#a8433a]",
      title: "Technical error",
      description:
        '"Status unavailable. Your rights are not affected. Try again or use the manual request path." \u2192 Use manual request',
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-[#f6f1e6] pt-[47px] pb-[48px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-2">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            PRIVACY CHOICE STATUS — ALL DETERMINISTIC STATES
          </p>
          <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
            Five possible states, never a guess
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#dcd6c8] rounded-[8px] flex flex-col items-start p-5 h-auto md:h-[112px]"
            >
              <div className="relative pl-[14px] flex flex-col gap-2">
                {/* Hanging Bullet */}
                <span className={`absolute left-0 top-[7px] w-2 h-2 rounded-sm ${card.dotColor}`} />
                
                {/* Title */}
                <h5 className="font-['Inter'] font-bold text-[14px] text-[#16223a] leading-[22.4px]">
                  {card.title}
                </h5>
                
                {/* Description */}
                <p className="font-['Inter'] font-normal text-[12.5px] text-[#4b5872] leading-[20px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}