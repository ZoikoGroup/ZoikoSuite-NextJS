import {
  BlogInsightsHeroSection,
  TopicBrowserSection,
  LatestInsightsSection,
  SeriesCollectionsSection,
  PracticalGuidanceSection,
  ArticleDetailSection,
  TrustAuthorshipSection,
  RelatedInsightsSection,
  CTABlogSection,
  BlogFAQSection,
} from "@/components/blog-insights";

export default function BlogInsightsPage() {
  return (
    <main>
      <BlogInsightsHeroSection />
      <TopicBrowserSection />
      <LatestInsightsSection />
      <SeriesCollectionsSection />
      <PracticalGuidanceSection />
      <ArticleDetailSection />
      <TrustAuthorshipSection />
      <RelatedInsightsSection />
      <CTABlogSection />
      <BlogFAQSection />
    </main>
  );
}
