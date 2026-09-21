"use client";

import React from "react";

interface LifecycleItem {
  title: string;
  description: string;
  statusBadge: string;
  statusBgClass: string;
  statusTextClass: string;
  statusBorderClass: string;
}

const lifecycleItems: LifecycleItem[] = [
  {
    title: "Live data deletion",
    description:
      "Executed against the primary store on a governed request, with approval and scope recorded.",
    statusBadge: "IMPLEMENTED",
    statusBgClass: "bg-[#EBF3F9]",
    statusTextClass: "text-[#0F476A]",
    statusBorderClass: "border-[#D1E4F2]",
  },
  {
    title: "Backup expiry",
    description:
      "Copies in backup persist until the backup retention window elapses. The window is stated per deployment.",
    statusBadge: "BY DEPLOYMENT",
    statusBgClass: "bg-[#F3EBF9]",
    statusTextClass: "text-[#6A0F47]",
    statusBorderClass: "border-[#E4D1F2]",
  },
  {
    title: "Replica propagation",
    description:
      "Deletion propagates to replicas on the configured schedule, not instantaneously.",
    statusBadge: "ARCHITECTURE TARGET",
    statusBgClass: "bg-[#EBF9F5]",
    statusTextClass: "text-[#0F6A47]",
    statusBorderClass: "border-[#D1F2E4]",
  },
  {
    title: "Archive",
    description:
      "Archived records follow their own retention reference and are not covered by a live deletion.",
    statusBadge: "ARCHITECTURE TARGET",
    statusBgClass: "bg-[#EBF9F5]",
    statusTextClass: "text-[#0F6A47]",
    statusBorderClass: "border-[#D1F2E4]",
  },
  {
    title: "Legal hold interaction",
    description:
      "An active hold blocks deletion. Privacy Architecture owns the conflict-resolution workflow.",
    statusBadge: "IMPLEMENTED",
    statusBgClass: "bg-[#EBF3F9]",
    statusTextClass: "text-[#0F476A]",
    statusBorderClass: "border-[#D1E4F2]",
  },
  {
    title: "Deletion evidence",
    description:
      "Job result, approval, object scope, timestamp and integrity reference retained.",
    statusBadge: "PHASED DELIVERY",
    statusBgClass: "bg-[#F9F5EB]",
    statusTextClass: "text-[#6A470F]",
    statusBorderClass: "border-[#F2E4D1]",
  },
];

export default function LifecycleRetentionSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                LIFECYCLE, RETENTION AND DELETION
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Deletion is not complete until backups expire
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              A deletion request against live data does not remove copies
              already written to backup. The expiry window is stated rather than
              glossed.
            </p>
          </div>
        </div>

        {/* List of Rows */}
        <div className="space-y-4">
          {lifecycleItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
              style={{
                borderLeft: "4px solid #0F476A",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center w-full">
                <div className="md:col-span-3">
                  <h3 className="text-sm font-bold text-[#111827]">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex md:justify-end">
                  <div
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg border ${item.statusBorderClass} ${item.statusBgClass}`}
                  >
                    <span
                      className={`text-[11px] font-mono font-bold tracking-wider ${item.statusTextClass}`}
                    >
                      {item.statusBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
