"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface NavItem {
  id: string;
  label: string;
}

interface TableRow {
  cells: string[];
}

interface TableBlock {
  headers: string[];
  rows: TableRow[];
}

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const NAV_ITEMS: NavItem[] = [
  { id: "controller-rep-dpo", label: "Controller, Representative & DPO" },
  { id: "collection-sources", label: "Collection Sources & Data Categories" },
  { id: "processing-purposes", label: "Processing Purposes Matrix" },
  { id: "legal-basis", label: "Legal Basis & Legitimate Interests" },
  { id: "sharing-processors", label: "Sharing, Processors & Recipients" },
  { id: "international-transfers", label: "International Transfers" },
  { id: "retention-deletion", label: "Retention & Deletion" },
  { id: "automated-decision", label: "Automated Decision-Making & AI" },
  { id: "eu-rights-hub", label: "EU/EEA Rights Hub" },
  { id: "rights-workflow", label: "Rights Request Workflow" },
  { id: "complaints", label: "Complaints & Supervisory Authorities" },
  { id: "security-cookies", label: "Security, Cookies, Children" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

const CONTROLLER_TABLE: TableBlock = {
  headers: ["FIELD", "VALUE"],
  rows: [
    {
      cells: ["Controller legal name", "[ Required — validated entity name ]"],
    },
    {
      cells: [
        "Registered address",
        "[ Required when applicable — structured address ]",
      ],
    },
    {
      cells: [
        "Contact channel",
        "[ Required — privacy-specific channel preferred; no dead link ]",
      ],
    },
    {
      cells: [
        "EU representative",
        "[ Conditional — role, name/entity, address/contact only when legally applicable and opted in ]",
      ],
    },
    {
      cells: [
        "DPO",
        "[ Conditional — functional contact preferred over unnecessary personal name ]",
      ],
    },
    {
      cells: [
        "Joint controllers",
        "[ Conditional — explains arrangement essence and contact point where applicable ]",
      ],
    },
    {
      cells: [
        "Processor-only contexts",
        "Controller status is never implied where Zoko acts solely on customer instructions — routed to the customer/controller where appropriate.",
      ],
    },
  ],
};

const COLLECTION_TABLE: TableBlock = {
  headers: ["SOURCE", "DISCLOSURE BEHAVIOR"],
  rows: [
    {
      cells: [
        "Provided directly by you",
        "Account, contact, form, support, billing, event, or request data — only categories actually collected.",
      ],
    },
    {
      cells: [
        "Generated through service use",
        'Device, log, usage, configuration, security, or diagnostic data — defined in understandable terms, never "technical data" alone.',
      ],
    },
    {
      cells: [
        "Customer / organization",
        "Enterprise provisioning, workspace, or employment-related identifiers where applicable, with the customer/controller relationship explained.",
      ],
    },
    {
      cells: [
        "Third parties",
        "Identity providers, integration partners, public sources — source category and purpose identified; timing/process Legal-reviewed.",
      ],
    },
    {
      cells: [
        "Cookies / similar technologies",
        "Cross-linked to Cookie Policy and Cookie Preferences.",
      ],
    },
  ],
};

const PURPOSES_TABLE: TableBlock = {
  headers: [
    "PURPOSE",
    "DATA CATEGORIES",
    "LEGAL BASIS",
    "RECIPIENTS",
    "TRANSFER",
  ],
  rows: [
    {
      cells: [
        "[ Validated plain-language outcome ]",
        "[ Specific categories ]",
        "[ Exact approved basis ]",
        "[ Recipient category ]",
        "Y/N/Conditional",
      ],
    },
    {
      cells: [
        "[ Validated plain-language outcome ]",
        "[ Specific categories ]",
        "[ Exact approved basis ]",
        "[ Recipient category ]",
        "Y/N/Conditional",
      ],
    },
  ],
};

const LEGAL_BASIS_TABLE: TableBlock = {
  headers: ["BASIS", "UI TREATMENT"],
  rows: [
    {
      cells: [
        "Contract",
        "Explains what service/contractual step the processing supports — never claims necessity without Legal approval.",
      ],
    },
    {
      cells: [
        "Legal obligation",
        "Names or describes the obligation at an appropriate level where validated.",
      ],
    },
    {
      cells: [
        "Legitimate interests",
        'States the specific interest with a "Learn about our balancing assessment" route where approved — never uses "business purposes" as the sole explanation.',
      ],
    },
    {
      cells: [
        "Consent",
        "States what consent covers, with a withdrawal route as easy to find as the original action.",
      ],
    },
    {
      cells: [
        "Special-category condition",
        "Mapped separately from the Article 6 basis — never conflated.",
      ],
    },
  ],
};

const SHARING_TABLE: TableBlock = {
  headers: ["COMPONENT", "REQUIREMENT"],
  rows: [
    {
      cells: [
        "Recipient category",
        "Cloud infrastructure, communications, analytics, professional services, authorities, affiliates, customer- directed integrations — only where validated.",
      ],
    },
    {
      cells: [
        "Role",
        "Processor / Independent controller / joint controller / other legally reviewed relationship.",
      ],
    },
    {
      cells: [
        "Location",
        "Country/region where relevant for transfer transparency.",
      ],
    },
    {
      cells: [
        "Cross-link",
        "Subprocessor List, DPA, integration documentation, or request route.",
      ],
    },
  ],
};

const TRANSFERS_TABLE: TableBlock = {
  headers: ["FIELD", "REQUIREMENT"],
  rows: [
    {
      cells: ["Destination", "Country or region when known and publishable."],
    },
    {
      cells: [
        "Mechanism",
        "Adequacy decision, SCCs, BCRs, derogation, or other validated mechanism.",
      ],
    },
    {
      cells: [
        "Safeguard access",
        "How a data subject can obtain a copy or information about safeguards.",
      ],
    },
  ],
};

const RETENTION_TABLE: TableBlock = {
  headers: ["FIELD", "REQUIREMENT"],
  rows: [
    {
      cells: [
        "Retention period / criteria",
        "Concrete period when possible; objective criteria if no fixed period.",
      ],
    },
    {
      cells: [
        "Trigger",
        "Account closure, contract end, request resolution, statutory period, consent withdrawal.",
      ],
    },
    {
      cells: [
        "Post-retention action",
        "Delete, anonymize, aggregate, or archive under legal hold.",
      ],
    },
  ],
};

const AUTOMATED_TABLE: TableBlock = {
  headers: ["FIELD (IF APPLICABLE)", "VALUE"],
  rows: [
    {
      cells: [
        "Decision / profiling activity",
        "[ Plain-language description ]",
      ],
    },
    {
      cells: [
        "Meaningful information about logic",
        "[ Human-understandable factors/process — no security-sensitive disclosure beyond legal requirement ]",
      ],
    },
    {
      cells: ["Human involvement", "[ Where and how review occurs ]"],
    },
    {
      cells: [
        "Right / action",
        "[ Contest, obtain human intervention, express point of view, object ]",
      ],
    },
  ],
};

const RIGHTS_HUB: { title: string; body: string }[] = [
  {
    title: "Access",
    body: "Ask whether we process your personal data and request access to applicable information/data.",
  },
  {
    title: "Rectification",
    body: "Ask us to correct inaccurate or incomplete data.",
  },
  {
    title: "Erasure",
    body: "Ask for deletion where the legal conditions are met.",
  },
  {
    title: "Restriction",
    body: "Ask us to limit processing in applicable circumstances.",
  },
  {
    title: "Portability",
    body: "Request eligible data in a structured, commonly used, machine-readable format where applicable.",
  },
  {
    title: "Object",
    body: "Object to certain processing, including processing based on legitimate interests and direct marketing where applicable.",
  },
  {
    title: "Withdraw consent",
    body: "Withdraw consent at any time for processing based on consent, without implying retroactive invalidity.",
  },
  {
    title: "Automated decisions",
    body: "Exercise applicable rights regarding qualifying automated decision-making.",
  },
  {
    title: "Complain",
    body: "Contact the competent supervisory authority — you never need to contact Zoko first.",
  },
];

const WORKFLOW_STEPS: { title: string; body: string }[] = [
  {
    title: "Choose request type",
    body: "Access, correction, deletion, restriction, portability, objection, consent, automated decision, other privacy question.",
  },
  {
    title: "Identify relationship/context",
    body: 'Product/service, website, customer organization, applicant, partner, other — "not sure" supported.',
  },
  {
    title: "Provide contact details",
    body: "Minimum information needed to locate/respond, with an explanation of why each field is needed.",
  },
  {
    title: "Verification",
    body: "Risk-based requests only necessary information — no ID collection by default unless justified.",
  },
  {
    title: "Request details",
    body: "Optional free text with structured selectors, with a warning against including unnecessary sensitive data.",
  },
  {
    title: "Review & submit",
    body: "Summary, privacy notice link, accessible confirmation.",
  },
  {
    title: "Confirmation",
    body: "Reference number, next-step expectations, contact route — no unsupported deadline promise beyond approved policy.",
  },
];

const COMPLAINTS_TABLE: TableBlock = {
  headers: ["ELEMENT", "REQUIREMENT"],
  rows: [
    {
      cells: ["Privacy contact", "Approved functional contact or DPO channel."],
    },
    {
      cells: [
        "Authority finder",
        "Link to authoritative EU/EEA supervisory-authority resources, or country-specific authority with scope known.",
      ],
    },
    {
      cells: [
        "Response expectations",
        "Legally and operationally validated timing language, accounting for extensions/identity clarification where applicable.",
      ],
    },
  ],
};

const SECURITY_TABLE: TableBlock = {
  headers: ["AREA", "REQUIREMENT"],
  rows: [
    {
      cells: [
        "Security",
        "Concise governance statement linked to Security Overview / Trust Center — no unsupported certification or guarantee claims.",
      ],
    },
    {
      cells: [
        "Cookies",
        "Governed by Cookie Policy and Cookie Preferences — this notice does not duplicate the full cookie inventory.",
      ],
    },
    {
      cells: [
        "Children",
        'Any "not directed to children" statement is legally and product-validated, age-appropriate transparency, and safeguards are built rather than relying on adult-consent promises.',
      ],
    },
  ],
};

const RELATED_LINKS: string[] = [
  "Privacy Policy",
  "Cookie Policy + Preferences",
  "Data Processing Agreement",
  "Subprocessor List",
  "California Privacy Notice",
  "UK Privacy Notice",
  "Consumer Rights Request",
  "Security Disclosure",
  "Responsible AI",
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is the EU Privacy Notice?",
    a: "[ One concise sentence sourced from the approved scope/controller text. ]",
  },
  {
    q: "How can I submit a privacy request?",
    a: 'Use the "Exercise your privacy rights" action above, or the alternative approved contact method if the form cannot be used.',
  },
  {
    q: "Does ZokoSuite transfer my data outside the EU/EEA?",
    a: 'Answered only from the current approved transfer register — a missing record blocks publication rather than defaulting to "no transfers"',
  },
  {
    q: "Where can I complain?",
    a: "You may contact the competent supervisory authority — you do not need to contact ZokoSuite first.",
  },
  {
    q: "Does AI make automated decisions about me?",
    a: "Answered only where a qualifying automated decision-making activity is validated and disclosed in the Automated Decision-Making section above.",
  },
];

/* ------------------------------------------------------------------ */
/*  Reusable UI pieces                                                 */
/* ------------------------------------------------------------------ */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[15px] font-semibold text-gray-900 mb-4">{children}</h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] leading-relaxed text-gray-600 mb-5">{children}</p>
  );
}

