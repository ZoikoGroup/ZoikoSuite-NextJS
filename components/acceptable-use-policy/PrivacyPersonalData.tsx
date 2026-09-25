import React from 'react';

export const PrivacyPersonalData = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            PRIVACY, PERSONAL DATA &amp; CONFIDENTIAL INFORMATION
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Not every privacy complaint is an AUP violation
          </div>
        </div>
        <div className="self-stretch pt-2 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Prohibits unauthorized disclosure, collection, sale/share, enrichment, deanonymization, credential capture, doxxing, or misuse of personal data inconsistent with authorization, contract, or law.
            </div>
          </div>
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Prohibits using customer data, employee data, applicant data, health/financial identifiers, or other restricted data outside the purpose and permissions granted to the actor.
            </div>
          </div>
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Privacy-rights requests are kept separate from abuse reports, linked to the Privacy Policy and Consumer Rights Request.
            </div>
          </div>
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Some issues belong to controller/customer governance or contract administration rather than being treated automatically as an AUP violation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
