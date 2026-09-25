import React from 'react';

export default function SourceFulfillmentSection() {
  const rows = [
    {
      element: 'Eligibility',
      behavior: 'Captures product/release/distribution and component/license context — never requires proof of purchase unless the license legally permits and Legal approves.',
    },
    {
      element: 'Request CTA',
      behavior: 'Request corresponding source/licensing materials — no sales CTA in the primary path.',
    },
    {
      element: 'Fulfillment states',
      behavior: 'Received → validation → awaiting details → materials prepared → fulfilled → rejected with legal basis → duplicate → closed.',
    },
    {
      element: 'Written-offer expiry',
      behavior: 'If a legally relevant period applies, fulfillment stays available for the full required period.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SOURCE CODE, COPYLEFT & WRITTEN-OFFER FULFILLMENT
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-4xl">
            Only for records where verified obligations require it — never implies all ZoikoSuite source is open source
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Element</div>
            <div className="md:col-span-8">Required Behavior</div>
          </div>

          {rows.map((row, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? 'border-b border-[#DCD6C8]' : ''
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.element}
              </div>
              <div className="md:col-span-8 max-w-xl text-sm text-gray-600 font-light leading-relaxed">
                {row.behavior}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}