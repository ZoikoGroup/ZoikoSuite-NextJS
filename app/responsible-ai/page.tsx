import type { Metadata } from "next";
import {
  ResponsibleAiHeroSection,
  ResponsibleAiSnapshotSection,
  ResponsibleAiCapabilityRegisterSection,
  ResponsibleAiOperationalMatrixSection,
  ResponsibleAiLifecycleSection,
  ResponsibleAiHumanDecisionsSection,
  ResponsibleAiDataBoundariesSection,
  ResponsibleAiSecurityAbuseSection,
  ResponsibleAiBenchmarkScorecardSection,
  ResponsibleAiExplainabilitySection,
  ResponsibleAiChangeGovernanceSection,
  ResponsibleAiFallbackStatesSection,
  ResponsibleAiSubprocessorsSection,
  ResponsibleAiWorkspaceControlsSection,
  ResponsibleAiEvidenceProcurementSection,
  ResponsibleAiFaqSection,
} from "@/components/responsible-ai";

export const metadata: Metadata = {
  title: "Responsible AI | Zoiko Shield",
  description:
    "AI assistance with explicit boundaries and accountable control. Continuous evaluation, precise data/model boundaries, and human-in-the-loop validation.",
};

export default function ResponsibleAiPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F0]">
      <ResponsibleAiHeroSection />
      <ResponsibleAiSnapshotSection />
      <ResponsibleAiCapabilityRegisterSection />
      <ResponsibleAiOperationalMatrixSection />
      <ResponsibleAiLifecycleSection />
      <ResponsibleAiHumanDecisionsSection />
      <ResponsibleAiDataBoundariesSection />
      <ResponsibleAiSecurityAbuseSection />
      <ResponsibleAiBenchmarkScorecardSection />
      <ResponsibleAiExplainabilitySection />
      <ResponsibleAiChangeGovernanceSection />
      <ResponsibleAiFallbackStatesSection />
      <ResponsibleAiSubprocessorsSection />
      <ResponsibleAiWorkspaceControlsSection />
      <ResponsibleAiEvidenceProcurementSection />
      <ResponsibleAiFaqSection />
    </div>
  );
}
