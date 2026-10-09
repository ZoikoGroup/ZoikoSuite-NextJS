import React from "react";
import EyebrowHeading from "./EyebrowHeading";
import { FONT_ARCHIVO, FONT_INTER, ROLE_LINES } from "./data";

export default function RolesSection() {
  return (
    <section className="w-full bg-[#F6F5F1] flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[52px] md:pb-[70px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[17px]">
        <EyebrowHeading
          eyebrow="Role boundaries"
          title="Coordination does not erase authority."
        />

        <ul className="pt-[8px]">
          {ROLE_LINES.map((role) => (
            <li
              key={role.title}
              className="flex flex-col sm:flex-row sm:items-end gap-[8px] sm:gap-[35px] border-t border-[#DBE3E7] py-[24px]"
            >
              <h3
                className="shrink-0 w-full sm:w-[250px] text-[20px] font-bold leading-[26px] text-[#243943]"
                style={{ fontFamily: FONT_ARCHIVO }}
              >
                {role.title}
              </h3>
              <p
                className="text-[16px] font-normal leading-[26.4px] text-[#748087]"
                style={{ fontFamily: FONT_INTER }}
              >
                {role.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
