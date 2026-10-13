import {
  HeroSection,
  EditorialSection,
  PathwaysSection,
  ProcessSection,
  EnquiryFormSection,
  DirectorySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/uk-european-partnerships";

export const metadata = {
  title: "UK and European Partnerships | ZoikoSuite",
  description:
    "Explore a partnership built around clear business goals — tell us about the collaboration you are considering in the UK or Europe.",
};

export default function UkEuropeanPartnershipsPage() {
  return (
    <main>
      <HeroSection />
      <EditorialSection />
      <PathwaysSection />
      <ProcessSection />
      <EnquiryFormSection />
      <DirectorySection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
