import { Metadata } from "next";
import {
  HeroSection,
  GoalRoutingSection,
  FeaturedResourcesSection,
  ResourceDirectorySection,
  RolePathsSection,
  TopicPathsSection,
  AllResourcesSection,
  DocumentationSection,
  KnowledgeBaseSection,
  TrainingSection,
  WebinarsSection,
  BlogInsightsSection,
  TemplatesToolsSection,
  DiligenceSection,
  FaqSection,
} from "@/components/resources";

export const metadata: Metadata = {
  title: "Resources | ZoikoSuite",
  description:
    "Resources for evaluating, implementing, and operating ZoikoSuite — executive briefs, documentation, knowledge base, training, webinars, insights, and tools.",
};

export default function ResourcesPage() {
  return (
    <main>
      <HeroSection />
      <GoalRoutingSection />
      <FeaturedResourcesSection />
      <ResourceDirectorySection />
      <RolePathsSection />
      <TopicPathsSection />
      <AllResourcesSection />
      <DocumentationSection />
      <KnowledgeBaseSection />
      <TrainingSection />
      <WebinarsSection />
      <BlogInsightsSection />
      <TemplatesToolsSection />
      <DiligenceSection />
      <FaqSection />
    </main>
  );
}
