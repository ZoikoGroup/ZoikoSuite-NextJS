import React from "react";

export default function ALegalCommitmentNotAUXToneSection() {
  const items = [
    {
      title: "Security purpose",
      description:
        "— research is intended to identify and responsibly report a vulnerability, not extort, disrupt, profit from unauthorized access, or harm users.",
    },
    {
      title: "Minimal access",
      description:
        "— use only the access reasonably necessary to validate impact.",
    },
    {
      title: "Data care",
      description:
        "— do not retain or share personal, confidential, or customer data beyond what the approved process requires.",
    },
    {
      title: "No persistence",
      description: "— do not maintain unauthorized access after validation.",
    },
    {
      title: "Private reporting first",
      description:
        "— use the approved channel for technical details and coordinate public disclosure under the policy.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            GOOD-FAITH RESEARCH & SAFE HARBOR
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            A legal commitment, not a UX tone
          </h1>
        </div>

        {/* Rows Container */}
        <div className="flex flex-col gap-4 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              style={{ borderRadius: "12px" }}
              className="bg-white border border-[#DCD6C8] p-6 md:px-8 md:py-6 flex flex-col md:flex-row items-start md:items-baseline shadow-sm w-full"
            >
              <h2 className="text-base font-semibold text-[#0b1329] tracking-tight mr-2 whitespace-nowrap">
                {item.title}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
