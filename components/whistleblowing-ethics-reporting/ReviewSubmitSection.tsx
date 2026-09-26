import React from "react";
import SectionHead from "./SectionHead";
import RowTable from "./RowTable";
import { REVIEW_SUBMIT_ROWS } from "./data";

export default function ReviewSubmitSection() {
  return (
    <section
      aria-labelledby="review-submit-title"
      className="w-full bg-[#F6F1E6] flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="review-submit-title"
          eyebrow="Review, submit & attestation"
          title="Prevent mistakes without adding ceremony"
        />
        <RowTable
          fieldHeader="Element"
          ruleHeader="Requirement"
          rows={REVIEW_SUBMIT_ROWS}
        />
      </div>
    </section>
  );
}
