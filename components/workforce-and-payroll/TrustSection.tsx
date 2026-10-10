import React from "react";
import SectionHead from "./SectionHead";
import { CONFIRM_ROWS, FONT_INTER, TRUST_CARDS } from "./data";

export default function TrustSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[56px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[15px]">
        <SectionHead
          id="h-trust"
          title="Govern the process without obscuring accountability."
          body="Review your access model, evidence needs and system boundaries as part of deployment qualification."
        />

        <ul className="pt-[21px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[17px]">
          {TRUST_CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col gap-[8px] bg-white border border-[#E4E1D8] rounded-[12px] p-[20px]"
            >
              <h3
                className="text-[15.5px] font-bold tracking-[-0.155px] text-[#101E2B]"
                style={{ fontFamily: FONT_INTER }}
              >
                {card.title}
              </h3>
              <p
                className="text-[13.5px] font-normal leading-[1.5] text-[#5D6A74]"
                style={{ fontFamily: FONT_INTER }}
              >
                {card.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="pt-[13px] flex flex-col gap-[10px]">
          <h3
            className="text-[16px] font-bold tracking-[-0.16px] text-[#101E2B]"
            style={{ fontFamily: FONT_INTER }}
          >
            What to confirm with our team
          </h3>

          <div className="bg-white border border-[#E4E1D8] rounded-[12px] overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse" style={{ fontFamily: FONT_INTER }}>
              <thead>
                <tr className="bg-[#F6F5F0]">
                  <th className="text-left px-[10px] py-[9px] border-b-2 border-[#E4E1D8] text-[10.5px] font-bold tracking-[0.42px] uppercase text-[#5D6A74]">
                    Topic
                  </th>
                  <th className="text-left px-[10px] py-[9px] border-b-2 border-[#E4E1D8] text-[10.5px] font-bold tracking-[0.42px] uppercase text-[#5D6A74]">
                    What to confirm
                  </th>
                  <th className="text-left px-[10px] py-[9px] border-b-2 border-[#E4E1D8] text-[10.5px] font-bold tracking-[0.42px] uppercase text-[#5D6A74]">
                    Status on this page
                  </th>
                  <th className="border-b-2 border-[#E4E1D8]" />
                </tr>
              </thead>
              <tbody>
                {CONFIRM_ROWS.map((row) => (
                  <tr key={row.topic} className="border-b border-[#E4E1D8] last:border-b-0">
                    <td className="px-[10px] py-[12px] text-[12.5px] font-bold text-[#101E2B] whitespace-nowrap">
                      {row.topic}
                    </td>
                    <td className="px-[10px] py-[12px] text-[12.5px] font-normal text-[#33424D]">
                      {row.detail}
                    </td>
                    <td className="px-[10px] py-[12px]">
                      <span className="inline-flex items-center gap-[4px] px-[9px] py-[2px] bg-[#F4F3EE] border border-[#E2E0D6] rounded-full text-[11.5px] font-bold text-[#5D6A74] whitespace-nowrap">
                        ○ Not established here
                      </span>
                    </td>
                    <td className="px-[10px] py-[12px]">
                      <a
                        href="#lead-capture"
                        className="text-[14px] font-semibold text-[#0F476A] hover:underline whitespace-nowrap"
                      >
                        Ask about this
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
