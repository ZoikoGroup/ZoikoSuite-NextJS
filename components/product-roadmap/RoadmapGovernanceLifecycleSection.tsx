"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Stage {
  id: string;
  stageNumber: string;
  title: string;
  description: string;
  requiredArtifacts: string[];
  decisionOwner: string;
  exitCriteria: string[];
}

const stages: Stage[] = [
  {
    id: "stage-01",
    stageNumber: "STAGE 01",
    title: "Capture",
    description:
      "Structured problem, affected workflow, evidence source, users, business impact, regions, dependencies, confidentiality.",
    requiredArtifacts: [
      "Structured problem statement",
      "Named evidence source",
      "Affected workflow and users",
      "Confidentiality classification",
    ],
    decisionOwner:
      "Product intake owner, with security and privacy classification support.",
    exitCriteria: [
      "Problem is understood and not a duplicate",
      "Evidence source is identified and attributable",
      "Confidentiality level is assigned",
    ],
  },
  {
    id: "stage-02",
    stageNumber: "STAGE 02",
    title: "Triage",
    description:
      "Duplicate and theme mapping, security and privacy classification, support impact, strategic relevance, evidence sufficiency.",
    requiredArtifacts: [
      "Theme and duplicate mapping record",
      "Impact assessment score",
      "Initial triage rationale",
    ],
    decisionOwner: "Triage lead & Product Management.",
    exitCriteria: [
      "No unresolved duplicate claims remain",
      "Sufficient evidence score reached",
      "Classification signed off",
    ],
  },
  {
    id: "stage-03",
    stageNumber: "STAGE 03",
    title: "Discovery",
    description:
      "User research, workflow analysis, authoritative data, object model, policies, jurisdiction and current-system constraints.",
    requiredArtifacts: [
      "User research synthesis",
      "Workflow & data model schema",
      "Jurisdictional constraint log",
    ],
    decisionOwner: "Lead Product Designer & Architect.",
    exitCriteria: [
      "Problem context fully mapped",
      "Technical & regulatory boundaries accepted",
    ],
  },
  {
    id: "stage-04",
    stageNumber: "STAGE 04",
    title: "Validation",
    description:
      "Problem and outcome validation, strategic fit, architecture feasibility, risk, accessibility, implementation and operational evidence.",
    requiredArtifacts: [
      "Feasibility and risk assessment",
      "Strategic fit score",
      "Operational evidence log",
    ],
    decisionOwner: "Product Steering Committee.",
    exitCriteria: [
      "Architecture feasibility verified",
      "Risk assessment complete and signed off",
    ],
  },
  {
    id: "stage-05",
    stageNumber: "STAGE 05",
    title: "Design",
    description:
      "UX, data, control, API and event, permission, evidence, localization, migration and support requirements.",
    requiredArtifacts: [
      "High-fidelity specs & API specs",
      "Permission matrix",
      "Migration & support plan",
    ],
    decisionOwner: "Design & Engineering Leads.",
    exitCriteria: [
      "API & permission specifications approved",
      "Accessibility design sign-off",
    ],
  },
  {
    id: "stage-06",
    stageNumber: "STAGE 06",
    title: "Build and verify",
    description:
      "Implementation, testing, security, privacy, accessibility, performance, migration, documentation and observability.",
    requiredArtifacts: [
      "Code repository & test reports",
      "Security & accessibility scan results",
      "Observability dashboard configuration",
    ],
    decisionOwner: "Engineering Lead & QA Lead.",
    exitCriteria: [
      "All automated tests passing",
      "Zero high-severity security vulnerabilities",
      "Docs complete",
    ],
  },
  {
    id: "stage-07",
    stageNumber: "STAGE 07",
    title: "Controlled availability",
    description:
      "Pilot or limited release with entry criteria, consent or contract, support, metrics, rollback and exit decision.",
    requiredArtifacts: [
      "Pilot group consent & contract",
      "Rollback playbook",
      "Early feedback metrics",
    ],
    decisionOwner: "Release Gatekeeper & Product Ops.",
    exitCriteria: [
      "Success metrics achieved in pilot group",
      "Rollback plan validated without errors",
    ],
  },
  {
    id: "stage-08",
    stageNumber: "STAGE 08",
    title: "Release",
    description:
      "Approved availability, release notes, documentation, support readiness, admin actions, migration and public history.",
    requiredArtifacts: [
      "Published release notes & docs",
      "Support team readiness confirmation",
      "Migration tools deployment",
    ],
    decisionOwner: "VP of Product & Engineering.",
    exitCriteria: [
      "Public history record finalized",
      "Support & enablement active globally",
    ],
  },
  {
    id: "stage-09",
    stageNumber: "STAGE 09",
    title: "Post-release review",
    description:
      "Adoption, quality, incidents, accessibility, support, evidence, deprecation and improvement review.",
    requiredArtifacts: [
      "Adoption & telemetry report",
      "Incident & ticket summary",
      "Deprecation / enhancement roadmap update",
    ],
    decisionOwner: "Product Manager & Quality Lead.",
    exitCriteria: [
      "Post-mortem review complete",
      "Follow-up items logged into Stage 01",
    ],
  },
];

export default function RoadmapGovernanceLifecycleSection() {
  const [selectedStageId, setSelectedStageId] = useState<string>("stage-01");

  const activeStage = stages.find((s) => s.id === selectedStageId) || stages[0];

  return (
    <section className="w-full bg-[#08222F] text-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                ROADMAP GOVERNANCE LIFECYCLE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
              Nine stages from evidence to released outcome
            </h2>
          </motion.div>

          {/* Right Column: Subtitle / Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed font-normal">
              Select a stage to see its required artifacts, decision owner, and
              exit criteria. No stage advances automatically or on a score
              alone.
            </p>
          </motion.div>
        </div>

        {/* 9 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {stages.map((stage) => {
            const isSelected = stage.id === selectedStageId;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedStageId(stage.id)}
                className={`bg-white rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col space-y-3 text-[#0F172A] ${
                  isSelected
                    ? ""
                    : "hover:opacity-95 opacity-90"
                }`}
              >
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#c5a059] uppercase block">
                  {stage.stageNumber}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                  {stage.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Stage */}
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl p-6 sm:p-8 text-[#0F172A] grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-sm"
        >
          {/* Required Artifacts Column */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#94A3B8] uppercase block">
              REQUIRED ARTIFACTS
            </span>
            <ul className="space-y-2">
              {activeStage.requiredArtifacts.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[#475569] leading-relaxed"
                >
                  <span className="text-[#c5a059] font-bold text-sm">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decision Owner Column */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#94A3B8] uppercase block">
              DECISION OWNER
            </span>
            <p className="text-xs sm:text-sm text-[#38BDF8] leading-relaxed font-medium">
              {activeStage.decisionOwner}
            </p>
          </div>

          {/* Exit Criteria Column */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#94A3B8] uppercase block">
              EXIT CRITERIA
            </span>
            <ul className="space-y-2">
              {activeStage.exitCriteria.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[#475569] leading-relaxed"
                >
                  <span className="text-[#c5a059] font-bold text-sm">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
