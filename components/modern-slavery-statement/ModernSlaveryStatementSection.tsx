import React from "react";

export default function ModernSlaveryStatementSection() {
  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LEGAL · MODERN SLAVERY STATEMENT
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Modern Slavery Statement
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[15px] max-w-2xl">
            Our statement explains the steps taken during the stated reporting
            period to identify, prevent, mitigate, and respond to modern slavery
            risks in the operations and supply chains covered by this statement.
            [ Legal-approved final copy required. ]
          </p>
        </div>
      </div>
    </section>
  );
}
