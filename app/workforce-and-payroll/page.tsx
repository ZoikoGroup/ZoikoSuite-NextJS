import {
  HeroSection,
  DefiningPropertiesSection,
  LifecycleSection,
  CapabilityExplorerSection,
  RoleLensSection,
  IntegrationArchitectureSection,
  ScenarioSection,
  TrustSection,
  OutcomesSection,
  LeadCaptureSection,
  FaqSection,
} from "@/components/workforce-and-payroll";

export const metadata = {
  title: "Workforce & Payroll | ZoikoSuite",
  description:
    "Connect workforce inputs, review checkpoints, exceptions, and payroll handoffs with clear ownership and evidence.",
};

export default function WorkforceAndPayrollPage() {
  return (
    <main>
      <HeroSection />
      <DefiningPropertiesSection />
      <LifecycleSection />
      <CapabilityExplorerSection />
      <RoleLensSection />
      <IntegrationArchitectureSection />
      <ScenarioSection />
      <TrustSection />
      <OutcomesSection />
      <LeadCaptureSection />
      <FaqSection />
    </main>
  );
}
