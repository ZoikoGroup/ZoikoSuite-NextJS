import {
  ActivityRegistry,
  ClaimGovernance,
  DataClassification,
  DeletionHold,
  EnterprisePrivacyReview,
  EvidenceReadiness,
  FrequentlyAskedQuestions,
  NextStep,
  PrivacyHero,
  PrivacyModel,
  RightsOperations,
  SubprocessorAI,
  TransferGovernance,
} from "@/components/privacy-architecture";

export default function Page() {
  return (
    <main>
      <PrivacyHero />
      <ClaimGovernance />
      <PrivacyModel />
      <ActivityRegistry />
      <DataClassification />
      <DeletionHold />
      <RightsOperations />
      <TransferGovernance />
      <SubprocessorAI />
      <EvidenceReadiness />
      <EnterprisePrivacyReview />
      <NextStep />
      <FrequentlyAskedQuestions />
    </main>
  );
}