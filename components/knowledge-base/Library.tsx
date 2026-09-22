export default function Library() {
  const cards = [
    {
      category: "Troubleshooting",
      title: "Resolving delayed evidence exports",
      description:
        "Symptom, likely cause, and fix for slow manifest export processing.",
      meta: "Evidence & Audit · Updated Sep 3",
    },
    {
      category: "Troubleshooting",
      title: "Fixing approval matrix conflicts",
      description:
        "What to do when two reviewer rules overlap on the same policy class.",
      meta: "Governance & Policy · Updated Sep 8",
    },
    {
      category: "How-to",
      title: "Resetting a policy review reminder",
      description:
        "Adjust the next-review date without re-approving the whole policy.",
      meta: "Governance & Policy · Updated Aug 27",
    },
    {
      category: "Reference",
      title: "Common permission-denied error codes",
      description:
        "What each error code means and which role resolves it.",
      meta: "Identity & Access · Updated Aug 22",
    },
  ];

  return (
    <section
      className="
        w-full max-w-[1440px] mx-auto
        px-4 sm:px-6 lg:px-20
        py-12 sm:py-16 lg:py-20
        bg-color-white-solid
      "
      style={{
        backgroundColor:
          "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
      }}
    >
      <div
        className="
          w-full max-w-[1280px] mx-auto
          px-0 sm:px-4 lg:px-12
          flex flex-col
          justify-start items-start
          gap-1.5
        "
      >
        {/* Heading */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          {/* Eyebrow */}
          <div className="w-full">
            <div
              className="
                w-full
                text-xs font-normal
                leading-5 tracking-wider
                text-color-orange-40
              "
              style={{
                color:
                  "var(--color-color-orange-40, var(--color-orange-40, #A67C2E))",
              }}
            >
              05 / LIBRARY
            </div>
          </div>

          {/* Heading */}
          <div className="w-full">
            <h2
              className="
                w-full
                text-2xl sm:text-3xl
                font-semibold
                leading-8 sm:leading-10
                text-color-azure-14
              "
              style={{
                color:
                  "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
              }}
            >
              All knowledge base
            </h2>
          </div>
        </div>

        {/* Library Grid */}
        <div
          className="
            w-full
            pt-2 sm:pt-3 lg:pt-2
            grid grid-cols-1 lg:grid-cols-2
            gap-4
          "
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                w-full
                min-h-[160px]
                lg:h-40
                p-5 sm:p-6
                bg-color-white-solid
                rounded-2xl
                border
                border-t-[3px]
                border-color-azure-24
                overflow-hidden
                flex flex-col
                justify-start items-start
              "
              style={{
                backgroundColor:
                  "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
                borderColor:
                  "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
              }}
            >
              {/* Category */}
              <div className="w-full">
                <div
                  className="
                    text-xs font-normal
                    uppercase leading-5
                    tracking-wide
                    text-color-azure-41
                  "
                  style={{
                    color:
                      "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                  }}
                >
                  {card.category}
                </div>
              </div>

              {/* Title */}
              <div className="w-full mt-1.5">
                <div
                  className="
                    text-sm sm:text-base
                    font-semibold
                    leading-5
                    text-color-azure-14
                  "
                  style={{
                    color:
                      "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                  }}
                >
                  {card.title}
                </div>
              </div>

              {/* Description */}
              <div className="w-full mt-2">
                <div
                  className="
                    text-sm font-normal
                    leading-6
                    text-color-azure-41
                  "
                  style={{
                    color:
                      "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                  }}
                >
                  {card.description}
                </div>
              </div>

              {/* Metadata */}
              <div className="w-full mt-2.5">
                <div
                  className="
                    text-xs font-normal
                    uppercase leading-5
                    tracking-wide
                    text-color-azure-41
                  "
                  style={{
                    color:
                      "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                  }}
                >
                  {card.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}