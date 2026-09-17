import {
  GovernmentPublicSectorHeroSection,
  GovernmentPublicSectorOperatingContextSection,
  GovernmentPublicSectorScopeNoticeSection,
  GovernmentPublicSectorAdministrativeProblemSection,
  GovernmentPublicSectorOperatingModelsSection,
  GovernmentPublicSectorFundContextGovernanceSection,
  GovernmentPublicFundsApprovalGovernanceSection,
  GovernmentProcurementOwnershipSection,
  GovernmentSecurityReadinessSection,
  GovernmentActionDecisionLineageSection,
  GovernmentSystemOwnershipSection,
  GovernedAiSection,
  GovernmentEvidenceLadderSection,
  BookEnterpriseDemoGovernmentSection,
  FaqGovernmentSection,
} from "@/components/government-public-sector";

export default function GovernmentPublicSectorPage() {
  return (
    <main>
      <GovernmentPublicSectorHeroSection />
      <GovernmentPublicSectorOperatingContextSection />
      <GovernmentPublicSectorScopeNoticeSection />
      <GovernmentPublicSectorAdministrativeProblemSection />
      <GovernmentPublicSectorOperatingModelsSection />
      <GovernmentPublicSectorFundContextGovernanceSection />
      <GovernmentPublicFundsApprovalGovernanceSection />
      <GovernmentProcurementOwnershipSection />
      <GovernmentSecurityReadinessSection />
      <GovernmentActionDecisionLineageSection />
      <GovernmentSystemOwnershipSection />
      <GovernedAiSection />
      <GovernmentEvidenceLadderSection />
      <BookEnterpriseDemoGovernmentSection />
      <FaqGovernmentSection />
    </main>
  );
}
