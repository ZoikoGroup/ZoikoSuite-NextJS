import React from "react";

export default function PartnerCta() {
  return (
    <section className="bg-[#082834] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Column: Heading & Eyebrow */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#C9A34C] text-xs font-bold tracking-[0.2em] uppercase">
              A CONVERSATION STARTS HERE
            </p>
          </div>

          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Bring your collaboration idea to the table.
          </h2>
        </div>

        {/* Right Column: CTA Button */}
        <div className="flex-shrink-0">
          <a
            href="#enquiry"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#E3C065] text-[#082834] text-xs font-bold hover:bg-[#D4AF37] transition-colors duration-200 shadow-md"
          >
            Make a partner enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
