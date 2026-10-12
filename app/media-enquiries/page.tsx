import type { Metadata } from "next";
import {
  MediaEnquiriesHero,
  MediaEnquiriesPriorities,
  MediaEnquiriesTopics,
  MediaEnquiriesReviewSteps,
  MediaEnquiriesClosingCta,
  MediaEnquiriesRoutes,
  MediaEnquiriesFaq,
  MediaEnquiriesContext,
  MediaEnquiriesForm,
} from "@/components/media-enquiries";

export const metadata: Metadata = {
  title: "Media Enquiries · ZoikoSuite",
  description:
    "Media enquiries for ZoikoSuite. Send editorial questions, interview requests, media-asset inquiries, or requests for verified company information to the appropriate team.",
};

export default function MediaEnquiriesPage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <MediaEnquiriesHero />
      <MediaEnquiriesPriorities />
      <MediaEnquiriesTopics />
      <MediaEnquiriesReviewSteps />
      <MediaEnquiriesClosingCta />
      <MediaEnquiriesRoutes />
      <MediaEnquiriesFaq />
      <MediaEnquiriesContext />
      <MediaEnquiriesForm />
    </main>
  );
}
