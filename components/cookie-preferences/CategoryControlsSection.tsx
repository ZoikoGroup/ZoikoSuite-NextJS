import React from "react";

export default function CategoryControlsSection() {
  const categories = [
    {
      title: "Strictly Necessary",
      description:
        "Supports approved essential functions — security, authentication, routing, and storing your privacy choice itself. Not toggleable, but every item is inspectable.",
      meta: "",
      footer: "",
      activeState: true,
    },
    {
      title: "Functional / Preferences",
      description:
        "Remembers optional settings or enables non-essential convenience.",
      meta: "[ n ] technologies  [ n ] vendors  Last verified [ date ]",
      footer:
        "If disabled, some optional convenience settings may not be remembered between visits.",
      activeState: false,
    },
    {
      title: "Analytics / Measurement",
      description:
        "Measures visits, performance, content effectiveness, or interaction patterns.",
      meta: "[ n ] technologies  [ n ] vendors  Last verified [ date ]",
      footer:
        "If disabled, aggregate measurement of this visit will not occur.",
      activeState: false,
    },
    {
      title: "Advertising / Marketing",
      description: "Rendered only if the registry proves current use.",
      meta: "",
      footer: "Not currently used",
      activeState: true,
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CATEGORY CONTROLS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Set your choice by category
          </h1>
        </div>

        {/* Category Cards List */}
        <div className="w-full flex flex-col gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full bg-white border border-[#DCD6C8] p-6 md:p-8 shadow-sm flex items-start justify-between gap-6"
            >
              <div className="flex flex-col gap-2 max-w-4xl">
                <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                  {cat.description}
                </p>

                {cat.meta && (
                  <p className="text-xs text-gray-500 font-mono mt-1">
                    {cat.meta}
                  </p>
                )}

                {cat.footer && (
                  <p className="text-xs text-gray-500 font-light mt-1">
                    {cat.footer}
                  </p>
                )}
              </div>

              {/* Simulated Toggle Switch */}
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 shrink-0 mt-1 ${
                  cat.activeState ? "bg-[#0b1329]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                    cat.activeState ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
