import React from "react";

export default function AuthorityHandoffsSection() {
  const badgeCards = [
    "No case = incident verdict",
    "No evidence = legal conclusion",
    "No communication channel invented",
    "No SLA / queue / status invented",
    "No response authority from case state",
  ];

  const responseSteps = [
    {
      title: "Detection & Response",
      description: "Active parent and investigation context.",
    },
    {
      title: "Security Analytics",
      description: "Conditional context handoff, not case authority.",
    },
    {
      title: "Evidence Ledger & Verification",
      description: "Evidence authority.",
    },
    {
      title: "Governed Response",
      description: "Separate authorization, only when readiness permits.",
    },
    {
      title: "Integrations",
      description: "Approved sources and operations only.",
    },
    {
      title: "System Status",
      description: "Authoritative live health.",
    },
  ];

  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
      {/* Background Server Room Image with Dark Teal Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1440&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#031216]/90 via-[#031216]/80 via-60% to-[#031216]/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 self-stretch h-[720px] px-28 py-20 inline-flex flex-col justify-start items-start gap-9 overflow-hidden">
        {/* Header Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5 overflow-hidden">
          <div className="inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-0.5 bg-[#5FE3C5]" />
            <span className="text-[#5FE3C5] text-xs font-medium font-['JetBrains_Mono'] uppercase">
              Authority · #authority · #handoffs
            </span>
          </div>
          <h2 className="self-stretch text-white text-4xl font-extrabold font-['Hanken_Grotesk'] leading-10">
            A case organizes context. It does not grant authority.
          </h2>
          <p className="self-stretch text-white/70 text-base font-normal font-['Manrope'] leading-6">
            A case can organize investigation, evidence, communications and
            decision history. It does not by itself establish compromise,
            causality, legal responsibility, compliance status, response
            authority or permission to execute an action. Governed Response
            remains separately conditional.
          </p>
        </div>

        {/* Badge Cards Strip */}
        <div className="self-stretch inline-flex justify-start items-start gap-3 overflow-hidden">
          {badgeCards.map((text, index) => (
            <div
              key={index}
              className="flex-1 p-3.5 bg-white/5 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-start items-start overflow-hidden backdrop-blur-sm"
            >
              <span className="flex-1 text-[#5FE3C5] text-xs font-normal font-['JetBrains_Mono'] leading-4">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Cards Grid */}
        <div className="self-stretch min-h-56 inline-flex justify-start items-start gap-4 overflow-hidden">
          {responseSteps.map((step, index) => (
            <div
              key={index}
              className="flex-1 h-56 p-6 bg-white/5 backdrop-blur-md rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-3 overflow-hidden shadow-lg"
            >
              <h3 className="self-stretch text-white text-xl font-extrabold font-['Hanken_Grotesk']">
                {step.title}
              </h3>
              <p className="self-stretch text-white/70 text-sm font-normal font-['Manrope'] leading-5">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
