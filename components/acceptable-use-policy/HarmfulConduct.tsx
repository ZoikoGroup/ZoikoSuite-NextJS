import React from 'react';

export const HarmfulConduct = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-azure-12-3 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-54 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            HARMFUL CONDUCT, THREATS, EXPLOITATION &amp; SAFETY
          </div>
        </div>
        <div className="w-full max-w-[720px] pt-[0.70px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-white-solid text-2xl font-bold font-['Georgia'] leading-10">
            Precise, escalation-aware, specialist-handled
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-83-5 text-sm font-normal font-['Inter'] leading-5">
            This section defines the content/behavior categories, operational handoffs, and UI needed for a mature abuse policy<br />
            — the final legal threshold is set by Legal/Trust, not invented here.
          </div>
        </div>
        <div className="self-stretch pt-2 flex flex-col justify-start items-start">
          
          {/* Header Row */}
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-66-3 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Category
              </div>
            </div>
            <div className="w-full md:w-64 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-66-3 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Public policy treatment
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-66-3 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Operational requirement
              </div>
            </div>
          </div>

          {/* Row 1 */}
          <div className="self-stretch py-3.5 border-b border-color-white--12 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-white-solid text-xs font-bold font-['Inter'] leading-5">
                Credible threats / incitement to violence
              </div>
            </div>
            <div className="w-full md:w-64 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-83-5 text-xs font-normal font-['Inter'] leading-5">
                Prohibited
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-83-5 text-xs font-normal font-['Inter'] leading-5">
                Urgent safety escalation and evidence preservation.
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="self-stretch py-3.5 border-b border-color-white--12 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-white-solid text-xs font-bold font-['Inter'] leading-5">
                Harassment / targeted abuse
              </div>
            </div>
            <div className="w-full md:w-64 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-83-5 text-xs font-normal font-['Inter'] leading-5">
                Prohibited where severity/scope meets policy
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-83-5 text-xs font-normal font-['Inter'] leading-5">
                Context review, repeat-behavior detection, reporter privacy.
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="self-stretch py-3.5 border-b border-color-white--12 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-white-solid text-xs font-bold font-['Inter'] leading-5">
                Sexual exploitation / abuse material
              </div>
            </div>
            <div className="w-full md:w-64 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-83-5 text-xs font-normal font-['Inter'] leading-5">
                Prohibited
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-83-5 text-xs font-normal font-['Inter'] leading-5">
                Specialist handling, strict access, preservation/reporting obligations.
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="self-stretch py-3.5 border-b border-color-white--12 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-white-solid text-xs font-bold font-['Inter'] leading-5">
                Human exploitation / trafficking facilitation
              </div>
            </div>
            <div className="w-full md:w-64 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-83-5 text-xs font-normal font-['Inter'] leading-5">
                Prohibited
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-83-5 text-xs font-normal font-['Inter'] leading-5">
                Specialist escalation and legal review.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
