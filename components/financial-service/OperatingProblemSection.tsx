import React from "react";

export default function OperatingProblemSection() {
  return (
    <section className="w-full bg-white text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid / Flex */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#C59B3F" }}
              >
                THE OPERATING PROBLEM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.15]">
              Financial operations behave like one system. Fragmented software
              does not.
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-10 flex items-start">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Five symptoms, each paired with the exposure it creates for an
              executive. No percentages, benchmarks or ROI figures — those would
              be invented.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid (5 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          {/* Card 1 */}
          <div
            className="bg-white rounded-xl p-4 flex flex-col justify-between"
            style={{
              border: "1px solid #8A3B3B",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3">
                01
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Fragmented systems
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Finance, payroll, HR, contracts and compliance maintain separate
                versions of truth.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Delayed decisions and reconciliation overhead.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white rounded-xl p-4 flex flex-col justify-between"
            style={{
              border: "1px solid #8A3B3B",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3">
                02
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Jurisdictional blind spots
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rules change by entity, transaction, country, state or province,
                filing authority and effective date.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Tax and regulatory exposure.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white rounded-xl p-4 flex flex-col justify-between"
            style={{
              border: "1px solid #8A3B3B",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3">
                03
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Governance after execution
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Approvals, policy checks and legal review happen outside the
                action path.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Control failures discovered too late.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white rounded-xl p-4 flex flex-col justify-between"
            style={{
              border: "1px solid #8A3B3B",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3">
                04
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Evidence assembled manually
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Records, approvals, rules and documents are reconstructed during
                audit.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Slow, expensive, fragile assurance.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="bg-white rounded-xl p-4 flex flex-col justify-between"
            style={{
              border: "1px solid #8A3B3B",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3">
                05
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Integration sprawl
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Point-to-point dependencies multiply and ownership becomes
                unclear.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Security surface, vendor risk and technical debt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
