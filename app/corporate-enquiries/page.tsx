import {
  CorporateEnquiries,
  CorporateFeatures,
  EnquiryTopics,
  CorporateTopicsAccordion,
  ThoughtfulCorrespondence,
  CorrespondencePath,
  HeadquartersDirectory,
  CommonQuestions,
  CorporateCta,
  CorporateEnquiryForm,
} from "@/components/corporate-enquiries";

export default function CorporateEnquiriesPage() {
  return (
    <main>
      <CorporateEnquiries />
      <CorporateFeatures />
      <EnquiryTopics />
      <CorporateTopicsAccordion />
      <ThoughtfulCorrespondence />
      <CorrespondencePath />
      <HeadquartersDirectory />
      <CommonQuestions />
      <CorporateCta />
      <CorporateEnquiryForm />
    </main>
  );
}
