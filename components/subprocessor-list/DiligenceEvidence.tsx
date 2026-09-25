import React from "react";

export const DiligenceEvidence = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            DILIGENCE &amp; EVIDENCE
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Public transparency, controlled evidence for the rest
          </div>
        </div>
        <div className="self-stretch w-full rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 overflow-hidden overflow-x-auto">
          <div className="min-w-[800px] w-full flex flex-col">
            <div className="w-full bg-color-grey-93-7 inline-flex justify-start items-start">
              <div className="w-1/3 px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                  Evidence need
                </div>
              </div>
              <div className="w-2/3 px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                  Public / controlled response
                </div>
              </div>
            </div>
            
            <div className="w-full border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-1/3 px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">Security overview</div>
              </div>
              <div className="w-2/3 px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                  Link to the current ZoikoSuite Security Overview — no duplicated or inflated vendor security claims.
                </div>
              </div>
            </div>

            <div className="w-full border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-1/3 px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">Data residency</div>
              </div>
              <div className="w-2/3 px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                  Link to Data Residency and deployment-specific architecture.
                </div>
              </div>
            </div>

            <div className="w-full border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-1/3 px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">Vendor security/privacy diligence</div>
              </div>
              <div className="w-2/3 px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                  Public status summary only; detailed questionnaire/report through a permissioned diligence workflow.
                </div>
              </div>
            </div>

            <div className="w-full border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-1/3 px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">Certifications / attestations</div>
              </div>
              <div className="w-2/3 px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                  Only independently verified, scoped evidence — a vendor certification never becomes a ZoikoSuite certification.
                </div>
              </div>
            </div>

            <div className="w-full border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-1/3 px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">Incident / breach history</div>
              </div>
              <div className="w-2/3 px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                  Confidential vendor incident details are not exposed here — routed to the Security/Privacy process.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
