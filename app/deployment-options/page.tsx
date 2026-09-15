import {
  DeploymentPatternSection,
  DeploymentPatternsOverview,
  RegionalServiceBoundariesSection,
  EnterpriseSingleTenantSection,
  DedicatedPrivateCloudSection,
  SovereignDeploymentSection,
  HybridIntegrationArchitectureSection,
  DataResidencyLifecycleSection,
  TenancyAndIsolationMatrixSection,
  EncryptionAndKeyControlSection,
  IdentityAdministrationSection,
  NetworkConnectivityControlsSection,
  AvailabilityBackupRecoverySection,
  UpdatesReleaseChannelsChangeControlSection,
  SharedResponsibilityModelSection,
  DeploymentFitSummarySection,
  ImplementationLifecycleSection,
  NextStepRequirementsSection,
  FAQSection,
  NextStepGovernGlobalOperationsSection,
} from "@/components/deployment-options";

export default function DeploymentOptionsPage() {
  return (
    <main>
      <DeploymentPatternSection />
      <DeploymentPatternsOverview />
      <RegionalServiceBoundariesSection />
      <EnterpriseSingleTenantSection />
      <DedicatedPrivateCloudSection />
      <SovereignDeploymentSection />
      <HybridIntegrationArchitectureSection />
      <DataResidencyLifecycleSection />
      <TenancyAndIsolationMatrixSection />
      <EncryptionAndKeyControlSection />
      <IdentityAdministrationSection />
      <NetworkConnectivityControlsSection />
      <AvailabilityBackupRecoverySection />
      <UpdatesReleaseChannelsChangeControlSection />
      <SharedResponsibilityModelSection />
      <DeploymentFitSummarySection />
      <ImplementationLifecycleSection />
      <NextStepRequirementsSection />
      <FAQSection />
      <NextStepGovernGlobalOperationsSection />
    </main>
  );
}
