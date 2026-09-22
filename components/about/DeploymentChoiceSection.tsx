import React from "react";
import Image from "next/image";

export default function DeploymentChoiceSection() {
  const rows = [
    {
      mode: "Multi-tenant SaaS",
      description: "Standard logical isolation.",
      status: "GENERALLY AVAILABLE",
      statusStyle: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      mode: "Dedicated environment",
      description: "Enhanced tenant isolation and operational controls.",
      status: "STATUS REQUIRED",
      statusStyle: "bg-white text-gray-700 border-gray-300",
    },
    {
      mode: "Single-tenant enterprise",
      description: "Dedicated workload and data infrastructure.",
      status: "STATUS REQUIRED",
      statusStyle: "bg-white text-gray-700 border-gray-300",
    },
    {
      mode: "Sovereign / customer-controlled",
      description: "Subject to legal, operational, and commercial feasibility.",
      status: "BY REQUEST",
      statusStyle: "bg-white text-gray-700 border-gray-300",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            DEPLOYMENT CHOICE
          </span>

          {/* Main Headline (32px and bold) */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Start at the right scope
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base font-light leading-relaxed">
            Deployment flexibility supports enterprise and regulated contexts,
            but availability is always explicitly qualified — never a
            certification or residency guarantee.[cite: 12]
          </p>
        </div>

        {/* Content Section: Table + Image Graphic */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Column: Table */}
          <div className="w-full lg:w-7/12 flex flex-col">
            {/* Table Header */}
            <div className="w-full pb-4 border-b border-gray-300 flex items-start justify-between gap-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              <div className="w-4/12">MODE</div>
              <div className="w-5/12">DESCRIPTION</div>
              <div className="w-3/12">STATUS</div>
            </div>

            {/* Table Rows */}
            {rows.map((row, index) => (
              <div
                key={index}
                className="w-full py-6 border-b border-gray-200 flex items-center justify-between gap-4"
              >
                <div className="w-4/12 text-[#0b1329] text-base font-medium">
                  {row.mode}
                </div>
                <div className="w-5/12 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                  {row.description}
                </div>
                <div className="w-3/12 flex items-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full border border-[#DCD6C8] text-[10px] font-semibold tracking-wider bg-[#F6F1E6]`}
                  >
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Graphic Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/about/5.png"
                alt="Deployment Choice Architecture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
