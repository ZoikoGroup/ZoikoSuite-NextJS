"use client";

const stages = [
  {
    number: "Stage 01",
    title: "Collection",
    description: (
      <>
        Necessity assessed field by field. Optional fields marked optional.
      </>
    ),
  },
  {
    number: "Stage 02",
    title: "Classification",
    description: (
      <>
        Data class assigned, driving every control that follows.
      </>
    ),
  },
  {
    number: "Stage 03",
    title: "Purpose binding",
    description: (
      <>
        Processing purpose, legal basis reference and named owner attached.
      </>
    ),
  },
  {
    number: "Stage 04",
    title: "Access",
    description: (
      <>
        Role, attribute, entity scope and recorded purpose evaluated per
        request.
      </>
    ),
  },
  {
    number: "Stage 05",
    title: "Transfer",
    description: (
      <>
        Cross-border movement reviewed against transfer context, not assumed.
      </>
    ),
  },
  {
    number: "Stage 06",
    title: "Retention",
    description: (
      <>
        Rule, trigger and any conflicting hold evaluated before deletion.
      </>
    ),
  },
  {
    number: "Stage 07",
    title: "Deletion or hold",
    description: (
      <>
        Executed and evidenced, or blocked with a named owner.
      </>
    ),
  },
];

export default function PrivacyModel() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

        {/* Heading */}
        <div className="flex w-full flex-col items-start">

          {/* Label */}
          <div className="flex h-5 items-center gap-2.5 pt-0.5">
            <div className="h-[1.5px] w-4 bg-orange-400" />

            <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
              Privacy architecture operating model
            </span>
          </div>

          {/* Title */}
          <h2
            className="
              mt-4
              text-3xl font-semibold leading-tight
              text-[#073B47]
              sm:text-4xl
              lg:text-5xl lg:leading-[49.28px]
            "
          >
            Privacy decisions attach to the
            <br className="hidden sm:block" />
            data lifecycle
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[690px]
              text-base font-normal leading-7
              text-[#5B7178]
              sm:text-lg
              lg:text-xl lg:leading-8
            "
          >
            Seven stages. At each one, the controls that apply are resolved
            from the data&apos;s own classification and purpose rather than
            from where it happens to sit.
          </p>
        </div>

        {/* Stages */}
        <div
          className="
            mt-9
            grid w-full
            grid-cols-1 gap-3
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-7
          "
        >
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className="
                relative
                min-h-[150px]
                rounded-[10px]
                border border-[#6B8790]
                border-t-[3px]
                bg-white
                p-2.5
              "
            >
              {/* Stage number */}
              <div className="text-[8px] font-normal uppercase leading-3 tracking-wide text-[#C76E20]">
                {stage.number}
              </div>

              {/* Title */}
              <div className="pt-1.5">
                <h3 className="text-xs font-bold leading-4 text-[#073B47]">
                  {stage.title}
                </h3>
              </div>

              {/* Description */}
              <p className="pt-1.5 text-xs font-normal leading-4 text-[#5B7178]">
                {stage.description}
              </p>

              {/* Arrow */}
              {index < stages.length - 1 && (
                <span
                  className="
                    absolute right-2.5 top-[17px]
                    hidden text-[10px] leading-4
                    text-[#C76E20]
                    xl:block
                  "
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}