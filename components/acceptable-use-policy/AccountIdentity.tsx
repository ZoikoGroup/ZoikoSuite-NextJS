import React from 'react';

export const AccountIdentity = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            ACCOUNT, IDENTITY &amp; ACCESS INTEGRITY
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Prohibited conduct affecting accounts and access
          </div>
        </div>
        <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
          
          {/* Header Row */}
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Rule
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Prohibited examples
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Enforcement note
              </div>
            </div>
          </div>

          {/* Row 1 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Unauthorized access
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Accessing accounts, workspaces, environments, records, or APIs without permission.
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Accidental access is distinguished from deliberate exploitation; evidence preserved before remediation.
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Credential abuse
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Credential stuffing, password spraying, stolen tokens, sharing credentials contrary to policy.
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Linked to MFA/identity guidance where relevant.
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Impersonation
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Misrepresenting identity, authority, legal entity, administrator status, or affiliation.
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Legitimate delegated/admin use is allowed where documented.
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Account farming / evasion
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Creating accounts or tenants to evade suspension, quotas, or review.
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Tied to actor/entity correlation with privacy controls.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
