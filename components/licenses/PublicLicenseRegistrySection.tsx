import React from 'react';

export default function PublicLicenseRegistrySection() {
  const rows = [
    {
      rule: 'Exact identifiers',
      specification: 'Searching MIT, Apache-2.0, MPL-2.0, or another identifier matches the stored approved identifier/expression — never a guessed family.',
    },
    {
      rule: 'Custom licenses',
      specification: 'Searchable by approved title and internal/public identifier — never assigned a fake SPDX ID.',
    },
    {
      rule: 'Deprecated identifiers',
      specification: 'Historical records display the release-era record plus current mapping if approved — historical legal evidence is never silently rewritten.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-whire py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PUBLIC LICENSE REGISTRY
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            The primary product-proof surface — real governed registry, approved public records only
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Search Rule</div>
            <div className="md:col-span-8">Specification</div>
          </div>

          {rows.map((row, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? 'border-b border-[#DCD6C8]' : ''
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.rule}
              </div>
              <div className="md:col-span-8 text-sm text-gray-600 max-w-xl font-light leading-relaxed">
                {row.specification}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}