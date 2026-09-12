"use client";

import React from "react";
import { motion } from "framer-motion";

interface FailureStateCard {
  title: string;
  description: string;
}

const failureStates: FailureStateCard[] = [
  {
    title: "Delayed",
    description: "Received later than expected; alert threshold exceeded",
  },
  {
    title: "Duplicate",
    description: "Identical idempotency key received twice",
  },
  {
    title: "Out of order",
    description: "Sequence number preceding previous",
  },
  {
    title: "Malformed",
    description: "Payload violates schema validation",
  },
  {
    title: "Schema mismatch",
    description: "Producer version does not match consumer expectation",
  },
  {
    title: "Partial",
    description: "Segmented payload where secondary part failed",
  },
  {
    title: "Policy pending",
    description: "Event intercepted; evaluated by security gate",
  },
  {
    title: "Refused",
    description: "Failure flag active; event quarantined permanently",
  },
];

export default function DataAndEventArchitectureSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#12364c]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                DATA AND EVENT ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Version, time, producer and failure — on every event
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed">
              Event time and received time are separate fields because they are
              separate facts. Conflating them hides exactly the problems this
              architecture exists to expose.
            </p>
          </motion.div>
        </div>

        {/* Event Record Terminal Window Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col mb-8"
        >
          {/* Top Bar */}
          <div className="bg-[#051620] px-4 py-3 flex items-center justify-between border-b border-[#12364c]">
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#7ea0b5] uppercase">
                Event record
              </span>
              <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold tracking-wider bg-[#FDF2D6] text-amber-900 border border-[#E8C882]">
                ILLUSTRATIVE — FICTITIOUS DATA
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400">
              ACT-081 · EVT-1081
            </span>
          </div>

          {/* Inner Content Card (2 Columns) */}
          <div className="bg-white text-slate-900 p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column: IDENTITY AND PROVENANCE */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                IDENTITY AND PROVENANCE
              </span>
              <div className="space-y-2 text-[11.5px]">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Type:</span>
                  <span className="font-mono text-slate-900 font-semibold">supplier.bank_detail.change.requested</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Version:</span>
                  <span className="font-mono text-slate-700">v3 · schema:ev3-001</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Producer:</span>
                  <span className="font-mono text-slate-700">procuregen.purchasing</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Entity / Jurisdiction:</span>
                  <span className="text-slate-700">UK01-GB · United Kingdom</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Action reference:</span>
                  <span className="text-slate-700">ACT-081 · Northstar UK Ltd</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Subject:</span>
                  <span className="text-slate-700">Creditor account change</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Correlation ID:</span>
                  <span className="font-mono text-slate-600">c81-8f921-bcf34</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Idempotency key:</span>
                  <span className="font-mono text-slate-600">idem-7290141</span>
                </div>
              </div>
            </div>

            {/* Right Column: TIME, DELIVERY AND ENVELOPE */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                TIME, DELIVERY AND ENVELOPE
              </span>
              <div className="space-y-2 text-[11.5px]">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Event time:</span>
                  <span className="font-mono text-slate-700">2024-08-12 14:18:02.108Z · Primary source timestamp</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Received time:</span>
                  <span className="font-mono text-slate-700">2024-08-12 14:18:04.912Z · Ingestion timestamp (+2.8s)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Sequence number:</span>
                  <span className="font-mono text-slate-700">12984120</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Partition key:</span>
                  <span className="font-mono text-slate-700">supplier-890214-GB</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Envelope state:</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ● DELIVERED
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Delivery state:</span>
                  <span className="text-slate-700">Single delivery verified</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Failure flag:</span>
                  <span className="text-slate-700">None recorded</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-mono text-slate-500 w-36 shrink-0">Trace ID:</span>
                  <span className="font-mono text-slate-600">trace-891-bcf-10901-44</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Eight Failure States Grid */}
        <div className="flex flex-col space-y-2.5">
          <span className="text-[10px] font-mono tracking-wider text-[#7ea0b5] uppercase font-semibold">
            EIGHT FAILURE STATES, WITH A DEFAULT REFUSAL
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {failureStates.map((state, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-xl border border-slate-200/80 bg-white p-3.5 flex flex-col justify-between shadow-xs"
              >
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">
                  {state.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {state.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile-only Red Alert Callout (lg:hidden) */}
        <div className="mt-8 rounded-xl border border-rose-900/60 bg-rose-950/40 p-4 flex flex-col space-y-2.5 lg:hidden">
          <span className="text-[10px] font-mono font-bold tracking-wider text-rose-300 uppercase">
            GUARANTEE IN PRACTICE
          </span>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Real-time",
              "Near real-time",
              "One-by-one",
              "Delayed delivery",
              "Guaranteed delivery",
              "Replay window",
              "Idempotency",
              "Latency",
            ].map((pill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[9.5px] font-mono font-medium bg-[#1a0f14] text-rose-300 border border-rose-900/80 shadow-2xs"
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="text-xs text-rose-200/90 leading-relaxed pt-1">
            Exact telemetry cadence and payload specifics depend on individual participating systems and approved execution policy on this page: Public pages display only synthetic illustrations and data-shape summaries — never live active values.
          </p>
        </div>
      </div>
    </section>
  );
}
