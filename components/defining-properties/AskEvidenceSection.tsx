import React from "react";
import { AlertTriangle, Circle } from "lucide-react";

interface EvidenceItem {
  askFor: string;
  whatToLookFor: string;
  status: string;
  artifact: string;
}

export default function AskEvidenceSection() {
  const items: EvidenceItem[] = [
    {
      askFor: "Scope",
      whatToLookFor:
        "Which legal entity, product, environment and deployment the claim covers.",
      status: "ILLUSTRATIVE CHECKLIST",
      artifact: "Evidence not published",
    },
    {
      askFor: "Owner",
      whatToLookFor: "Who is accountable for the claim and keeps it current.",
      status: "ILLUSTRATIVE CHECKLIST",
      artifact: "Evidence not published",
    },
    {
      askFor: "Operating boundary",
      whatToLookFor:
        "What the claim excludes, and which responsibilities stay with you or a third party.",
      status: "ILLUSTRATIVE CHECKLIST",
      artifact: "Evidence not published",
    },
    {
      askFor: "Supporting artifact",
      whatToLookFor:
        "A document, record or report that can be inspected, with its title and version.",
      status: "ILLUSTRATIVE CHECKLIST",
      artifact: "Evidence not published",
    },
    {
      askFor: "Currentness",
      whatToLookFor:
        "When it was last reviewed, when it expires and whether it has been withdrawn.",
      status: "ILLUSTRATIVE CHECKLIST",
      artifact: "Evidence not published",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-12 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Ask for the evidence that matters.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[#4B5563] text-base sm:text-lg">
              Scope, owner, operating boundary, supporting artifact and
              currentness.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EEF2] text-[#1E3A4C] text-xs font-semibold tracking-wide">
              <AlertTriangle className="w-3.5 h-3.5 text-[#1E3A4C]" />
              ILLUSTRATIVE CHECKLIST
            </span>
          </div>
        </div>

        {/* Evidence List Stack */}
        <div className="w-full flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-black/5 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Column 1: Ask For */}
              <div className="md:col-span-3 flex flex-col items-start">
                <span className="text-[10px] sm:text-xs font-bold text-[#4B5563] tracking-wider uppercase mb-1">
                  ASK FOR
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1F2421] tracking-tight">
                  {item.askFor}
                </h3>
              </div>

              {/* Column 2: What to look for */}
              <div className="md:col-span-3 flex flex-col items-start">
                <span className="text-[10px] sm:text-xs font-bold text-[#4B5563] tracking-wider uppercase mb-1 md:hidden">
                  WHAT TO LOOK FOR
                </span>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  {item.whatToLookFor}
                </p>
              </div>

              {/* Column 3: Status on this page */}
              <div className="md:col-span-3 flex flex-col items-start">
                <span className="text-[10px] sm:text-xs font-bold text-[#4B5563] tracking-wider uppercase mb-2">
                  STATUS ON THIS PAGE
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8EEF2] text-[#1E3A4C] text-[10px] sm:text-xs font-semibold tracking-wide">
                  <AlertTriangle className="w-3 h-3 text-[#1E3A4C]" />
                  {item.status}
                </span>
              </div>

              {/* Column 4: Verified artifact */}
              <div className="md:col-span-3 flex flex-col items-start">
                <span className="text-[10px] sm:text-xs font-bold text-[#5D6A74] tracking-wider uppercase mb-2">
                  VERIFIED ARTIFACT
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F4F3EE] text-[#5D6A74] text-[10px] sm:text-xs font-semibold tracking-wide">
                  <Circle className="w-2.5 h-2.5 text-[#4B5563] fill-current" />
                  <span>{item.artifact}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
