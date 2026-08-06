"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DeploymentOption {
  option: string;
  title: string;
  description: string;
  statusText: string;
  statusClass: string;
}

interface LifecycleDataRow {
  class: string;
  regionTenancy: string;
  retention: string;
  adminAccess: string;
  exportRestriction: string;
  isRestricted?: boolean;
}

const deploymentOptions: DeploymentOption[] = [
  {
    option: "Option 01",
    title: "Regional hosting",
    description: "Lifecycle processing and storage in a selected region.",
    statusText: "AVAILABLE",
    statusClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  {
    option: "Option 02",
    title: "Dedicated private cloud",
    description: "Isolated tenancy with enhanced operational controls.",
    statusText: "AVAILABLE",
    statusClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  {
    option: "Option 03",
    title: "Enterprise single-tenant",
    description: "Dedicated workload and data infrastructure.",
    statusText: "CONFIGURATION REQUIRED",
    statusClass: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  },
  {
    option: "Option 04",
    title: "Sovereign deployment",
    description: "Region-restricted operations, administration, and support.",
    statusText: "MARKET DEPENDENT",
    statusClass: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    option: "Option 05",
    title: "On-premise deployment",
    description: "Customer-operated infrastructure within their own boundary.",
    statusText: "SECURITY REVIEW REQUIRED",
    statusClass: "bg-slate-500/10 text-slate-700 border-slate-500/20",
  },
  {
    option: "Option 06",
    title: "Key control options",
    description: "Platform-managed, BYOK, HYOK, or customer-controlled keys.",
    statusText: "VERIFIED PER DEPLOYMENT",
    statusClass: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  },
];

const lifecycleTableData: LifecycleDataRow[] = [
  {
    class: "Source content",
    regionTenancy: "Selected region · tenant-isolated",
    retention: "Per retention class",
    adminAccess: "None by default; break-glass audited",
    exportRestriction: "Permission and scope controlled",
  },
  {
    class: "Action metadata",
    regionTenancy: "Selected region",
    retention: "Life of the action + retention class",
    adminAccess: "Scoped support access with approval",
    exportRestriction: "Standard export",
  },
  {
    class: "Policy & control data",
    regionTenancy: "Selected region",
    retention: "Versioned indefinitely",
    adminAccess: "Control owners only",
    exportRestriction: "Control summary export",
  },
  {
    class: "Identity & authority data",
    regionTenancy: "Selected region · encrypted",
    retention: "Per identity policy",
    adminAccess: "Administration role only",
    exportRestriction: "RESTRICTED",
    isRestricted: true,
  },
  {
    class: "Evidence",
    regionTenancy: "Selected region · integrity chained",
    retention: "Retention class · legal hold",
    adminAccess: "Evidence custodian; no silent deletion",
    exportRestriction: "Evidence package with receipt",
  },
  {
    class: "AI inputs & outputs",
    regionTenancy: "Selected region · classification-gated",
    retention: "Configurable AI log retention",
    adminAccess: "Logged; no training on customer data by default",
    exportRestriction: "AI event export",
  },
  {
    class: "Event logs",
    regionTenancy: "Selected region",
    retention: "Configurable",
    adminAccess: "Platform operations, scoped",
    exportRestriction: "Event log export",
  },
  {
    class: "Analytics",
    regionTenancy: "Selected region · aggregated",
    retention: "Configurable",
    adminAccess: "Role-aware views",
    exportRestriction: "No individual productivity export",
  },
  {
    class: "Exports",
    regionTenancy: "Generated in region",
    retention: "Export receipt retained",
    adminAccess: "Requester scope recorded",
    exportRestriction: "Scope, purpose, and exclusions recorded",
  },
];

export default function DeploymentPrivacySection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
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
                  Deployment, privacy, and data boundaries
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Apply the lifecycle within approved deployment and data
                boundaries
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Nine lifecycle data classes, each with its own residency,
                retention, and access treatment. Unavailable options stay
                visible with a reason.
              </p>
            </motion.div>
          </div>

          {/* Deployment Options Grid (6 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {deploymentOptions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                className="bg-white border border-[#CFDEE7] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
                    {item.option}
                  </span>
                  <h3 className="text-[#0f172a] font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-wider border ${item.statusClass}`}
                  >
                    {item.statusText}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lifecycle Data Classes Table Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full overflow-x-auto rounded-2xl border border-[#CFDEE7] bg-white mb-12 shadow-sm"
          >
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#F4F7F9] border-b border-[#E8EFF4] text-[10px] uppercase tracking-widest text-[#5A6D79]">
                  <th className="py-4 px-6 font-semibold">
                    Lifecycle Data Class
                  </th>
                  <th className="py-4 px-6 font-semibold">Region & Tenancy</th>
                  <th className="py-4 px-6 font-semibold">Retention</th>
                  <th className="py-4 px-6 font-semibold">
                    Administrative Access
                  </th>
                  <th className="py-4 px-6 font-semibold">
                    Export Restriction
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EFF4] text-xs sm:text-sm text-[#64748b]">
                {lifecycleTableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F7F5F0]/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-[#0f172a]">
                      {row.class}
                    </td>
                    <td className="py-4 px-6">{row.regionTenancy}</td>
                    <td className="py-4 px-6">{row.retention}</td>
                    <td className="py-4 px-6">{row.adminAccess}</td>
                    <td className="py-4 px-6">
                      {row.isRestricted ? (
                        <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold tracking-wider bg-amber-500/10 text-amber-600 border border-amber-500/20">
                          {row.exportRestriction}
                        </span>
                      ) : (
                        row.exportRestriction
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Two Principle Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-white border border-[#CFDEE7] rounded-2xl p-8 shadow-sm"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
                Privacy principle
              </span>
              <h4 className="text-[#0f172a] font-bold text-base sm:text-lg mb-3">
                Purpose limitation and least privilege
              </h4>
              <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed">
                A role does not see a lifecycle data class because it can see
                the action. Workforce data stays inside workforce purposes;
                commercial data stays inside commercial purposes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="bg-white border border-[#CFDEE7] rounded-2xl p-8 shadow-sm"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
                Privacy principle
              </span>
              <h4 className="text-[#0f172a] font-bold text-base sm:text-lg mb-3">
                No surveillance framing
              </h4>
              <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed">
                The platform measures actions, controls, and evidence — not
                individuals. There is no productivity score, behavior metric, or
                hidden monitoring anywhere in the lifecycle.
              </p>
            </motion.div>
          </div>

          {/* Bottom Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center w-full mb-8"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#b08d4b] transition-all duration-200 shadow-lg shadow-[#c5a059]/20"
            >
              View deployment options
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </motion.div>

          {/* Bottom Disclaimer Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            className="p-4 max-w-xl border-l-4 border-l-[#D0AA55] text-xs text-[#64748b] leading-relaxed"
          >
            Deployment, residency, key management, recovery, and feature
            availability vary by market, subscription, configuration, and
            implementation status.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
