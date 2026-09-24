import {
  CookiePolicySection,
  FiveCategoriesComputedFromTheRegistrySection,
  MoreThanBrowserCookiesSection,
  PurposeArchitectureSection,
  StrictlyNecessaryTechnologiesSection,
  VerifiedVendorsSection,
  CompleteTechnologyInventorySection,
  ConsentAndChoiceModelSection,
  CookiePreferencesSection,
  RecognizedSignalsSection,
  CookieDurationAndServerSideRetentionSection,
  PreventingEnterpriseMisunderstandingSection,
  FreshConsentWhenTheSubstanceChangesSection,
  CommonQuestionsSection,
} from "@/components/cookie-policy";

export default function CookiePolicyPage() {
  return (
    <main>
      <CookiePolicySection />
      <FiveCategoriesComputedFromTheRegistrySection />
      <MoreThanBrowserCookiesSection />
      <PurposeArchitectureSection />
      <StrictlyNecessaryTechnologiesSection />
      <VerifiedVendorsSection />
      <CompleteTechnologyInventorySection />
      <ConsentAndChoiceModelSection />
      <CookiePreferencesSection />
      <RecognizedSignalsSection />
      <CookieDurationAndServerSideRetentionSection />
      <PreventingEnterpriseMisunderstandingSection />
      <FreshConsentWhenTheSubstanceChangesSection />
      <CommonQuestionsSection />
    </main>
  );
}
