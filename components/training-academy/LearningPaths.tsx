import React from "react";

const learningPaths = [
  {
    courses: "4 courses",
    title: "Governance foundations",
    description:
      "Build a working understanding of policy, scope, and approval before configuring anything.",
    tags: [
      "1 · Getting started",
      "2 · Policy scope",
      "3 · Approvals",
      "4 · Evidence",
    ],
  },
  {
    courses: "3 courses",
    title: "Evidence & audit practitioner",
    description:
      "Connect policy, controls, and evidence into an audit-ready record.",
    tags: [
      "1 · Evidence model",
      "2 · Manifests",
      "3 · Audit trail",
    ],
  },
  {
    courses: "5 courses",
    title: "Implementation for administrators",
    description:
      "Configure approval matrices, scopes, and exceptions for your organization.",
    tags: [
      "1 · Setup",
      "2 · Matrices",
      "3 · Scope",
      "4 · Exceptions",
      "5 · Review",
    ],
  },
];

export default function LearningPaths() {
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
            gap-10
            lg:px-12
          "
        >
          {/* SECTION HEADER */}
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
                02 / LEARNING PATHS
              </span>
            </div>

            {/* Title */}
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
                Start with a learning path
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
                A sequenced set of current courses toward a defined outcome —
                registry-ordered, not algorithmically inferred.
              </p>
            </div>
          </div>

          {/* CARDS */}
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
            {learningPaths.map((path) => (
              <div
                key={path.title}
                className="
                  flex
                  min-h-[256px]
                  flex-col
                  rounded-2xl
                  border
                  border-l-4
                  border-[#D7E2E6]
                  border-l-[#0C6678]
                  bg-white
                  px-7
                  pb-4
                  pt-6
                "
              >
                {/* Course Count */}
                <div>
                  <span
                    className="
                      text-xs
                      font-normal
                      uppercase
                      leading-5
                      tracking-[0.06em]
                      text-[#58727D]
                    "
                  >
                    Learning path · {path.courses}
                  </span>
                </div>

                {/* Title */}
                <div className="mt-1">
                  <h3
                    className="
                      text-base
                      font-semibold
                      leading-5
                      text-[#193B4A]
                    "
                  >
                    {path.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="mt-3">
                  <p
                    className="
                      max-w-[320px]
                      text-sm
                      font-normal
                      leading-6
                      text-[#58727D]
                    "
                  >
                    {path.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-5 flex min-h-[56px] flex-wrap content-start gap-1.5">
                  {path.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        inline-flex
                        h-6
                        items-center
                        rounded-[5px]
                        bg-[#F1F2F0]
                        px-1.5
                        text-xs
                        font-normal
                        leading-4
                        text-[#355361]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-auto border-b border-[#D7E2E6] pt-1.5 pb-2">
                  <button
                    type="button"
                    className="
                      text-sm
                      font-semibold
                      leading-6
                      text-[#193B4A]
                      transition-opacity
                      hover:opacity-70
                    "
                  >
                    View learning path →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}