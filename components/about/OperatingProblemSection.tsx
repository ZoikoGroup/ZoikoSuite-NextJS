import React from "react";

export default function OperatingProblemSection() {
  const problems = [
    {
      number: "01",
      title: "Fragmented systems",
      category: "STRUCTURAL COST",
      description:
        "Separate versions of truth across finance, payroll, HR, contracts, and compliance — delayed decisions and reconciliation overhead.",
    },
    {
      number: "02",
      title: "Jurisdictional blind spots",
      category: "",
      description:
        "Rules vary by entity, worker, transaction, country, state, and filing authority — creating tax, employment, and regulatory exposure.",
    },
    {
      number: "03",
      title: "Governance after execution",
      category: "",
      description:
        "Approvals and policy review happen outside the action path — control failures are discovered too late.",
    },
    {
      number: "04",
      title: "Evidence assembled manually",
      category: "",
      description:
        "Records and approvals must be reconstructed during audit — slow, expensive, and fragile assurance.",
    },
    {
      number: "05",
      title: "Integration sprawl",
      category: "",
      description:
        "Point-to-point dependencies multiply and ownership becomes unclear — expanding security surface and technical debt.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            THE OPERATING PROBLEM
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-[32px] font-serif font-bold text-[#16223A] leading-[1.15] tracking-tight mb-6">
            Your business operates as one system. Your software does not.
          </h1>

          <p className="text-gray-600 text-base font-light leading-relaxed">
            Finance, payroll, HR, contracts, tax, compliance, evidence, and
            reporting often maintain different truths, different approval paths,
            and different jurisdictional assumptions. ZoikoSuite is designed to
            reconnect those operating decisions under one governed control
            model.
          </p>
        </div>

        {/* List / Table Section */}
        <div className="w-full flex flex-col">
          {problems.map((item, index) => (
            <div
              key={index}
              className="w-full py-8 border-t border-gray-200 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12"
            >
              {/* Left Side: Number & Title/Category */}
              <div className="flex items-start gap-8 md:w-5/12">
                <span className="text-[#A8843A] font-serif text-xl md:text-2xl font-medium">
                  {item.number}
                </span>
                <div className="flex flex-col">
                  {item.category && (
                    <span className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">
                      {item.category}
                    </span>
                  )}
                  <h3 className="text-[#0b1329] text-lg md:text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Right Side: Description */}
              <div className="md:w-7/12">
                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom border to close the list */}
          <div className="w-full border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
}
