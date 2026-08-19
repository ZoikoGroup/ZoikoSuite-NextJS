"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface LayerCard {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const layers: LayerCard[] = [
  {
    number: "01",
    title: "SOURCE SYSTEMS",
    description:
      "ERP / finance · HCM / payroll · banking / treasury · tax / filing · contract / legal · procurement · CRM / commerce · identity · data platforms · industry systems.",
    highlighted: false,
  },
  {
    number: "02",
    title: "INTEGRATION LAYER",
    description:
      "APIs · webhooks · files and batches · event streams · connectors · service identities · scopes · schema and version control · retries · reconciliation.",
    highlighted: false,
  },
  {
    number: "03",
    title: "ZOIKOSUITE LAYER",
    description:
      "Business operations graph · governance control plane · workflows and approvals · jurisdiction intelligence · evidence · governed AI · analytics and reporting.",
    highlighted: true,
  },
  {
    number: "04",
    title: "GOVERNED OUTPUTS",
    description:
      "Decision records · evidence manifests · obligations · exceptions · reporting — authoritative inside ZoikoSuite.",
    highlighted: true,
  },
];

const dataOwnershipTags = [
  "Authoritative source",
  "Replicated / reference",
  "Derived context",
  "Decision record",
  "Evidence package",
  "Reporting output",
];

const securityControlTags = [
  "Identity federation",
  "Role mapping",
  "Service identity",
  "Least privilege",
  "Secrets and keys",
  "Network boundary",
  "Audit",
];

export default function CoexistenceArchitectureSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: Title Left, Subtext Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Main Title */}
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
                COEXISTENCE ARCHITECTURE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
              Designed to work with your systems, not around them
            </h2>
          </motion.div>

          {/* Right Column: Subtext Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed font-normal">
              Four layers. ZoikoSuite becomes authoritative for governance
              decisions and evidence &mdash; not for every record in the estate.
            </p>
          </motion.div>
        </div>

        {/* Main Section Content: Left Architecture Controls + Right Layer Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Architecture Layer Cards, Tags & CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col space-y-8"
          >
            {/* 4 Layer Cards Stack */}
            <div className="space-y-3">
              {layers.map((layer) => (
                <div
                  key={layer.number}
                  className={`w-full rounded-[10px] px-8 py-8 sm:px-10 sm:py-9 md:px-8 md:py-8 flex flex-col md:flex-row items-start gap-6 md:gap-8 ${
                    layer.number === "03" || layer.number === "04"
                      ? "bg-[#0F476A] border border-[#0F476A]"
                      : "bg-white border border-[#D5DEE3]"
                  }`}
                >
                  {/* Left: Number + Title */}
                  <div className="w-full md:w-[44%] shrink-0">
                    <div
                      className={`flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase ${
                        layer.number === "03" || layer.number === "04"
                          ? "text-[#C5A059]"
                          : "text-[#0F476A]"
                      }`}
                    >
                      <span>{layer.number}</span>
                      <span>·</span>
                      <span>{layer.title}</span>
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className="w-full md:w-[56%]">
                    <p
                      className={`text-sm leading-[1.5] font-normal ${
                        layer.number === "03" || layer.number === "04"
                          ? "text-[#CBD5E1]"
                          : "text-[#5C7080]"
                      }`}
                    >
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Data Ownership Vocabulary */}
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-widest text-[#818CF8]">
                DATA OWNERSHIP VOCABULARY
              </span>
              <div className="flex flex-wrap gap-2">
                {dataOwnershipTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-md bg-white text-[#0F172A] text-xs font-mono font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Security Controls */}
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-widest text-[#818CF8]">
                SECURITY CONTROLS
              </span>
              <div className="flex flex-wrap gap-2">
                {securityControlTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-md bg-white text-[#0F172A] text-xs font-mono font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Gold CTA Button */}
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C59B27] hover:bg-[#B38B20] text-[#08222F] text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 shadow-md"
              >
                Talk to a solutions architect
                <ArrowRight className="w-4 h-4 text-[#08222F]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Image Container with NO outer div styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div>
              <img
                src="/not-an-erp/6.png"
                alt="4-layer 3D architectural graphic showing source systems, integration layer, ZoikoSuite layer, and governed outputs"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
