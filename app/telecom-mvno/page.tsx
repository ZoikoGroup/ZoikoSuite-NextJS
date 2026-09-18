import {
  TelecomOperationsSection,
  TelecomOperatingContextSection,
  TelecomScopeNoticeSection,
  TelecomBusinessLayerProblemSection,
  OperatorArchetypesSection,
  MarketGovernanceSection,
  PartnerWholesaleVendorGovernanceSection,
  RegulatoryPrivacyDataGovernanceSection,
  ChangeExceptionAndIncidentGovernanceSection,
  EvidenceAndAuditReadinessSection,
  IntegrationsAndCoexistenceSection,
  GovernedAiSecurityAndAdoptionSection,
  DiligenceRoutesSection,
  BookEnterpriseDemoSection,
  FaqSection,
} from "@/components/telecom";

export default function TelecomMvnoPage() {
  return (
    <main>
      <TelecomOperationsSection />
      <TelecomOperatingContextSection />
      <TelecomScopeNoticeSection />
      <TelecomBusinessLayerProblemSection />
      <OperatorArchetypesSection />
      <MarketGovernanceSection />
      <PartnerWholesaleVendorGovernanceSection />
      <RegulatoryPrivacyDataGovernanceSection />
      <ChangeExceptionAndIncidentGovernanceSection />
      <EvidenceAndAuditReadinessSection />
      <IntegrationsAndCoexistenceSection />
      <GovernedAiSecurityAndAdoptionSection />
      <DiligenceRoutesSection />
      <BookEnterpriseDemoSection />
      <FaqSection />
    </main>
  );
}
