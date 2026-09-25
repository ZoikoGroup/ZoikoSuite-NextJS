import {
  PrivacyRightsSection,
  JurisdictionRouterSection,
  RightsSelectorSection,
  RequestFormSection,
  VerificationArchitectureSection,
  ReviewConsentAndSubmissionSection,
  ReceiptStatusSection,
  RequestLifecycleSection,
  AuthorizedAgentFlowSection,
  CustomerRoutingSection,
  SalesAlignmentSection,
  CommonQuestionsPrivacySection,
} from "@/components/consumer-rights";

export default function ConsumerRightsPage() {
  return (
    <main>
      <PrivacyRightsSection />
      <JurisdictionRouterSection />
      <RightsSelectorSection />
      <RequestFormSection />
      <VerificationArchitectureSection />
      <ReviewConsentAndSubmissionSection />
      <ReceiptStatusSection />
      <RequestLifecycleSection />
      <AuthorizedAgentFlowSection />
      <CustomerRoutingSection />
      <SalesAlignmentSection />
      <CommonQuestionsPrivacySection />
    </main>
  );
}
