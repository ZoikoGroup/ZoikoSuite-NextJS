import {
  ComplianceLadderHero,
  OperatingContextSection,
  GovernanceProgressionCards,
  CapabilityDisclosuresSection,
  EvidenceStateIntegritySection,
  ExplicitStatesSection,
  SeparationOfDutiesSection,
  ScopeAndTrustSection,
  RelatedDestinationsSection,
  AnswerFirstGuidanceSection,
  ContextBeforeConversionSection,
  StartGovernanceQuestionSection,
} from "@/components/compliance-ladder";

export default function ComplianceLadderPage() {
  return (
    <main>
      <ComplianceLadderHero />
      <OperatingContextSection />
      <GovernanceProgressionCards />
      <CapabilityDisclosuresSection />
      <EvidenceStateIntegritySection />
      <ExplicitStatesSection />
      <SeparationOfDutiesSection />
      <ScopeAndTrustSection />
      <RelatedDestinationsSection />
      <AnswerFirstGuidanceSection />
      <ContextBeforeConversionSection />
      <StartGovernanceQuestionSection />
    </main>
  );
}
