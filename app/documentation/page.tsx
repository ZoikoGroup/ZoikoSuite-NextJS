import {
  DocumentationSection,
  CommonTasksSection,
  DomainSection,
  TaskAndTypeSection,
  AllDocumentationSection,
  ArticleTemplateSection,
  CurrentnessSection,
  RelatedSupportSection,
  CTASection,
  FAQSection,
} from "@/components/documentation";

export default function DocumentationPage() {
  return (
    <main>
      <DocumentationSection />
      <CommonTasksSection />
      <DomainSection />
      <TaskAndTypeSection />
      <AllDocumentationSection />
      <ArticleTemplateSection />
      <CurrentnessSection />
      <RelatedSupportSection />
      <CTASection />
      <FAQSection />
    </main>
  );
}
