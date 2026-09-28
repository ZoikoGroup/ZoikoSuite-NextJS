import {
  ZoikoSuitePlatformSection,
  PlatformOverviewSection,
  PlatformArchitectureSection,
  PlatformFoundationSection,
  GovernancePlatformSection,
  CoreModulesSection,
  OperatingIntelligenceSection,
  EnterpriseContextSection,
  EvidenceSection,
  GovernedIntelligenceSection,
  PlatformTourSection,
  AdoptionAndMigrationSection,
  IntegrationsSection,
  EnterpriseTrustAndReadinessSection,
  FindYourPathSection,
  FAQSection,
} from "@/components/platform";

export default function PlatformPage() {
  return (
    <main>
      <ZoikoSuitePlatformSection />
      <PlatformOverviewSection />
      <PlatformArchitectureSection />
      <PlatformFoundationSection />
      <GovernancePlatformSection />
      <CoreModulesSection />
      <OperatingIntelligenceSection />
      <EnterpriseContextSection />
      <EvidenceSection />
      <GovernedIntelligenceSection />
      <PlatformTourSection />
      <AdoptionAndMigrationSection />
      <IntegrationsSection />
      <EnterpriseTrustAndReadinessSection />
      <FindYourPathSection />
      <FAQSection />
    </main>
  );
}
