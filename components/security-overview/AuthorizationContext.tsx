import React from "react";

interface ResolveItem {
  boldText: string;
  normalText: string;
}

const resolveItems: ResolveItem[] = [
  {
    boldText: "Authenticated identity",
    normalText: "· human or workload principal",
  },
  {
    boldText: "Role",
    normalText: "· what function the principal performs",
  },
  {
    boldText: "Attributes",
    normalText: "· conditions that qualify the role",
  },
  {
    boldText: "Entity scope",
    normalText: "· which legal entities, sites or units are in view",
  },
  {
    boldText: "Delegation",
    normalText:
      "· authority granted by another principal, with limits and expiry",
  },
  {
    boldText: "Segregation of duties",
    normalText: "· conflicts evaluated before the action is offered",
  },
];

export default function AuthorizationContext() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                IDENTITY AND ACCESS GOVERNANCE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Authorization resolves against context, not just role
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Role alone is insufficient in a multi-entity platform. The same
              person may hold different authority in different entities, and
              segregation must hold across both.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What an authorization decision resolves */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-6">
              WHAT AN AUTHORIZATION DECISION RESOLVES
            </h3>
            <ul className="space-y-4">
              {resolveItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[14px] leading-relaxed"
                >
                  <span className="inline-block w-2 h-2 rounded-full border border-[#C9B07A] shrink-0 mt-1.5 bg-[#FDFBF7]"></span>
                  <span>
                    <strong className="font-semibold text-[#111827]">
                      {item.boldText}
                    </strong>{" "}
                    <span className="text-[#6B7280]">{item.normalText}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Cards Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Card 1: Segregation of Duties */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
              <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-4">
                SEGREGATION OF DUTIES
              </h3>
              <p className="text-[14px] lg:text-[15px] text-[#111827] leading-relaxed">
                Preparer, reviewer, approver and executor are independently
                permissioned. Where a conflict would arise,{" "}
                <strong className="font-bold">
                  the action is not presented
                </strong>{" "}
                — rather than presented and then rejected after the fact.
              </p>
            </div>

            {/* Card 2: Delegation */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
              <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-4">
                DELEGATION
              </h3>
              <p className="text-[14px] lg:text-[15px] text-[#111827] leading-relaxed">
                Every delegation carries a granting principal, a scope, a limit
                and an expiry. A delegation without an expiry is not a
                delegation; it is a permanent grant under another name.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
