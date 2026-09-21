import React from "react";

const exceptions = [
  {
    label: "Scope",
    desc: "Material deviations require documented scope, risk review, approval, compensating controls, and expiry.",
  },
  {
    label: "Approval",
    desc: "A designated risk authority approves; the requester cannot self-approve where separation of duties requires it.",
  },
  {
    label: "Expiry",
    desc: "Every exception is time-bound. No permanent silent exception exists.",
  },
  {
    label: "Disclosure",
    desc: "Named exceptions stay restricted by default. Active counts are published only when verified and contextualized.",
  },
];

export default function ExceptionsSection() {
  return (
    <section className="w-full bg-white font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span
            className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            08 / EXCEPTIONS
          </span>
          <h2
            className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Exceptions & risk acceptance
          </h2>
          <div className="w-full max-w-[760px]">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Policies without an exception model force shadow workarounds<br />
              or hide deviations. Exceptions are governed while sensitive records stay private.
            </p>
          </div>
        </div>

        {/* Exceptions Card Container */}
        <div className="self-stretch p-7 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col justify-start items-start gap-2.5">
          {exceptions.map((item, idx) => (
            <div
              key={item.label}
              className={`self-stretch h-14 relative ${
                idx !== exceptions.length - 1 ? "border-b border-[#D6DEE3]" : ""
              }`}
            >
              <div
                className="px-2 py-[5px] left-0 top-[14px] absolute rounded-md inline-flex flex-col justify-start items-start"
                style={{ backgroundColor: "#EDF2F7" }}
              >
                <span
                  className="text-xs font-normal leading-4 tracking-wide"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#12466B",
                  }}
                >
                  {item.label}
                </span>
              </div>
              <div className="left-[95px] md:left-[110px] right-4 top-[14px] absolute inline-flex flex-col justify-start items-start">
                <p
                  className="text-[#0D2636] text-sm font-normal leading-6"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}