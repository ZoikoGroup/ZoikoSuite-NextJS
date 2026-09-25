import React from "react";

export const ScopeClassification = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            SCOPE &amp; CLASSIFICATION
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Not every vendor or integration is a subprocessor
          </div>
        </div>
        <div className="self-stretch w-full pt-3.5 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start overflow-hidden overflow-x-auto">
          <div className="min-w-[1100px] w-full flex flex-col">
            <div className="self-stretch h-10 bg-color-white-solid inline-flex justify-start items-start">
              <div className="w-[20%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide whitespace-nowrap">
                  Classification
                </div>
              </div>
              <div className="w-[45%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide whitespace-nowrap">
                  Public explanation
                </div>
              </div>
              <div className="w-[35%] px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide whitespace-nowrap">
                  Default treatment
                </div>
              </div>
            </div>
            {/* Rows */}
            <div className="self-stretch border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-[20%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">Subprocessor</div>
              </div>
              <div className="w-[45%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Third party processing in-scope customer personal data on behalf of an<br />applicable Zoiko processor role.
                </div>
              </div>
              <div className="w-[35%] px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Included in the public registry when approved.
                </div>
              </div>
            </div>
            
            <div className="self-stretch border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-[20%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">Affiliate subprocessor</div>
              </div>
              <div className="w-[45%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Zoiko-affiliated legal entity performing in-scope processing on behalf of the<br />processor.
                </div>
              </div>
              <div className="w-[35%] px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Included when legally classified — affiliation does not<br />exempt disclosure.
                </div>
              </div>
            </div>

            <div className="self-stretch border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-[20%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">Independent controller</div>
              </div>
              <div className="w-[45%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Third party determines its own purposes/means for a separate processing<br />activity.
                </div>
              </div>
              <div className="w-[35%] px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Not labeled subprocessor; routed to relevant privacy<br />disclosure.
                </div>
              </div>
            </div>

            <div className="self-stretch border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-[20%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">Ordinary supplier</div>
              </div>
              <div className="w-[45%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Supplier does not process in-scope customer personal data on behalf of<br />ZoikoSuite.
                </div>
              </div>
              <div className="w-[35%] px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Excluded from the subprocessor list.
                </div>
              </div>
            </div>

            <div className="self-stretch border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-[20%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">Customer-selected integration</div>
              </div>
              <div className="w-[45%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Customer independently connects a third-party service; roles depend on<br />configuration and contracts.
                </div>
              </div>
              <div className="w-[35%] px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Not automatically presented as a ZoikoSuite subprocessor.
                </div>
              </div>
            </div>

            <div className="self-stretch border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-[20%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">Professional adviser / authority</div>
              </div>
              <div className="w-[45%] px-3.5 pt-2.5 pb-3 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Legal, audit, regulator, or professional party acting under a separate role/basis.
                </div>
              </div>
              <div className="w-[35%] px-3.5 pt-2.5 pb-3 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 whitespace-nowrap">
                  Handled in the Privacy Policy, not automatically in this<br />registry.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
