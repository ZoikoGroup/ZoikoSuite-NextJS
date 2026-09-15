import React from "react";

export default function CapabilityProofSection() {
  const capabilities = [
    {
      title: "Financial truth & close",
      tags: [{ label: "CURRENT ARCHITECTURE", type: "blue" }],
      description:
        "Improve confidence in financial position and close readiness across entities.",
      bottomText:
        "Ledger, AP/AR, close and consolidation; consolidated position; rule-linked postings; evidence-ready close.",
    },
    {
      title: "Tax & jurisdiction context",
      tags: [
        { label: "CURRENT ARCHITECTURE", type: "blue" },
        { label: "COVERAGE VARIES", type: "yellow" },
      ],
      description:
        "Keep tax and filing context attached to the entity, action and effective date.",
      bottomText:
        "Jurisdiction model, effective-date states, rule provenance, published coverage status.",
    },
    {
      title: "Compliance & obligations",
      tags: [{ label: "CURRENT ARCHITECTURE", type: "blue" }],
      description:
        "Know what is due, why, who owns it, and what evidence exists.",
      bottomText:
        "Obligations registry, filing tracker, escalation paths, status views.",
    },
    {
      title: "Authority & approvals",
      tags: [{ label: "CURRENT ARCHITECTURE", type: "blue" }],
      description:
        "Keep delegated authority and segregation of duties in the execution path.",
      bottomText:
        "Role, attribute, entity, delegation and SoD controls; workflow history and authorization outcome.",
    },
    {
      title: "Evidence & audit",
      tags: [
        { label: "PHASED DELIVERY", type: "yellow" },
        { label: "CURRENT ARCHITECTURE", type: "blue" },
      ],
      description:
        "Retrieve decision, document, workflow, event and integrity lineage.",
      bottomText:
        "Six evidence layers and a scenario-specific evidence manifest.",
    },
    {
      title: "Integration & migration",
      tags: [
        { label: "CURRENT ARCHITECTURE", type: "blue" },
        { label: "PHASED DELIVERY", type: "yellow" },
      ],
      description: "Adopt without a high-risk big-bang replacement.",
      bottomText:
        "ZoikoSchema, versioned APIs and events, Shadow Ledger, migration integrity, progressive replacement.",
    },
    {
      title: "Intelligence & reporting",
      tags: [{ label: "PHASED DELIVERY", type: "yellow" }],
      description:
        "Prioritize exceptions and forecast exposure without silently changing source truth.",
      bottomText:
        "Anomaly detection, forecasting, reconciliation assistance, decision support — all human-reviewed.",
    },
    {
      title: "Security & residency",
      tags: [{ label: "READINESS - NOT CERTIFIED", type: "red" }],
      description:
        "Expose control posture, deployment options and residency constraints honestly.",
      bottomText:
        "Zero trust, identity and SoD, encryption status, key custody availability, region-aware residency.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#A07A2E]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#A07A2E" }}
              >
                CAPABILITY PROOF
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.15]">
              What this platform helps govern
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-end lg:justify-end">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
              Eight capabilities, each with the buyer outcome and the
              source-governed proof behind it. Every one carries a claim status.
            </p>
          </div>
        </div>

        {/* Cards Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 flex flex-col justify-between shadow-sm"
              style={{
                borderRadius: "12px",
                border: "1px solid #DBE3E8",
              }}
            >
              <div>
                <h3 className="text-base font-bold text-[#0F172A] mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag, tIndex) => {
                    let tagBg = "#F0F4F8";
                    let tagColor = "#2A6386";
                    let tagBorder = "#CBD5E1";

                    if (tag.type === "yellow") {
                      tagBg = "#FEFCE8";
                      tagColor = "#A07A2E";
                      tagBorder = "#FEF08A";
                    } else if (tag.type === "red") {
                      tagBg = "#FEF2F2";
                      tagColor = "#991B1B";
                      tagBorder = "#FCA5A5";
                    }

                    return (
                      <span
                        key={tIndex}
                        className="text-[8px] font-bold tracking-wider px-2 py-0.5 rounded uppercase"
                        style={{
                          backgroundColor: tagBg,
                          color: tagColor,
                          border: `1px solid ${tagBorder}`,
                        }}
                      >
                        {tag.label}
                      </span>
                    );
                  })}
                </div>

                <p className="text-xs text-[#16262F] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed border-gray-200">
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {item.bottomText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Explanatory Footer Box */}
        <div className="border-l-2 border-l-[#D0AA55] max-w-xl p-4 flex items-start gap-3">
          <p className="text-xs text-gray-600 leading-relaxed">
            A claim status is attached to each capability rather than stated
            once in a footnote. &quot;Current architecture&quot; describes
            design intent that is implemented; &quot;phased delivery&quot; means
            parts remain in progress; &quot;readiness&quot; means the control
            framework exists without third-party certification.
          </p>
        </div>
      </div>
    </section>
  );
}
