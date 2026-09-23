import {
  CompanyZoikoGroupSection,
  RelationshipMapSection,
  WhatIsZoikoGroupSection,
  HowZoikoGroupWorksSection,
  PortfolioContextSection,
  TechnologyAsTheCommonLayerSection,
  SeparationAccountabilityAndNonInferenceSection,
  GovernanceAndTrustSection,
  GlobalPresenceSection,
  ResearchAndFrontiersSection,
  GroupLeadershipSection,
  LongTermOwnershipAndCapitalDisciplineSection,
  SustainabilityAndResponsibilitySection,
  ContactRoutingSection,
  FrequentlyAskedQuestionsSection,
} from "@/components/zoiko-group";

export default function ZoikoGroupPage() {
  return (
    <main>
      <CompanyZoikoGroupSection />
      <RelationshipMapSection />
      <WhatIsZoikoGroupSection />
      <HowZoikoGroupWorksSection />
      <PortfolioContextSection />
      <TechnologyAsTheCommonLayerSection />
      <SeparationAccountabilityAndNonInferenceSection />
      <GovernanceAndTrustSection />
      <GlobalPresenceSection />
      <ResearchAndFrontiersSection />
      <GroupLeadershipSection />
      <LongTermOwnershipAndCapitalDisciplineSection />
      <SustainabilityAndResponsibilitySection />
      <ContactRoutingSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  );
}
