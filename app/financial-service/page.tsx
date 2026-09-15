import {
  FinancialServiceSection,
  FinancialServiceExplanation,
  OperatingProblemSection,
  FinancialServiceControlPrinciples,
  CapabilityProofSection,
  ProductProofSection,
  ContextChangesSection,
  EvidenceAuditReadinessSection,
  SecuritySovereignTrustSection,
  IntegrationMigrationSection,
  GovernedIntelligenceSection,
  FinancialServicesPathwaysSection,
  BookEnterpriseDemoSection,
  FaqSection,
} from "@/components/financial-service";

export default function FinancialServicePage() {
  return (
    <main>
      <FinancialServiceSection />
      <FinancialServiceExplanation />
      <OperatingProblemSection />
      <FinancialServiceControlPrinciples />
      <CapabilityProofSection />
      <ProductProofSection />
      <ContextChangesSection />
      <EvidenceAuditReadinessSection />
      <SecuritySovereignTrustSection />
      <IntegrationMigrationSection />
      <GovernedIntelligenceSection />
      <FinancialServicesPathwaysSection />
      <BookEnterpriseDemoSection />
      <FaqSection />
    </main>
  );
}
