export default function RelatedSupport() {
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
          {/* Eyebrow */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <div
              className="self-stretch text-color-orange-40 text-xs font-normal leading-5 tracking-wider"
              style={{
                color:
                  "var(--color-color-orange-40, var(--color-orange-40, #A67C2E))",
              }}
            >
              08 / RELATED &amp; SUPPORT
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <div
              className="self-stretch text-color-azure-14 text-3xl font-semibold leading-10"
              style={{
                color:
                  "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
              }}
            >
              Related help, documentation &amp; support handoff
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {/* Related */}
          <div
            className="w-full min-h-[144px] px-6 pt-6 pb-16 bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Related
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Fixing approval matrix conflicts
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div
            className="w-full min-h-[144px] px-6 pt-6 pb-14 bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Documentation
              </div>
            </div>

            <div className="self-stretch pb-[0.58px] flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Configuring approval matrices by
                <br className="hidden sm:block" />
                policy class
              </div>
            </div>
          </div>

          {/* System Status */}
          <div
            className="w-full min-h-[144px] px-6 pt-6 pb-14 bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-azure-24 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
            }}
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                System Status
              </div>
            </div>

            <div className="self-stretch pb-[0.58px] flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Check current evidence export
                <br className="hidden sm:block" />
                status
              </div>
            </div>
          </div>

          {/* Support */}
          <div
            className="w-full min-h-[144px] px-6 pt-6 pb-6 bg-color-white-solid rounded-2xl border-l border-r border-t-[3px] border-b border-color-orange-40 flex flex-col justify-start items-start gap-2"
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              borderColor:
                "var(--color-color-orange-40, var(--color-orange-40, #A67C2E))",
            }}
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-41 text-xs font-normal uppercase leading-5 tracking-wide"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Support
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start">
              <div
                className="self-stretch text-color-azure-14 text-base font-semibold leading-4"
                style={{
                  color:
                    "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
                }}
              >
                Still stuck?
              </div>
            </div>

            <div
              className="w-full min-h-9 pt-1.5 pb-2 border-b border-color-black--0% flex justify-start items-center"
              style={{
                borderColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <div
                className="text-color-azure-24 text-sm font-semibold leading-6"
                style={{
                  color:
                    "var(--color-color-azure-24, var(--color-azure-24, #0F476A))",
                }}
              >
                Open Support Center →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}