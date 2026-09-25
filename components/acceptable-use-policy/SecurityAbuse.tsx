import React from 'react';

export const SecurityAbuse = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            SECURITY ABUSE, MALWARE &amp; SERVICE INTEGRITY
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Protecting shared infrastructure — without criminalizing good-faith research
          </div>
        </div>
        <div className="self-stretch pt-2 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Prohibits malicious code, ransomware, destructive payloads, unauthorized crypto-mining, botnet activity, exploit kits, command-and-control infrastructure, or deliberately harmful payload distribution.
            </div>
          </div>
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Prohibits denial-of-service activity, intentional resource exhaustion, or deliberate interference with other customers or shared infrastructure.
            </div>
          </div>
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Prohibits bypassing or defeating access controls, entitlement gates, security mechanisms, data-isolation boundaries, logging, or audit systems for abusive purposes.
            </div>
          </div>
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Legitimate interoperability, accessibility, testing, or authorized security research is never phrased as automatically prohibited — it routes to the correct approved policy or contract.
            </div>
          </div>
          <div className="self-stretch px-4 py-3 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
              Emergency containment may occur before full review where necessary to protect customers, people, infrastructure, or evidence — without promising a specific timeline.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
