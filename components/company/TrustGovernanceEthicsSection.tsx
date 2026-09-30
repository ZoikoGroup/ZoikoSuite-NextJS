import React from "react";
import Link from "next/link";

interface ProofRoute {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const proofRoutes: ProofRoute[] = [
  {
    title: "Security & privacy",
    description: "Detailed controls and claim statuses live in Trust.",
    linkText: "Trust / Security / Privacy",
    href: "/trust",
  },
  {
    title: "Responsible AI",
    description:
      "AI operates within governance, provenance, review, and authority boundaries.",
    linkText: "Responsible AI",
    href: "/responsible-ai",
  },
  {
    title: "Accessibility",
    description: "Company site and product accessibility commitments are distinct.",
    linkText: "Accessibility",
    href: "/accessibility",
  },
  {
    title: "Ethics / reporting",
    description: "An independent concern-reporting route, not general support.",
    linkText: "Whistleblowing & Ethics",
    href: "/whistleblowing-ethics-reporting",
  },
  {
    title: "Legal",
    description: "Corporate/legal terms and notices remain canonical in Legal.",
    linkText: "Legal Notices",
    href: "/legal-notices",
  },
];

export default function TrustGovernanceEthicsSection() {
  return (
    <section className="w-full bg-color-grey-95-12 py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div
                className="w-5 h-px"
                style={{ backgroundColor: "rgba(184, 145, 63, 1)" }}
              />
              <div
                className="justify-center text-xs font-semibold font-['Inter'] tracking-wide uppercase"
                style={{ color: "rgba(184, 145, 63, 1)" }}
              >
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
        <div className="w-full px-6 py-2 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-start items-start">
          {proofRoutes.map((route, index) => (
            <div
              key={route.title}
              className={`w-full py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                index < proofRoutes.length - 1
                  ? "border-b border-color-orange-87"
                  : ""
              }`}
            >
              <div className="w-full md:w-56 shrink-0">
                <div className="text-color-azure-12-4 text-sm font-bold font-['Inter']">
                  {route.title}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
                  {route.description}
                </p>
              </div>
              <div className="w-full md:w-auto md:text-right shrink-0">
                <Link
                  href={route.href}
                  className="text-xs font-semibold font-['Inter'] inline-flex items-center gap-1.5 hover:underline"
                  style={{ color: "rgba(184, 145, 63, 1)" }}
                >
                  <span>{route.linkText}</span>
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
