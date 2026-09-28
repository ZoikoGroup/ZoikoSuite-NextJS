import {
  SolutionsHeroSection,
  FindYourPathSection,
  OperatingCaseSection,
  SolutionsByChallengeSection,
  SolutionBlueprintSection,
  GovernedExecutionProofSection,
  CrossBorderContextSection,
  EvidenceAuditReadinessSection,
  MigrationCoexistenceSection,
  TrustSecurityValidationSection,
  ProofLadderSection,
  ResourceCenterSection,
  FaqSection,
} from "@/components/solutions";

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHeroSection />
      <FindYourPathSection />
      <OperatingCaseSection />
      <SolutionsByChallengeSection />
      <SolutionBlueprintSection />
      <GovernedExecutionProofSection />
      <CrossBorderContextSection />
      <EvidenceAuditReadinessSection />
      <MigrationCoexistenceSection />
      <TrustSecurityValidationSection />
      <ProofLadderSection />
      <ResourceCenterSection />
      <FaqSection />
    </main>
  );
}
