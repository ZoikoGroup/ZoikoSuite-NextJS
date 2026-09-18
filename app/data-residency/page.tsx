import {
  DataResidencySection,
  ResidencyOperatingModel,
  ResidencyControlPlane,
  DataLocationDimensions,
  DeploymentModelsSection,
  CoverageStatesSection,
  CrossBorderDependencies,
  LifecycleRetentionSection,
  ResidencyEvidenceSection,
  ResidencyAssessment,
  SolutionsArchitectSection,
  FAQSection,
} from "@/components/data-residency";

export default function DataResidencyPage() {
  return (
    <main>
      <DataResidencySection />
      <ResidencyOperatingModel />
      <ResidencyControlPlane />
      <DataLocationDimensions />
      <DeploymentModelsSection />
      <CoverageStatesSection />
      <CrossBorderDependencies />
      <LifecycleRetentionSection />
      <ResidencyEvidenceSection />
      <ResidencyAssessment />
      <SolutionsArchitectSection />
      <FAQSection />
    </main>
  );
}
