import React from "react";
import { FONT_INTER, LOCATION_ROWS } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function LocationsContactRoutingSection() {
  return (
    <NoticeSection
      id="locations-routing"
      tone="white"
      eyebrow="Locations & purpose-based contact routing"
      title="Separate fields — never inferred from each other"
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={["Item", "Treatment"]}
          rows={LOCATION_ROWS.map((r) => [r.item, r.detail])}
        />
      </div>
    </NoticeSection>
  );
}
