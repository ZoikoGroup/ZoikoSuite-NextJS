"use client";

import React, { useState } from "react";

interface MediaTopicItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  details: string;
}

const mediaTopicsData: MediaTopicItem[] = [
  {
    id: "01",
    number: "01",
    title: "Press Questions & Fact Checks",
    subtitle:
      "Ask for factual clarification or approved statements about ZoikoSuite.",
    details:
      "Submit specific inquiries, verifiable claims, operational background questions, and publication deadlines. Clarify the reporting angle to assist our communications team in preparing verified facts.",
  },
  {
    id: "02",
    number: "02",
    title: "Interviews & Spokesperson Requests",
    subtitle:
      "Tell us the subject, format, intended audience, and preferred interview window.",
    details:
      "Specify the executive or domain specialist requested, interview format (in-person, telephone, video conference, or written Q&A), estimated duration, publication reach, and editorial deadlines.",
  },
  {
    id: "03",
    number: "03",
    title: "News Releases & Company Information",
    subtitle:
      "Request verified company facts or approved announcements for editorial use.",
    details:
      "Access verified corporate registration data, executive biographies, historical company milestones, product launch announcements, and official corporate governance disclosures.",
  },
  {
    id: "04",
    number: "04",
    title: "Images, Logos & Media Assets",
    subtitle:
      "Ask about access to brand or company media for an editorial purpose.",
    details:
      "Request high-resolution vector logos, executive headshots, product interface captures, and media kit assets licensed strictly for non-commercial editorial publication.",
  },
  {
    id: "05",
    number: "05",
    title: "Events, Speaking & Broadcast",
    subtitle:
      "Share event, broadcast, or panel details for consideration.",
    details:
      "Invite ZoikoSuite executives and technology architects to participate in keynotes, panel discussions, industry roundtables, webinars, or televised broadcast features.",
  },
  {
    id: "06",
    number: "06",
    title: "Corrections & Sensitive Media Requests",
    subtitle:
      "Raise an accuracy concern or time-sensitive press matter for review.",
    details:
      "Notify our editorial review desk of factual inaccuracies in published reporting, time-critical breaking stories, or sensitive reporting matters requiring immediate executive counsel review.",
  },
];

export default function MediaEnquiriesTopics() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleTopic = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="topics" className="bg-[#F6F5EF] py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        {/* Section Head */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-[34px]">
          <div className="flex flex-col gap-[18.78px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
                Frame your enquiry
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
              The right details.
              <br />
              A clearer editorial request.
            </h2>
          </div>

          {/* Lead */}
          <p className="max-w-[393px] font-normal text-[14px] leading-[23.1px] text-[#64757C]">
            Explore the scope of each request type. Open multiple
            <br className="hidden sm:inline" />
            panels to compare them, then choose the one that fits your
            <br className="hidden sm:inline" />
            enquiry.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-t border-[#DCE4E4]">
          {mediaTopicsData.map((topic) => {
            const isOpen = openIds.includes(topic.id);
            return (
              <article
                key={topic.id}
                className="border-b border-[#DCE4E4] transition-colors"
              >
                <button
                  type="button"
                  id={`toggle-${topic.id}`}
                  onClick={() => toggleTopic(topic.id)}
                  className="w-full py-[25px] px-[8px] flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                >
                  <div className="flex items-start gap-[26px] flex-1 pr-4">
                    {/* Number */}
                    <span className="font-normal text-[12px] leading-[19.8px] text-[#1C7A78] pt-1 select-none">
                      {topic.number}
                    </span>

                    {/* Content */}
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-[18px] leading-[29.7px] text-[#13303B] group-hover:text-[#1C7A78] transition-colors">
                        {topic.title}
                      </h3>
                      <p className="font-normal text-[13px] leading-[21.45px] text-[#64757C] mt-1">
                        {topic.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Plus / Minus */}
                  <span className="font-light text-[24px] leading-[39.6px] text-[#1C7A78] flex-shrink-0 select-none w-6 text-right">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pl-[52px] pr-[32px] pb-[25px] text-[13px] leading-[21.45px] text-[#64757C]">
                    <div className="p-4 bg-white/70 rounded-[6px] border border-[#DCE4E4]">
                      {topic.details}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
