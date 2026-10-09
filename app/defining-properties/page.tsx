import {
  HeroSection,
  GovernedOperationsPropertiesSection,
  ReviewLensesSection,
  IllustrativeChangeStepsSection,
  SelectPerspectiveSection,
  AskEvidenceSection,
  ExploreRolesSection,
  FrequentlyAskedQuestionsSection,
} from "@/components/defining-properties";

export default function DefiningPropertiesPage() {
  return (
    <main>
      <HeroSection />
      <GovernedOperationsPropertiesSection />
      <ReviewLensesSection />
      <IllustrativeChangeStepsSection />
      <SelectPerspectiveSection />
      <AskEvidenceSection />
      <ExploreRolesSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  );
}
