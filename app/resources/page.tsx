import { Metadata } from "next";
import {
  ResourcesHero,
  ResourceNavigatorSection,
  FeaturedResourcesSection,
  GoalRoutingSection,
  ResourceLibrarySection,
  ExecutiveEvaluationSection,
  DocumentationKnowledgeSection,
  LearningEventsSection,
  InsightsToolsSection,
  FaqSection,
} from "@/components/resources";

export const metadata: Metadata = {
  title: "Resources | ZoikoSuite",
  description: "Find the guidance you need, faster. Explore Executive Briefs, Documentation, Knowledge Base, Training Academy, and more.",
};

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesHero />
      <ResourceNavigatorSection />
      <FeaturedResourcesSection />
      <GoalRoutingSection />
      <ResourceLibrarySection />
      <ExecutiveEvaluationSection />
      <DocumentationKnowledgeSection />
      <LearningEventsSection />
      <InsightsToolsSection />
      <FaqSection />
    </main>
  );
}
