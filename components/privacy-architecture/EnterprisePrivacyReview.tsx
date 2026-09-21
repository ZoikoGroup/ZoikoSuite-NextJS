"use client";

const reviewItems = [
  {
    title: "Processing activity model",
    description: "purpose, owner, classification, review cadence",
  },
  {
    title: "Classification and minimization detail",
    description: "field-level behaviour",
  },
  {
    title: "Retention and hold model",
    description: "conflict resolution and evidence",
  },
  {
    title: "Rights operations walkthrough",
    description: "verification, scope, conflicts",
  },
  {
    title: "Subprocessor list",
    description: "current, with purpose and location",
  },
  {
    title: "Open questions",
    description: "what is not yet implemented or verified",
  },
];

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="text-sm font-semibold leading-5 text-[#073B47]">
        {label}
      </label>

      {children}
    </div>
  );
}

export default function EnterprisePrivacyReview() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-10 lg:gap-14 lg:px-12">
          {/* Header */}
          <div className="flex w-full flex-col items-start">
            <div className="flex flex-col items-start gap-4 pt-2.5">
              <div className="flex items-center gap-2.5">
                <div className="h-[1.5px] w-4 bg-orange-400" />

                <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                  Enterprise privacy review
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-tight text-[#073B47] sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
                Including the questions that are
                <br className="hidden sm:block" />
                still open
              </h2>
            </div>

            <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-[#5B7178] sm:text-lg lg:text-xl lg:leading-8">
              A privacy review that only covers settled matters is not a
              privacy review. Unresolved questions are packaged alongside the
              answers.
            </p>
          </div>

          {/* Two column content */}
          <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
            {/* LEFT - Available through privacy review */}
            <div className="flex w-full flex-col items-start">
              <div className="pt-1.5">
                <span className="text-xs font-normal uppercase leading-5 tracking-wide text-[#5B7178]">
                  Available through privacy review
                </span>
              </div>

              <div className="mt-5 w-full">
                {reviewItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative flex min-h-9 items-start"
                  >
                    {/* Timeline */}
                    {index < reviewItems.length - 1 && (
                      <div className="absolute left-[5px] top-[13px] h-full w-px bg-[#B7C7CC]" />
                    )}

                    {/* Circle */}
                    <div className="relative z-10 mt-[1px] h-3 w-3 shrink-0 rounded-full border-2 border-orange-400 bg-white" />

                    {/* Content */}
                    <div className="ml-2 flex flex-wrap items-baseline gap-1.5 pb-4 text-xs leading-4">
                      <span className="font-bold text-[#073B47]">
                        {item.title}
                      </span>

                      <span className="font-normal text-[#073B47]">
                        · {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Request form card */}
            <div className="w-full rounded-2xl bg-white p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-xl font-semibold leading-6 text-[#073B47]">
                  Request an enterprise privacy review
                </h3>

                <p className="text-sm font-normal leading-6 text-[#5B7178]">
                  Enough to scope a response, nothing more.
                </p>
              </div>

              <form className="mt-5 flex w-full flex-col gap-3.5">
                {/* Row 1 */}
                <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <FormField label="Work email">
                    <input
                      type="email"
                      className="h-12 w-full rounded-lg border border-[#B7C7CC] bg-white px-4 text-sm text-[#073B47] outline-none focus:border-orange-400"
                    />
                  </FormField>

                  <FormField label="Full name">
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-[#B7C7CC] bg-white px-4 text-sm text-[#073B47] outline-none focus:border-orange-400"
                    />
                  </FormField>
                </div>

                {/* Row 2 */}
                <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <FormField label="Organization">
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-[#B7C7CC] bg-white px-4 text-sm text-[#073B47] outline-none focus:border-orange-400"
                    />
                  </FormField>

                  <FormField label="Your role">
                    <select
                      defaultValue="Privacy officer / DPO"
                      className="h-12 w-full appearance-none rounded-lg border border-[#B7C7CC] bg-white px-4 text-sm text-[#073B47] outline-none focus:border-orange-400"
                    >
                      <option>Privacy officer / DPO</option>
                      <option>Legal</option>
                      <option>Security</option>
                      <option>Compliance</option>
                      <option>Other</option>
                    </select>
                  </FormField>
                </div>

                {/* Row 3 */}
                <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <FormField label="What you need">
                    <select
                      defaultValue="Processing activity model"
                      className="h-12 w-full appearance-none rounded-lg border border-[#B7C7CC] bg-white px-4 text-sm text-[#073B47] outline-none focus:border-orange-400"
                    >
                      <option>Processing activity model</option>
                      <option>
                        Classification and minimization detail
                      </option>
                      <option>Retention and hold model</option>
                      <option>Rights operations walkthrough</option>
                      <option>Subprocessor list</option>
                    </select>
                  </FormField>

                  <FormField label="Jurisdictions in scope">
                    <input
                      type="text"
                      placeholder="Country names are fine"
                      className="h-12 w-full rounded-lg border border-[#B7C7CC] bg-white px-4 text-sm text-[#073B47] outline-none placeholder:text-[#6B8790] focus:border-orange-400"
                    />
                  </FormField>
                </div>

                {/* Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-orange-400 px-6 py-3 text-base font-semibold text-[#073B47] transition hover:bg-orange-300"
                  >
                    <span>Request privacy review</span>
                    <span className="text-xs font-semibold">→</span>
                  </button>
                </div>
              </form>

              {/* Privacy note */}
              <p className="pt-3 text-xs font-normal leading-5 text-[#5B7178]">
                We use your information to respond to this request. Consent is
                never pre-checked. See the{" "}
                <a
                  href="#"
                  className="text-[#073B47] underline underline-offset-2"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}