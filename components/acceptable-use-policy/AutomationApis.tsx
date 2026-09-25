import React from 'react';

export const AutomationApis = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            AUTOMATION, APIS, SCRAPING &amp; RESOURCE ABUSE
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Documented use is welcome — evasion is not
          </div>
        </div>
        <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
          
          {/* Header Row */}
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Use case
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Status
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Required treatment
              </div>
            </div>
          </div>

          {/* Row 1 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Documented API use
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="px-2 py-[3px] bg-color-grey-93-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-spring-green-79 inline-flex justify-start items-start">
                <div className="justify-center text-color-spring-green-36 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">ALLOWED</div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Authenticate correctly; respect scope, quotas, and data permissions.
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Approved automation / agents
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="px-2 py-[3px] bg-color-grey-93-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-spring-green-79 inline-flex justify-start items-start">
                <div className="justify-center text-color-spring-green-36 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">ALLOWED</div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Actor/account remains responsible for actions and outputs.
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Rate-limit evasion
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="px-2 py-[3px] bg-color-grey-94-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-red-84-3 inline-flex justify-start items-start">
                <div className="justify-center text-color-red-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">PROHIBITED</div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Rotating accounts, tokens, IPs, or tenants to bypass limits is treated as evasion.
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Unauthorized scraping / extraction
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="px-2 py-[3px] bg-color-grey-93-9 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-orange-76-2 inline-flex justify-start items-start">
                <div className="justify-center text-color-orange-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">PROHIBITED / RESTRICTED</div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Do not access or extract data outside authorization or applicable terms.
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Credential harvesting / probing
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="px-2 py-[3px] bg-color-grey-94-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-red-84-3 inline-flex justify-start items-start">
                <div className="justify-center text-color-red-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">PROHIBITED</div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Security testing requires approved research authorization.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
