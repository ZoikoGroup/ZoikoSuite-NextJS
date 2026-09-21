import React from "react";

export default function TrustAuthorshipSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Header Content */}
      <div className="max-w-6xl w-full flex flex-col items-start mb-10">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            07 / TRUST & AUTHORSHIP
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Ownership, source, and claim authority
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-3xl">
          When Blog & Insights conflicts with an authoritative product, legal,
          security, or evidence source, the authoritative source always wins —
          the article gets corrected, updated, or withdrawn.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card 1: Editorial Team */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="flex flex-col items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
              <img
                src="/doc/pfp.png"
                alt="ZoikoSuite Editorial Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-[#111827] font-semibold text-base tracking-tight">
                ZoikoSuite Editorial Team
              </h3>
            </div>
          </div>
          <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
            Organizational byline for editorially owned content. Reviewer and
            editorial owner recorded internally for governance, even when not
            shown publicly.
          </p>
        </div>

        {/* Card 2: Disclosure */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-3">
              DISCLOSURE
            </span>
            <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
              No sponsored, partner, or conflict-of-interest relationship
              applies to this article. Disclosures are never hidden behind a
              tooltip or footer-only policy.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Graphic Container */}
      <div className="max-w-6xl w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white flex items-center justify-center border border-slate-100">
        <img
          src="/doc/10.png"
          alt="Ownership, source, and claim authority illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
