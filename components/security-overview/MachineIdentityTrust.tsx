import React from "react";
import Image from "next/image";

interface BulletItem {
  text: string;
}

const bulletItems: BulletItem[] = [
  { text: "Authenticated service connections" },
  { text: "Scoped credentials per integration" },
  { text: "Service principal recorded in audit events" },
  { text: "Error isolation between integrations" },
];

export default function MachineIdentityTrust() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                MACHINE IDENTITY AND SERVICE-TO-SERVICE TRUST
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              Current state and target state, both published
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              This is the one area where the honest answer is a direction of
              travel rather than a finished control. Publishing only the target
              would be status inflation.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Current State Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-4">
                CURRENT STATE
              </h3>
              <p className="text-[14px] text-[#4B5563] leading-relaxed mb-6">
                Service-to-service authentication with scoped credentials and
                least-privilege service accounts. Service principals appear as
                named actors in the evidence record, so an action taken by a
                service is attributable.
              </p>

              <ul className="space-y-2.5 mb-8">
                {bulletItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-[13px] text-[#4B5563]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9B07A] shrink-0"></span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="inline-block px-3 py-1 text-[10px] font-mono font-bold tracking-wider rounded bg-[#F1F3F4] text-[#5A6D79] border border-[#DBE3E8]">
                IMPLEMENTATION STATUS
              </span>
            </div>
          </div>

          {/* Right Column: Illustration Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full">
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[400px] overflow-hidden">
                <Image
                  src="/security/3.png"
                  alt="Machine identity and service-to-service trust illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
