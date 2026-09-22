export default function TaskAndType() {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-color-grey-95"
      style={{
        backgroundColor:
          "var(--color-color-grey-95, var(--color-grey-95, #F7F6F2))",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-0 sm:px-4 lg:px-12 flex flex-col justify-start items-start gap-5">

        {/* Heading */}
        <div className="w-full flex flex-col justify-start items-start gap-3">

          {/* Eyebrow */}
          <div className="w-full flex flex-col justify-start items-start">
            <div
              className="w-full text-color-orange-40 text-xs font-normal leading-5 tracking-wider"
              style={{
                color:
                  "var(--color-color-orange-40, var(--color-orange-40, #A67C2E))",
              }}
            >
              04 / TASK &amp; TYPE
            </div>
          </div>

          {/* Title */}
          <div className="w-full flex flex-col justify-start items-start">
            <h2
              className="w-full text-color-azure-14 text-3xl font-semibold leading-10"
              style={{
                color:
                  "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
              }}
            >
              Browse by task or content type
            </h2>
          </div>
        </div>

        {/* Task Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">

          {/* Card 1 */}
          <div
            className="w-full h-32 relative bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            {/* Category */}
            <div className="absolute left-[25px] top-[27px] flex flex-col items-start">
              <div
                className="text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Troubleshooting
              </div>
            </div>

            {/* Title */}
            <div className="absolute left-[25px] top-[53.14px] flex flex-col items-start">
              <div
                className="text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Resolving delayed evidence exports
              </div>
            </div>

            {/* Metadata */}
            <div className="absolute left-[25px] top-[80.53px] flex flex-col items-start">
              <div
                className="text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Evidence &amp; Audit · Updated Sep 3
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="w-full h-32 relative bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            {/* Category */}
            <div className="absolute left-[25px] top-[27px] flex flex-col items-start">
              <div
                className="text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Troubleshooting
              </div>
            </div>

            {/* Title */}
            <div className="absolute left-[25px] top-[53.14px] flex flex-col items-start">
              <div
                className="text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Fixing approval matrix conflicts
              </div>
            </div>

            {/* Metadata */}
            <div className="absolute left-[25px] top-[80.53px] flex flex-col items-start">
              <div
                className="text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Governance &amp; Policy · Updated Sep 8
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="w-full h-32 relative bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            {/* Category */}
            <div className="absolute left-[25px] top-[27px] flex flex-col items-start">
              <div
                className="text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Reference
              </div>
            </div>

            {/* Title */}
            <div className="absolute left-[25px] top-[53.14px] flex flex-col items-start">
              <div
                className="text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Common permission-denied error codes
              </div>
            </div>

            {/* Metadata */}
            <div className="absolute left-[25px] top-[80.53px] flex flex-col items-start">
              <div
                className="text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Identity &amp; Access · Updated Aug 22
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}