import {
  ExecutiveBriefsSection,
  LeadershipReviewSection,
  FeaturedBriefsSection,
  DecisionRoutesSection,
  RoleBrowserSection,
  AllExecutiveBriefsSection,
  ExecutiveBriefDetailSection,
  EvidenceCurrentnessSection,
  RelatedRecentSection,
  CTABriefsSection,
  ExecutiveBriefsFAQSection,
} from "@/components/executive-briefs";

export default function ExecutiveBriefsPage() {
  return (
    <main>
      <ExecutiveBriefsSection />
      <LeadershipReviewSection />
      <FeaturedBriefsSection />
      <DecisionRoutesSection />
      <RoleBrowserSection />
      <AllExecutiveBriefsSection />
      <ExecutiveBriefDetailSection />
      <EvidenceCurrentnessSection />
      <RelatedRecentSection />
      <CTABriefsSection />
      <ExecutiveBriefsFAQSection />
    </main>
  );
}
