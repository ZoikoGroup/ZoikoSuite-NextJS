import React from "react";
import SectionHead from "./SectionHead";
import RowTable from "./RowTable";
import { PRIVACY_RETENTION_ROWS } from "./data";

export default function PrivacyRetentionSection() {
  return (
    <section
      aria-labelledby="privacy-retention-title"
      className="w-full bg-[#F6F1E6] flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="privacy-retention-title"
          eyebrow="Privacy, security & retention"
          title="Layered summary, linked to the full notice"
        />
        <RowTable
          fieldHeader="Field"
          ruleHeader="Rule"
          rows={PRIVACY_RETENTION_ROWS}
        />
      </div>
    </section>
  );
}
