import {
  NewsroomHeroSection,
  FeaturedNewsCard,
  LatestNewsTimelineSection,
  BrowseByTopicSection,
  TrustAndGovernanceUpdatesSection,
  MediaResourcesSection,
  MediaEnquiriesSection,
  ArticleDetailStructuralTemplate,
  CorrectionsUpdatesAndRetractionsSection,
  NewsroomBoundariesAndCanonicalHandoffsSection,
  WhereToGoFromHereSection,
  CommonQuestionsSection,
} from "@/components/newsroom";

export default function NewsroomPage() {
  return (
    <main>
      <NewsroomHeroSection />
      <FeaturedNewsCard />
      <LatestNewsTimelineSection />
      <BrowseByTopicSection />
      <TrustAndGovernanceUpdatesSection />
      <MediaResourcesSection />
      <MediaEnquiriesSection />
      <ArticleDetailStructuralTemplate />
      <CorrectionsUpdatesAndRetractionsSection />
      <NewsroomBoundariesAndCanonicalHandoffsSection />
      <WhereToGoFromHereSection />
      <CommonQuestionsSection />
    </main>
  );
}