// function DataTable({ table }: { table: TableBlock }) {
//   const colCount = table.headers.length;
//   return (
//     <div className="w-full overflow-x-auto mb-10  rounded-sm">
//       <table className="w-full border-collapse text-[13px]">
//         <thead>
//           <tr className="bg-[#FBFAF7]">
//             {table.headers.map((h, i) => (
//               <th
//                 key={i}
//                 className="text-left font-semibold text-gray-500 tracking-wide text-[11px] uppercase px-4 py-3 border-b border-gray-200"
//                 style={{ width: colCount > 2 ? `${100 / colCount}%` : i === 0 ? "26%" : "auto" }}
//               >
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {table.rows.map((row, ri) => (
//             <tr key={ri} className="border-b border-gray-100 last:border-b-0">
//               {row.cells.map((cell, ci) => (
//                 <td
//                   key={ci}
//                   className={`align-top px-4 py-3.5 last:border-r-0 ${
//                     ci === 0
//                       ? "font-medium text-gray-800 [#FBFAF7]space-nowrap"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   {cell}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
function DataTable({
  table,
  variant = "default",
}: {
  table: TableBlock;
  variant?: "default" | "processing";
}) {
  const colCount = table.headers.length;

  return (
    <div
      className={`w-full overflow-x-auto mb-10 rounded-sm ${
        variant === "processing" ? "border border-[#E5E0D5] rounded-lg" : ""
      }`}
    >
      <table
        className={`w-full border-collapse text-[13px] ${
          variant === "processing" ? "min-w-[900px]" : ""
        }`}
      >
        <thead>
          <tr
            className={
              variant === "processing" ? "bg-[#F6F1E6]" : "bg-[#FBFAF7]"
            }
          >
            {table.headers.map((h, i) => (
              <th
                key={i}
                className={`text-left font-semibold text-gray-500 tracking-wide text-[11px] uppercase px-4 py-3 border-b border-gray-200 ${
                  variant === "processing" ? "text-[#16223A]" : ""
                }`}
                style={{
                  width:
                    colCount > 2
                      ? `${100 / colCount}%`
                      : i === 0
                        ? "26%"
                        : "auto",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-gray-100 last:border-b-0 ${
                variant === "processing"
                  ? "hover:bg-[#FBFAF7] transition-colors"
                  : ""
              }`}
            >
              {row.cells.map((cell, ci) => (
                <td
                  key={ci}
                  className={`align-top px-4 py-3.5 last:border-r-0 ${
                    ci === 0
                      ? "font-medium text-gray-800 whitespace-nowrap"
                      : "text-gray-500"
                  } ${
                    variant === "processing" && ci === 0 ? "text-[#16223A] border-r border-[#DCD6C8] last:border-r-0" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RightsHubItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-[13.5px] font-semibold text-gray-900 mb-1">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-gray-500">{body}</p>
    </div>
  );
}

function WorkflowStep({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-[#FBFAF7] text-[11px] font-semibold flex items-center justify-center mt-0.5">
        {index}
      </div>
      <div>
        <h3 className="text-[13.5px] font-semibold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-[13px] leading-relaxed text-gray-500">{body}</p>
      </div>
    </div>
  );
}

function FaqAccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-[13.5px] font-semibold text-gray-900">{q}</span>
        <span className="text-gray-400 text-lg leading-none select-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="text-[13px] leading-relaxed text-gray-500 mt-3 pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

function LinkChip({ label }: { label: string }) {
  return (
    <div className="border border-gray-200 rounded-md px-4 py-3 text-[13px] text-gray-700 font-medium hover:border-gray-300 bg-white transition-colors cursor-pointer">
      {label}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function PrivacyNoticePage() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        // Pick the entry closest to the top of the viewport that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute("data-section-id");
          if (id) setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: "-96px 0px -70% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    NAV_ITEMS.forEach((item) => {
      const el = sectionRefs.current[item.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    isClickScrolling.current = true;
    setActiveId(id);
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
    window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] py-16 text-gray-900">
      <div className="mx-auto max-w-6xl flex">
        {/* ---------------------------------------------------------- */}
        {/* Fixed / sticky sidebar                                     */}
        {/* ---------------------------------------------------------- */}
        <aside className="hidden md:block w-[260px] flex-shrink-0">
          <nav className="sticky top-20 h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-4">
            <ul className="space-y-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left text-[12.5px] leading-snug px-3 py-2 rounded-md transition-colors duration-150 ${
                        isActive
                          ? "bg-[#F6F1E6] border-l-2 border-l-[#A8843A] text-[#16223A] font-medium"
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* ---------------------------------------------------------- */}
        {/* Main content                                                */}
        {/* ---------------------------------------------------------- */}
        <main className="flex-1 min-w-0 px-6 md:px-10 py-8 max-w-[820px]">
          {/* 1. Controller, Representative & DPO */}
          <section
            id="controller-rep-dpo"
            data-section-id="controller-rep-dpo"
            ref={registerRef("controller-rep-dpo")}
            className="scroll-mt-36"
          >
            <SectionHeading>Controller, Representative & DPO</SectionHeading>
            <SectionIntro>
              Use an accountability card model: entity identity on one side,
              contact actions on the other. For multiple entities, use a footer
              table—each row must answer "when does this entity apply?"
            </SectionIntro>
            <DataTable table={CONTROLLER_TABLE} />
          </section>

          {/* 2. Collection Sources & Personal Data Categories */}
          <section
            id="collection-sources"
            data-section-id="collection-sources"
            ref={registerRef("collection-sources")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>
              Collection Sources & Personal Data Categories
            </SectionHeading>
            <DataTable table={COLLECTION_TABLE} />
          </section>

          {/* 3. Processing Purposes Matrix */}
          <section
            id="processing-purposes"
            data-section-id="processing-purposes"
            ref={registerRef("processing-purposes")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>Processing Purposes Matrix</SectionHeading>
            <SectionIntro>
              The core product-like component of this notice. Forces each
              purpose to carry the fields needed for understandable
              accountability, preventing vague statements.
            </SectionIntro>
            <DataTable table={PURPOSES_TABLE} variant="processing" />
          </section>

          {/* 4. Legal Basis & Legitimate Interests Pattern */}
          <section
            id="legal-basis"
            data-section-id="legal-basis"
            ref={registerRef("legal-basis")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>
              Legal Basis & Legitimate Interests Pattern
            </SectionHeading>
            <DataTable table={LEGAL_BASIS_TABLE} />
          </section>

          {/* 5. Sharing, Processors & Recipient Architecture */}
          <section
            id="sharing-processors"
            data-section-id="sharing-processors"
            ref={registerRef("sharing-processors")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>
              Sharing, Processors & Recipient Architecture
            </SectionHeading>
            <DataTable table={SHARING_TABLE} />
          </section>

          {/* 6. International Transfers */}
          <section
            id="international-transfers"
            data-section-id="international-transfers"
            ref={registerRef("international-transfers")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>International Transfers</SectionHeading>
            <DataTable table={TRANSFERS_TABLE} />
          </section>

          {/* 7. Retention & Deletion */}
          <section
            id="retention-deletion"
            data-section-id="retention-deletion"
            ref={registerRef("retention-deletion")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>Retention & Deletion</SectionHeading>
            <DataTable table={RETENTION_TABLE} />
          </section>

          {/* 8. Automated Decision-Making, Profiling & AI */}
          <section
            id="automated-decision"
            data-section-id="automated-decision"
            ref={registerRef("automated-decision")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>
              Automated Decision-Making, Profiling & AI
            </SectionHeading>
            <SectionIntro>
              Conditional but designed in advance — distinguishes ordinary
              automation/AI from solely automated decisions producing legal or
              similarly significant effects.
            </SectionIntro>
            <DataTable table={AUTOMATED_TABLE} />
          </section>

          {/* 9. EU/EEA Rights Hub */}
          <section
            id="eu-rights-hub"
            data-section-id="eu-rights-hub"
            ref={registerRef("eu-rights-hub")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>EU/EEA Rights Hub</SectionHeading>
            <div>
              {RIGHTS_HUB.map((item) => (
                <RightsHubItem
                  key={item.title}
                  title={item.title}
                  body={item.body}
                />
              ))}
            </div>
          </section>

          {/* 10. Rights Request Workflow & Identity Verification */}
          <section
            id="rights-workflow"
            data-section-id="rights-workflow"
            ref={registerRef("rights-workflow")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>
              Rights Request Workflow & Identity Verification
            </SectionHeading>
            <div>
              {WORKFLOW_STEPS.map((step, i) => (
                <WorkflowStep
                  key={step.title}
                  index={i + 1}
                  title={step.title}
                  body={step.body}
                />
              ))}
            </div>
          </section>

          {/* 11. Complaints, Supervisory Authorities & Contact */}
          <section
            id="complaints"
            data-section-id="complaints"
            ref={registerRef("complaints")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>
              Complaints, Supervisory Authorities & Contact
            </SectionHeading>
            <SectionIntro>
              Individuals may lodge a complaint with a competent data protection
              supervisory authority. This page never implies a person must
              contact ZokoSuite first — a privacy contact route is offered only
              as an option.
            </SectionIntro>
            <DataTable table={COMPLAINTS_TABLE} />
          </section>

          {/* 12. Security, Cookies, Children & Related Notices */}
          <section
            id="security-cookies"
            data-section-id="security-cookies"
            ref={registerRef("security-cookies")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>
              Security, Cookies, Children & Related Notices
            </SectionHeading>
            <DataTable table={SECURITY_TABLE} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {RELATED_LINKS.map((label) => (
                <LinkChip key={label} label={label} />
              ))}
            </div>
          </section>

          {/* 13. Contact */}
          <section
            id="contact"
            data-section-id="contact"
            ref={registerRef("contact")}
            className="scroll-mt-36 pt-12"
          >
            <SectionHeading>Contact</SectionHeading>
            <SectionIntro>
              Uses the approved public privacy contact route only — never
              invents a privacy email, postal address, or phone number.
            </SectionIntro>
          </section>

          {/* 14. Frequently Asked Questions */}
          <section
            id="faq"
            data-section-id="faq"
            ref={registerRef("faq")}
            className="scroll-mt-36 pb-24"
          >
            <SectionHeading>Frequently Asked</SectionHeading>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FaqAccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
