import type { Metadata } from "next";
import {
  UkPrivacyHeroSection,
  AtAGlanceSection,
  UkPrivacyNoticeReadingFrame,
} from "@/components/uk-privacy-notice";

export const metadata: Metadata = {
  title: "UK Privacy Notice | ZoikoSuite",
  description:
    "Review the ZoikoSuite UK Privacy Notice including controller identity, data categories, legal bases, retention, international transfers, and your UK privacy rights.",
};

export default function UkPrivacyNoticePage() {
  return (
    <main className="w-full min-h-screen bg-[#FBFAF7]">
      <UkPrivacyHeroSection />
      <AtAGlanceSection />
      <UkPrivacyNoticeReadingFrame />
    </main>
  );
}
