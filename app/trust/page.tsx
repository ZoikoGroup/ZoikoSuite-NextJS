import { Metadata } from "next";
import {
  HeroSection,
  HowTrustWorksSection,
  DomainDirectorySection,
  SecurityOverviewSection,
  ComplianceSection,
  PrivacyResidencySection,
  EvidenceArchitectureSection,
  ResponsibleAiSection,
  AccessibilitySection,
  PoliciesSection,
  SystemStatusSection,
  EvidenceAccessSection,
  FindYourPathSection,
  FaqSection,
} from "@/components/trust";

export const metadata: Metadata = {
  title: "Trust | ZoikoSuite",
  description:
    "Trust you can inspect, not just accept — security, privacy, compliance, data residency, evidence, responsible AI, accessibility, policies, certifications, and service transparency.",
};

export default function TrustPage() {
  return (
    <main>
      <HeroSection />
      <HowTrustWorksSection />
      <DomainDirectorySection />
      <SecurityOverviewSection />
      <ComplianceSection />
      <PrivacyResidencySection />
      <EvidenceArchitectureSection />
      <ResponsibleAiSection />
      <AccessibilitySection />
      <PoliciesSection />
      <SystemStatusSection />
      <EvidenceAccessSection />
      <FindYourPathSection />
      <FaqSection />
    </main>
  );
}
