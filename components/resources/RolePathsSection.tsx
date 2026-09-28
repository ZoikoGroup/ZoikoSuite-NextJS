import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { ROLE_PATHS_IMG } from "./data";

export default function RolePathsSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey95 }}>
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <SectionHead
          eyebrow="ROLE-BASED PATHS"
          title="Curated by who you are, not just what you search."
        />
        <img
          src={ROLE_PATHS_IMG}
          alt="Role-based resource paths"
          className="w-full h-[568px] object-cover rounded-xl"
          style={{ border: `1px solid ${C.grey95}` }}
        />
      </div>
    </section>
  );
}
