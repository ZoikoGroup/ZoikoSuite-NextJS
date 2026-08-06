"use client";

import React from "react";
import { motion } from "framer-motion";

interface StageItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const stagesData: StageItem[] = [
  {
    number: "Stage 01",
    title: "Capture",
    description:
      "An AP ledger event and a contract amendment arrive within four minutes of each other. A correlation ID links both sources to one governed action; the duplicate signal is linked rather than executed twice.",
    tags: ["SIG-2026-77213", "SIG-2026-77198 Linked", "COR-2026-31408"],
  },
  {
    number: "Stage 02",
    title: "Context",
    description:
      "Entity resolves to Zoiko Europe Ltd; function to Accounts Payable; classification to confidential commercial. Jurisdiction conflicts — the entity is UK-domiciled but the contract is administered under US parent terms. Legal selects the governing jurisdiction rather than the system guessing.",
    tags: [
      "Zoiko Europe Ltd",
      "Conflict: UK vs US",
      "Resolved to UK by M. Osei",
    ],
  },
  {
    number: "Stage 03",
    title: "Governance",
    description:
      "Six controls apply. The amount exceeds the local approver limit of £200,000. Contract obligation CO-2214 requires legal review of the amended terms. Segregation prevents the preparer from approving. Evidence rules require the amendment plus supplier verification.",
    tags: [
      "Limit exceeded",
      "Legal review required",
      "SoD block",
      "2 evidence items missing",
    ],
  },
  {
    number: "Stage 04",
    title: "Proposal",
    description:
      "The proposal shows three changed fields — amount, payment date, and creditor bank account — with reasons and sources. The bank-account change is flagged high risk and evidenced only by an email. Missing tax validation is shown, not hidden.",
    tags: ["£180,000 -> £245,000", "Bank account changed", "x3 draft"],
  },
  {
    number: "Stage 05",
    title: "Responsibility",
    description:
      "AP preparer, AP manager as reviewer, General Counsel delegate for legal confirmation, Treasury Director as approver, a payment service identity as executor, and a compliance observer. The AP manager can review but cannot approve.",
    tags: [
      "T. Cross - preparer",
      "M. Adeyemi - reviewer",
      "R. Vance - approver",
      "ssc-bank-B2 - executor",
    ],
  },
  {
    number: "Stage 06",
    title: "Authorization",
    description:
      "Legal confirms the amendment at 15:04. Treasury first requests evidence rather than approving — the bank-change call-back record is missing. AP completes verification and tax validation. Treasury then approves version 4 at 15:22.",
    tags: [
      "DEC-88410 evidence requested",
      "DEC-88435 legal confirmed",
      "DEC-88451 approved",
    ],
  },
  {
    number: "Stage 07",
    title: "Execution",
    description:
      "The instruction is sent through the permitted bank connector using the authorized version and an idempotency key. A gateway timeout triggers a retry on the same key; the duplicate is prevented. The gateway acknowledges, then read-back shows a settlement date three days later than authorized.",
    tags: [
      "sve-bank-B2",
      "Duplicate prevented",
      "SEPA-9920149",
      "Variance opened",
    ],
  },
  {
    number: "Stage 08",
    title: "Evidence",
    description:
      "The manifest links the amendment, call-back verification, tax validation, all three decisions, the policy sources, the payment instruction, the acknowledgement, and the before and after values. One restricted source is excluded from the audit export and labelled as excluded.",
    tags: ["EVM-2026-11588", "8 timeline events", "EXP-2026-03144"],
  },
  {
    number: "Stage 09",
    title: "Monitoring",
    description:
      "Settlement confirmation is tracked to 11 August. The value-date variance stays open with Treasury as owner. The bank-change control fires for the third time this quarter, so Compliance raises a configuration improvement proposal — which requires an authorized owner, testing, and approval before it changes anything.",
    tags: [
      "Obligation open",
      "Variance investigating",
      "Recurring exception",
      "Change proposal - not approved",
    ],
  },
];

export default function EndToEndExampleSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Old Eyebrow Style (with line) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  End-to-end example
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white">
                Cross-border vendor payment change
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed">
                A UK entity proposes changing a vendor payment from £180,000 to
                £245,000 under a supplier contract administered by the US parent
                group. One action, nine stages, three human decisions, two
                exceptions.
              </p>
            </motion.div>
          </div>

          {/* Stages List / Timeline */}
          <div className="flex flex-col space-y-12 mb-16 border-l border-[#1e293b] pl-6 sm:pl-8 ml-2 sm:ml-4">
            {stagesData.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                className="relative flex flex-col"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#0F476A] border-2 border-[#07131d]" />

                {/* Stage Header Info */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold tracking-wider text-[#c5a059] uppercase">
                    {stage.number}
                  </span>
                  <span className="text-white font-semibold text-base sm:text-lg">
                    {stage.title}
                  </span>
                </div>

                {/* Stage Description */}
                <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {stage.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-[#10303F] text-[#BFD6E3] border border-[#20465A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="pt-6 border-l-3 border-l-[#D0AA55] p-4 text-[13px] text-[#93AEBD] max-w-xl leading-relaxed"
          >
            Illustrative scenario only. Actual controls, integrations,
            jurisdiction coverage, and professional review depend on
            configuration and market availability. Nothing in this example
            implies automated legal, tax, or banking authorization.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
