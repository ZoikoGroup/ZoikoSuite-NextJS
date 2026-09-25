import React from 'react';

export const AiAgents = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            AI, AGENTS &amp; AUTOMATED DECISION MISUSE
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            AI does not remove account responsibility
          </div>
        </div>
        <div className="self-stretch pt-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start overflow-hidden">
          
          {/* Header Row */}
          <div className="self-stretch min-h-10 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-full md:w-56 px-3.5 pt-2.5 pb-3 md:border-r border-color-orange-82 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Control area
              </div>
            </div>
            <div className="flex-1 px-3.5 pt-2.5 pb-3 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Policy requirement
              </div>
            </div>
          </div>

          {/* Row 1 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-white-solid flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-full md:w-56 px-3.5 pt-2.5 pb-3 md:border-r border-color-orange-82 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Actor accountability
              </div>
            </div>
            <div className="flex-1 px-3.5 pt-2.5 pb-3 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                The account, organization, or integrator remains responsible for automated actions initiated through its authority.
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-white-solid flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-full md:w-56 px-3.5 pt-2.5 pb-3 md:border-r border-color-orange-82 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Unauthorized decisions
              </div>
            </div>
            <div className="flex-1 px-3.5 pt-2.5 pb-3 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                AI/automation may not be used to bypass required human approval, delegated authority, segregation of duties, or mandatory review.
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-white-solid flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-full md:w-56 px-3.5 pt-2.5 pb-3 md:border-r border-color-orange-82 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Deceptive AI use
              </div>
            </div>
            <div className="flex-1 px-3.5 pt-2.5 pb-3 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Prohibits AI-enabled impersonation, fraud, phishing, fabricated evidence, or falsified approvals.
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-white-solid flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-full md:w-56 px-3.5 pt-2.5 pb-3 md:border-r border-color-orange-82 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Source truth
              </div>
            </div>
            <div className="flex-1 px-3.5 pt-2.5 pb-3 flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                AI outputs must not be used to overwrite authoritative records or evidence outside approved governed workflows.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
