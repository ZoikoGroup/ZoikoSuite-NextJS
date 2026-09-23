import {
  LeadershipHeroSection,
  LeadershipOperatingModelSection,
  LeadershipDirectorySection,
  GovernanceBoundarySection,
  DecisionAccountabilityModelSection,
  TrustAndAILeadershipSection,
  ProductTechnologyLeadershipSection,
  CustomerCommercialLeadershipSection,
  GlobalOperatingLeadershipSection,
  ContinuityAndSuccessionSection,
  LeadershipPrinciplesSection,
  WhereToGoFromHereSection,
  CommonQuestionsSection,
} from "@/components/leadership";

export default function LeadershipPage() {
  return (
    <main>
      <LeadershipHeroSection />
      <LeadershipOperatingModelSection />
      <LeadershipDirectorySection />
      <GovernanceBoundarySection />
      <DecisionAccountabilityModelSection />
      <TrustAndAILeadershipSection />
      <ProductTechnologyLeadershipSection />
      <CustomerCommercialLeadershipSection />
      <GlobalOperatingLeadershipSection />
      <ContinuityAndSuccessionSection />
      <LeadershipPrinciplesSection />
      <WhereToGoFromHereSection />
      <CommonQuestionsSection />
    </main>
  );
}
