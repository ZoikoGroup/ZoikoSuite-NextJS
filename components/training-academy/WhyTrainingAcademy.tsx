import React from "react";

const benefits = [
  {
    title: "Structured",
    description:
      "Learning paths sequence courses toward a defined outcome, not a random list.",
  },
  {
    title: "Current",
    description:
      "Updated/verified metadata means training reflects the approved product state.",
  },
  {
    title: "Accessible",
    description:
      "Captions, transcripts, and keyboard-first design across media and assessments.",
  },
];

export default function WhyTrainingAcademy() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1280px]
          flex-col
          items-start
          gap-10
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-3">
          <div className="w-full">
            <span
              className="
                text-xs
                font-normal
                leading-5
                tracking-[0.12em]
                text-[#C28A27]
              "
            >
              07 / WHY TRAINING ACADEMY
            </span>
          </div>

          <div className="w-full">
            <h2
              className="
                text-2xl
                font-semibold
                leading-8
                text-[#193B4A]
                sm:text-3xl
                sm:leading-10
              "
            >
              Why learn with Training Academy
            </h2>
          </div>
        </div>

        {/* BENEFIT CARDS */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-4
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="
                flex
                min-h-[150px]
                w-full
                flex-col
                items-start
                gap-2
                rounded-2xl
                border
                border-[#D7E2E6]
                bg-white
                px-6
                py-6
              "
            >
              <h3
                className="
                  w-full
                  text-base
                  font-semibold
                  leading-5
                  text-[#193B4A]
                "
              >
                {benefit.title}
              </h3>

              <p
                className="
                  w-full
                  text-sm
                  font-normal
                  leading-6
                  text-[#58727D]
                "
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}