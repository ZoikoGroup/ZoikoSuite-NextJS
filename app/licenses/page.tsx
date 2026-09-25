import {
  LicensesAndThirdPartyNoticesSection,
  PreventingTheMostCommonLicensingConfusionSection,
  PublicLicenseRegistrySection,
  SummaryNeverReplacesTheOperativeTextSection,
  ReproducibleFromTheRegistrySection,
  NotEveryDependencyCanOrShouldPublishContractualTermsSection,
  SourceFulfillmentSection,
  DisclosedSeparatelySection,
  SdkRightsSection,
  DistributionNoticeMatrixSection,
  SbomBridgeSection,
  LicenseCompatibilitySection,
  HistoricalNoticesSection,
  LicensingRequestsSection,
  EnterpriseProcurementSection,
  CommonQuestionsSection,
} from "@/components/licenses";

export default function LicensesPage() {
  return (
    <main>
      <LicensesAndThirdPartyNoticesSection />
      <PreventingTheMostCommonLicensingConfusionSection />
      <PublicLicenseRegistrySection />
      <SummaryNeverReplacesTheOperativeTextSection />
      <ReproducibleFromTheRegistrySection />
      <NotEveryDependencyCanOrShouldPublishContractualTermsSection />
      <SourceFulfillmentSection />
      <DisclosedSeparatelySection />
      <SdkRightsSection />
      <DistributionNoticeMatrixSection />
      <SbomBridgeSection />
      <LicenseCompatibilitySection />
      <HistoricalNoticesSection />
      <LicensingRequestsSection />
      <EnterpriseProcurementSection />
      <CommonQuestionsSection />
    </main>
  );
}
