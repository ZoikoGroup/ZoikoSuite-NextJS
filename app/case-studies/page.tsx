import {
  CaseStudiesSection,
  SearchBrowseCaseStudiesSection,
  FeaturedCaseStudies,
  AllCaseStudies,
  CaseStudyDetailHero,
  CaseStudyContent,
  OutcomesAndEvidence,
  CustomerVoice,
  ApplicabilityAndRelated,
  ExploreContextCTA,
  FAQSection,
} from "@/components/case-studies";

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesSection />
      <SearchBrowseCaseStudiesSection />
      <FeaturedCaseStudies />
      <AllCaseStudies />
      <CaseStudyDetailHero />
      <CaseStudyContent />
      <OutcomesAndEvidence />
      <CustomerVoice />
      <ApplicabilityAndRelated />
      <ExploreContextCTA />
      <FAQSection />
    </main>
  );
}
