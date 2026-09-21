import {
  TrustPoliciesHeroSection,
  GovernanceModelSection,
  PolicyRegistrySection,
  EmptyStatePatternSection,
  RecordDetailSection,
  PolicyLifecycleSection,
  ApplicabilitySection,
  EvidenceModelSection,
  ExceptionsSection,
  RestrictedEvidenceSection,
  LegalBoundarySection,
  ChangeHistorySection,
  FaqSection,
} from "@/components/trust-policies";

export const metadata = {
  title: "Policies | ZoikoSuite Trust Center",
  description:
    "Review ZoikoSuite policy governance through versioned records with ownership, approval, scope, effective dates, review status, change history, and controlled access to supporting evidence.",
};

export default function TrustPoliciesPage() {
  return (
    <main>
      <TrustPoliciesHeroSection />
      <GovernanceModelSection />
      <PolicyRegistrySection />
      <EmptyStatePatternSection />
      <RecordDetailSection />
      <PolicyLifecycleSection />
      <ApplicabilitySection />
      <EvidenceModelSection />
      <ExceptionsSection />
      <RestrictedEvidenceSection />
      <LegalBoundarySection />
      <ChangeHistorySection />
      <FaqSection />
    </main>
  );
}
