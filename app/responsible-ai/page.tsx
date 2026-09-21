import {
  ResponsibleAIHeroSection,
  ResponsibleAICtrlModelSection,
  CapabilityBoundaryTaxonomy,
  AISystemRegistrySection,
  SourceTruthProtection,
  HumanOversightSection,
  EvaluationGatesSection,
  FailClosedSection,
  EvidenceJurisdictionSection,
  ResponsibleAIReviewSection,
  SolutionsArchitectSection,
  FrequentlyAskedQuestionsSection,
} from "@/components/responsible-ai";

export default function ResponsibleAiPage() {
  return (
    <main>
      <ResponsibleAIHeroSection />
      <ResponsibleAICtrlModelSection />
      <CapabilityBoundaryTaxonomy />
      <AISystemRegistrySection />
      <SourceTruthProtection />
      <HumanOversightSection />
      <EvaluationGatesSection />
      <FailClosedSection />
      <EvidenceJurisdictionSection />
      <ResponsibleAIReviewSection />
      <SolutionsArchitectSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  );
}
