import React from "react";

export default function PrivacySnapshotSection() {
  const facts = [
    {
      title: "CONTROLLER",
      description: "[ Validated legal entity name + address ]",
    },
    {
      title: "EU REPRESENTATIVE",
      description: "[ Rendered only when Article 27 applies and is validated ]",
    },
    {
      title: "DPO / PRIVACY CONTACT",
      description: "[ Approved contact channel ]",
    },
    {
      title: "APPLIES TO",
      description: "[ Validated audience/service scope ]",
    },
    {
      title: "INTERNATIONAL TRANSFERS",
      description:
        "See transfer details — [ status summary, no generic claim ]",
    },
    {
      title: "RIGHTS",
      description:
        "Access, correction, deletion, restriction, portability, objection, consent withdrawal — as contextually applicable.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PRIVACY SNAPSHOT
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Key facts before the full notice
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {facts.map((fact, index) => {
            return (
              <div
                key={index}
                style={{ borderRadius: "12px" }}
                className={`bg-white border border-[#DCD6C8] p-6 flex flex-col shadow-sm cursor-pointer transition-all duration-200`}
              >
                <div>
                  <h2 className="text-xs font-bold text-[#A8843A] tracking-[0.15em] uppercase mb-3">
                    {fact.title}
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed text-[14px]">
                    {fact.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
