import {
  HeroSection,
  DecisionQuestionsSection,
  CapabilityExplorerSection,
  ArchitectureSection,
  TrustEvidenceSection,
  EvaluationChecklistSection,
  ScenarioRoleHandoffsSection,
  ConversionFormSection,
  FaqSection,
} from "@/components/cio";

export const metadata = {
  title: "For Chief Information Officers | ZoikoSuite",
  description:
    "Assess how governed workflows, defined decision rights, and visible handoffs could support a more accountable operating model across teams and systems.",
};

export default function CioPage() {
  return (
    <main>
      <HeroSection />
      <DecisionQuestionsSection />
      <CapabilityExplorerSection />
      <ArchitectureSection />
      <TrustEvidenceSection />
      <EvaluationChecklistSection />
      <ScenarioRoleHandoffsSection />
      <ConversionFormSection />
      <FaqSection />
    </main>
  );
}
