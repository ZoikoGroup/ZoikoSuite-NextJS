import {
  ManufacturingOperationsSection,
  OperatingContextSection,
  ManufacturingScopeNoticeSection,
  BusinessLayerProblemSection,
  ManufacturingOperatingModelsSection,
  SiteContextGovernanceSection,
  SupplierGovernanceSection,
  QualityRegulatoryObligationsSection,
  ChangeGovernanceSection,
  IntegrationsSection,
  OtSecurityBoundarySection,
  GovernedAiSection,
  EvidenceLadderSection,
  BookEnterpriseDemoPlantSection,
  FaqSection,
} from "@/components/manufacturing";

export default function ManufacturingPage() {
  return (
    <main>
      <ManufacturingOperationsSection />
      <OperatingContextSection />
      <ManufacturingScopeNoticeSection />
      <BusinessLayerProblemSection />
      <ManufacturingOperatingModelsSection />
      <SiteContextGovernanceSection />
      <SupplierGovernanceSection />
      <QualityRegulatoryObligationsSection />
      <ChangeGovernanceSection />
      <IntegrationsSection />
      <OtSecurityBoundarySection />
      <GovernedAiSection />
      <EvidenceLadderSection />
      <BookEnterpriseDemoPlantSection />
      <FaqSection />
    </main>
  );
}
