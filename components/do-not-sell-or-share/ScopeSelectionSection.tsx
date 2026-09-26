export default function ScopeSelectionSection() {
  const cards = [
    {
      title: "This browser or device",
      description: "Default path — no email required if the relevant sale/share activity can be stopped locally."
    },
    {
      title: "Your signed-in ZoikoSuite profile",
      description: "Broader association offered only if supported and lawful, with the effect explained."
    },
    {
      title: "Multiple products/domains",
      description: "Product scope selector shown only when necessary — never forces separate opt-outs if one request can legally and technically cover the estate."
    },
    {
      title: "No sale/share applicable",
      description: "Informational state — never a fake success action. States the verified current practice and preserves GPC handling where required."
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-white pt-[47px] pb-[48px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            CHOOSE YOUR OPT-OUT SCOPE
          </p>
          <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
            Only scope choices the architecture can actually enforce
          </h2>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-3 border-t border-l border-[#dcd6c8] rounded-[8px] overflow-hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border-b border-r border-[#dcd6c8] flex flex-col items-start justify-start p-[18px] gap-[7px]"
            >
              <h5 className="font-['Inter'] font-bold text-[13.5px] text-[#16223a] leading-[21.6px]">
                {card.title}
              </h5>
              <p className="font-['Inter'] font-normal text-[12px] text-[#4b5872] leading-[19.2px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}