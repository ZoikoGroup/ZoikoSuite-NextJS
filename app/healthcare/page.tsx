import {
  HealthcareOperationsSection,
  OperationalFragmentationSection,
  GovernedHealthcareModel,
  HealthcareOperationsCapabilityGrid,
  FacilityContextGovernanceSection,
  PrivacyComplianceEvidenceSection,
  NonClinicalEnterpriseControlWorkflows,
  DiligenceGradeTrustSection,
  SourceOwnershipSection,
  GovernedIntelligenceSection,
  ExecutiveAlignmentSection,
  ProofLadderSection,
  BookEnterpriseDemoSection,
  FaqSection,
} from "@/components/healthcare";

export default function HealthcarePage() {
  return (
    <main>
      <HealthcareOperationsSection />
      <OperationalFragmentationSection />
      <GovernedHealthcareModel />
      <HealthcareOperationsCapabilityGrid />
      <FacilityContextGovernanceSection />
      <PrivacyComplianceEvidenceSection />
      <NonClinicalEnterpriseControlWorkflows />
      <DiligenceGradeTrustSection />
      <SourceOwnershipSection />
      <GovernedIntelligenceSection />
      <ExecutiveAlignmentSection />
      <ProofLadderSection />
      <BookEnterpriseDemoSection />
      <FaqSection />
    </main>
  );
}
