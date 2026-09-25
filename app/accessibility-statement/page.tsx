import {
  AccessibilityStatementSection,
  CommitmentAndScopeSection,
  AccessibilityStandardAndConformanceStatusSection,
  MeasuresToSupportAccessibilitySection,
  KnownLimitationsAndAlternativesSection,
  CompatibilityTechnicalSpecificationsAndTestedEnvironmentsSection,
  AScanScoreIsNeverReportedAsConformanceSection,
  ARouteThatWorksForPeopleCurrentlyBlockedByTheProductSection,
  FreshnessIsVisibleSection,
  NeverImpersonatesAFormalConformanceReportSection,
  FrequentlyAskedQuestionsAccessibilitySection,
} from "@/components/accessibility-statement";

export default function AccessibilityStatementPage() {
  return (
    <main>
      <AccessibilityStatementSection />
      <CommitmentAndScopeSection />
      <AccessibilityStandardAndConformanceStatusSection />
      <MeasuresToSupportAccessibilitySection />
      <KnownLimitationsAndAlternativesSection />
      <CompatibilityTechnicalSpecificationsAndTestedEnvironmentsSection />
      <AScanScoreIsNeverReportedAsConformanceSection />
      <ARouteThatWorksForPeopleCurrentlyBlockedByTheProductSection />
      <FreshnessIsVisibleSection />
      <NeverImpersonatesAFormalConformanceReportSection />
      <FrequentlyAskedQuestionsAccessibilitySection />
    </main>
  );
}
