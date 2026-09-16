import React from "react";
import Image from "next/image";

export default function IntegrationMigrationSection() {
  const steps = [
    {
      title: "Connect",
      description: "versioned APIs and events against ZoikoSchema",
    },
    {
      title: "Map",
      description:
        "object and field mapping with correction authority held by the data owner",
    },
    {
      title: "Shadow Ledger",
      description:
        "proposed governed behaviour compared with current operation",
    },
    {
      title: "Reconcile",
      description:
        "counts, balances and relationships verified with variance dispositioned",
    },
    {
      title: "Activate selected scope",
      description: "on a named human decision, with rollback defined first",
    },
    {
      title: "Progressively replace",
      description: "scope by scope, never all at once",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col gap-12">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#A07A2E]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#A07A2E" }}
              >
                INTEGRATION, MIGRATION & SHADOW LEDGER
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.15]">
              Adopt without a big-bang replacement
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-end lg:justify-end">
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              Progressive replacement with migration integrity checks, and a
              Shadow Ledger that compares without executing.
            </p>
          </div>
        </div>

        {/* Content Grid: Left Adoption Sequence, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Adoption Sequence */}
          <div className="lg:col-span-5 flex flex-col">
            <h3
              className="text-[11px] font-mono font-bold tracking-widest uppercase mb-6"
              style={{ color: "#A07A2E" }}
            >
              ADOPTION SEQUENCE
            </h3>

            <div className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full border border-[#A07A2E] flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A07A2E]" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <strong className="text-[#0F172A] font-semibold">
                      {step.title}
                    </strong>{" "}
                    — {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-7 relative w-full">
            <Image
              src="/financial/4.png"
              alt="Adopt without a big-bang replacement illustration"
              width={800}
              height={500}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
