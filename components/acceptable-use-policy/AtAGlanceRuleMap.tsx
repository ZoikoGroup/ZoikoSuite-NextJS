import React from 'react';

export const AtAGlanceRuleMap = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            AT-A-GLANCE RULE MAP
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Not everything is labeled &quot;prohibited&quot;
          </div>
        </div>
        <div className="self-stretch pt-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start overflow-hidden">
          {/* Header Row */}
          <div className="self-stretch min-h-11 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Rule category
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Status
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Example summary
              </div>
            </div>
          </div>
          
          {/* Row 1 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Unauthorized access &amp; account abuse
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="px-2 py-[3px] bg-color-grey-94-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-red-84-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-red-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">PROHIBITED</div>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Do not access accounts, systems, or data without authorization or compromise credentials.
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Security abuse &amp; disruption
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="px-2 py-[3px] bg-color-grey-94-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-red-84-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-red-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">PROHIBITED</div>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Do not introduce malware, exploit vulnerabilities maliciously, or evade security controls.
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Fraud, deception &amp; impersonation
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="px-2 py-[3px] bg-color-grey-94-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-red-84-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-red-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">PROHIBITED</div>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Do not use the service to deceive, defraud, impersonate, or misrepresent authority.
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Harassment, threats &amp; exploitation
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="px-2 py-[3px] bg-color-grey-94-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-red-84-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-red-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">PROHIBITED</div>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Do not use the service to threaten, exploit, harass, or facilitate severe harm.
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Privacy &amp; personal-data misuse
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="pl-2 pr-6 py-[3px] bg-color-grey-94-8 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-red-84-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-red-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">PROHIBITED /<br/>CONTEXT-<br/>DEPENDENT</div>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Do not unlawfully collect, expose, sell, share, or misuse personal data.
              </div>
            </div>
          </div>

          {/* Row 6 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Automated access, APIs &amp; scraping
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="pl-2 pr-5 py-[3px] bg-color-grey-93-9 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-orange-76-2 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-orange-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">RESTRICTED /<br/>PRODUCT-<br/>LIMITED</div>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Use approved interfaces and stay within documented authorization, rate, and extraction<br/>rules.
              </div>
            </div>
          </div>

          {/* Row 7 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Regulated / high-risk activity
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="pl-2 pr-3 py-[3px] bg-color-grey-93-9 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-orange-76-2 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-orange-44 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">APPROVAL MAY<br/>BE REQUIRED</div>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Certain sectors, workloads, or data classes may require contract, compliance, or product<br/>review.
              </div>
            </div>
          </div>

          {/* Row 8 */}
          <div className="self-stretch border-t border-color-orange-82 bg-color-grey-93-7 flex flex-col md:flex-row justify-start items-stretch">
            <div className="w-72 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Security research
              </div>
            </div>
            <div className="w-48 px-4 py-3 md:border-r border-color-orange-82 flex justify-start items-center">
              <div className="pl-2 pr-7 py-[3px] bg-color-grey-93-7 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">GOVERNED<br/>ELSEWHERE</div>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 flex justify-start items-center">
              <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Use the Security Disclosure route and its authorized-research terms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
