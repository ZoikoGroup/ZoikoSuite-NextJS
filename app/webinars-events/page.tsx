import type { Metadata } from "next";
import {
  WebinarsEventsHeroSection,
  EditorialDiscoverySection,
  EventCatalogSection,
  EventDetailTemplateSection,
  RegistrationSection,
  ConfirmationCalendarSection,
  LiveJoinAccessSection,
  OnDemandReplaySection,
  EnterpriseEnablementSection,
  RelatedResourcesSection,
  WebinarsFAQSection,
} from "@/components/webinars-events";

export const metadata: Metadata = {
  title: "Webinars & Events | ZoikoSuite",
  description:
    "Explore approved ZoikoSuite webinars and events for product learning, practical guidance, executive evaluation, and deeper conversations.",
};

export default function WebinarsEventsPage() {
  return (
    <main className="w-full min-h-screen">
      <WebinarsEventsHeroSection />
      <EditorialDiscoverySection />
      <EventCatalogSection />
      <EventDetailTemplateSection />
      <RegistrationSection />
      <ConfirmationCalendarSection />
      <LiveJoinAccessSection />
      <OnDemandReplaySection />
      <EnterpriseEnablementSection />
      <RelatedResourcesSection />
      <WebinarsFAQSection />
    </main>
  );
}
