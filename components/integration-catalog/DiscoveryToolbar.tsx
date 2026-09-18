import React from "react";

export default function DiscoveryToolbar() {
  const filterButtons = [
    "Category",
    "Use case",
    "Availability",
    "Deployment",
    "Auth",
  ];

  return (
    <div className="self-stretch px-20 py-5 bg-white outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 inline-flex justify-start items-center gap-4 w-full max-w-[1440px] mx-auto">
      {/* Search Input Field */}
      <div className="flex-1 h-11 px-4 bg-[#F7F5F0] rounded-lg outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 flex justify-start items-center gap-3">
        <div className="w-4 h-4 inline-flex flex-col justify-center items-center overflow-hidden">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-3 h-3 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-[#5B6670]" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Search integrations, vendors, products, or use cases..."
          className="flex-1 bg-transparent border-none outline-none text-[#5B6670] text-sm font-normal font-['Manrope'] placeholder:text-[#5B6670]"
        />
      </div>

      {/* Filter and Sort Options */}
      <div className="flex justify-start items-center gap-2">
        {filterButtons.map((label, index) => (
          <button
            key={index}
            className="h-11 px-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 hover:bg-[#123B4C]/5 transition-colors flex justify-start items-center gap-1.5 cursor-pointer"
          >
            <span className="text-[#0A2029] text-sm font-semibold font-['Manrope']">
              {label}
            </span>
            <div className="w-2.5 h-2.5 inline-flex flex-col justify-center items-center overflow-hidden">
              <div className="w-2.5 h-2.5 relative overflow-hidden">
                <div className="w-[5px] h-[2.50px] left-[2.50px] top-[3.75px] absolute outline outline-2 outline-offset-[-1px] outline-[#0A2029]" />
              </div>
            </div>
          </button>
        ))}

        {/* Sort Button */}
        <button className="h-11 px-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 hover:bg-[#123B4C]/5 transition-colors flex justify-start items-center gap-1.5 cursor-pointer">
          <span className="text-[#0A2029] text-sm font-semibold font-['Manrope']">
            Sort: Popular
          </span>
          <div className="w-3 h-3 inline-flex flex-col justify-center items-center overflow-hidden">
            <div className="w-3 h-3 relative overflow-hidden">
              <div className="w-2 h-2 left-[1.50px] top-[2px] absolute outline outline-1 outline-offset-[-0.50px] outline-[#0A2029]" />
            </div>
          </div>
        </button>

        {/* Reset Button */}
        <button className="h-11 px-3 flex justify-center items-center hover:opacity-85 transition-opacity cursor-pointer">
          <span className="text-[#C44242] text-sm font-semibold font-['Manrope']">
            Reset
          </span>
        </button>
      </div>

      {/* Connector Count Badge */}
      <div className="h-10 pl-4 outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 flex justify-start items-center bg-white">
        <span className="text-[#0A2029] text-xs font-bold font-['JetBrains_Mono'] tracking-wide">
          42 CONNECTORS
        </span>
      </div>
    </div>
  );
}
