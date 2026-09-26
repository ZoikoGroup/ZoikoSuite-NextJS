export default function ManualFormSection() {
  return (
    <div className="relative w-full flex flex-col items-center bg-[#f6f1e6] pt-[47px] pb-[48px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            MANUAL OPT-OUT FORM
          </p>
          <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
            Fallback path — minimum information necessary
          </h2>
        </div>

        {/* Form Container */}
        <div className="w-full bg-white border border-[#dcd6c8] rounded-[10px] p-7 md:p-8 flex flex-col gap-5 mt-4">
          
          {/* Top Grid: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Request Type */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Inter'] font-bold text-[11.5px] text-[#4b5872] leading-[18.4px]">
                Request type
              </label>
              <div className="w-full bg-[#fbfaf7] border border-[#dcd6c8] rounded-[6px] py-[9px] px-4">
                <span className="font-['Inter'] font-normal text-[13px] text-[#16223a] leading-[15px]">
                  Opt out of sale or sharing (preselected)
                </span>
              </div>
            </div>

            {/* State of Residence */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Inter'] font-bold text-[11.5px] text-[#4b5872] leading-[18.4px]">
                State of residence
              </label>
              <div className="w-full bg-[#fbfaf7] border border-[#dcd6c8] rounded-[6px] py-[9px] px-4">
                <span className="font-['Inter'] font-normal text-[13px] text-[#16223a] leading-[15px]">
                  California (default)
                </span>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Inter'] font-bold text-[11.5px] text-[#4b5872] leading-[18.4px]">
                Email address (only if needed to locate a profile)
              </label>
              <div className="w-full bg-[#fbfaf7] border border-[#dcd6c8] rounded-[6px] h-[36px]"></div>
            </div>

            {/* Product / Service */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Inter'] font-bold text-[11.5px] text-[#4b5872] leading-[18.4px]">
                Product / service (if applicable)
              </label>
              <div className="w-full bg-[#fbfaf7] border border-[#dcd6c8] rounded-[6px] h-[36px]"></div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" className="w-[14px] h-[14px] border-[#dcd6c8] rounded-sm" />
            <label className="font-['Inter'] font-bold text-[11.5px] text-[#4b5872] leading-[18.4px]">
              I am submitting this as an authorized agent
            </label>
          </div>

          {/* Additional Information Textarea */}
          <div className="flex flex-col gap-[6px]">
            <label className="font-['Inter'] font-bold text-[11.5px] text-[#4b5872] leading-[18.4px]">
              Additional information (optional — do not include sensitive data)
            </label>
            <div className="w-full bg-[#fbfaf7] border border-[#dcd6c8] rounded-[6px] min-h-[64px]"></div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#c8a24a] rounded-[5px] py-[11px] flex items-center justify-center transition-colors hover:bg-[#b59242] mt-1">
            <span className="font-['Inter'] font-bold text-[14px] text-[#20170a] leading-[22.4px]">
              Submit opt-out request
            </span>
          </button>
          
        </div>
      </div>
    </div>
  );
}