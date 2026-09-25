import React from 'react';

export const AcceptableUseHero = () => {
  return (
    <section className="w-full flex justify-center bg-color-grey-98-8 pt-16 pb-12">
      <div className="w-full max-w-[1180px] px-8 inline-flex flex-col justify-start items-start gap-2.5">
        
        {/* Top Links */}
        <div className="self-stretch flex justify-end items-center gap-4 pb-4">
          <div className="text-color-azure-37-2 text-xs font-bold font-['Inter'] underline cursor-pointer">Search policy</div>
          <div className="text-color-azure-37-2 text-xs font-bold font-['Inter'] underline cursor-pointer">Print</div>
          <div className="text-color-azure-37-2 text-xs font-bold font-['Inter'] underline cursor-pointer">View history</div>
        </div>

        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            ACCEPTABLE USE POLICY
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-azure-16-2 text-3xl font-bold font-['Georgia'] leading-[51.20px]">
            Use ZoikoSuite responsibly, securely, and lawfully.
          </div>
        </div>
        <div className="w-full max-w-[720px] pt-0.5 flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-37-2 text-sm font-normal font-['Inter'] leading-6">
            This policy explains prohibited and restricted uses of ZoikoSuite, including account misuse, security abuse,<br />
            harmful conduct, fraud, privacy violations, unauthorized automation, and misuse of AI-enabled capabilities.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="self-stretch pt-6 flex justify-start items-center gap-4">
          <button className="px-6 py-3 bg-color-orange-44 rounded justify-center items-center gap-2 flex">
            <span className="text-color-white-solid text-sm font-bold font-['Inter']">Search the policy</span>
          </button>
          <button className="px-6 py-3 rounded outline outline-1 outline-color-orange-44 justify-center items-center gap-2 flex">
            <span className="text-color-orange-44 text-sm font-bold font-['Inter']">Report abuse</span>
          </button>
        </div>

      </div>
    </section>
  );
};
