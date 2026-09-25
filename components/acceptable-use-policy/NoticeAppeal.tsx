import React from 'react';

export const NoticeAppeal = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            NOTICE, APPEAL &amp; REVIEW
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Not every decision is appealable — the notice explains what is
          </div>
        </div>
        <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
          
          {/* Header Row */}
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Experience
              </div>
            </div>
            <div className="flex-1 max-w-[470px] inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Required behavior
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          {/* Row 1 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Action notice
              </div>
            </div>
            <div className="flex-1 max-w-[470px] inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                States account/workspace, action taken, effective time, high-level reason, policy section, next step.
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          {/* Row 2 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Security exception
              </div>
            </div>
            <div className="flex-1 max-w-[470px] inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                May withhold details that would expose detection methods, vulnerabilities, or ongoing investigations.
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          {/* Row 3 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Appeal eligibility
              </div>
            </div>
            <div className="flex-1 max-w-[470px] inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Driven by action type and policy/contract configuration — not every decision is appealable.
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          {/* Row 4 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Reviewer separation
              </div>
            </div>
            <div className="flex-1 max-w-[470px] inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Material suspension/termination appeals are reviewed by a different authorized reviewer where operationally feasible.
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          {/* Row 5 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                No retaliation
              </div>
            </div>
            <div className="flex-1 max-w-[470px] inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Whistleblowing or protected reporting routes to the dedicated ethics/whistleblowing channel.
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
