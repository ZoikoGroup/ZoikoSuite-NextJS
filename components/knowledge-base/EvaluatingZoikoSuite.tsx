export default function EvaluatingZoikoSuite() {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-96 py-12 sm:py-16 lg:py-20 bg-color-azure-11"
      style={{
        backgroundColor:
          "var(--color-color-azure-11, var(--color-azure-11, #073B47))",
      }}
    >
      <div className="w-full max-w-[720px] mx-auto px-0 sm:px-6 lg:px-12 pt-2 flex flex-col justify-start items-center gap-3">
        {/* Eyebrow */}
        <div className="w-56 h-5 relative">
          <div
            className="w-4 h-[1.5px] left-0 top-[8.73px] absolute bg-orange-400"
            style={{
              backgroundColor: "#FB923C",
            }}
          />

          <div
            className="w-48 left-[25px] top-[-1px] absolute text-center text-orange-400 text-xs font-medium uppercase leading-5 tracking-widest"
            style={{
              color: "#FB923C",
            }}
          >
            EVALUATING ZOIKOSUITE?
          </div>
        </div>

        {/* Title */}
        <div className="self-stretch pt-[3.31px] flex flex-col justify-start items-center">
          <div
            className="text-center text-color-grey-92-2 text-3xl font-semibold leading-10"
            style={{
              color:
                "var(--color-color-grey-92-2, var(--color-grey-92-2, #E5E7E3))",
            }}
          >
            Talk to a solutions architect about your
            <br className="hidden sm:block" />
            setup
          </div>
        </div>

        {/* Description */}
        <div className="w-full max-w-[562.31px] flex flex-col justify-start items-center">
          <div
            className="text-center text-color-azure-72 text-base font-normal leading-7"
            style={{
              color:
                "var(--color-color-azure-72, var(--color-azure-72, #A8C0C6))",
            }}
          >
            See how self-service support and governed workflows fit your
            organization.
          </div>
        </div>

        {/* Buttons */}
        <div className="self-stretch pt-2 flex justify-center items-start gap-3 flex-wrap">
          {/* Primary CTA */}
          <button
            type="button"
            className="min-h-11 px-6 py-2.5 bg-orange-400 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-400 flex justify-center items-center gap-2"
            style={{
              backgroundColor: "#FB923C",
              outlineColor: "#FB923C",
            }}
          >
            <span
              className="text-center text-color-orange-8 text-base font-semibold leading-6"
              style={{
                color:
                  "var(--color-color-orange-8, var(--color-orange-8, #431407))",
              }}
            >
              Talk to a solutions architect
            </span>

            <span
              className="text-center text-color-orange-8 text-xs font-semibold leading-5 opacity-90"
              style={{
                color:
                  "var(--color-color-orange-8, var(--color-orange-8, #431407))",
              }}
            >
              →
            </span>
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            className="min-h-11 px-6 py-2.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-color-azure-43 flex justify-center items-center"
            style={{
              outlineColor:
                "var(--color-color-azure-43, var(--color-azure-43, #62818A))",
            }}
          >
            <span
              className="text-center text-color-grey-93-2 text-base font-semibold leading-6"
              style={{
                color:
                  "var(--color-color-grey-93-2, var(--color-grey-93-2, #D9DEDB))",
              }}
            >
              Return to knowledge base
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}