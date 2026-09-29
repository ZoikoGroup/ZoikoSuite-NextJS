import React from "react";
import Link from "next/link";

interface ProofRoute {
  title: string;
  description: string;
  linkText: string;
  href: string;
  titleSpacing: string;
  linkSpacing: string;
}

const proofRoutes: ProofRoute[] = [
  {
    title: "Security & privacy",
    description: "Detailed controls and claim statuses live in Trust.",
    linkText: "Trust / Security / Privacy →",
    href: "/trust",
    titleSpacing: "pr-24",
    linkSpacing: "pr-9",
  },
  {
    title: "Responsible AI",
    description:
      "AI operates within governance, provenance, review, and authority boundaries.",
    linkText: "Responsible AI →",
    href: "/responsible-ai",
    titleSpacing: "pr-28",
    linkSpacing: "pr-24",
  },
  {
    title: "Accessibility",
    description: "Company site and product accessibility commitments are distinct.",
    linkText: "Accessibility →",
    href: "/accessibility",
    titleSpacing: "pr-32",
    linkSpacing: "pr-28",
  },
  {
    title: "Ethics / reporting",
    description: "An independent concern-reporting route, not general support.",
    linkText: "Whistleblowing & Ethics →",
    href: "/whistleblowing-ethics-reporting",
    titleSpacing: "pr-24",
    linkSpacing: "pr-10",
  },
  {
    title: "Legal",
    description: "Corporate/legal terms and notices remain canonical in Legal.",
    linkText: "Legal Notices →",
    href: "/legal-notices",
    titleSpacing: "pr-44",
    linkSpacing: "pr-24",
  },
];

export default function TrustGovernanceEthicsSection() {
  return (
    <section className="self-stretch px-28 py-24 bg-color-grey-95-12 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-yellow-600" />
              <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
                TRUST, GOVERNANCE &amp; ETHICS
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Detailed proof lives outside Company — here&apos;s where to find
                it.
              </h2>
            </div>
          </div>
        </div>

        {/* Proof Routes List */}
        <div className="self-stretch px-6 py-2 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 flex flex-col justify-start items-start">
          {proofRoutes.map((route, index) => (
            <div
              key={route.title}
              className={`self-stretch py-4 inline-flex justify-start items-start gap-5 flex-wrap content-start ${
                index < proofRoutes.length - 1
                  ? "border-b border-color-orange-87"
                  : ""
              }`}
            >
              <div className={`inline-flex flex-col justify-start items-start ${route.titleSpacing}`}>
                <div className="justify-center text-color-azure-12-4 text-sm font-bold font-['Inter']">
                  {route.title}
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
                  {route.description}
                </div>
              </div>
              <div className={`inline-flex flex-col justify-start items-start ${route.linkSpacing}`}>
                <Link
                  href={route.href}
                  className="justify-center text-yellow-600 text-xs font-semibold font-['Inter']"
                >
                  {route.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
