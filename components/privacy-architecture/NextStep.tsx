"use client";

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

const inputClass =
  "h-12 w-full rounded-lg border border-[#B7C7CC] bg-white px-4 text-sm text-[#073B47] outline-none focus:border-orange-400";

export default function NextStep() {
  return (
    <section className="w-full bg-[#073B47]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          
          {/* LEFT CONTENT */}
          <div className="flex w-full flex-1 flex-col items-start gap-4 pt-2.5">
            
            {/* Eyebrow */}
            <div className="flex h-5 items-center gap-[9px]">
              <div className="h-[1.5px] w-4 bg-orange-400" />

              <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                Next step
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[500px] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
              Bring the erasure
          
              request your hold
            
              policy blocks
            </h2>

            {/* Description */}
            <p className="max-w-[542px] pt-1 text-base font-normal leading-7 text-[#C7D9DD] sm:text-lg">
              A verified request with resolved scope, sitting against an active
              preservation obligation. A restricted field that keeps appearing
              in exports. A processing activity whose review lapsed two
              quarters ago. We will trace one through purpose, classification,
              access and evidence — and say where the model does not yet reach.
            </p>

            {/* Disclaimer */}
            <div className="max-w-[566px] border-l-2 border-orange-400 pl-3.5">
              <p className="text-xs font-normal leading-5 text-[#A8C0C6]">
                No privacy compliance, certification, transfer-basis
                determination, notification window or capability availability
                is committed outside an approved commercial document.
              </p>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="w-full flex-1 rounded-2xl bg-white p-5 sm:p-7 lg:p-8">
            
            {/* Card heading */}
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold leading-6 text-[#073B47]">
                Talk to a solutions architect
              </h3>

              <p className="text-sm font-normal leading-6 text-[#5B7178]">
                Every section of this page was readable without it.
              </p>
            </div>

            {/* Form */}
            <form className="mt-5 flex w-full flex-col gap-3.5">
              
              {/* Row 1 */}
              <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
                <FormField label="Work email">
                  <input
                    type="email"
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Full name">
                  <input
                    type="text"
                    className={inputClass}
                  />
                </FormField>
              </div>

              {/* Row 2 */}
              <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
                <FormField label="Organization">
                  <input
                    type="text"
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Your role">
                  <select
                    defaultValue="Privacy officer / DPO"
                    className={`${inputClass} appearance-none`}
                  >
                    <option>Privacy officer / DPO</option>
                    <option>Legal</option>
                    <option>Security</option>
                    <option>Compliance</option>
                    <option>Other</option>
                  </select>
                </FormField>
              </div>

              {/* Primary question */}
              <FormField label="Primary question">
                <select
                  defaultValue="Classification and restricted-field controls"
                  className={`${inputClass} appearance-none`}
                >
                  <option>
                    Classification and restricted-field controls
                  </option>
                  <option>Processing activity model</option>
                  <option>Retention and hold model</option>
                  <option>Rights operations walkthrough</option>
                  <option>Subprocessor list</option>
                </select>
              </FormField>

              {/* Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-orange-400 px-6 py-3 text-base font-semibold text-[#073B47] transition hover:bg-orange-300"
                >
                  <span>Talk to a solutions architect</span>
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
    </section>
  );
}