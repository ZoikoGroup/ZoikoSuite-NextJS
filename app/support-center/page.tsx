import {
  SupportCenterSection,
  PopularHelp,
  BrowseByProductOrIssue,
  SearchResults,
  GuidedTroubleshootingWorkspace,
  ContactSupport,
  SubmitSupportRequest,
  SubmissionConfirmation,
  MySupportRequests,
  SpecialistAuthorityHandoffs,
  EnterpriseSupportCTA,
  SupportCenterFAQ,
} from "@/components/support-center";

export default function SupportCenterPage() {
  return (
    <main>
      <SupportCenterSection />
      <PopularHelp />
      <BrowseByProductOrIssue />
      <SearchResults />
      <GuidedTroubleshootingWorkspace />
      <ContactSupport />
      <SubmitSupportRequest />
      <SubmissionConfirmation />
      <MySupportRequests />
      <SpecialistAuthorityHandoffs />
      <EnterpriseSupportCTA />
      <SupportCenterFAQ />
    </main>
  );
}
