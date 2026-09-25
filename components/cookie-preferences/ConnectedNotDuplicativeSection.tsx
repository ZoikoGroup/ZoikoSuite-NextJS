import React from 'react';

export default function ConnectedNotDuplicativeSection() {
  const controls = [
    {
      title: 'Cookie Policy',
      description: 'Explains technologies, categories, purposes, vendors, and durations.',
    },
    {
      title: 'Privacy Policy',
      description: 'Explains personal-data processing, legal bases, sharing, transfers, and rights.',
    },
    {
      title: 'Do Not Sell or Share',
      description: 'Handles applicable statutory sale/share opt-out; may influence marketing/advertising state.',
    },
    {
      title: 'Consumer Rights Request',
      description: 'Handles access, deletion, correction, and portability workflows.',
    },
    {
      title: 'Subprocessor List',
      description: 'Lists processors in applicable service contexts — not every website vendor automatically belongs there.',
    },
    {
      title: 'Accessibility Statement',
      description: 'Explains the accessibility commitment and support route for this interface.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RELATED PRIVACY & LEGAL CONTROLS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Connected, not duplicative
          </h1>
        </div>

        {/* Grid of Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((item, index) => (
            <div
              key={index}
              style={{ borderRadius: '14px' }}
              className="bg-white border border-[#DCD6C8] p-6 shadow-sm flex flex-col gap-2"
            >
              <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}