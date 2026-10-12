import {
  PartnerHero,
  PartnerExploreTopics,
  PartnerCollaborationPath,
  ThoughtfulCollaboration,
  PartnerEnquiryForm,
  PartnerCta,
  PartnerCommonQuestions,
  PartnerDirectory,
} from "@/components/partner-enquiries";

export default function PartnerEnquiriesPage() {
  return (
    <main>
      <PartnerHero />
      <PartnerExploreTopics />
      <PartnerCollaborationPath />
      <ThoughtfulCollaboration />
      <PartnerEnquiryForm />
      <PartnerCta />
      <PartnerCommonQuestions />
      <PartnerDirectory />
    </main>
  );
}
