import {
  ComplianceOverview,
  ComplianceOperatingModel,
  ComplianceRegistrySection,
  JurisdictionCoverageSection,
  ControlMappingSection,
  EvidenceAuditReadiness,
  PolicyExceptionGovernance,
  AssuranceTrustDomains,
  ProcurementComplianceReview,
  SolutionsArchitectSection,
  FAQSection,
} from "@/components/compliance-overview";

export default function ComplianceOverviewPage() {
  return (
    <main>
      <ComplianceOverview />
      <ComplianceOperatingModel />
      <ComplianceRegistrySection />
      <JurisdictionCoverageSection />
      <ControlMappingSection />
      <EvidenceAuditReadiness />
      <PolicyExceptionGovernance />
      <AssuranceTrustDomains />
      <ProcurementComplianceReview />
      <SolutionsArchitectSection />
      <FAQSection />
    </main>
  );
}
