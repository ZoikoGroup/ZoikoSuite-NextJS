import {
  IndustriesSection,
  IndustryDirectorySection,
  OperatingContextSection,
  CrossIndustryComparisonSection,
  FinancialServicesClusterSection,
  IndustryOperatingContextSection,
  SharedGovernanceArchitectureSection,
  CoverageResidencySection,
  EvidenceTrustValidationSection,
  IntegrationAndCoexistenceSection,
  IndustryResourcesSection,
  YourNextStepSection,
  FaqSection,
} from "@/components/industries";

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesSection />
      <IndustryDirectorySection />
      <OperatingContextSection />
      <CrossIndustryComparisonSection />
      <FinancialServicesClusterSection />
      <IndustryOperatingContextSection />
      <SharedGovernanceArchitectureSection />
      <CoverageResidencySection />
      <EvidenceTrustValidationSection />
      <IntegrationAndCoexistenceSection />
      <IndustryResourcesSection />
      <YourNextStepSection />
      <FaqSection />
    </main>
  );
}
