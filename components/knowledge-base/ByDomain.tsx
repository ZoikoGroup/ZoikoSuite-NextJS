export default function ByDomain() {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-color-white-solid"
      style={{
        backgroundColor:
          "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-0 sm:px-4 lg:px-12 flex flex-col justify-start items-start gap-10">
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
              03 / BY DOMAIN
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
              Browse knowledge base by product or domain
            </h2>
          </div>
        </div>

        {/* Domain Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {/* Card 1 */}
          <div
            className="w-full min-h-[96px] p-6 bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            <div className="w-full flex flex-col justify-start items-start">
              <div
                className="w-full text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Governance &amp; Policy
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start">
              <div
                className="w-full text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                28 articles
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="w-full min-h-[96px] p-6 bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            <div className="w-full flex flex-col justify-start items-start">
              <div
                className="w-full text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Evidence &amp; Audit
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start">
              <div
                className="w-full text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                19 articles
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="w-full min-h-[96px] p-6 bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            <div className="w-full flex flex-col justify-start items-start">
              <div
                className="w-full text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Integrations &amp; APIs
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start">
              <div
                className="w-full text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                14 articles
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="w-full min-h-[96px] p-6 bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            <div className="w-full flex flex-col justify-start items-start">
              <div
                className="w-full text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Identity &amp; Access
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start">
              <div
                className="w-full text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                11 articles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}