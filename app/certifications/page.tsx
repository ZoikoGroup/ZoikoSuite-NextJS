import { Metadata } from "next";
import {
  CertificationsHero,
  AtAGlanceSection,
  AssuranceRegistrySection,
  HowToReadAssuranceSection,
  ScopeIsMandatorySection,
  EvidenceAccessSection,
  ReadinessRoadmapSection,
  IndependentValidationSection,
  FrameworkAlignmentSection,
  ProcurementReviewSection,
  LifecycleRenewalSection,
  RelatedTrustAreasSection,
  CertificationsFaqSection,
} from "@/components/certifications";

export const metadata: Metadata = {
  title: "Certifications & Independent Assurance | ZoikoSuite",
  description:
    "Review ZoikoSuite certifications, attestations, independent assessments, and readiness status with the scope, dates, issuer, evidence-access path, and limitations needed for enterprise diligence.",
};

export default function CertificationPage() {
  return (
    <main className="w-full min-h-screen bg-color-white-solid">
      <CertificationsHero />
      <AtAGlanceSection />
      <AssuranceRegistrySection />
      <HowToReadAssuranceSection />
      <ScopeIsMandatorySection />
      <EvidenceAccessSection />
      <ReadinessRoadmapSection />
      <IndependentValidationSection />
      <FrameworkAlignmentSection />
      <ProcurementReviewSection />
      <LifecycleRenewalSection />
      <RelatedTrustAreasSection />
      <CertificationsFaqSection />
    </main>
  );
}
