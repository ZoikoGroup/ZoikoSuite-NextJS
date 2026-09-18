import React from "react";

interface TrustDomainItem {
  title: string;
  description: string;
  status: string;
  isPublished: boolean;
}

const trustDomains: TrustDomainItem[] = [
  {
    title: "Security Overview",
    description:
      "Owns security control depth: zero trust, identity, encryption, isolation, telemetry and incident response.",
    status: "Published — open",
    isPublished: true,
  },
  {
    title: "Evidence Architecture",
    description:
      "Owns evidence lineage depth. This page shows the six layers in summary only.",
    status: "Not yet published",
    isPublished: false,
  },
  {
    title: "Data Residency",
    description:
      "Owns residency depth by lifecycle stage and deployment option.",
    status: "Not yet published",
    isPublished: false,
  },
  {
    title: "Privacy Architecture",
    description:
      "Owns privacy control depth: classification, purpose, access scope and retention.",
    status: "Not yet published",
    isPublished: false,
  },
  {
    title: "Certifications",
    description:
      "Owns independent assurance. Will carry verifier, scope, period and status when any exists.",
    status: "Not yet published",
    isPublished: false,
  },
  {
    title: "Policies",
    description: "Owns authoritative policy texts, DPA and subprocessor list.",
    status: "Not yet published",
    isPublished: false,
  },
  {
    title: "Trust Center",
    description:
      "The hub, with the nine-status claim legend and the full destination index.",
    status: "Published — open",
    isPublished: true,
  },
];

export default function AssuranceTrustDomains() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                ASSURANCE, CERTIFICATIONS AND CONNECTED TRUST DOMAINS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              What exists, what does not, and who owns the depth
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              This page does not duplicate the other Trust destinations. Each
              owns its own subject, and destinations that are not yet published
              are marked rather than linked.
            </p>
          </div>
        </div>

        {/* Top Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Left Box: Independent Assurance Held */}
          <div className="bg-transparent border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 shadow-sm space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#08222F] block">
              INDEPENDENT ASSURANCE HELD
            </span>
            <h3 className="text-xl font-bold text-[#111827]">None currently</h3>
            <p className="text-[14px] text-[#4B5563] leading-relaxed">
              No SOC, ISO, HITRUST, FedRAMP, StateRAMP or equivalent
              certification or attestation is currently held. No badge or logo
              appears anywhere, and none will until a verifier, scope, period
              and current status can be published alongside it.
            </p>
            <div>
              <span className="inline-block px-3 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wider text-[#A07A2E] border border-[#C9B07A]/50 bg-[#FDFBF7]">
                NOT AVAILABLE — STATED DIRECTLY
              </span>
            </div>
          </div>

          {/* Right Box: Professional Advice Boundary */}
          <div className="bg-[#F6EDD9] border border-[#E6DEC9] rounded-2xl p-6 lg:p-8 shadow-sm space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#786138] block">
              PROFESSIONAL ADVICE BOUNDARY
            </span>
            <p className="text-[14px] text-[#374151] leading-relaxed">
              ZoikoSuite does not provide legal, tax, accounting, audit,
              employment or other regulated professional advice. Software
              support for a compliance process is distinct from advice about
              what the law requires of you.
            </p>
            <p className="text-[14px] text-[#374151] leading-relaxed">
              No percentages, savings, pass rates or risk-reduction figures are
              published, because none has verified evidence behind it.
            </p>
            <div>
              <span className="inline-block px-3 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wider text-[#08222F] border border-[#08222F]/20 bg-white/60">
                ALWAYS APPLIES
              </span>
            </div>
          </div>
        </div>

        {/* Connected Trust Domains Header */}
        <div className="mb-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#6B7280] uppercase">
            CONNECTED TRUST DOMAINS
          </span>
        </div>

        {/* Trust Domains List */}
        <div className="space-y-3">
          {trustDomains.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] border-l-3 border-l-[#2A6386] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm transition-colors"
            >
              <div className="max-w-xl">
                <h4 className="text-sm font-bold text-[#111827] mb-1">
                  {item.title}
                </h4>
                <p className="text-[13px] text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="shrink-0">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wider ${
                    item.isPublished
                      ? "bg-[#0F476A] text-white"
                      : "bg-[#F1F3F4] text-[#9CA3AF] border border-[#E5E7EB]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
