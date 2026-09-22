import React from "react";

export default function CaseStudyContent() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col space-y-8">
        {/* Challenge Section */}
        <div>
          <h3 className="text-[#111827] font-semibold text-lg mb-2">
            Challenge
          </h3>
          <p className="text-[#374151] text-base leading-relaxed">
            Before adopting ZoikoSuite, the compliance team assembled audit
            evidence manually from spreadsheets, email threads, and disconnected
            systems each quarter — a process the customer described as their
            biggest source of audit-season overtime.
          </p>
        </div>

        {/* Approach Section */}
        <div>
          <h3 className="text-[#111827] font-semibold text-lg mb-2">
            Approach
          </h3>
          <p className="text-[#374151] text-base leading-relaxed">
            The team implemented a governed policy registry with control
            mappings and connected evidence manifests, replacing manual evidence
            collection with a source-of-truth record that auditors could review
            directly.
          </p>
        </div>

        {/* Implementation Section */}
        <div>
          <h3 className="text-[#111827] font-semibold text-lg mb-2">
            Implementation
          </h3>
          <p className="text-[#374151] text-base leading-relaxed">
            Rollout began with a pilot across the Compliance and Internal Audit
            functions before expanding to Security and Privacy over a
            two-quarter period. Approval matrices were configured per policy
            class during initial setup.
          </p>
        </div>
      </div>
    </section>
  );
}
