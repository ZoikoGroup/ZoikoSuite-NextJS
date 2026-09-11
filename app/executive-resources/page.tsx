import {
  ExecutiveResourcesHero,
  ExecutiveResourcesDescription,
  FindTheRightEvidenceSection,
  ResourceTaxonomySection,
  ResourceLibrarySection,
  ResourceCardContractSection,
  RoleResourcePathsSection,
  BusinessCaseBuilderSection,
  ValueAssessmentSection,
  EnterpriseEvaluationPathSection,
  ArchitectureTrustDiligenceSection,
  NextStepEnterpriseDemoSection,
  FaqSection,
} from "@/components/executive-resources";

export default function ExecutiveResourcesPage() {
  return (
    <main>
      <ExecutiveResourcesHero />
      <ExecutiveResourcesDescription />
      <FindTheRightEvidenceSection />
      <ResourceTaxonomySection />
      <ResourceLibrarySection />
      <ResourceCardContractSection />
      <RoleResourcePathsSection />
      <BusinessCaseBuilderSection />
      <ValueAssessmentSection />
      <EnterpriseEvaluationPathSection />
      <ArchitectureTrustDiligenceSection />
      <NextStepEnterpriseDemoSection />
      <FaqSection />
    </main>
  );
}
