import React from "react";

export default function SeparatingConsumerWebsiteDataFromCustomerControlledDataSection() {
  const rows = [
    {
      topic: "Customer-controlled data",
      requirement:
        "Contractual roles and instructions may differ from ZoikoSuite's independent-controller activities.",
    },
    {
      topic: "Customer privacy requests",
      requirement:
        "Explains when individuals should contact the customer and how ZoikoSuite assists under contract.",
    },
    {
      topic: "Deletion / return",
      requirement:
        "Contract/DPA-driven treatment — never a universal outcome promised in the public policy.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            BUSINESS CUSTOMERS & PROCESSOR CONTEXT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Separating consumer/website data from customer-controlled data
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Topic</div>
            <div className="md:col-span-8">Requirement</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center bg-[#F6F1E6]"
            >
              {/* Topic Column */}
              <div className="md:col-span-4 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.topic}
              </div>

              {/* Requirement Column */}
              <div className="md:col-span-8 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.requirement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
