"use client";

import React from "react";
import { motion } from "framer-motion";

const threatControls = [
  {
    title: "Direct Prompt Injection",
    vector:
      "User attempts to override prompt system constraints inside analysis logs.",
    control:
      "System instructions locked at API level. Inputs wrapped in strict semantic XML boundaries.",
  },
  {
    title: "Indirect Prompt Injection",
    vector:
      "Malicious payloads hidden inside ingested EDR host process or file telemetry.",
    control:
      "Telemetry context parsed deterministically as key-value JSON. No executive evaluations allowed.",
  },
  {
    title: "PII & Key Leakage",
    vector:
      "Model accidentally leaks administrative secrets or private user identifiers.",
    control:
      "Pre-flight scrubbing checks and outbound regex checks block unauthorized secrets.",
  },
  {
    title: "Tool Abuse / Privilege Overreach",
    vector:
      "AI suggests administrative write commands beyond the operator's current permission scope.",
    control:
      "Suggested commands compared to caller's JWT scope at the API gateway boundary. Auto-blocks.",
  },
  {
    title: "Bad Telemetry Poisoning",
    vector:
      "Host injects high frequency fake logs to skew baseline anomaly calculations.",
    control:
      "Cryptographically signed EDR telemetry validation ensures source host origin is authentic.",
  },
  {
    title: "Outage & Quota Limits",
    vector:
      "Model endpoint returns 429 quota exhaustion or suffers regional US East downtime.",
    control:
      "Instant failover to local fallback parsers. System degrades gracefully to read-only.",
  },
];

export default function ResponsibleAiSecurityAbuseSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              THREAT MITIGATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            AI Security & Abuse Controls
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            How we defend the AI helper pipeline against direct exploitation, indirect manipulation,
            and model-level vulnerabilities.
          </p>
        </div>

        {/* Threat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {threatControls.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col gap-4 hover:shadow-md transition-all"
            >
              <h3 className="text-base sm:text-lg font-extrabold text-[#0A2029]">
                {item.title}
              </h3>

              {/* Attack Vector */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] font-bold text-[#A43737] uppercase tracking-wider">
                  ATTACK VECTOR
                </span>
                <p className="text-xs text-[#5B6670] leading-relaxed">
                  {item.vector}
                </p>
              </div>

              {/* Mitigation Control */}
              <div className="flex flex-col gap-1 pt-2 border-t border-[#123B4C]/10">
                <span className="font-mono text-[11px] font-bold text-[#1F7A6C] uppercase tracking-wider">
                  MITIGATION CONTROL
                </span>
                <p className="text-xs text-[#4E668A] leading-relaxed">
                  {item.control}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
