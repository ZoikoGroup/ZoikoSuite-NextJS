import React from "react";

export default function WhereToGoFromHereSection() {
  const cards = [
    {
      title: "About ZoikoSuite",
      description:
        "Understand what ZoikoSuite is, how it is structured, and what it is built to govern.",
      linkText: "Read About →",
      linkHref: "#",
      isCurrent: false,
    },
    {
      title: "Founder's Vision",
      description:
        "Read the principles behind governance-first business operations intelligence.",
      linkText: "Read the vision →",
      linkHref: "#",
      isCurrent: false,
    },
    {
      badge: "YOU ARE HERE",
      title: "Leadership",
      description:
        "Meet the verified leaders and understand accountable operating roles.",
      isCurrent: true,
    },
    {
      title: "Partners",
      description:
        "See how technology, implementation, and ecosystem partners fit into governed delivery.",
      linkText: "Explore partnerships →",
      linkHref: "#",
      isCurrent: false,
    },
    {
      title: "Careers",
      description:
        "Build systems that matter with teams focused on governed enterprise operations.",
      linkText: "Explore careers →",
      linkHref: "#",
      isCurrent: false,
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            CONTINUE THE COMPANY STORY
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[38px] lg:text-[46px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Where to go from here
          </h1>
        </div>

        {/* 3-Column Grid Layout matching the design */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {cards.map((card, index) => {
            if (card.isCurrent) {
              return (
                <div
                  key={index}
                  style={{ borderRadius: "14px" }}
                  className="w-full p-8 border-2 border-[#A8843A] bg-white shadow-sm flex flex-col items-start justify-start min-h-[200px] relative lg:col-start-3 lg:row-start-1"
                >
                  <span className="text-[#A8843A] text-xs font-semibold tracking-[0.15em] uppercase mb-2 block">
                    {card.badge}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-[#0b1329] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={index}
                style={{ borderRadius: "14px" }}
                className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-between relative group hover:border-[#A8843A] transition-colors"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0b1329] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>
                {card.linkText && (
                  <a
                    href={card.linkHref}
                    className="text-[#0b1329] text-sm md:text-base font-semibold hover:underline flex items-center gap-1"
                  >
                    {card.linkText}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
