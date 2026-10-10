import React from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";

export default function ScenarioSection() {
  return (
    <section className="w-full bg-[#F6F5F0] flex justify-center px-4 md:px-8 lg:px-[120px] pt-[40px] md:pt-[76px] pb-[52px] md:pb-[88.5px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[11px]">
        <SectionHead
          id="h-scn"
          title="One illustrative event, from request to evidence."
          body="Illustrative example — not a production screenshot."
        />
        <div className="relative w-full aspect-[1136/568] rounded-[16px] overflow-hidden border border-[#E4E1D8]">
          <Image
            src="/workforce-and-payroll/scenario-request-to-evidence.jpg"
            alt="Illustrative example of one workforce event moving from request to evidence"
            fill
            sizes="(min-width: 1024px) 1136px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
