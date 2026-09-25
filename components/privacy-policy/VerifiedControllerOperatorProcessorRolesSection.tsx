import React from "react";

export default function VerifiedControllerOperatorProcessorRolesSection() {
  const rows = [
    {
      field: "Primary privacy entity",
      content:
        "[ Verified legal name; role; registered address; privacy contact — pending registry ]",
    },
    {
      field: "ZoikoSuite / Zoiko Tech relationship",
      content: "[ Legal-approved relationship statement ]",
    },
    {
      field: "Customer processor context",
      content:
        "When ZoikoSuite processes customer-controlled personal data under customer instructions, routes to the DPA.",
    },
    {
      field: "EU/UK representative",
      content: "[ Only where required and verified ]",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHO IS RESPONSIBLE FOR YOUR DATA
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Verified controller / operator / processor roles
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-50/50 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Field</div>
            <div className="md:col-span-8">Content</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center bg-white"
            >
              {/* Field Column */}
              <div className="md:col-span-4 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.field}
              </div>

              {/* Content Column */}
              <div className="md:col-span-8 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
