import React from "react";

export default function TrustStripSection() {
  const trustItems = [
    {
      title: "Deployment",
      description: "Multi-cloud, hybrid, and air-gapped support",
    },
    {
      title: "Identity",
      description: "Governed credential storage & Key Vault escrow",
    },
    {
      title: "Governance",
      description: "Granular authorization rights per connection",
    },
    {
      title: "Evidence",
      description: "Cryptographic hash lineage preserved continuously",
    },
    {
      title: "Control",
      description: "Zero rip-and-replace of your active security stack",
    },
  ];

  return (
    <div className="self-stretch px-20 py-8 bg-[#F0EDE6] outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 inline-flex justify-center items-start gap-8 overflow-hidden w-full max-w-[1440px] mx-auto">
      {trustItems.map((item, index) => (
        <div
          key={index}
          className="w-56 inline-flex flex-col justify-start items-start gap-1"
        >
          <div className="justify-start text-[#C44242] text-xs font-bold font-['JetBrains_Mono'] uppercase">
            {item.title}
          </div>
          <div className="self-stretch justify-start text-[#5B6670] text-xs font-medium font-['Manrope']">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}
