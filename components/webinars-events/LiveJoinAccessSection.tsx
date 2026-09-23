import React from "react";

interface StatusCard {
  status: string;
  dotColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  description: string;
}

const statusCards: StatusCard[] = [
  {
    status: "Too early",
    dotColor: "bg-[#5d6b75]",
    badgeBg: "bg-[#eff2f4]",
    badgeBorder: "border-[#5d6b75]",
    badgeText: "text-[#5d6b75]",
    description:
      "Confirmed start time shown; join opens closer to the session.",
  },
  {
    status: "Join available",
    dotColor: "bg-[#1e7a5a]",
    badgeBg: "bg-[#eaf5f0]",
    badgeBorder: "border-[#1e7a5a]",
    badgeText: "text-[#1e7a5a]",
    description:
      "Signed join action; no token exposed in page source or analytics.",
  },
  {
    status: "Access denied",
    dotColor: "bg-[#8a3b3b]",
    badgeBg: "bg-[#f9eded]",
    badgeBorder: "border-[#8a3b3b]",
    badgeText: "text-[#8a3b3b]",
    description:
      "Human-readable reason + manage-registration path, never internal detail.",
  },
];

export default function LiveJoinAccessSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-[11px] font-normal tracking-[0.1em] text-[#a07a2e] block mb-2">
            07 / LIVE &amp; JOIN
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-semibold text-[#16262f] tracking-tight mb-3">
            Live / join access
          </h2>
          <p className="text-[15.8px] text-[#5a6d79] leading-relaxed">
            The join action is always backend-derived — never a client-side
            countdown unlock.
          </p>
        </div>

        {/* 3 Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {statusCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#dbe3e8] rounded-lg p-6 flex flex-col justify-start hover:border-[#5a6d79]/40 transition-colors"
            >
              <div className="mb-4">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10.5px] font-mono font-medium ${card.badgeBg} ${card.badgeBorder} ${card.badgeText}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`}
                  />
                  {card.status}
                </span>
              </div>

              <p className="text-[13.5px] text-[#5a6d79] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
