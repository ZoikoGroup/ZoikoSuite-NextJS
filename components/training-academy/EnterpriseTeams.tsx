import React from "react";

export default function EnterpriseTeams() {
  return (
    <section className="w-full bg-[#073B47]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-20
          lg:py-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[720px]
            flex-col
            items-center
            gap-3
            px-0
            pt-2
            sm:px-8
          "
        >
          {/* EYEBROW */}
          <div className="flex h-5 w-auto items-center justify-center">
  <div className="mr-2.5 h-[1.5px] w-4 bg-[#F59E0B]" />

  <span
    className="
      whitespace-nowrap
      text-center
      text-xs
      font-medium
      uppercase
      leading-5
      tracking-[0.12em]
      text-[#F59E0B]
    "
  >
    ENTERPRISE TEAMS
  </span>
</div>

          {/* HEADING */}
          <div className="w-full pt-[3px]">
            <h2
              className="
                text-center
                text-2xl
                font-semibold
                leading-8
                text-[#E8F0EF]
                sm:text-3xl
                sm:leading-10
              "
            >
              Train your team with a structured
              <br className="hidden sm:block" />
              ZoikoSuite learning plan
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[562px]">
            <p
              className="
                text-center
                text-sm
                font-normal
                leading-6
                text-[#A9C0C5]
                sm:text-base
                sm:leading-7
              "
            >
              Talk to a solutions architect about enabling your organization
              at scale.
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex
              w-full
              flex-wrap
              justify-center
              gap-3
              pt-2
            "
          >
            <button
              type="button"
              className="
                inline-flex
                h-11
                min-h-11
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#F59E0B]
                bg-[#F59E0B]
                px-6
                py-2.5
                text-base
                font-semibold
                leading-6
                text-[#17333B]
                transition-opacity
                hover:opacity-90
              "
            >
              <span>Talk to a solutions architect</span>
              <span className="text-xs font-semibold leading-5">→</span>
            </button>

            <button
              type="button"
              className="
                inline-flex
                h-11
                min-h-11
                items-center
                justify-center
                rounded-full
                border
                border-[#6B858C]
                px-6
                py-2.5
                text-base
                font-semibold
                leading-6
                text-[#E8F0EF]
                transition-colors
                hover:bg-white/5
              "
            >
              Continue browsing training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}