import {
  SecurityOverview,
  SecurityControlArchitecture,
  AuthorizationContext,
  SixStepsAuthorization,
  DataProtectionScope,
  MachineIdentityTrust,
  DeploymentChoiceBoundary,
  SecurityTelemetry,
  SecureSdlcRequirements,
  IncidentResponseStages,
  SecurityEvidenceAssurance,
  SecurityReviewHandoff,
  SolutionsArchitectSection,
  FaqAccordionSection,
} from "@/components/security-overview";

export default function SecurityOverviewPage() {
  return (
    <main>
      <SecurityOverview />
      <SecurityControlArchitecture />
      <AuthorizationContext />
      <SixStepsAuthorization />
      <DataProtectionScope />
      <MachineIdentityTrust />
      <DeploymentChoiceBoundary />
      <SecurityTelemetry />
      <SecureSdlcRequirements />
      <IncidentResponseStages />
      <SecurityEvidenceAssurance />
      <SecurityReviewHandoff />
      <SolutionsArchitectSection />
      <FaqAccordionSection />
    </main>
  );
}
