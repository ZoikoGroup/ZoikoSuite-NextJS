import React from "react";

export default function RetentionDeletionAndLegalHoldsSection() {
  const rows = [
    {
      categoryRecordType: "Account & identity data",
      defaultRetentionCriteria: "[ Specific period or criteria — registry ]",
      trigger: "Account closure",
    },
    {
      categoryRecordType: "Support & communications",
      defaultRetentionCriteria: "[ Specific period or criteria — registry ]",
      trigger: "Support closure",
    },
    {
      categoryRecordType: "Customer-controlled content",
      defaultRetentionCriteria:
        "DPA/contract controls and customer configuration.",
      trigger: "Contract end",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RETENTION, DELETION & LEGAL HOLDS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Category-level periods, not vague universal wording
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Category / Record Type</div>
            <div className="md:col-span-5">Default Retention / Criteria</div>
            <div className="md:col-span-3">Trigger</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
            >
              {/* Category / Record Type Column */}
              <div className="md:col-span-4 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.categoryRecordType}
              </div>

              {/* Default Retention / Criteria Column */}
              <div className="md:col-span-5 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.defaultRetentionCriteria}
              </div>

              {/* Trigger Column */}
              <div className="md:col-span-3 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.trigger}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
