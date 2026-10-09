import {
  WorkforceSection,
  OperatingContextSection,
  WorkforceQuestions,
  TraceResponsibility,
  TraceDecision,
  RoleBoundaries,
  SharedPrinciplesSection,
  ClearAnswersSection,
  EvaluationChecklist,
  GovernanceModelSection,
  StartBriefingSection,
} from "@/components/chro";

export default function ChroPage() {
  return (
    <main>
      <WorkforceSection />
      <OperatingContextSection />
      <WorkforceQuestions />
      <TraceResponsibility />
      <TraceDecision />
      <RoleBoundaries />
      <SharedPrinciplesSection />
      <ClearAnswersSection />
      <EvaluationChecklist />
      <GovernanceModelSection />
      <StartBriefingSection />
    </main>
  );
}
