export default function ConfirmationSection() {
  const fields = [
    {
      label: "Reference",
      value: "[ Privacy-safe reference ID — never an internal database identifier ]"
    },
    {
      label: "Timestamp",
      value: "[ Localized date/time with timezone or clear UTC treatment ]"
    },
    {
      label: "Scope",
      value: "[ Plain statement of what the preference currently covers ]"
    },
    {
      label: "Next steps",
      value: "Mapped sale/sharing will stop as required; propagation may take time."
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-white pb-[48px] pt-[47px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            CONFIRMATION & FULFILLMENT
          </p>
          <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
            Immediate, durable confirmation
          </h2>
        </div>

        {/* Card */}
        <div className="w-full max-w-[680px] bg-white border border-[#dcd6c8] rounded-[10px] mt-4 flex flex-col">
          {/* Header */}
          <div className="px-7 pt-7 pb-5">
            <h4 className="font-['Inter'] font-bold text-[16px] text-[#16223a] leading-[25.6px]">
              Your opt-out request has been recorded
            </h4>
          </div>

          {/* Status field */}
          <div className="flex flex-col md:flex-row md:items-start px-7 py-[9px] border-t border-[#dcd6c8] gap-1 md:gap-0">
            <span className="w-full md:w-[150px] shrink-0 font-['Inter'] font-bold text-[10.5px] text-[#4b5872] tracking-[0.42px] uppercase leading-[16.8px] pt-1">
              Status
            </span>
            <div className="flex-1">
              <span className="inline-flex items-center justify-center bg-[#f6f1e6] border border-[#dcd6c8] rounded-full px-3 py-1 font-['Inter'] font-extrabold text-[10px] text-[#4b5872] tracking-[0.5px] uppercase leading-[16px]">
                Recorded
              </span>
            </div>
          </div>

          {/* Mapped fields */}
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start px-7 py-[9px] border-t border-[#dcd6c8] gap-1 md:gap-0">
              <span className="w-full md:w-[150px] shrink-0 font-['Inter'] font-bold text-[10.5px] text-[#4b5872] tracking-[0.42px] uppercase leading-[16.8px] pt-1">
                {field.label}
              </span>
              <span className="flex-1 font-['Inter'] font-normal text-[12.5px] text-[#16223a] leading-[20px]">
                {field.value}
              </span>
            </div>
          ))}

          {/* Persistence field */}
          <div className="flex flex-col md:flex-row md:items-start px-7 py-[9px] border-t border-[#dcd6c8] gap-1 md:gap-0">
            <span className="w-full md:w-[150px] shrink-0 font-['Inter'] font-bold text-[10.5px] text-[#4b5872] tracking-[0.42px] uppercase leading-[16.8px] pt-1">
              Persistence
            </span>
            <span className="flex-1 font-['Inter'] font-normal text-[12.5px] text-[#4b5872] leading-[20px]">
              [ Browser/device storage implications, including what happens if cookies/site data are cleared ]
            </span>
          </div>

          {/* Support field */}
          <div className="flex flex-col md:flex-row md:items-center px-7 pt-[9px] pb-7 border-t border-[#dcd6c8] gap-1 md:gap-0">
            <span className="w-full md:w-[150px] shrink-0 font-['Inter'] font-bold text-[10.5px] text-[#4b5872] tracking-[0.42px] uppercase leading-[16.8px]">
              Support
            </span>
            <div className="flex-1">
              <a href="#" className="inline-flex border-b border-[#a8843a] font-['Inter'] font-bold text-[12.5px] text-[#123255] leading-[20px] pb-0.5">
                Consumer Rights Request →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}