import {
  DataProcessingTermsSection,
  AgreementFitCheckerSection,
  HowTheDPARelatesToYourOtherAgreementsSection,
  IdentifiedPerProcessingActivitySection,
  Article28StyleParticularsSection,
  ClauseGroupsSummarizedSection,
  SecurityIncidentAndPersonalDataBreachAssistanceSection,
  ATieredEvidenceHierarchySection,
  AModularScheduleSection,
  SixExecutionPathsSection,
  PriorVersionsNeverOverwrittenSection,
  FrequentlyAskedQuestionsSection,
} from "@/components/dpa";

export default function DpaPage() {
  return (
    <main>
      <DataProcessingTermsSection />
      <AgreementFitCheckerSection />
      <HowTheDPARelatesToYourOtherAgreementsSection />
      <IdentifiedPerProcessingActivitySection />
      <Article28StyleParticularsSection />
      <ClauseGroupsSummarizedSection />
      <SecurityIncidentAndPersonalDataBreachAssistanceSection />
      <ATieredEvidenceHierarchySection />
      <AModularScheduleSection />
      <SixExecutionPathsSection />
      <PriorVersionsNeverOverwrittenSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  );
}
