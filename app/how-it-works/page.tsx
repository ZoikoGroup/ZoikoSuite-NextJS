import {
  HeroSection,
  HowZoikoSuiteWorksCard,
  GovernedActionLifecycle,
  StageDetailSection,
  Stage02ContextSection,
  Stage03GovernanceSection,
  Stage04ProposalSection,
  Stage05RouteResponsibilitySection,
  Stage06ReviewAuthorizationSection,
  Stage07ExecutionSection,
  Stage08EvidenceAttributionSection,
  Stage09MonitorPerformanceSection,
  ExceptionsRecoverySection,
  GovernedAiLifecycleSection,
  EndToEndExampleSection,
  RoleBasedViewsSection,
  DataEventsApisSection,
  DeploymentPrivacySection,
  MigrationShadowModeSection,
  TrustProcurementValidationSection,
  NextStepSection,
  FaqSection,
} from "@/components/how-it-works";

export default function HowItWorksPage() {
  return (
    <main>
      <HeroSection />
      <HowZoikoSuiteWorksCard />
      <GovernedActionLifecycle />
      <StageDetailSection />
      <Stage02ContextSection />
      <Stage03GovernanceSection />
      <Stage04ProposalSection />
      <Stage05RouteResponsibilitySection />
      <Stage06ReviewAuthorizationSection />
      <Stage07ExecutionSection />
      <Stage08EvidenceAttributionSection />
      <Stage09MonitorPerformanceSection />
      <ExceptionsRecoverySection />
      <GovernedAiLifecycleSection />
      <EndToEndExampleSection />
      <RoleBasedViewsSection />
      <DataEventsApisSection />
      <DeploymentPrivacySection />
      <MigrationShadowModeSection />
      <TrustProcurementValidationSection />
      <NextStepSection />
      <FaqSection />
    </main>
  );
}
