import React from "react";
import Image from "next/image";
import EyebrowHeading from "./EyebrowHeading";
import { FONT_ARCHIVO, FONT_INTER, JOURNEY_STEPS } from "./data";

export default function JourneySection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[56px] md:pb-[86px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[17px]">
        <EyebrowHeading
          eyebrow="Oversight journey"
          title="Follow an exception without losing its context."
        />

        <ol className="pt-[8px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[20px]">
          {JOURNEY_STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col gap-[14px] pt-[19px] border-t-2 border-[#CDA85B]"
            >
              <h3
                className="text-[17px] md:text-[19px] font-bold leading-[1.3] text-[#233640]"
                style={{ fontFamily: FONT_ARCHIVO }}
              >
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p
                className="text-[14px] font-normal leading-[23.1px] text-[#748087]"
                style={{ fontFamily: FONT_INTER }}
              >
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <figure className="pt-[9px] w-full">
          <div className="relative w-full aspect-[1100/502] rounded-[10px] overflow-hidden">
            <Image
              src="/audit-committee/oversight-journey-workflow.jpg"
              alt="Conceptual governed-business workflow with source documents, separate responsibilities, review and evidence"
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
