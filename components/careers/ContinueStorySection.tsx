import React from "react";

type StoryLink = {
  title: string;
  lines: string[];
  href: string;
  external?: boolean;
};

const storyLinks: StoryLink[] = [
  {
    title: "About ZoikoSuite",
    lines: ["Understand the company/product context."],
    href: "/about",
  },
  {
    title: "Founder's Vision",
    lines: [
      "Read the institutional founder narrative and",
      "operating philosophy.",
    ],
    href: "/founders-vision",
  },
  {
    title: "Leadership",
    lines: [
      "Understand accountable leadership and",
      "organizational boundaries.",
    ],
    href: "/leadership",
  },
  {
    title: "Partners",
    lines: ["Explore governed ecosystem relationships."],
    href: "/partners",
  },
  {
    title: "Trust Center",
    lines: [
      "Assess security, privacy, compliance, responsible",
      "AI, accessibility, and evidence.",
    ],
    href: "/trust-center",
  },
  {
    title: "Zoiko Group Careers",
    lines: [
      "Explore broader Group opportunities \u2014 labeled as",
      "external/parent-company context.",
    ],
    href: "#",
    external: true,
  },
];

export default function ContinueStorySection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-bold font-['Inter'] leading-4 tracking-widest uppercase mb-3 block">
            CONTINUE THE COMPANY STORY
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight whitespace-nowrap">
            Where to go from here
          </h2>
        </div>

        {/* Story Link Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {storyLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="w-full p-6 sm:p-7 border border-[#DCD6C8] bg-white rounded-xl flex flex-col items-start justify-start hover:shadow-xs transition-shadow group"
            >
              <h3 className="text-[#16223A] text-sm md:text-base font-bold leading-6 mb-2 group-hover:text-[#A8843A] transition-colors">
                {link.title}
              </h3>
              <p className="text-[#4B5872] text-xs md:text-sm font-normal leading-5">
                {link.lines.map((line, idx) => (
                  <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
