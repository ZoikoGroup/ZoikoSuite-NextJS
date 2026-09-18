import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full max-w-[1440px] relative bg-[#F7F5F0] overflow-hidden mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between gap-10 xl:gap-8 px-6 md:px-12 xl:pl-[120px] xl:pr-[80px] py-16 xl:py-[60px] xl:min-h-[660px]">
      {/* Background Glow Effect */}
      <div className="w-[900px] h-[700px] right-[-200px] top-[-100px] absolute opacity-60 blur-3xl pointer-events-none">
        <div className="size-96 left-[200px] top-[100px] absolute overflow-hidden">
          <div className="size-80 left-[33.32px] top-[33.32px] absolute outline outline-2 outline-offset-[-1px] outline-red-500/25" />
        </div>
        <div className="size-96 left-[50px] top-[250px] absolute overflow-hidden">
          <div className="size-96 left-[37.48px] top-[37.48px] absolute outline outline-2 outline-offset-[-1px] outline-[#1F7A6C]/20" />
        </div>
      </div>

      {/* Left Content Area */}
      <div className="w-full max-w-[640px] inline-flex flex-col justify-start items-start gap-6 z-10">
        {/* Category Tag */}
        <div className="inline-flex justify-start items-center gap-2">
          <div className="w-6 h-[1.50px] bg-[#C44242]" />
          <div className="justify-start text-[#C44242] text-sm font-medium font-['JetBrains_Mono'] uppercase tracking-widest">
            Integrations Catalog
          </div>
        </div>

        {/* Main Heading */}
        <div className="self-stretch justify-start">
          <span className="text-[#0A2029] text-4xl sm:text-5xl font-extrabold font-['Hanken_Grotesk'] leading-[1.2] sm:leading-[58px]">
            Connect the stack you{" "}
          </span>
          <span className="text-[#C44242] text-4xl sm:text-5xl font-extrabold font-['Hanken_Grotesk'] leading-[1.2] sm:leading-[58px]">
            already trust.
          </span>
        </div>

        {/* Description Paragraph */}
        <div className="self-stretch justify-start text-[#5B6670] text-lg font-medium font-['Manrope'] leading-7">
          Discover how Zoiko Shield connects identity, cloud, endpoint, network,
          collaboration, observability, ticketing, evidence, and developer
          systems to support defensible security operations and continuous
          assurance.
        </div>

        {/* Action Buttons */}
        <div className="pt-3 inline-flex flex-wrap justify-start items-center gap-4">
          <button className="h-14 px-7 bg-[#C44242] hover:bg-[#b03a3a] transition-colors rounded-[10px] shadow-[0px_4px_15px_0px_rgba(196,66,66,0.20)] flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold font-['Manrope']">
              Explore Integrations
            </span>
          </button>
          <button className="h-14 px-6 rounded-[10px] outline outline-[1.50px] outline-offset-[-1.50px] outline-[#0A2029] hover:bg-[#0A2029]/5 transition-colors flex justify-center items-center cursor-pointer">
            <span className="text-[#0A2029] text-base font-bold font-['Manrope']">
              Request a Demo
            </span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-4 inline-flex flex-wrap justify-start items-center gap-4">
          <div className="flex justify-start items-center gap-1.5">
            <div className="size-3.5 inline-flex flex-col justify-center items-center overflow-hidden">
              <div className="size-3.5 relative overflow-hidden">
                <div className="w-2.5 h-1.5 left-[2.34px] top-[3.50px] absolute outline outline-2 outline-offset-[-1px] outline-[#1F7A6C]" />
              </div>
            </div>
            <span className="text-[#5B6670] text-xs font-semibold font-['Manrope']">
              Governed by policy
            </span>
          </div>

          <div className="flex justify-start items-center gap-1.5">
            <div className="size-3.5 inline-flex flex-col justify-center items-center overflow-hidden">
              <div className="size-3.5 relative overflow-hidden">
                <div className="w-2.5 h-1.5 left-[2.34px] top-[3.50px] absolute outline outline-2 outline-offset-[-1px] outline-[#1F7A6C]" />
              </div>
            </div>
            <span className="text-[#5B6670] text-xs font-semibold font-['Manrope']">
              Least-privilege by design
            </span>
          </div>

          <div className="flex justify-start items-center gap-1.5">
            <div className="size-3.5 inline-flex flex-col justify-center items-center overflow-hidden">
              <div className="size-3.5 relative overflow-hidden">
                <div className="w-2.5 h-1.5 left-[2.34px] top-[3.50px] absolute outline outline-2 outline-offset-[-1px] outline-[#1F7A6C]" />
              </div>
            </div>
            <span className="text-[#5B6670] text-xs font-semibold font-['Manrope']">
              Evidence lineage preserved
            </span>
          </div>
        </div>
      </div>

      {/* Right Visual Container */}
      <div className="w-full max-w-[570px] mx-auto xl:mx-0 xl:w-[570px] xl:shrink-0 relative aspect-[13/12] bg-white rounded-2xl shadow-[0px_16px_40px_0px_rgba(11,37,48,0.12)] outline outline-1 outline-offset-[-1px] outline-[#0A2029]/10 overflow-hidden z-10">
        <Image
          src="/integration-catalog/HeroVisual-IntegrationOverview.png"
          alt="Overview of Zoiko Shield integrations across identity, cloud, endpoint, network, collaboration, observability, ticketing, evidence, and developer systems"
          fill
          sizes="(min-width: 1280px) 570px, 100vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
