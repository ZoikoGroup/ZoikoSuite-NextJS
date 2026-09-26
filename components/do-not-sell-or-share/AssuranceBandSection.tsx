export default function AssuranceBandSection() {
  const items = [
    {
      title: "No discrimination",
      description: "Exercising this right will not result in prohibited discriminatory treatment."
    },
    {
      title: "Data minimization",
      description: "We use only the information necessary to process, document, and protect your privacy request."
    },
    {
      title: "Support available",
      description: "Unresolved cases route to the Consumer Rights Request path or the privacy contact."
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-[#0a1d34] py-[34px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {items.map((item, index) => (
          <div key={index} className={`flex flex-col gap-[6px] items-start w-full ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
            <strong className="font-['Inter'] font-bold text-[14px] text-white leading-[21.6px]">
              {item.title}
            </strong>
            <p className="font-['Inter'] font-normal text-[12.5px] text-[#c7d2e2] leading-[20px] max-w-[340px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}