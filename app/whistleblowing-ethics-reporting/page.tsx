import {
  HeroSection,
  WrongChannelRoutingSection,
  WhatYouCanReportSection,
  ProtectionSection,
  ReportingModeSection,
  HowReportingWorksSection,
  ReportWorkflowSection,
  ReviewSubmitSection,
  ConfirmationSection,
  SecureStatusCenterSection,
  ExternalReportingSection,
  PrivacyRetentionSection,
  FaqSection,
} from "@/components/whistleblowing-ethics-reporting";

export const metadata = {
  title: "Whistleblowing & Ethics Reporting | ZoikoSuite",
  description:
    "Report suspected misconduct, unethical behavior, policy violations or other eligible concerns through a confidential, carefully governed process.",
};

export default function WhistleblowingEthicsReportingPage() {
  return (
    <main>
      <HeroSection />
      <WrongChannelRoutingSection />
      <WhatYouCanReportSection />
      <ProtectionSection />
      <ReportingModeSection />
      <HowReportingWorksSection />
      <ReportWorkflowSection />
      <ReviewSubmitSection />
      <ConfirmationSection />
      <SecureStatusCenterSection />
      <ExternalReportingSection />
      <PrivacyRetentionSection />
      <FaqSection />
    </main>
  );
}
