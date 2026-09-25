import {
  CpnMastheadSection,
  AtAGlanceSummarySection,
  CpnReadingFrameSection,
} from "@/components/california-privacy-notice";

export const metadata = {
  title: "California Privacy Notice | ZoikoSuite",
  description:
    "California-specific privacy disclosures and consumer rights for ZoikoSuite — scope, personal-information categories, sale/sharing treatment, requests, and related legal destinations.",
};

export default function CaliforniaPrivacyNoticePage() {
  return (
    <main className="bg-[#FBFAF7]">
      <CpnMastheadSection />
      <AtAGlanceSummarySection />
      <CpnReadingFrameSection />
    </main>
  );
}
