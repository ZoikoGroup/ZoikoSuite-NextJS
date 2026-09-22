import React from "react";

export default function TrustAndAILeadershipSection() {
  const rows = [
    {
      trustArea: "Security",
      responsibility:
        "Clear executive ownership of security architecture, risk acceptance, incident escalation, and security claims.",
      crossLink: "Security Overview",
    },
    {
      trustArea: "Privacy & residency",
      responsibility:
        "Ownership of privacy architecture, data handling principles, residency decisions, and jurisdiction-aware constraints.",
      crossLink: "Privacy Architecture / Data Residency",
    },
    {
      trustArea: "Compliance",
      responsibility:
        "Ownership of control design, evidence, obligations, and externally stated compliance posture.",
      crossLink: "Compliance Overview / Certifications",
    },
    {
      trustArea: "Evidence",
      responsibility:
        "Leadership expectation that material decisions and controls produce defensible evidence.",
      crossLink: "Evidence Architecture",
    },
    {
      trustArea: "Responsible AI",
      responsibility:
        "Ownership of AI boundaries, human oversight, evaluation, monitoring, and disable/rollback authority.",
      crossLink: "Responsible AI",
    },
    {
      trustArea: "Accessibility",
      responsibility:
        "Leadership accountability for accessibility as a product and operating requirement.",
      crossLink: "Accessibility",
    },
    {
      trustArea: "Operational transparency",
      responsibility:
        "Ownership of accurate system-status communication and incident updates.",
      crossLink: "System Status",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-5xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            TRUST & RESPONSIBLE AI LEADERSHIP
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[38px] lg:text-[46px] font-bold text-white leading-tight tracking-tight">
            Accountability for security, privacy, evidence, and AI
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-white/10 mb-12">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-white/10 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-400 uppercase">
            <div className="w-3/12">TRUST AREA</div>
            <div className="w-6/12">LEADERSHIP RESPONSIBILITY</div>
            <div className="w-3/12">CROSS-LINK</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Trust Area */}
              <div className="w-full md:w-3/12 text-white text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Trust Area
                </span>
                {row.trustArea}
              </div>

              {/* Leadership Responsibility */}
              <div className="w-full md:w-6/12 text-gray-300 text-sm md:text-base font-light leading-relaxed pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Leadership Responsibility
                </span>
                {row.responsibility}
              </div>

              {/* Cross-Link */}
              <div className="w-full md:w-3/12 text-gray-300 text-sm md:text-base font-light leading-relaxed">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Cross-Link
                </span>
                {row.crossLink}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note Box */}
        <div className="w-full bg-[#FFFFFF0D] border-l-4 border-[#C8A24A] p-6">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
            Claim rule: leadership does not personally &quot;certify
            compliance,&quot; &quot;guarantee security,&quot; or personally
            assure system availability. Accountability is governance; proof
            remains in the relevant control and evidence systems.
          </p>
        </div>
      </div>
    </section>
  );
}
