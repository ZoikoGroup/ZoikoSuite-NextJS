import {
  PrivacyHero,
  PrivacyPathways,
  PrivacyProcess,
  ApprovedPrivacySources,
  PrivacyDirectory,
  PrivacyEnquiryForm,
  PrivacyCta,
  PrivacyCommonQuestions,
} from "@/components/privacy-data-protection";

export default function PrivacyDataProtectionPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyPathways />
      <PrivacyProcess />
      <ApprovedPrivacySources />
      <PrivacyDirectory />
      <PrivacyEnquiryForm />
      <PrivacyCta />
      <PrivacyCommonQuestions />
    </main>
  );
}
