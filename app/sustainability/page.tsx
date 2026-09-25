import {
  SustainabilitySection,
  WhySustainabilityBelongsInTheOperatingModelSection,
  MaterialSustainabilityTopicsSection,
  ResponsibleDigitalOperationsSection,
  TrustPrivacyAndSecurityAsSustainableDigitalInfrastructureSection,
  CustomerSustainabilityEnablementSection,
  ZoikoGroupSustainabilityContextSection,
  ClimateAndEnvironmentalStatusSection,
  TargetsAndProgressRegistrySection,
  FrameworkAndStandardMappingSection,
  SustainabilityEvidenceUiSection,
  ReportsAndResourcesSection,
  FrequentlyAskedQuestionsSection,
} from "@/components/sustainability";

export default function SustainabilityPage() {
  return (
    <main>
      <SustainabilitySection />
      <WhySustainabilityBelongsInTheOperatingModelSection />
      <MaterialSustainabilityTopicsSection />
      <ResponsibleDigitalOperationsSection />
      <TrustPrivacyAndSecurityAsSustainableDigitalInfrastructureSection />
      <CustomerSustainabilityEnablementSection />
      <ZoikoGroupSustainabilityContextSection />
      <ClimateAndEnvironmentalStatusSection />
      <TargetsAndProgressRegistrySection />
      <FrameworkAndStandardMappingSection />
      <SustainabilityEvidenceUiSection />
      <ReportsAndResourcesSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  );
}
