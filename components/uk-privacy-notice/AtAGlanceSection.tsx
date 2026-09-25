import React from "react";

const glanceCards = [
  {
    title: "Who is responsible for your information",
    content: "[ Exact controller wording. ]",
  },
  {
    title: "Why information is processed",
    content: "[ Approved purpose categories only. ]",
  },
  {
    title: "Your rights / how to make a request",
    content: "[ Approved route and wording. ]",
  },
  {
    title: "International transfers / retention / contact",
    content: "[ Only if an approved concise summary can remain accurate across relationships. ]",
  },
];

export default function AtAGlanceSection() {
  return (
    <section className="w-full bg-[#F6F1E6] py-8 sm:py-10 md:py-[47px] px-4 sm:px-6 md:px-10 lg:px-[130px]">
      <div className="max-w-[1180px] mx-auto px-0 sm:px-4 md:px-8 flex flex-col gap-2">
        {/* Eyebrow */}
        <p
          className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#A8843A]"
          style={{ fontFamily: "var(--font-inter, sans-serif)", lineHeight: "17.6px" }}
        >
          AT-A-GLANCE PRIVACY SUMMARY
        </p>

        {/* Section Heading */}
        <h2
          className="text-[19px] sm:text-[21px] md:text-[23px] font-bold text-[#16223A] tracking-[-0.01em] max-w-[720px] pt-1 pb-1 leading-[28px] sm:leading-[32px] md:leading-[36.8px]"
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          A plain-language map — never a substitute for the legally required detail
        </h2>

        {/* 2x2 Glance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-[14px] pt-2 pb-2">
          {glanceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[8px] p-3.5 sm:p-4 flex flex-col gap-1.5 sm:gap-2 border border-[#DCD6C8] shadow-xs"
            >
              <h3
                className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-[0.04em] text-[#A8843A] leading-[18px] sm:leading-[20px]"
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-[12px] sm:text-[12.5px] font-normal text-[#4B5872] leading-[18px] sm:leading-[20px]"
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                }}
              >
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
