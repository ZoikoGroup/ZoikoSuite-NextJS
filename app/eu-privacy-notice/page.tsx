import {
  EuPrivacyNoticeSection,
  PrivacySnapshotSection,
  PrivacyNoticePage,
} from "@/components/eu-privacy-notice";

export default function EuPrivacyNoticePage() {
  return (
    <main>
      <EuPrivacyNoticeSection />
      <PrivacySnapshotSection />
      <PrivacyNoticePage />
    </main>
  );
}
