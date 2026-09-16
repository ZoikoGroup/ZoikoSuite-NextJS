import {
  EnergyUtilitiesOperationsSection,
  OperatingContextSection,
  EnergyUtilitiesScopeNoticeSection,
  BusinessLayerProblemSection,
  SiteContextSection,
  RegulatoryObligationsAndEvidenceSection,
  ContractorGovernanceSection,
  CapitalProjectAndSpendGovernanceSection,
  ChangeExceptionAndIncidentGovernanceSection,
  IntegrationsSection,
  OtSecurityBoundarySection,
  GovernedAiSection,
  EvidenceLadderSection,
  BookEnterpriseDemoContractorSection,
  FrequentlyAskedQuestionsSection,
} from "@/components/energy-utilities";

export default function EnergyUtilitiesPage() {
  return (
    <main>
      <EnergyUtilitiesOperationsSection />
      <OperatingContextSection />
      <EnergyUtilitiesScopeNoticeSection />
      <BusinessLayerProblemSection />
      <SiteContextSection />
      <RegulatoryObligationsAndEvidenceSection />
      <ContractorGovernanceSection />
      <CapitalProjectAndSpendGovernanceSection />
      <ChangeExceptionAndIncidentGovernanceSection />
      <IntegrationsSection />
      <OtSecurityBoundarySection />
      <GovernedAiSection />
      <EvidenceLadderSection />
      <BookEnterpriseDemoContractorSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  );
}
