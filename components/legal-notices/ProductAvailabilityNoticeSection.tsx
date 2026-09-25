import React from "react";
import { AVAILABILITY_ROWS, FONT_INTER } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function ProductAvailabilityNoticeSection() {
  return (
    <NoticeSection
      id="availability-notice"
      tone="cream"
      eyebrow="Product availability, roadmap & feature notice"
      title={
        <>
          Descriptions may qualify planned, configurable, or market-dependent<br />functionality
        </>
      }
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={["Notice area", "Required copy behavior", "Do not imply"]}
          rows={AVAILABILITY_ROWS.map((r) => [r.area, r.behavior, r.doNotImply])}
          layout="equal"
        />
      </div>
    </NoticeSection>
  );
}
