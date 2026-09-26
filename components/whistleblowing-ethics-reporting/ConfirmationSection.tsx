import React from "react";
import SectionHead from "./SectionHead";
import RowTable from "./RowTable";
import { CONFIRMATION_ROWS } from "./data";

export default function ConfirmationSection() {
  return (
    <section
      aria-labelledby="confirmation-title"
      className="w-full bg-white flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="confirmation-title"
          eyebrow="Confirmation, reference & safe exit"
          title="Your report has been received"
        />
        <RowTable
          fieldHeader="Element"
          ruleHeader="Requirement"
          rows={CONFIRMATION_ROWS}
        />
      </div>
    </section>
  );
}
