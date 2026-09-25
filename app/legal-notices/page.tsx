import {
  LegalNoticesMastheadSection,
  LegalIdentityAtAGlanceSection,
  OperatorInformationSection,
  CopyrightIpNoticeSection,
  TrademarkNoticeSection,
  ProductAvailabilityNoticeSection,
  StandardsAssuranceSection,
  ProfessionalAdviceBoundarySection,
  ThirdPartyContentSection,
  FormalNoticesRoutingSection,
  LocationsContactRoutingSection,
  RelatedLegalDocumentsSection,
  TrustCrossLinksSection,
  VersionControlSection,
  LegalFaqSection,
} from "@/components/legal-notices";

export const metadata = {
  title: "Legal Notices | ZoikoSuite",
  description:
    "Corporate, intellectual-property, availability, professional-advice, and website notices for ZoikoSuite — with authoritative links to the legal documents that govern specific topics.",
};

export default function LegalNoticesPage() {
  return (
    <main className="bg-[#FBFAF7]">
      <LegalNoticesMastheadSection />
      <LegalIdentityAtAGlanceSection />
      <OperatorInformationSection />
      <CopyrightIpNoticeSection />
      <TrademarkNoticeSection />
      <ProductAvailabilityNoticeSection />
      <StandardsAssuranceSection />
      <ProfessionalAdviceBoundarySection />
      <ThirdPartyContentSection />
      <FormalNoticesRoutingSection />
      <LocationsContactRoutingSection />
      <RelatedLegalDocumentsSection />
      <TrustCrossLinksSection />
      <VersionControlSection />
      <LegalFaqSection />
    </main>
  );
}
