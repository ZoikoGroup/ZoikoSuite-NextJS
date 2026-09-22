export default function CommonTasks() {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-color-grey-95"
      style={{
        backgroundColor:
          "var(--color-color-grey-95, var(--color-grey-95, #F7F6F2))",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-0 sm:px-4 lg:px-12 flex flex-col justify-start items-start gap-8 sm:gap-10">
        {/* Heading */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div
              className="self-stretch justify-center text-color-orange-40 text-xs font-normal leading-5 tracking-wider"
              style={{
                color:
                  "var(--color-color-orange-40, var(--color-orange-40, #A67C2E))",
              }}
            >
              02 / COMMON TASKS
            </div>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start">
            <div
              className="self-stretch justify-center text-color-azure-14 text-3xl font-semibold leading-10"
              style={{
                color:
                  "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
              }}
            >
              Common tasks
            </div>
          </div>
        </div>

        {/* Common Task Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {/* Card 1 */}
          <div
            className="w-full min-h-[118px] px-6 pt-6 pb-10 bg-color-white-solid rounded-2xl border-l-[3px] border-r border-t border-b border-color-orange-57 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-orange-57, var(--color-orange-57, #D3A94F))",
            }}
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Fix a stuck approval workflow
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-41 text-xs font-normal leading-5"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Troubleshoot
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="w-full min-h-[118px] px-6 pt-6 pb-10 bg-color-white-solid rounded-2xl border-l-[3px] border-r border-t border-b border-color-orange-57 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-orange-57, var(--color-orange-57, #D3A94F))",
            }}
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Resolve delayed evidence exports
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-41 text-xs font-normal leading-5"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Troubleshoot
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="w-full min-h-[118px] px-6 pt-6 pb-10 bg-color-white-solid rounded-2xl border-l-[3px] border-r border-t border-b border-color-orange-57 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-orange-57, var(--color-orange-57, #D3A94F))",
            }}
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Reset a policy review reminder
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-41 text-xs font-normal leading-5"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Manage
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="w-full min-h-[118px] px-6 py-6 bg-color-white-solid rounded-2xl border-l-[3px] border-r border-t border-b border-color-orange-57 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-orange-57, var(--color-orange-57, #D3A94F))",
            }}
          >
            <div className="self-stretch pb-[0.58px] flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Understand a permission-denied
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                error
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-41 text-xs font-normal leading-5"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Reference
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}