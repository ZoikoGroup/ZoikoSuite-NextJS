import React from "react";

export default function LetterFromTheFounderSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtitle */}
        <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-12 text-center block">
          A LETTER FROM THE FOUNDER
        </span>

        {/* Letter Card */}
        <div className="w-full bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 flex flex-col relative">
          {/* Quote Mark */}
          <span className="text-[#A8843A] font-serif text-5xl md:text-6xl leading-none select-none">
            &ldquo;
          </span>

          {/* Letter Body Content */}
          <div className="flex flex-col gap-6 text-gray-700 text-base md:text-lg font-light leading-relaxed">
            <p>
              Businesses do not experience finance, payroll, contracts,
              compliance, security, and evidence as separate realities. They
              experience one operating reality — yet the systems behind that
              reality are often fragmented.
            </p>

            <p>
              ZoikoSuite is our attempt to change the operating model, not
              simply add another application. I believe material actions should
              carry their governing context with them: who has authority, which
              rule applies, which entity is acting, which jurisdiction matters,
              what changed, and what evidence proves the decision.
            </p>

            <p>
              That principle also shapes how we use AI. Intelligence should help
              people see risk, reconcile complexity, and make better decisions.
              It should not silently replace authority, rewrite source truth, or
              bypass accountability.
            </p>

            <p>
              The long-term ambition is straightforward: give organizations a
              governed foundation that can grow across teams, entities, and
              borders without requiring them to trade speed for control. We will
              earn that ambition the same way the platform is designed to
              operate — by proving what is true, stating what is not yet
              available, and improving from evidence.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-200 my-8"></div>

          {/* Author Signature Info */}
          <div className="flex flex-col">
            <h4 className="text-[#0b1329] text-base font-semibold tracking-tight">
              Lennox McLeod
            </h4>
            <p className="text-gray-500 text-sm font-light mt-0.5">
              Founder & Executive Chairman, Zoiko Group
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
