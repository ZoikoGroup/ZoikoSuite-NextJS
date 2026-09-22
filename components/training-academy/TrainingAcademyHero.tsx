import React from "react";

export default function TrainingAcademyHero() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          w-full max-w-[1280px] mx-auto
          px-4 sm:px-6 lg:px-12
          py-10 sm:py-14 lg:py-0
          flex flex-col lg:flex-row
          justify-center items-center
          gap-8 lg:gap-9
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            w-full lg:flex-1
            pt-0 lg:pt-2
            flex flex-col
            justify-start items-start
            gap-3.5
          "
        >
          {/* Eyebrow */}
          <div className="w-full max-w-64 h-5 relative">
            <div
              className="
                w-4 h-[1.5px]
                left-0 top-[8.73px]
                absolute
                bg-[#C28A27]
              "
            />

            <div
              className="
                w-[calc(100%-25px)]
                left-[25px] top-[-1px]
                absolute
                whitespace-nowrap
                text-[#C28A27]
                text-xs
                font-medium
                uppercase
                leading-5
              "
            >
              TRAINING ACADEMY
            </div>
          </div>

          {/* Heading */}
          <div className="self-stretch pt-0.5 flex flex-col justify-start items-start">
            <h1
              className="
                self-stretch
                text-[#193B4A]
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-[38px]
                sm:leading-[46px]
                lg:leading-[51px]
              "
            >
              Learn ZoikoSuite with
              <br />
              structured, practical
              <br />
              training.
            </h1>
          </div>

          {/* Description */}
          <div
            className="
              w-full max-w-[562.3px]
              pb-2.5
              flex flex-col
              justify-start items-start
            "
          >
            <p
              className="
                text-[#58727D]
                text-sm
                sm:text-base
                font-normal
                leading-6
                sm:leading-7
              "
            >
              Explore published learning paths and training designed to help
              people understand ZoikoSuite and build the knowledge relevant to
              their goals. Availability, prerequisites, access, and currentness
              come from the approved Academy catalog.
            </p>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div
          className="
            w-full lg:flex-1
            h-[300px]
            sm:h-[380px]
            lg:h-[464px]
            px-0
            sm:px-3
            lg:px-5
            pt-0
            sm:pt-4
            lg:pt-7
            pb-0
            sm:pb-4
            lg:pb-6
            rounded-2xl
            overflow-hidden
          "
        >
          <img
            src="/training-academy/hero.png"
            alt="ZoikoSuite Training Academy"
            className="
              w-full h-full
              object-cover
              rounded-2xl
            "
          />
        </div>
      </div>
    </section>
  );
}