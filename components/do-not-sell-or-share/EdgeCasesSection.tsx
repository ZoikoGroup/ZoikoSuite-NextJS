export default function EdgeCasesSection() {
  const rows = [
    {
      scenario: "Authorized agent",
      ux: "Separate flow explaining required proof/permission and any direct consumer confirmation allowed or required by law."
    },
    {
      scenario: "Consumer under 16",
      ux: "Not processed through the ordinary adult opt-out if a legally distinct opt-in obligation applies — routed to a validated minor privacy flow."
    },
    {
      scenario: "No matching profile",
      ux: "Confirms the browser/device preference if possible; states that no additional profile could be associated rather than denying the right."
    },
    {
      scenario: "Conflicting account/browser states",
      ux: "Applies the legally controlling preference and explains scope; escalates ambiguous conflicts to Privacy Operations."
    },
    {
      scenario: "Jurisdiction outside California",
      ux: "Never silently rejected — explains this page is designed for California rights and links to the general Consumer Rights Request."
    },
    {
      scenario: "Abuse/bot traffic",
      ux: "Rate-limited safely without blocking legitimate privacy signals or creating a discriminatory barrier."
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-[#f6f1e6] pb-[48px] pt-[47px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            AUTHORIZED AGENTS, MINORS & EDGE CASES
          </p>
          <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
            Every dead end is handled — never a silent denial
          </h2>
        </div>

        {/* Table */}
        <div className="w-full border border-[#dcd6c8] rounded-[8px] overflow-hidden mt-3 flex flex-col bg-transparent">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] bg-transparent border-b border-[#dcd6c8]">
            <div className="px-[14px] py-[10px] border-r border-[#dcd6c8]">
              <p className="font-['Inter'] font-bold text-[12px] text-[#4b5872] tracking-[0.52px] uppercase leading-[19.2px]">
                Scenario
              </p>
            </div>
            <div className="px-[14px] py-[10px]">
              <p className="font-['Inter'] font-bold text-[12px] text-[#4b5872] tracking-[0.52px] uppercase leading-[19.2px]">
                Required UX
              </p>
            </div>
          </div>

          {/* Table Body */}
          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] ${
                index !== rows.length - 1 ? 'border-b border-[#dcd6c8]' : ''
              }`}
            >
              <div className="px-[14px] py-[10px] border-r border-[#dcd6c8]">
                <p className="font-['Inter'] font-normal text-[12px] text-[#16223a] leading-[19.2px]">
                  {row.scenario}
                </p>
              </div>
              <div className="px-[14px] py-[10px]">
                <p className="font-['Inter'] font-normal text-[12px] text-[#16223a] leading-[19.2px]">
                  {row.ux}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}