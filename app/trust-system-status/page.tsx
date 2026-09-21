import {
  HeroSection,
  DataTrustSection,
  ComponentStatusSection,
  RegionDeploymentSection,
  ActiveIncidentSection,
  ScheduledMaintenanceSection,
  ReliabilityHistorySection,
  IncidentHistorySection,
  PostIncidentReviewSection,
  StatusNotificationsSection,
  EnterpriseStatusSection,
  SystemStatusFAQSection,
} from "@/components/trust-system-status";

export default function TrustSystemStatusPage() {
  return (
    <main>
      <HeroSection />
      <DataTrustSection />
      <ComponentStatusSection />
      <RegionDeploymentSection />
      <ActiveIncidentSection />
      <ScheduledMaintenanceSection />
      <ReliabilityHistorySection />
      <IncidentHistorySection />
      <PostIncidentReviewSection />
      <StatusNotificationsSection />
      <EnterpriseStatusSection />
      <SystemStatusFAQSection />
    </main>
  );
}
