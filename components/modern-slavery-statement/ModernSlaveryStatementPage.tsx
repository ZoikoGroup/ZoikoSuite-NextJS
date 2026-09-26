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
  cells: (string | React.ReactNode)[];
}

interface TableBlock {
  headers: string[];
  rows: TableRow[];
}

type BadgeTone = "amber" | "green" | "gray";

/* ------------------------------------------------------------------ */
/*  Reusable UI pieces (declared first so data arrays below can use)   */
/* ------------------------------------------------------------------ */

function StatusBadge({
  children,
  tone = "amber",
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
}) {
  const toneClasses: Record<BadgeTone, string> = {
    amber: "bg-[#EFE8D8] text-[#4B5872] border border-[#DCD6C8]",
    green: "bg-[#F7EFE1] text-[#A8843A] border border-[#E2CFA3]",
    gray: "bg-gray-100 text-gray-600 border border-[#DCD6C8]",
  };
  return (
    <span
      className={`inline-block text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full whitespace-nowrap ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const NAV_ITEMS: NavItem[] = [
  { id: "commitment-scope", label: "Commitment, Definitions & Scope" },
  { id: "org-supply-chains", label: "Organization & Supply Chains" },
  { id: "policies-governance", label: "Policies & Governance" },
  { id: "risk-assessment", label: "Risk Assessment & Priority Areas" },
  { id: "due-diligence", label: "Due Diligence & Remediation" },
  { id: "training-awareness", label: "Training & Awareness" },
  { id: "effectiveness-progress", label: "Effectiveness & Progress" },
  { id: "reporting-concerns", label: "Reporting Concerns" },
  { id: "next-priorities", label: "Next-Period Priorities" },
  { id: "approval-publication", label: "Approval & Publication Record" },
  { id: "previous-statements", label: "Previous Statements" },
  { id: "related-policies", label: "Related Policies" },
  { id: "faq", label: "FAQ" },
];

const SCOPE_TABLE: TableBlock = {
  headers: ["FIELD", "VALUE"],
  rows: [
    {
      cells: [
        "Covered entities",
        "[ Exact legal entity names; registration/jurisdiction if approved ]",
      ],
    },
    {
      cells: [
        "Covered operations",
        "[ Business units, geographies, services, and controlled operations included ]",
      ],
    },
    {
      cells: [
        "Excluded scope",
        "[ Material exclusions or boundaries and why, where disclosure is appropriate ]",
      ],
    },
    { cells: ["Reporting period", "[ Exact start/end dates ]"] },
    {
      cells: [
        "Evidence status",
        <StatusBadge key="evidence-status" tone="amber">
          Validated / Not reported / Not applicable / Under review
        </StatusBadge>,
      ],
    },
  ],
};

const ORG_TABLE: TableBlock = {
  headers: ["MODULE", "CONTENT"],
  rows: [
    {
      cells: [
        "Organization profile",
        "[ Legal entity structure; business model; workforce categories; major operating regions ]",
      ],
    },
    {
      cells: [
        "Supply-chain map",
        "Cloud/technology, professional services, facilities, logistics/hardware, contingent labor/recruitment, marketing, other validated categories.",
      ],
    },
    {
      cells: [
        "Supplier footprint",
        "Counts, countries, spend concentration, or tier depth published only if sourced and approved.",
      ],
    },
    {
      cells: [
        "Labor supply chain",
        "[ Recruitment/agency/contractor pathways where relevant ]",
      ],
    },
  ],
};

const POLICIES_TABLE: TableBlock = {
  headers: ["POLICY / CONTROL", "REQUIRED DISPLAY"],
  rows: [
    {
      cells: [
        "Human rights / modern slavery policy",
        "Title, owner, last reviewed date, applicability, link if public.",
      ],
    },
    {
      cells: [
        "Supplier code / standards",
        "Labor expectations, contractual incorporation, acknowledgment method.",
      ],
    },
    {
      cells: [
        "Whistleblowing / ethics reporting",
        "Confidential reporting route, non-retaliation language, accessibility/language support.",
      ],
    },
    {
      cells: [
        "Governance",
        "Board/equivalent oversight, executive owner, operational owner, review cadence.",
      ],
    },
    {
      cells: [
        "Policy state",
        <StatusBadge key="policy-state" tone="amber">
          Published / Internal / Under review / Not applicable
        </StatusBadge>,
      ],
    },
  ],
};

const PRIORITY_CARD_FIELDS: { label: string; value: string }[] = [
  { label: "Why higher risk:", value: "[ validated rationale ]" },
  { label: "Population/segment:", value: "[ scope ]" },
  { label: "Control response:", value: "[ action ]" },
  { label: "Review cadence:", value: "[ frequency ]" },
];

const DUE_DILIGENCE_TABLE: TableBlock = {
  headers: ["STAGE", "REQUIRED CONTENT"],
  rows: [
    {
      cells: [
        "Pre-engagement",
        "Risk screening, procurement questionnaire, beneficial/ownership checks if used, labor standards acknowledgement.",
      ],
    },
    {
      cells: [
        "Contracting",
        "Modern slavery/human-rights clauses, audit/information rights, subcontracting expectations — only if adopted.",
      ],
    },
    {
      cells: [
        "Ongoing monitoring",
        "Periodic reassessment, supplier attestations, evidence requests, audit/review cadence.",
      ],
    },
    {
      cells: [
        "Remediation",
        "Victim-centered remediation principles — avoids automatic termination language that may increase worker harm.",
      ],
    },
  ],
};

const SPECIMEN_FIELDS: { label: string; value: string }[] = [
  { label: "Supplier category", value: "[ Category ]" },
  { label: "Risk basis", value: "[ Validated rationale ]" },
  {
    label: "Assessment status",
    value: "Not started / In review / Completed / Follow-up required",
  },
  {
    label: "Corrective action",
    value: "None recorded / Open / Verified closed",
  },
  { label: "Owner", value: "[ Role ]" },
  { label: "Next review", value: "[ Date / cadence ]" },
];

const TRAINING_TABLE: TableBlock = {
  headers: ["FIELD", "REQUIREMENT"],
  rows: [
    {
      cells: [
        "Audience",
        "Employees, procurement, people/recruitment, supplier managers, leadership, contractors — only as applicable.",
      ],
    },
    {
      cells: [
        "Coverage metric",
        'Numerator + denominator + reporting period + exclusions — never shows "100%" without evidence.',
      ],
    },
    { cells: ["Cadence", "Onboarding / annual / role-triggered / risk-triggered."] },
  ],
};

const KPI_CARDS: { label: string; body: string }[] = [
  {
    label: "SUPPLIER DUE DILIGENCE",
    body: "High-priority suppliers assessed; period: [ dates ]",
  },
  {
    label: "TRAINING COVERAGE",
    body: "Eligible population trained; period: [ dates ]",
  },
  {
    label: "REMEDIATION",
    body: "Corrective actions verified; period: [ dates ]",
  },
];

const REPORT_CHANNELS = ["Ethics portal", "Email", "Phone", "Manager", "External channel"];

const ROADMAP_ROWS: {
  priority: string;
  owner: string;
  window: string;
  evidence: string;
}[] = [
  {
    priority: "[ Validated priority ]",
    owner: "[ Role ]",
    window: "[ Quarter / FY ]",
    evidence: "[ Defined evidence ]",
  },
  {
    priority: "[ Validated priority ]",
    owner: "[ Role ]",
    window: "[ Quarter / FY ]",
    evidence: "[ Defined evidence ]",
  },
];

const APPROVAL_TABLE: TableBlock = {
  headers: ["FIELD", "VALUE"],
  rows: [
    {
      cells: [
        "Approval body",
        "[ Board / equivalent management body — exact approved body ]",
      ],
    },
    { cells: ["Approval date", "[ date ]"] },
    {
      cells: [
        "Signatory",
        "[ Name only after approval; otherwise role placeholder ]",
      ],
    },
    { cells: ["Signatory role", "[ Director / designated member / equivalent ]"] },
    { cells: ["Publication date", "[ date current version went live ]"] },
    { cells: ["Version", "[ e.g. 2026.1 ]"] },
  ],
};

const ARCHIVE_HEADERS = [
  "REPORTING PERIOD",
  "COVERED ENTITIES",
  "APPROVED DATE",
  "PUBLISHED DATE",
  "STATUS",
  "ACTIONS",
];

const RELATED_LINKS: string[] = [
  "Whistleblowing and Ethics Reporting",
  "Supplier Code / Standards",
  "Human Rights Policy",
  "Responsible Procurement",
  "Privacy Policy",
  "Security / Trust Center",
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is a Modern Slavery Statement?",
    a: "[ Concise definition plus the exact purpose of ZokoSuite's published statement — legal applicability stated only within approved scope. ]",
  },
  {
    q: "Which Zoko entities does this statement cover?",
    a: "Answered from validated entity metadata shown in the hero record above.",
  },
  {
    q: "How does ZokoSuite assess modern slavery risk?",
    a: "Summarized from the approved risk methodology — see the Risk Assessment section above.",
  },
  {
    q: "How can I report a concern?",
    a: "Use the approved reporting channels listed in the Reporting Concerns section above.",
  },
  {
    q: "Can I report anonymously?",
    a: "Answered based on actual channel capability and jurisdiction — anonymity is never assumed.",
  },
  {
    q: "Who approved the statement?",
    a: "The Board/equivalent body, approval date, and signatory role shown in the Approval & Publication Record above.",
  },
];

/* ------------------------------------------------------------------ */
/*  More reusable UI pieces                                            */
/* ------------------------------------------------------------------ */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[15px] font-semibold text-gray-900 mb-4">{children}</h2>;
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] leading-relaxed text-gray-600 mb-5">{children}</p>;
}

function DataTable({ table }: { table: TableBlock }) {
  return (
    <div className="w-full overflow-x-auto mb-10 rounded-sm">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr className="">
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="text-left font-semibold text-gray-500 tracking-wide text-[11px] uppercase px-4 py-3 border-b border-[#DCD6C8]"
                style={{ width: i === 0 ? "26%" : "auto" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="border-b border-[#DCD6C8] last:border-b-0">
              {row.cells.map((cell, ci) => (
                <td
                  key={ci}
                  className={`align-top px-4 py-3.5 ${
                    ci === 0
                      ? "font-medium text-gray-800 whitespace-nowrap"
                      : "text-gray-500"
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

function PriorityCard() {
  return (
    <div className="border border-[#DCD6C8] bg-white rounded-md p-5 flex-1 min-w-0">
      <p className="text-[13px] font-semibold text-[#4B5872] mb-3">[ Priority area ]</p>
      <div className="space-y-2">
        {PRIORITY_CARD_FIELDS.map((f) => (
          <p key={f.label} className="text-[12.5px] leading-relaxed text-[#4B5872]">
            <span className="font-semibold text-[#4B5872]">{f.label} </span>
            {f.value}
          </p>
        ))}
      </div>
    </div>
  );
}

function SpecimenBox() {
  return (
    <div className="border border-[#DCD6C8] rounded-md p-5 mb-10">
      <div className="mb-4">
        <StatusBadge tone="amber">ILLUSTRATIVE UI SPECIMEN — NOT COMPANY DISCLOSURE</StatusBadge>
      </div>
      <div className="space-y-3">
        {SPECIMEN_FIELDS.map((f) => (
          <div
            key={f.label}
            className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2"
          >
            <span className="text-[13px] font-medium text-gray-800 sm:w-[160px] flex-shrink-0">
              {f.label}
            </span>
            <span className="text-[13px] text-gray-500">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KpiCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="border border-[#DCD6C8] bg-white rounded-md p-5 flex-1 min-w-0">
      <p className="text-[11px] font-semibold tracking-wide text-[#A8843A] mb-2">{label}</p>
      <p className="text-[20px] font-semibold text-[#4B5872] mb-2">[ value ]</p>
      <p className="text-[12.5px] leading-relaxed text-gray-500">{body}</p>
    </div>
  );
}

function ReportConcernBox() {
  return (
    <div className="bg-[#0A1D34] rounded-lg p-7 mb-10">
      <h3 className="text-white text-[15px] font-semibold mb-2">Report a concern safely</h3>
      <p className="text-gray-300 text-[13px] leading-relaxed mb-5 max-w-2xl">
        Raise suspected forced labor, trafficking, exploitation, recruitment abuse, or
        related unethical conduct through the channels below.
      </p>
      <div className="flex flex-wrap gap-3">
        {REPORT_CHANNELS.map((c) => (
          <button
            key={c}
            className="text-[12.5px] font-medium text-white bg-[#FFFFFF0F] border border-[#FFFFFF26] rounded-md px-4 py-2 hover:bg-white/20 transition-colors"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function RoadmapTable() {
  return (
    <div className="w-full overflow-x-auto mb-10 border border-[#DCD6C8] rounded-sm">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr className="bg-[#F6F1E6]">
            {["PRIORITY", "OWNER", "TARGET WINDOW", "SUCCESS EVIDENCE", "STATE"].map(
              (h) => (
                <th
                  key={h}
                  className="text-left font-semibold text-gray-500 tracking-wide text-[11px] uppercase px-4 py-3 border-b border-[#DCD6C8]"
                >
                  {h}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {ROADMAP_ROWS.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-b-0">
              <td className="align-top px-4 py-3.5 border-r border-gray-100 font-medium text-gray-800 whitespace-nowrap">
                {row.priority}
              </td>
              <td className="align-top px-4 py-3.5 border-r border-gray-100 text-gray-500">
                {row.owner}
              </td>
              <td className="align-top px-4 py-3.5 border-r border-gray-100 text-gray-500">
                {row.window}
              </td>
              <td className="align-top px-4 py-3.5 border-r border-gray-100 text-gray-500">
                {row.evidence}
              </td>
              <td className="align-top px-4 py-3.5 text-gray-500">
                <StatusBadge tone="green">Planned</StatusBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArchiveTable() {
  return (
    <div className="mb-10">
      <div className="w-full overflow-x-auto border border-[#DCD6C8] rounded-t-sm">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr className="bg-white">
              {ARCHIVE_HEADERS.map((h) => (
                <th
                  key={h}
                  className="text-left bg-[#F6F1E6] font-semibold text-gray-500 tracking-wide text-[11px] uppercase px-4 py-3 border-b border-[#DCD6C8]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      <div className="border border-t-0 border-[#DCD6C8] rounded-b-sm bg-[#EFE8D8] px-4 py-4">
        <p className="text-[13px] text-gray-600">
          No previous statements are published in this archive. This does not imply the
          absence of legal history beyond what is known.
        </p>
      </div>
    </div>
  );
}

function LinkChip({ label }: { label: string }) {
  return (
    <div className="border border-[#DCD6C8] rounded-md px-4 py-3 text-[13px] text-gray-700 font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors bg-white cursor-pointer">
      {label}
    </div>
  );
}

function FaqAccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-[#DCD6C8] py-4">
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
        <p className="text-[13px] leading-relaxed text-gray-500 mt-3 pr-8">{a}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ModernSlaveryStatement() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

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
      }
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
    <div className="min-h-screen bg-[#FBFAF7] py-12 text-gray-900">
      <div className="mx-auto max-w-6xl flex">
        {/* ---------------------------------------------------------- */}
        {/* Fixed / sticky sidebar                                     */}
        {/* ---------------------------------------------------------- */}
        <aside className="hidden md:block w-[260px] flex-shrink-0">
          <nav className="sticky top-20 h-screen overflow-y-auto py-8 pr-4">
            <ul className="space-y-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left text-[12.5px] leading-snug px-3 py-2 rounded-md transition-colors duration-150 ${
                        isActive
                          ? "bg-[#F6F1E6] text-[#16223A] font-semibold border-l-2 border-l-[#A8843A]"
                          : "text-gray-500 hover:bg-[#F6F1E6] hover:text-gray-800 border border-transparent"
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
        <main className="flex-1 min-w-0 px-6 md:px-10 py-8 max-w-[860px]">
          {/* 1. Our Commitment and the Scope of This Statement */}
          <section
            id="commitment-scope"
            data-section-id="commitment-scope"
            ref={registerRef("commitment-scope")}
            className="scroll-mt-24"
          >
            <SectionHeading>Our Commitment and the Scope of This Statement</SectionHeading>
            <SectionIntro>
              [ Plain-language definition of modern slavery — legal wording validated by
              counsel. ] [ Policy position and actual governance commitment, without
              claiming zero risk or zero incidents unless verified. ]
            </SectionIntro>
            <DataTable table={SCOPE_TABLE} />
          </section>

          {/* 2. Organization, Operations & Supply Chains */}
          <section
            id="org-supply-chains"
            data-section-id="org-supply-chains"
            ref={registerRef("org-supply-chains")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Organization, Operations & Supply Chains</SectionHeading>
            <DataTable table={ORG_TABLE} />
          </section>

          {/* 3. Policies & Governance */}
          <section
            id="policies-governance"
            data-section-id="policies-governance"
            ref={registerRef("policies-governance")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Policies & Governance</SectionHeading>
            <DataTable table={POLICIES_TABLE} />
          </section>

          {/* 4. Risk Assessment & Priority Areas */}
          <section
            id="risk-assessment"
            data-section-id="risk-assessment"
            ref={registerRef("risk-assessment")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Risk Assessment & Priority Areas</SectionHeading>
            <SectionIntro>
              How risk is identified and prioritized — without turning this page into a
              supplier accusation register.
            </SectionIntro>
            <div className="flex flex-col sm:flex-row gap-4">
              <PriorityCard />
              <PriorityCard />
            </div>
          </section>

          {/* 5. Due Diligence, Supplier Controls & Remediation */}
          <section
            id="due-diligence"
            data-section-id="due-diligence"
            ref={registerRef("due-diligence")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Due Diligence, Supplier Controls & Remediation</SectionHeading>
            <DataTable table={DUE_DILIGENCE_TABLE} />
            <SpecimenBox />
          </section>

          {/* 6. Training & Awareness */}
          <section
            id="training-awareness"
            data-section-id="training-awareness"
            ref={registerRef("training-awareness")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Training & Awareness</SectionHeading>
            <DataTable table={TRAINING_TABLE} />
          </section>

          {/* 7. Effectiveness, KPIs & Year-on-Year Progress */}
          <section
            id="effectiveness-progress"
            data-section-id="effectiveness-progress"
            ref={registerRef("effectiveness-progress")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Effectiveness, KPIs & Year-on-Year Progress</SectionHeading>
            <SectionIntro>
              Metrics demonstrate whether controls are functioning — never a vanity
              dashboard. Every KPI needs a definition, period, source, owner, and
              limitation.
            </SectionIntro>
            <div className="flex flex-col sm:flex-row gap-4">
              {KPI_CARDS.map((kpi) => (
                <KpiCard key={kpi.label} label={kpi.label} body={kpi.body} />
              ))}
            </div>
          </section>

          {/* 8. Reporting Concerns & Non-Retaliation */}
          <section
            id="reporting-concerns"
            data-section-id="reporting-concerns"
            ref={registerRef("reporting-concerns")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Reporting Concerns & Non-Retaliation</SectionHeading>
            <ReportConcernBox />
          </section>

          {/* 9. Next-Period Priorities */}
          <section
            id="next-priorities"
            data-section-id="next-priorities"
            ref={registerRef("next-priorities")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Next-Period Priorities</SectionHeading>
            <SectionIntro>
              Future actions are clearly distinguished from completed actions using a
              roadmap table, not aspirational badges.
            </SectionIntro>
            <RoadmapTable />
          </section>

          {/* 10. Approval, Signature & Publication Record */}
          <section
            id="approval-publication"
            data-section-id="approval-publication"
            ref={registerRef("approval-publication")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Approval, Signature & Publication Record</SectionHeading>
            <DataTable table={APPROVAL_TABLE} />
          </section>

          {/* 11. Previous Statements Archive */}
          <section
            id="previous-statements"
            data-section-id="previous-statements"
            ref={registerRef("previous-statements")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Previous Statements Archive</SectionHeading>
            <ArchiveTable />
          </section>

          {/* 12. Related Policies & Resources */}
          <section
            id="related-policies"
            data-section-id="related-policies"
            ref={registerRef("related-policies")}
            className="scroll-mt-24 pt-12"
          >
            <SectionHeading>Related Policies & Resources</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {RELATED_LINKS.map((label) => (
                <LinkChip key={label} label={label} />
              ))}
            </div>
          </section>

          {/* 13. Frequently Asked Questions */}
          <section
            id="faq"
            data-section-id="faq"
            ref={registerRef("faq")}
            className="scroll-mt-24 pt-12"
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
