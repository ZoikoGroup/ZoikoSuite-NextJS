import React from "react";
import Link from "next/link";

interface DestinationCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const destinations: DestinationCard[] = [
  {
    title: "About ZoikoSuite",
    description: "Company/platform identity,\nstory, operating model.",
    linkText: "About ZoikoSuite",
    href: "/about",
  },
  {
    title: "Founder's Vision",
    description: "Founder perspective on\npurpose and long-term\ndirection.",
    linkText: "Read Founder's Vision",
    href: "/founders-vision",
  },
  {
    title: "Leadership",
    description: "Verified leadership and\ngovernance roles.",
    linkText: "Meet leadership",
    href: "/leadership",
  },
  {
    title: "Partners",
    description: "Partnership models and\nverified ecosystem\nrelationships.",
    linkText: "Explore partners",
    href: "/partners",
  },
  {
    title: "Careers",
    description: "Culture, teams, locations,\nand live opportunities.",
    linkText: "Explore careers",
    href: "/careers",
  },
  {
    title: "Newsroom",
    description: "Official announcements,\nmedia resources, and\ncontacts.",
    linkText: "Visit newsroom",
    href: "/newsroom",
  },
  {
    title: "Zoiko Tech",
    description: "Technology organization\nrelationship.",
    linkText: "Explore Zoiko Tech",
    href: "/zoiko-tech",
  },
  {
    title: "Zoiko Group",
    description: "Wider group / portfolio\ncontext.",
    linkText: "Explore Zoiko Group",
    href: "/zoiko-group",
  },
  {
    title: "Investor Relations",
    description: "Approved investor/corporate\ninformation only.",
    linkText: "Investor Relations",
    href: "/investor-relations",
  },
  {
    title: "Sustainability",
    description: "Current commitments,\ngovernance, progress, and\nevidence.",
    linkText: "Explore sustainability",
    href: "/sustainability",
  },
];

export default function CompanyDestinationsSection() {
  return (
    <section className="w-full bg-color-grey-95-12 py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-[#B8913F]" />
              <div className="justify-center text-[#B8913F] text-xs font-semibold font-['Inter'] tracking-wide uppercase">
                COMPANY DESTINATIONS
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Every destination, one purpose each.
              </h2>
            </div>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((destination) => (
            <div
              key={destination.title}
              className="p-5 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between min-h-[170px]"
            >
              <div className="flex flex-col gap-2">
                <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                  {destination.title}
                </div>
                <p className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
                  {destination.description.split("\n").map((line, idx) => (
                    <span key={idx} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div className="pt-3">
                <Link
                  href={destination.href}
                  className="text-[#B8913F] text-xs font-bold font-['Inter'] inline-flex items-center gap-1.5 hover:underline"
                >
                  <span>{destination.linkText}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
