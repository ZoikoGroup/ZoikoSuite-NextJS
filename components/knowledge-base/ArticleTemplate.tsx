export default function ArticleTemplate() {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-color-grey-95"
      style={{
        backgroundColor:
          "var(--color-color-grey-95, var(--color-grey-95, #F7F6F2))",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-0 sm:px-4 lg:px-12 flex flex-col justify-start items-start gap-8 lg:gap-10">

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
              06 / ARTICLE TEMPLATE
            </div>
          </div>

          {/* Title */}
          <div className="w-full pt-px flex flex-col justify-start items-start">
            <h2
              className="w-full text-color-azure-14 text-3xl sm:text-3xl font-semibold leading-10"
              style={{
                color:
                  "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
              }}
            >
              Knowledge base article template
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[562.31px] flex flex-col justify-start items-start">
            <p
              className="text-color-azure-41 text-base font-normal leading-7"
              style={{
                color:
                  "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
              }}
            >
              A symptom-first troubleshooting structure: what you&apos;re seeing,
              likely cause, and the fix — with a safe diagnostic command where
              relevant.
            </p>
          </div>
        </div>

        {/* Article Image */}
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            className="w-full max-w-[1224px] h-auto lg:h-[611px] rounded-2xl border border-color-azure-88 object-cover"
            style={{
              borderColor:
                "var(--color-color-azure-88, var(--color-azure-88, #D9E2E6))",
            }}
            src="/knowledge-base/image.png"
            alt="Knowledge base article template"
          />
        </div>

      </div>
    </section>
  );
}