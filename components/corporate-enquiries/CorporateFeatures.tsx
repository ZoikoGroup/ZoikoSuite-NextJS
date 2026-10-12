import React from "react";
import { Check } from "lucide-react";

interface FeatureItem {
  text: string;
}

const featuresData: FeatureItem[] = [
  { text: "Clear contact choices" },
  { text: "Minimal information" },
  { text: "Dedicated specialist routes" },
  { text: "No response-time promises" },
];

export default function CorporateFeatures() {
  return (
    <section className="bg-white py-8 px-6 md:px-12 border-b border-[#E2E8F0] font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-between">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-[#475569] justify-start sm:justify-center lg:justify-start"
            >
              <Check className="w-4 h-4 text-[#386665] flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
