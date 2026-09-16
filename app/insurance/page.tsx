import {
  InsuranceOperationsSection,
  WhatZoikoSuiteDoesForInsurersSection,
  OperatingConditionsSection,
  GovernedInsuranceModelSection,
  InsuranceCapabilityGridSection,
  ContextResolutionSection,
  ComplianceObligationsSection,
  OutsourcingObligationsSection,
  TrustProofSection,
  IntegrationCoexistenceSection,
  GovernedIntelligenceInsuranceSection,
  ExecutiveAlignmentSection,
  BookEnterpriseDemoInsuranceSection,
  FaqSection,
} from "@/components/insurance";

export default function InsurancePage() {
  return (
    <main>
      <InsuranceOperationsSection />
      <WhatZoikoSuiteDoesForInsurersSection />
      <OperatingConditionsSection />
      <GovernedInsuranceModelSection />
      <InsuranceCapabilityGridSection />
      <ContextResolutionSection />
      <ComplianceObligationsSection />
      <OutsourcingObligationsSection />
      <TrustProofSection />
      <IntegrationCoexistenceSection />
      <GovernedIntelligenceInsuranceSection />
      <ExecutiveAlignmentSection />
      <BookEnterpriseDemoInsuranceSection />
      <FaqSection />
    </main>
  );
}
