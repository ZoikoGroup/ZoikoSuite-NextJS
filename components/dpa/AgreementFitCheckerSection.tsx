import React from 'react';

export default function AgreementFitCheckerSection() {
  const rows = [
    {
      label: 'Who is contracting?',
      options: ['Customer legal entity', 'Reseller/partner', 'Affiliate', 'Public-sector entity'],
    },
    {
      label: 'What is the relationship?',
      options: ['Direct customer', 'Processor-to-processor', 'Partner', 'Other'],
    },
    {
      label: 'Which service/deployment?',
      options: ['Multi-tenant SaaS', 'Dedicated', 'Single-tenant', 'Sovereign'],
    },
    {
      label: 'Which jurisdictions?',
      options: ['EEA', 'UK', 'US', 'Other / Multiple'],
    },
    {
      label: 'Special/sensitive categories?',
      options: ['Yes', 'No', 'Unknown'],
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            AGREEMENT FIT CHECKER
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Which legal package applies to you?
          </h1>
        </div>

        {/* Card Container */}
        <div 
          style={{ borderRadius: '14px' }}
          className="w-full bg-white border border-[#DCD6C8] p-8 md:p-10 shadow-sm flex flex-col gap-6"
        >
          {/* Disclaimer text */}
          <p className="text-xs text-gray-500 font-light italic mb-2">
            Routing only — not legal advice, and not part of the executed agreement.
          </p>

          {/* Rows */}
          <div className="w-full flex flex-col">
            {rows.map((row, index) => (
              <div
                key={index}
                className="py-6 border-b border-[#DCD6C8] last:border-b-0 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="text-[#0b1329] text-base font-semibold tracking-tight lg:w-1/3">
                  {row.label}
                </div>
                <div className="flex flex-wrap gap-2 lg:w-2/3">
                  {row.options.map((opt, optIdx) => (
                    <span
                      key={optIdx}
                      style={{ borderRadius: '9999px' }}
                      className="px-4 py-2 border border-[#DCD6C8] text-[#0b1329] text-xs font-medium bg-[#FBFAF7] shadow-xs"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
