import {
  TaxLadderHeroSection,
  TaxLadderMeaningSection,
  SixStagesSection,
  ScopeAndOwnershipModelSection,
  GovernanceWorkflowSection,
  TaxLadderDestinationsSection,
  SourcesStatusAndLimitsSection,
  TaxLadderFAQsSection,
} from "@/components/tax-leader";

export default function TaxLeaderPage() {
  return (
    <main>
      <TaxLadderHeroSection />
      <TaxLadderMeaningSection />
      <SixStagesSection />
      <ScopeAndOwnershipModelSection />
      <GovernanceWorkflowSection />
      <TaxLadderDestinationsSection />
      <SourcesStatusAndLimitsSection />
      <TaxLadderFAQsSection />
    </main>
  );
}
