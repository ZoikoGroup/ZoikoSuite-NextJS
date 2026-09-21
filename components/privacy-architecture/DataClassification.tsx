"use client";

const classes = [
  {
    name: "Public",
    description:
      "No access restriction. No export control. Standard retention.",
    restricted: false,
  },
  {
    name: "Internal",
    description:
      "Authenticated access within entity scope. Export logged. Standard retention.",
    restricted: false,
  },
  {
    name: "Confidential",
    description:
      "Role and attribute restricted. Export requires approval. Retention per policy reference.",
    restricted: false,
  },
  {
    name: "Restricted",
    description:
      "Purpose must be recorded before access. Export disabled by default and separately permissioned. Every access event retained as evidence. Excluded from AI processing paths.",
    restricted: true,
  },
];

const minimizationItems = [
  "Each field carries a necessity justification",
  "Optional fields are marked optional and can be omitted",
  "Free-text fields warn against entering sensitive data",
  "Collecting a field with no recorded purpose is prevented",
];

const restrictedItems = [
  "Masked by default in lists and reports",
  "Unmasking is an access event with recorded purpose",
  "Excluded from evidence manifests unless separately permitted",
  "Exclusion is stated in the manifest rather than silently applied",
];

function RequirementBadge() {
  return (
    <span className="inline-flex rounded-sm border border-[#B7C7CC] bg-[#F0F3F3] px-1.5 pt-0.5 pb-[3px] text-[8.5px] font-medium uppercase leading-3 tracking-wide text-[#49636B]">
      Architecture requirement
    </span>
  );
}

export default function DataClassification() {
  return (
    <section className="w-full bg-[#073B47]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-10 lg:gap-5 lg:px-12">
          {/* Header */}
          <div className="flex w-full flex-col items-start">
            <div className="flex items-center gap-2.5 pt-2.5">
              <div className="h-[1.5px] w-4 bg-orange-400" />

              <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                Data inventory, classification and minimization
              </span>
            </div>

            <h2 className="mt-4 max-w-[800px] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
              Sensitivity drives the control,
              <br className="hidden sm:block" />
              not the other way round
            </h2>

            <p className="mt-4 max-w-[690px] text-base font-normal leading-7 text-[#B6C9CE] sm:text-lg lg:text-xl lg:leading-8">
              Four classes, each with its own access, export and retention
              consequences. Collection necessity is assessed field by field.
            </p>
          </div>

          {/* Classification rows */}
          <div className="mt-5 flex w-full flex-col gap-1.5">
            {classes.map((item) => (
              <div
                key={item.name}
                className={`
                  flex w-full flex-col gap-3 rounded-lg
                  border border-[#DCEAEE]
                  bg-white px-3 py-3
                  sm:flex-row sm:items-center
                  ${
                    item.restricted
                      ? "border-l-[3px] border-l-[#D94A4A]"
                      : ""
                  }
                `}
              >
                <div className="w-full shrink-0 sm:w-36">
                  <span
                    className={`text-xs font-bold leading-5 ${
                      item.restricted
                        ? "text-[#D94A4A]"
                        : "text-[#073B47]"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-normal leading-4 text-[#5B7178]">
                    {item.description}
                  </p>
                </div>

                <div className="w-full shrink-0 sm:w-36">
                  <RequirementBadge />
                </div>
              </div>
            ))}
          </div>

          {/* Detail cards - 2 columns */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {/* Minimization */}
            <div className="rounded-2xl border border-[#DCEAEE] bg-white px-5 py-6 sm:px-7 sm:py-7">
              <div className="text-xs font-normal uppercase leading-5 tracking-wide text-[#5B7178]">
                Minimization at collection
              </div>

              <div className="mt-4 pl-4">
                <ul className="space-y-2 text-sm font-normal leading-6 text-[#5B7178]">
                  {minimizationItems.map((item) => (
                    <li key={item} className="list-disc pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <RequirementBadge />
              </div>
            </div>

            {/* Restricted behaviour */}
            <div className="rounded-2xl border border-[#DCEAEE] bg-white px-5 py-6 sm:px-7 sm:py-7">
              <div className="text-xs font-normal uppercase leading-5 tracking-wide text-[#5B7178]">
                Restricted-field behaviour
              </div>

              <div className="mt-4 pl-4">
                <ul className="space-y-2 text-sm font-normal leading-6 text-[#5B7178]">
                  {restrictedItems.map((item) => (
                    <li key={item} className="list-disc pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <RequirementBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}