import React from "react";

interface SupportChannel {
  status: string;
  isAvailable: boolean;
  title: string;
  description: string;
}

const supportChannelsData: SupportChannel[] = [
  {
    status: "AVAILABLE",
    isAvailable: true,
    title: "Submit a request",
    description:
      "Structured form with your troubleshooting context pre-filled.",
  },
  {
    status: "AVAILABLE",
    isAvailable: true,
    title: "Live chat",
    description: "Connect with a support specialist now.",
  },
  {
    status: "NOT AVAILABLE FOR YOUR PLAN",
    isAvailable: false,
    title: "Phone support",
    description: "Included with enterprise support entitlements.",
  },
] as const;

export default function ContactSupport() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            06 / CONTACT SUPPORT
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-2">
          Contact support
        </h2>

        {/* Subtext info */}
        <p className="text-[#4B5563] text-sm md:text-base mb-10 max-w-xl">
          Only eligible, currently available channels are shown. Unavailable
          channels are explained, never invented.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {supportChannelsData.map((item, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className={`border p-6 md:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all min-h-[200px] ${
                item.isAvailable
                  ? "bg-white border-[#DBE3E8]"
                  : "bg-[#FAFAFA] border-[#E5E7EB] opacity-90"
              }`}
            >
              <div>
                <div
                  style={{ borderRadius: "6px" }}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] uppercase mb-4 border ${
                    item.isAvailable
                      ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]"
                      : "bg-[#FEF2F2] border-[#FEE2E2] text-[#991B1B]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.isAvailable ? "bg-[#166534]" : "bg-[#991B1B]"
                    }`}
                  ></span>
                  <span>{item.status}</span>
                </div>

                <h3
                  className={`font-semibold text-lg md:text-xl mb-2 leading-snug ${
                    item.isAvailable ? "text-[#111827]" : "text-[#6B7280]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-[#4B5563] text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
