import {
  TopSection,
  LightTopicSection,
  DecisionValueSection,
  ModulesSection,
  ProvenanceSection,
  RolesSection,
  JourneySection,
  BoundariesSection,
  RelatedSection,
  QuestionsSection,
  LightCtaSection,
  BriefingSection,
} from "@/components/audit-committee";

export const metadata = {
  title: "Audit Committee | ZoikoSuite",
  description:
    "Give audit committees a clearer way to understand oversight priorities, follow evidence and management responses, and connect unresolved issues to accountable decisions.",
};

export default function AuditCommitteePage() {
  return (
    <main>
      <TopSection />
      <LightTopicSection />
      <DecisionValueSection />
      <ModulesSection />
      <ProvenanceSection />
      <RolesSection />
      <JourneySection />
      <BoundariesSection />
      <RelatedSection />
      <QuestionsSection />
      <LightCtaSection />
      <BriefingSection />
    </main>
  );
}
