import {
  CustomerStoriesSection,
  CustomerStoriesExplanation,
  CustomerProofStatusSection,
  ControlledTaxonomySection,
  CanonicalInventorySection,
  StoryCardContractSection,
  MetricDisclosurePatternSection,
  RightsAndWithdrawalSection,
  StoryDetailTemplateSection,
  ProfessionalBoundariesSection,
  RelatedProofAndCurrentAuthoritySection,
  BookEnterpriseDemoSection,
  FrequentlyAskedQuestionsSection,
} from "@/components/customer-stories";

export default function CustomerStoriesPage() {
  return (
    <main>
      <CustomerStoriesSection />
      <CustomerStoriesExplanation />
      <CustomerProofStatusSection />
      <ControlledTaxonomySection />
      <CanonicalInventorySection />
      <StoryCardContractSection />
      <MetricDisclosurePatternSection />
      <RightsAndWithdrawalSection />
      <StoryDetailTemplateSection />
      <ProfessionalBoundariesSection />
      <RelatedProofAndCurrentAuthoritySection />
      <BookEnterpriseDemoSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  );
}
