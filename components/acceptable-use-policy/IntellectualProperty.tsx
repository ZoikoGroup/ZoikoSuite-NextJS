import React from 'react';

export const IntellectualProperty = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            INTELLECTUAL PROPERTY &amp; RIGHTS
          </div>
        </div>
        <div className="w-full max-w-[800px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Infringement and rights complaints
          </div>
        </div>
        <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
          
          {/* Header Row */}
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Topic
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Requirement
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          {/* Row 1 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Copyright / IP infringement
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Users may not knowingly use the service to infringe third-party rights; notices route to Legal Notices / the designated complaint process.
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          {/* Row 2 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Trademark / brand misuse
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Cross-linked to Trademark Guidelines; prohibits misleading use suggesting endorsement or affiliation.
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          {/* Row 3 */}
          <div className="self-stretch py-3.5 border-b border-color-orange-82 flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-56 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">
                Licenses / open source
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Cross-linked to Licenses — not every license dispute is treated as an AUP violation.
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
