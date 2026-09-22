import React from "react";

const resources = [
  {
    type: "Documentation",
    title: "Configuring approval matrices by policy class",
    accent: "#0C6678",
  },
  {
    type: "Knowledge Base",
    title: "Fixing approval matrix conflicts",
    accent: "#0C6678",
  },
  {
    type: "Executive Briefs",
    title: 'What "policy-to-evidence" governance requires',
    accent: "#0C6678",
  },
];

export default function RelatedSupport() {
  return (
    <section className="w-full bg-[#F5F5F3]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
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
          {/* HEADER */}
          <div className="flex w-full flex-col items-start gap-3">
            <span
              className="
                text-xs
                font-normal
                leading-5
                tracking-[0.12em]
                text-[#C28A27]
              "
            >
              08 / RELATED &amp; SUPPORT
            </span>

            <h2
              className="
                w-full
                text-2xl
                font-semibold
                leading-8
                text-[#193B4A]
                sm:text-3xl
                sm:leading-10
              "
            >
              Related resources &amp; learning continuity
            </h2>
          </div>

          {/* RESOURCE CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {resources.map((resource) => (
              <article
                key={resource.type}
                className="
                  flex
                  min-h-[144px]
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-2xl
                  border
                  border-[#D7E2E6]
                  bg-white
                  px-6
                  pb-10
                  pt-6
                "
                style={{
                  borderTopWidth: "3px",
                  borderTopColor: resource.accent,
                }}
              >
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
                  {resource.type}
                </span>

                <h3
                  className="
                    w-full
                    text-base
                    font-semibold
                    leading-4
                    text-[#193B4A]
                  "
                >
                  {resource.title}
                </h3>
              </article>
            ))}

            {/* SUPPORT CARD */}
            <article
              className="
                flex
                min-h-[144px]
                w-full
                flex-col
                items-start
                rounded-2xl
                border
                border-[#D7E2E6]
                border-t-[3px]
                border-t-[#C28A27]
                bg-white
                px-6
                pb-6
                pt-6
              "
            >
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
                Support
              </span>

              <h3
                className="
                  mt-2
                  w-full
                  text-base
                  font-semibold
                  leading-4
                  text-[#193B4A]
                "
              >
                Course feedback or issue?
              </h3>

              <a
                href="#"
                className="
                  mt-4
                  border-b
                  border-[#D7E2E6]
                  pb-2
                  pt-1.5
                  text-sm
                  font-semibold
                  leading-6
                  text-[#0C6678]
                  transition-opacity
                  hover:opacity-75
                "
              >
                Open Support Center →
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}