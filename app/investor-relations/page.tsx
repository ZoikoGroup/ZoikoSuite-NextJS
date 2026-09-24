import {
  InvestorRelationsSection,
  WhyThisPageExistsSection,
  InvestorPostureSection,
  LongTermValueCreationContextSection,
  GovernanceAndStewardshipSection,
  DisclosureAndInvestorMaterialsSection,
  FinancialInformationSection,
  OwnershipCapitalAndCorporateStructureSection,
  RiskAndForwardLookingInformationSection,
  SustainabilityAndLongTermValueSection,
  StrategicCapitalAndPartnershipRoutingSection,
  InvestorContactAndEngagementSection,
  InvestorFrequentlyAskedQuestionsSection,
} from "@/components/investor-relations";

export default function InevstorRelationsPage() {
  return (
    <main>
      <InvestorRelationsSection />
      <WhyThisPageExistsSection />
      <InvestorPostureSection />
      <LongTermValueCreationContextSection />
      <GovernanceAndStewardshipSection />
      <DisclosureAndInvestorMaterialsSection />
      <FinancialInformationSection />
      <OwnershipCapitalAndCorporateStructureSection />
      <RiskAndForwardLookingInformationSection />
      <SustainabilityAndLongTermValueSection />
      <StrategicCapitalAndPartnershipRoutingSection />
      <InvestorContactAndEngagementSection />
      <InvestorFrequentlyAskedQuestionsSection />
    </main>
  );
}
