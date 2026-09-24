import React from "react";

export default function FiveCategoriesComputedFromTheRegistrySection() {
  const cards = [
    {
      title: "Strictly Necessary",
      description:
        "Required for requested functionality, security, authentication, routing, or consent storage.",
      statusText: "Always active",
      activeState: true,
    },
    {
      title: "Functional / Preferences",
      description:
        "Remembers optional settings or enables non-essential convenience.",
      statusText: "Optional",
      activeState: false,
    },
    {
      title: "Analytics / Measurement",
      description:
        "Measures visits, performance, content effectiveness, or interaction patterns.",
      statusText: "Optional",
      activeState: false,
    },
    {
      title: "Advertising / Marketing",
      description:
        "Rendered only if the registry proves current use — never a placeholder category.",
      statusText: "Not currently used",
      activeState: false,
    },
    {
      title: "Other / Emerging",
      description:
        "Any technology not fitting the standard taxonomy — not published until Privacy classifies it.",
      statusText: "Not currently used",
      activeState: false,
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            AT-A-GLANCE TECHNOLOGY MAP
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Five categories, computed from the registry
          </h1>
        </div>

        {/* Cards Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15.5px] mb-8">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">
                  {card.statusText}
                </span>

                {/* Simulated Toggle Switch */}
                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                    card.activeState ? "bg-[#0b1329]" : "bg-[#DCD6C8]"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      card.activeState ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
