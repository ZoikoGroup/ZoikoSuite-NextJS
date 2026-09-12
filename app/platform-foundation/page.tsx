import {
  PlatformFoundationHeroSection,
  WhatIsPlatformFoundationSection,
  ScopeFirstFiveStepsSection,
  OrganizedByQuestionCapabilitiesSection,
  RelationshipRegisterSection,
  ThreeHierarchiesSection,
  SourceFirstCoverageStatesSection,
  DataLocationLifecycleSection,
  ApiPlatformPublicationStateSection,
  SystemClassesNotLogoWallSection,
  DataAndEventArchitectureSection,
  EvidenceArchitectureSection,
  ReliabilityQuarantineAdoptionSection,
  BringYourArchitectureSection,
  PlatformFoundationFaqSection,
  PlatformFoundationGovernOperationsSection,
} from "@/components/platform-foundation";

export const metadata = {
  title: "Platform Foundation | ZoikoSuite",
  description:
    "Build governed operations on a foundation that keeps scope, data, integrations and evidence visible.",
};

export default function PlatformFoundationPage() {
  return (
    <main>
      <PlatformFoundationHeroSection />
      <WhatIsPlatformFoundationSection />
      <ScopeFirstFiveStepsSection />
      <OrganizedByQuestionCapabilitiesSection />
      <RelationshipRegisterSection />
      <ThreeHierarchiesSection />
      <SourceFirstCoverageStatesSection />
      <DataLocationLifecycleSection />
      <ApiPlatformPublicationStateSection />
      <SystemClassesNotLogoWallSection />
      <DataAndEventArchitectureSection />
      <EvidenceArchitectureSection />
      <ReliabilityQuarantineAdoptionSection />
      <BringYourArchitectureSection />
      <PlatformFoundationFaqSection />
      <PlatformFoundationGovernOperationsSection />
    </main>
  );
}
