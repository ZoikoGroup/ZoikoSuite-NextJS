import React from 'react';

export default function ReviewConsentAndSubmissionSection() {
  const rows = [
    {
      element: 'Review screen',
      requirement: 'Shows jurisdiction, relationship, selected right(s), scope, contact channel, and any verification step completed — every section has an Edit link; sensitive evidence/full identifiers are masked, not repeated.',
    },
    {
      element: 'Required declaration',
      requirement: '"I confirm the information I provided is accurate to the best of my knowledge."',
    },
    {
      element: 'Representative-only declaration',
      requirement: 'Authority declaration and legally approved proof/attestation requirement.',
    },
    {
      element: 'Privacy notice link',
      requirement: 'Explains how request data itself is used and retained.',
    },
    {
      element: 'Buttons',
      requirement: 'Primary: "Submit privacy request." Secondary: "Back." No "Agree to Terms" checkbox unless Legal identifies a necessary request-specific declaration — exercising a right is never conditioned on unrelated contractual acceptance.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            REVIEW, CONSENT & SUBMISSION
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Prevent mistakes without adding ceremony
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Element</div>
            <div className="md:col-span-8">Requirement</div>
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
              <div className="md:col-span-8 text-sm text-gray-600 font-light leading-relaxed">
                {row.requirement}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}