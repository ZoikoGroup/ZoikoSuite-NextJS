import React from "react";
import Link from "next/link";

const links = [
  {
    title: "About ZoikoSuite",
    description:
      "Understand what ZoikoSuite is, how it is structured, and what it is built to govern.",
    href: "/about",
  },
  {
    title: "Founder's Vision",
    description:
      "Read the principles behind governance-first business operations intelligence.",
    href: "/founders-vision",
  },
  {
    title: "Leadership",
    description:
      "Meet the verified leaders and understand accountable operating roles.",
    href: "/leadership",
  },
  {
    title: "Careers",
    description:
      "Build systems that matter with teams focused on governed enterprise operations.",
    href: "/careers",
  },
];

export default function ContinueTheStorySection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
          CONTINUE THE COMPANY STORY
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
          Where to go from here
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {links.map((link, index) => (
            <Link
              key={link.title}
              href={link.href}
              className={`rounded-lg p-5 flex flex-col gap-1.5 border transition-colors ${
                index === links.length - 1
                  ? "border-[#A8843A] hover:bg-[#FBFAF7]"
                  : "border-[#DCD6C8] hover:bg-[#FBFAF7]"
              }`}
            >
              <h3 className="text-[#16223A] text-sm font-bold leading-6">
                {link.title}
              </h3>
              <p className="text-[#4B5872] text-xs font-normal leading-5">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
