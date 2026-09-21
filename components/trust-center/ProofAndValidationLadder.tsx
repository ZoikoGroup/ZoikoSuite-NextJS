import React from "react";

type BadgeColor = "blue" | "red" | "gray";

interface LadderItem {
  title: string;
  description: string;
  badgeText: string;
  badgeColor: BadgeColor;
}

const ladderItems: LadderItem[] = [
  {
    title: "Architecture proof",
    description:
      "Published source ownership, authority model, evidence architecture and integration contracts. Inspectable today without a conversation.",
    badgeText: "PUBLIC",
    badgeColor: "blue",
  },
  {
    title: "Product proof",
    description:
      "Annotated interfaces with synthetic data and an inspectable end-to-end governed scenario.",
    badgeText: "PUBLIC",
    badgeColor: "blue",
  },
  {
    title: "Validation status",
    description:
      "Per-item claim states across capability, coverage, integration, security and residency.",
    badgeText: "PUBLIC PER ITEM",
    badgeColor: "blue",
  },
  {
    title: "Controlled evidence",
    description:
      "Security questionnaires, test reports and architecture briefs where they exist — released under NDA through security review.",
    badgeText: "CONTROLLED ACCESS",
    badgeColor: "red",
  },
  {
    title: "Independent assurance",
    description:
      "Third-party certification, attestation or assessment for a stated scope and period.",
    badgeText: "NOT AVAILABLE",
    badgeColor: "gray",
  },
  {
    title: "Customer proof",
    description:
      "Approved customer stories with evidence class, period and limitations.",
    badgeText: "NONE APPROVED",
    badgeColor: "gray",
  },
];

const getBadgeStyles = (color: BadgeColor): string => {
  switch (color) {
    case "blue":
      return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
    case "red":
      return "bg-[#F9EDED] text-[#8A3B3B] border-[#DFA9A9]";
    case "gray":
    default:
      return "bg-[#EEF2F5] text-[#3E5A6B] border-[#C3D0D8]";
  }
};

export default function ProofAndValidationLadder() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                PROOF AND VALIDATION LADDER
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              What can be public, what is controlled, what does not exist
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Five rungs kept separate rather than blended. Two of them are
              currently empty, and that is stated rather than obscured.
            </p>
          </div>
        </div>

        {/* Rows Container */}
        <div className="space-y-4">
          {ladderItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-7 border border-[#E5E7EB] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              {/* Left Column: Title */}
              <div className="lg:col-span-3">
                <h3 className="font-bold text-[#111827] text-base">
                  {item.title}
                </h3>
              </div>

              {/* Middle Column: Description */}
              <div className="lg:col-span-7">
                <p className="text-[#6B7280] text-[13px] lg:text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Badge */}
              <div className="lg:col-span-2 flex lg:justify-end">
                <span
                  className={`inline-block px-3 py-1.5 text-[10px] font-mono font-bold tracking-wider rounded-lg border ${getBadgeStyles(
                    item.badgeColor,
                  )}`}
                >
                  {item.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
