import {
  PartnersHeroSection,
  EcosystemModelSection,
  BuyerPartnerFinderSection,
  PartnerDirectorySection,
  TechnologyIntegrationPartnersSection,
  PartnerSupportedSection,
  ChannelStrategicRelationshipsSection,
  WhyPartnerSection,
  PartnerLifecycleSection,
  TrustAndDiligenceSection,
  ApplicationQualificationSection,
  CustomerProtectionSection,
  ContinueTheStorySection,
  PartnersFaqSection,
} from "@/components/partners";

export const metadata = {
  title: "Partners | ZoikoSuite",
  description:
    "Extend governed operations with the right ecosystem. ZoikoSuite works with technology, delivery, professional, channel, and strategic collaborators with scope and responsibility kept explicit.",
};

export default function PartnersPage() {
  return (
    <main>
      <PartnersHeroSection />
      <EcosystemModelSection />
      <BuyerPartnerFinderSection />
      <PartnerDirectorySection />
      <TechnologyIntegrationPartnersSection />
      <PartnerSupportedSection />
      <ChannelStrategicRelationshipsSection />
      <WhyPartnerSection />
      <PartnerLifecycleSection />
      <TrustAndDiligenceSection />
      <ApplicationQualificationSection />
      <CustomerProtectionSection />
      <ContinueTheStorySection />
      <PartnersFaqSection />
    </main>
  );
}
