import React from 'react';

export const ReportingAbuse = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            REPORTING SUSPECTED ABUSE
          </div>
        </div>
        <div className="w-full pt-3 flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            A structured, minimum-data-collection report
          </div>
        </div>
        
        <div className="w-full max-w-[1058px] mt-8 bg-color-white-solid rounded-[10px] outline outline-1 outline-offset-[-1px] outline-color-orange-82 p-8 flex flex-col gap-6">
          
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="pb-[0.59px] flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-4">
                  Report type
                </div>
              </div>
              <div className="pl-4 pr-7 py-2 bg-color-grey-98-8 rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex justify-start items-center">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Arial'] leading-4">
                  Account/access abuse
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="pb-[0.59px] flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-4">
                  Reporter relationship
                </div>
              </div>
              <div className="pl-4 pr-7 py-2 bg-color-grey-98-8 rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex justify-start items-center">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Arial'] leading-4">
                  Affected user
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full flex flex-col gap-1.5">
            <div className="pb-[0.59px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-4">
                Subject / URL / workspace / object
              </div>
            </div>
            <div className="w-full h-9 bg-color-grey-98-8 rounded-md border border-color-orange-82" />
          </div>
          
          <div className="w-full flex flex-col gap-1.5">
            <div className="pb-[0.59px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-4">
                Description
              </div>
            </div>
            <div className="w-full px-3 pt-2 pb-10 bg-color-grey-98-8 rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex justify-start items-start">
              <div className="justify-center text-color-grey-46 text-xs font-normal font-['Inter']">
                Do not include unnecessary sensitive data.
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="pb-[0.59px] flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-4">
                  Contact details (optional or required by category)
                </div>
              </div>
              <div className="w-full h-9 bg-color-grey-98-8 rounded-md border border-color-orange-82" />
            </div>
            
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="pb-[0.59px] flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-4">
                  Urgent safety indicator
                </div>
              </div>
              <div className="pl-4 pr-7 py-2 bg-color-grey-98-8 rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex justify-start items-center">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Arial'] leading-4">
                  No
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-fit px-4 pt-3 pb-2.5 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-color-azure-27-3 flex justify-center items-center cursor-pointer">
            <div className="text-center justify-center text-color-azure-16 text-xs font-bold font-['Inter'] leading-5">
              Submit report
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
