import React from "react";

export default function PrivacyPolicySection() {
  const cards = [
    {
      title: "What we collect",
      badge: "VERIFIED",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Why we use it",
      badge: "VERIFIED",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Who receives it",
      badge: "CONTEXT-DEPENDENT",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      title: "How long we keep it",
      badge: "VERIFIED",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Where it's processed",
      badge: "CONTEXT-DEPENDENT",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      title: "Your choices & rights",
      badge: "VERIFIED",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#FBFAF7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PRIVACY POLICY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Your privacy, explained around how the data is actually used.
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            This policy explains how ZoikoSuite-related personal data is
            collected, used, disclosed, retained, transferred, and protected —
            and the choices and rights available to you. Final published wording
            reflects the approved Privacy Processing Registry.
          </p>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start relative"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-4">
                {card.title}
              </h3>

              <div
                className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider border ${card.badgeColor}`}
              >
                {card.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
