import {
  TrustCenterSection,
  ClaimStatusLegendSection,
  TrustDestinations,
  SecurityOverview,
  FrameworkAlignment,
  DataResidency,
  EvidenceArchitecture,
  ResponsibleAiBoundaries,
  ThreeAreasPositions,
  ProofAndValidationLadder,
  SecurityReviewHandoff,
  DiligenceDemoSection,
  FrequentlyAskedQuestions,
} from "@/components/trust-center";

export default function TrustCenterPage() {
  return (
    <main>
      <TrustCenterSection />
      <ClaimStatusLegendSection />
      <TrustDestinations />
      <SecurityOverview />
      <FrameworkAlignment />
      <DataResidency />
      <EvidenceArchitecture />
      <ResponsibleAiBoundaries />
      <ThreeAreasPositions />
      <ProofAndValidationLadder />
      <SecurityReviewHandoff />
      <DiligenceDemoSection />
      <FrequentlyAskedQuestions />
    </main>
  );
}
