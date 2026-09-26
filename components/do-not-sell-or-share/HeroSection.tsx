export default function HeroSection() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[329px] py-[44px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start justify-center gap-6">
        <div className="flex flex-col gap-[6px] max-w-[628px]">
          <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
            CALIFORNIA PRIVACY CHOICE
          </p>
          <h1 className="font-['Georgia'] font-bold text-[30px] text-[#16223a] tracking-[-0.3px] leading-[48px]">
            Do Not Sell or Share My Personal Information
          </h1>
          <p className="font-['Inter'] font-normal text-[14.5px] text-[#4b5872] leading-[23.2px] mt-1">
            California law may give you the right to tell covered businesses not to sell or share your 
            personal information. Use the control below to submit or confirm your choice for 
            ZoikoSuite.
          </p>
        </div>
      </div>
    </div>
  );
}