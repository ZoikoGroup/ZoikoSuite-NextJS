import {
  ProductRoadmapSection,
  RoadmapTransparencyPrinciplesSection,
  RoadmapStatusModelSection,
  ApprovedPublicRecordsSection,
  RoadmapRecordRequirementsSection,
  RoadmapGovernanceLifecycleSection,
  TechnicalDirectionSection,
  CoverageClaimSection,
  ControlledValidationSection,
  ReleasedOutcomesSection,
  AccountableChangeSection,
  FollowRoadmapUpdatesSection,
  GovernanceEntitlementSection,
  NextStepSection,
  FAQSection,
  GovernGlobalOperationsCTA,
} from "@/components/product-roadmap";

export default function ProductOverviewPage() {
  return (
    <main>
      <ProductRoadmapSection />
      <RoadmapTransparencyPrinciplesSection />
      <RoadmapStatusModelSection />
      <ApprovedPublicRecordsSection />
      <RoadmapRecordRequirementsSection />
      <RoadmapGovernanceLifecycleSection />
      <TechnicalDirectionSection />
      <CoverageClaimSection />
      <ControlledValidationSection />
      <ReleasedOutcomesSection />
      <AccountableChangeSection />
      <FollowRoadmapUpdatesSection />
      <GovernanceEntitlementSection />
      <NextStepSection />
      <FAQSection />
      <GovernGlobalOperationsCTA />
    </main>
  );
}
