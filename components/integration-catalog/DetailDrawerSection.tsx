import React from "react";

export default function DetailDrawerSection() {
  const schemaTags = [
    "System Processes",
    "Alert Context",
    "Sensor Health Status",
    "Credential Audit Events",
  ];

  const setupSteps = [
    { number: "1", label: "Check API Scope", active: true },
    { number: "2", label: "Enter Credentials", active: true },
    { number: "3", label: "Select Evidence Scope", active: false },
    { number: "4", label: "Run Integration Test", active: false },
  ];

  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
      {/* Background Server Room Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1440&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#031216]/85 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 self-stretch px-20 py-12 inline-flex flex-col justify-start items-start gap-6">
        {/* Header Row */}
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="inline-flex justify-start items-center gap-4">
            <div className="w-9 h-9 inline-flex flex-col justify-center items-center overflow-hidden">
              <div className="w-9 h-9 relative overflow-hidden flex items-center justify-center">
                <div className="w-7 h-7 relative outline outline-2 outline-offset-[-1px] outline-white rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✕</span>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-1">
              <h2 className="text-white text-3xl font-extrabold font-['Hanken_Grotesk']">
                CrowdStrike Falcon Connector
              </h2>
              <p className="text-white/70 text-sm font-normal font-['Manrope']">
                System Tier: Endpoint &amp; Identity Security
              </p>
            </div>
          </div>
          <div className="px-3 py-1 bg-[#E4F0EC] rounded-xl inline-flex justify-start items-center shadow-sm">
            <span className="text-[#1F7A6C] text-xs font-bold font-['JetBrains_Mono']">
              Available
            </span>
          </div>
        </div>

        <div className="self-stretch h-0 border border-white/10" />

        {/* Main Grid Section */}
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Details */}
          <div className="inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <h3 className="text-white text-lg font-extrabold font-['Hanken_Grotesk']">
                Why Connect CrowdStrike?
              </h3>
              <p className="text-white/70 text-sm font-normal font-['Manrope'] leading-5">
                By connecting CrowdStrike Falcon, Zoiko Shield continuously
                monitors active system-level processes, user credential
                modifications, and malware alert status. The integration
                translates threat alerts into automated control exceptions,
                proving mathematically that remediations were implemented
                immediately.
              </p>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <h3 className="text-white text-lg font-extrabold font-['Hanken_Grotesk']">
                Data Received &amp; Schema normalization
              </h3>
              <p className="text-white/70 text-sm font-normal font-['Manrope'] leading-5">
                Ingested telemetry is normalized into the ASV (Auditable
                Security Vector) format.
              </p>
              <div className="inline-flex justify-start items-start gap-2 flex-wrap content-start">
                {schemaTags.map((tag, index) => (
                  <div
                    key={index}
                    className="px-2.5 py-1.5 bg-white/10 rounded-md inline-flex justify-start items-start"
                  >
                    <span className="text-white text-xs font-normal font-['JetBrains_Mono']">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <h3 className="text-white text-lg font-extrabold font-['Hanken_Grotesk']">
                Required Credentials &amp; Least Privilege Configuration
              </h3>
              <p className="text-white/70 text-sm font-normal font-['Manrope'] leading-5">
                Requires API Key client credentials. The following scope must be
                strictly restricted to least privilege:
              </p>
              <div className="self-stretch p-4 bg-white/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2">
                <div className="inline-flex justify-start items-start gap-3">
                  <span className="text-[#8FD9C8] text-xs font-bold font-['JetBrains_Mono']">
                    Scope:
                  </span>
                  <span className="text-white text-xs font-normal font-['JetBrains_Mono']">
                    threats:read, sensors:read, alerts:read
                  </span>
                </div>
                <div className="inline-flex justify-start items-start gap-3">
                  <span className="text-[#8FD9C8] text-xs font-bold font-['JetBrains_Mono']">
                    Write Back:
                  </span>
                  <span className="text-white text-xs font-normal font-['JetBrains_Mono']">
                    Disabled by policy - zoiko-shield is strictly
                    write-isolated.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sync Status Card */}
          <div className="self-stretch p-6 bg-white/5 backdrop-blur-md rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-6 shadow-2xl">
            <h3 className="text-white text-lg font-extrabold font-['Hanken_Grotesk']">
              Sync Status &amp; Topology
            </h3>

            <div className="inline-flex justify-start items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#1F7A6C] rounded-full animate-pulse" />
              <span className="text-[#8FD9C8] text-sm font-bold font-['Manrope']">
                Connected · Real-time pipeline active
              </span>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <span className="text-white/40 text-xs font-bold font-['JetBrains_Mono'] uppercase">
                Setup Preview Steps
              </span>
              {setupSteps.map((step, index) => (
                <div
                  key={index}
                  className="inline-flex justify-start items-center gap-3"
                >
                  <div
                    className={`w-5 h-5 rounded-[10px] flex justify-center items-center ${
                      step.active ? "bg-[#1F7A6C]" : "bg-white/10"
                    }`}
                  >
                    <span className="text-white text-[10px] font-bold font-['JetBrains_Mono']">
                      {step.number}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-bold font-['Manrope'] ${
                      step.active ? "text-white" : "text-white/70 font-medium"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="self-stretch pt-3 flex flex-col justify-start items-start gap-3">
              <button className="self-stretch py-3 bg-[#C44242] hover:bg-[#b03a3a] transition-colors rounded-lg inline-flex justify-center items-center cursor-pointer shadow-[0px_4px_15px_0px_rgba(196,66,66,0.30)]">
                <span className="text-white text-sm font-bold font-['Manrope']">
                  Authenticate Connection
                </span>
              </button>
              <button className="self-stretch py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-white hover:bg-white/5 transition-colors inline-flex justify-center items-center cursor-pointer">
                <span className="text-white text-sm font-bold font-['Manrope']">
                  View Integration Docs
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
