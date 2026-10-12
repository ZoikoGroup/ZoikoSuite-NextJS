import {
  TaxLadderHeroSection,
  TaxResponsibilitiesContextSection,
  TaxLadder,
  ScopeOverview,
  TaxCompliance,
  ExplicitStates,
  ResponsibilitiesByPerspective,
  GovernanceClarity,
  RelatedResponsibilities,
  AnswerFirstGuidance,
  EnterpriseEvaluation,
  GovernanceForm,
} from "@/components/tax-leader";

export default function TaxLeaderPage() {
  return (
    <main>
      <TaxLadderHeroSection />
      <TaxResponsibilitiesContextSection />
      <TaxLadder />
      <ScopeOverview />
      <TaxCompliance />
      <ExplicitStates />
      <ResponsibilitiesByPerspective />
      <GovernanceClarity />
      <RelatedResponsibilities />
      <AnswerFirstGuidance />
      <EnterpriseEvaluation />
      <GovernanceForm />
    </main>
  );
}
