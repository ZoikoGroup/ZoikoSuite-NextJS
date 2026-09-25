import React from "react";

export const DeploymentVariants = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            DEPLOYMENT &amp; SOVEREIGN VARIANTS
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            List applicability changes by deployment
          </div>
        </div>
        <div className="self-stretch pt-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Multi-tenant SaaS</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Standard shared-service subprocessors and region applicability from verified production topology.
              </div>
            </div>
          </div>
          
          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Dedicated environment</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Standard plus dedicated-service dependencies; excludes shared providers not used in that deployment.
              </div>
            </div>
          </div>

          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Single-tenant enterprise</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Applicable dedicated infrastructure/operations subprocessors, distinguishing customer-selected providers.
              </div>
            </div>
          </div>

          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Sovereign / customer-controlled</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                May materially reduce, replace, or prohibit third-party processing — subject to legal, operational, and commercial feasibility.
              </div>
            </div>
          </div>

          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Customer-managed integration</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                A customer&apos;s chosen downstream provider is not listed as a ZoikoSuite subprocessor unless ZoikoSuite itself engages that provider in the processing chain.
              </div>
            </div>
          </div>

          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Unknown / pre-sales</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Baseline public list shown with an explicit statement that final applicability is determined by the contracted service/deployment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
