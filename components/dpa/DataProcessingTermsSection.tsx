import React from 'react';

export default function DataProcessingTermsSection() {
  return (
    <section className="relative w-full bg-[#FBFAF7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-start">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            DATA PROCESSING AGREEMENT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Data processing terms for ZoikoSuite business customers.
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[15.5px] max-w-3xl">
            Review the approved terms that govern ZoikoSuite processing of customer personal data where an applicable Zoiko entity acts as a processor or subprocessor. The operative agreement, processing schedule, security measures, subprocessors, and transfer terms depend on the customer, service, deployment, and jurisdiction.
          </p>
        </div>

      </div>
    </section>
  );
}