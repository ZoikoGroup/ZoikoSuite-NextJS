import React from "react";

const catalogItems = [
  {
    title: "Getting started with governed workflows",
    access: "Open access",
    duration: "~35 min",
    open: true,
  },
  {
    title: "Configuring approval matrices",
    access: "Sign in required",
    duration: "~50 min",
    open: false,
  },
  {
    title: "Understanding scope & applicability",
    access: "Open access",
    duration: "~28 min",
    open: true,
  },
  {
    title: "Mapping controls to evidence",
    access: "Sign in required",
    duration: "~40 min",
    open: false,
  },
];

export default function TrainingCatalog() {
  return (
    <section className="w-full bg-[#F5F5F3]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-20
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1280px]
            flex-col
            items-start
            gap-6
            lg:px-12
          "
        >
          {/* HEADER */}
          <div className="flex w-full flex-col items-start gap-3">
            {/* Eyebrow */}
            <div className="w-full">
              <span
                className="
                  text-xs
                  font-normal
                  uppercase
                  leading-5
                  tracking-[0.12em]
                  text-[#C28A27]
                "
              >
                04 / CATALOG
              </span>
            </div>

            {/* Heading */}
            <div className="w-full pt-px">
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
                Training catalog
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[562px]">
              <p
                className="
                  text-base
                  font-normal
                  leading-7
                  text-[#58727D]
                "
              >
                Browse published ZoikoSuite training. Filters and availability
                reflect the approved Academy catalog.
              </p>
            </div>
          </div>

          {/* CATALOG CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-2

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {catalogItems.map((item) => (
              <article
                key={item.title}
                className="
                  flex
                  min-h-[176px]
                  w-full
                  flex-col
                  rounded-2xl
                  border
                  border-[#D7E2E6]
                  bg-white
                  px-6
                  pb-5
                  pt-5
                "
                style={{
                  borderTopWidth: "3px",
                  borderTopColor: item.open ? "#0C6678" : "#C28A27",
                }}
              >
                {/* TYPE */}
                <span
                  className="
                    text-xs
                    font-normal
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#C28A27]
                  "
                >
                  Course
                </span>

                {/* TITLE */}
                <h3
                  className="
                    mt-2
                    max-w-[240px]
                    text-base
                    font-semibold
                    leading-4
                    text-[#193B4A]
                  "
                >
                  {item.title}
                </h3>

                {/* ACCESS */}
                <div className="mt-5">
                  <span
                    className={`
                      inline-flex
                      items-center
                      rounded-[5px]
                      px-2
                      py-1
                      text-xs
                      font-normal
                      leading-4
                      ${
                        item.open
                          ? "bg-[#F1F4F2] text-[#31845A]"
                          : "bg-[#F1F1EF] text-[#58727D]"
                      }
                    `}
                  >
                    {item.access}
                  </span>
                </div>

                {/* DURATION */}
                <span
                  className="
                    mt-2.5
                    text-xs
                    font-normal
                    leading-5
                    text-[#58727D]
                  "
                >
                  {item.duration}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}