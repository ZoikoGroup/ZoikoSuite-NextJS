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
    linkText: "About ZoikoSuite →",
    href: "/about",
  },
  {
    title: "Founder's Vision",
    description: "Founder perspective on\npurpose and long-term\ndirection.",
    linkText: "Read Founder's Vision →",
    href: "/founders-vision",
  },
  {
    title: "Leadership",
    description: "Verified leadership and\ngovernance roles.",
    linkText: "Meet leadership →",
    href: "/leadership",
  },
  {
    title: "Partners",
    description: "Partnership models and\nverified ecosystem\nrelationships.",
    linkText: "Explore partners →",
    href: "/partners",
  },
  {
    title: "Careers",
    description: "Culture, teams, locations,\nand live opportunities.",
    linkText: "Explore careers →",
    href: "/careers",
  },
  {
    title: "Newsroom",
    description: "Official announcements,\nmedia resources, and\ncontacts.",
    linkText: "Visit newsroom →",
    href: "/newsroom",
  },
  {
    title: "Zoiko Tech",
    description: "Technology organization\nrelationship.",
    linkText: "Explore Zoiko Tech →",
    href: "/zoiko-tech",
  },
  {
    title: "Zoiko Group",
    description: "Wider group / portfolio\ncontext.",
    linkText: "Explore Zoiko Group →",
    href: "/zoiko-group",
  },
  {
    title: "Investor Relations",
    description: "Approved investor/corporate\ninformation only.",
    linkText: "Investor Relations →",
    href: "/investor-relations",
  },
  {
    title: "Sustainability",
    description: "Current commitments,\ngovernance, progress, and\nevidence.",
    linkText: "Explore sustainability →",
    href: "/sustainability",
  },
];

export default function CompanyDestinationsSection() {
  return (
    <section className="self-stretch px-28 py-24 bg-color-grey-95-12 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-yellow-600" />
              <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
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
        <div className="self-stretch h-80 relative">
          {destinations.map((destination, index) => {
            const column = index % 5;
            const row = Math.floor(index / 5);
            return (
              <div
                key={destination.title}
                className="w-52 h-40 min-w-44 p-5 absolute bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start"
                style={{
                  left: `${column * 230}px`,
                  top: `${row * 178}px`,
                }}
              >
                <div className="self-stretch pb-2 flex flex-col justify-start items-start">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
                      {destination.title}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 py-3 flex flex-col justify-center items-start">
                  <div className="self-stretch flex-1 flex flex-col justify-start items-start">
                    <p className="self-stretch justify-center text-color-grey-44 text-xs font-normal font-['Inter'] leading-5 whitespace-pre-line">
                      {destination.description}
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <Link
                    href={destination.href}
                    className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['Inter']"
                  >
                    {destination.linkText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
