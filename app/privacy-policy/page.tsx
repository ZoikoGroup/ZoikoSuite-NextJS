import {
  PrivacyPolicySection,
  WhoThisPolicyAppliesToSection,
  VerifiedControllerOperatorProcessorRolesSection,
  PersonalDataWeCollectSection,
  SpecificPurposesNotBusinessPurposesSection,
  CookiesAndSimilarTechnologiesSection,
  RecipientCategoriesPurposeAndControlBoundariesSection,
  TransferMechanismsAndResidencySection,
  RetentionDeletionAndLegalHoldsSection,
  PrivacySecurityAndConfidentialityControlsSection,
  AiAutomationAndProfilingSection,
  ActionFirstNoLegalArticleGuessworkRequiredSection,
  NoInventedAgeThresholdOrChildDirectedClaimSection,
  SeparatingConsumerWebsiteDataFromCustomerControlledDataSection,
  GlobalBaselinePlusJurisdictionSpecificRightsSection,
  VersionedDatedNeverSilentlyEditedSection,
  RoutedByTopicNotOneInboxSection,
  CommonQuestionsSection,
} from "@/components/privacy-policy";

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyPolicySection />
      <WhoThisPolicyAppliesToSection />
      <VerifiedControllerOperatorProcessorRolesSection />
      <PersonalDataWeCollectSection />
      <SpecificPurposesNotBusinessPurposesSection />
      <CookiesAndSimilarTechnologiesSection />
      <RecipientCategoriesPurposeAndControlBoundariesSection />
      <TransferMechanismsAndResidencySection />
      <RetentionDeletionAndLegalHoldsSection />
      <PrivacySecurityAndConfidentialityControlsSection />
      <AiAutomationAndProfilingSection />
      <ActionFirstNoLegalArticleGuessworkRequiredSection />
      <NoInventedAgeThresholdOrChildDirectedClaimSection />
      <SeparatingConsumerWebsiteDataFromCustomerControlledDataSection />
      <GlobalBaselinePlusJurisdictionSpecificRightsSection />
      <VersionedDatedNeverSilentlyEditedSection />
      <RoutedByTopicNotOneInboxSection />
      <CommonQuestionsSection />
    </main>
  );
}
