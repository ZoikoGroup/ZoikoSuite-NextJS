import React from "react";

const featuredItems = [
  {
    type: "Course",
    title: "Getting started with governed workflows",
    access: "Open access",
    updated: "Updated Sep 2, 2026 · ~35 min",
    topBorder: "#0C6678",
    badgeBg: "#F1F4F2",
    badgeText: "#31845A",
  },
  {
    type: "Course",
    title: "Configuring approval matrices",
    access: "Sign in required",
    updated: "Updated Sep 8, 2026 · ~50 min",
    topBorder: "#C28A27",
    badgeBg: "#F1F1EF",
    badgeText: "#58727D",
  },
  {
    type: "Learning Path",
    title: "Evidence & audit practitioner",
    access: "Open access",
    updated: "Updated Aug 27, 2026 · 3 courses",
    topBorder: "#0C6678",
    badgeBg: "#F1F4F2",
    badgeText: "#31845A",
  },
];

export default function FeaturedTraining() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        <div className="flex w-full flex-col items-start gap-10">
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
                03 / FEATURED
              </span>
            </div>

            {/* Heading */}
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
                Featured &amp; recently updated training
              </h2>
            </div>
          </div>

          {/* FEATURED CARDS */}
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
            {featuredItems.map((item) => (
              <article
                key={item.title}
                className="
                  flex
                  min-h-[160px]
                  w-full
                  flex-col
                  rounded-2xl
                  border
                  border-[#D7E2E6]
                  bg-white
                  px-6
                  pb-5
                  pt-5

                  transition-shadow
                  duration-200
                  hover:shadow-sm
                "
                style={{
                  borderTopWidth: "3px",
                  borderTopColor: item.topBorder,
                }}
              >
                {/* TYPE */}
                <div>
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
                    {item.type}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mt-2">
                  <h3
                    className="
                      text-base
                      font-semibold
                      leading-5
                      text-[#193B4A]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* ACCESS BADGE */}
                <div className="mt-2.5">
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-[5px]
                      px-2
                      py-1
                      text-xs
                      font-normal
                      leading-4
                    "
                    style={{
                      backgroundColor: item.badgeBg,
                      color: item.badgeText,
                    }}
                  >
                    {item.access}
                  </span>
                </div>

                {/* UPDATED */}
                <div className="mt-2.5">
                  <span
                    className="
                      text-xs
                      font-normal
                      leading-5
                      text-[#58727D]
                    "
                  >
                    {item.updated}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}