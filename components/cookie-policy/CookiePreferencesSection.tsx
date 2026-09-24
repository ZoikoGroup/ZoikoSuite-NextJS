import React from "react";

export default function CookiePreferencesSection() {
  const preferences = [
    {
      title: "Strictly Necessary",
      description: "Always active — required to provide or secure the service.",
      activeState: true,
    },
    {
      title: "Functional / Preferences",
      description: "Remember optional settings and convenience choices.",
      activeState: false,
    },
    {
      title: "Analytics / Measurement",
      description: "Measure visits, performance, and interaction patterns.",
      activeState: false,
    },
    {
      title: "Advertising / Marketing",
      description: "Not currently used.",
      activeState: true,
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            COOKIE PREFERENCES — COMPANION CONTROL SURFACE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            The policy explains. Preferences controls.
          </h1>
        </div>

        {/* Outer Card Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full max-w-3xl bg-white border border-[#DCD6C8] p-8 md:p-10 shadow-sm flex flex-col gap-6"
        >
          {/* List of Preferences */}
          <div className="w-full flex flex-col">
            {preferences.map((pref, index) => (
              <div
                key={index}
                className="py-6 border-b border-[#DCD6C8] last:border-b-0 flex items-center justify-between gap-6"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
                    {pref.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                    {pref.description}
                  </p>
                </div>

                {/* Simulated Toggle Switch */}
                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 shrink-0 ${
                    pref.activeState ? "bg-[#0b1329]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      pref.activeState ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex items-center gap-6">
            <button className="bg-[#C8A24A] hover:bg-[#967433] text-[#20170A] text-sm font-medium px-6 py-3 rounded-lg shadow-sm transition-colors">
              Save choices
            </button>
            <button className="text-[#0b1329] text-sm font-medium hover:underline">
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
