"use client";

const subprocessorItems = [
  "Maintained list with purpose and processing location per entry",
  "Change notification before a new subprocessor is engaged",
  "Objection window defined contractually, not here",
  "Diligence and review owner recorded per subprocessor",
];

const aiMayItems = [
  "Extract obligations, clauses and metadata with provenance",
  "Prioritize exceptions and reviews for a named human",
  "Detect anomalies against configured expectations",
  "Summarize a decision basis with its sources cited",
  "Operate on internal and confidential data within scope",
  "Produce output that a human reviews before it has effect",
];

const aiMayNotItems = [
  "Process restricted-class data in any AI path",
  "Access data outside the recorded processing purpose",
  "Make any autonomous material decision",
  "Alter source truth in any system of record",
  "Determine lawful basis, rights applicability or compliance",
  "Act on a data subject directly",
];

function StatusBadge({
  children,
  orange = false,
}: {
  children: React.ReactNode;
  orange?: boolean;
}) {
  return (
    <span
      className={`inline-flex rounded-sm border px-1.5 pt-0.5 pb-[3px] text-[8.5px] font-medium uppercase leading-3 tracking-wide ${
        orange
          ? "border-[#F3B6B6] bg-[#FDECEC] text-[#9F3030]"
          : "border-[#B7C7CC] bg-[#F0F3F3] text-[#49636B]"
      }`}
    >
      {children}
    </span>
  );
}

function GovernanceCard({
  title,
  items,
  badge,
  badgeOrange = false,
}: {
  title: string;
  items?: string[];
  badge: string;
  badgeOrange?: boolean;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#B7C7CC] bg-white p-6 sm:p-7">
      <div className="text-xs font-normal uppercase leading-5 tracking-wide text-[#5B7178]">
        {title}
      </div>

      {items ? (
        <div className="mt-5 pl-4">
          <ul className="space-y-2 text-sm font-normal leading-6 text-[#073B47]">
            {items.map((item) => (
              <li key={item} className="list-disc pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-5 text-sm font-normal leading-6 text-[#073B47]">
          The authoritative subprocessor list is owned by Policies, which is
          not yet published. Until it is, the current list is provided through
          an enterprise privacy review rather than posted here.
        </p>
      )}

      <div className="mt-auto pt-6">
        <StatusBadge orange={badgeOrange}>{badge}</StatusBadge>
      </div>
    </div>
  );
}

function AIBox({
  title,
  items,
  danger = false,
}: {
  title: string;
  items: string[];
  danger?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-[#DCEAEE] border-l-[3px] p-4 ${
        danger
          ? "border-l-[#D94A4A] bg-[#FFF8F8]"
          : "border-l-[#3B9B63] bg-[#F8FBF8]"
      }`}
    >
      <div
        className={`text-[9.5px] font-medium uppercase leading-4 tracking-wide ${
          danger ? "text-[#D94A4A]" : "text-[#3B9B63]"
        }`}
      >
        {title}
      </div>

      <div className="mt-3 space-y-[5px]">
        {items.map((item) => (
          <div key={item} className="relative pl-3.5">
            <span
              className={`absolute left-0 top-[7px] h-[5px] w-[5px] rounded-xs ${
                danger ? "bg-[#D94A4A]" : "bg-[#3B9B63]"
              }`}
            />

            <p
              className={`text-xs font-normal leading-5 ${
                danger ? "text-[#9F3030]" : "text-[#073B47]"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SubprocessorAI() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-4 lg:px-12">
          {/* Header */}
          <div className="flex w-full flex-col items-start">
            <div className="flex flex-col items-start gap-4 pt-2.5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <div className="h-[1.5px] w-4 bg-orange-400" />

                <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                  Subprocessors and AI privacy governance
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[850px] text-3xl font-semibold leading-tight text-[#073B47] sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
                Third-party accountability, and
                <br className="hidden sm:block" />
                what AI may touch
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-[#5B7178] sm:text-lg lg:text-xl lg:leading-8">
              Both are third-party data questions, and both need a claim-safe
              answer rather than a reassuring one.
            </p>
          </div>

          {/* Governance cards */}
          <div className="grid w-full grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:pt-8">
            <GovernanceCard
              title="Subprocessor model"
              items={subprocessorItems}
              badge="Implementation status required"
              badgeOrange
            />

            <GovernanceCard
              title="Where the list lives"
              badge="Policies destination not yet published"
            />
          </div>

          {/* AI governance */}
          <div className="grid w-full grid-cols-1 gap-4 pt-1 sm:grid-cols-2">
            <AIBox title="AI may — within recorded purpose" items={aiMayItems} />

            <AIBox title="AI may not" items={aiMayNotItems} danger />
          </div>
        </div>
      </div>
    </section>
  );
}