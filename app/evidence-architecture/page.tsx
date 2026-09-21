import {
  EvidenceArchitectureSection,
  SixLayerEvidenceModel,
  EvidenceControlPlaneSection,
  IntegrityControlsSection,
  EvidenceManifestsSection,
  EvidenceStatesSection,
  AuditPackagesSection,
  ProofAndValidationLadderSection,
  EvidenceArchitectureReview,
  SolutionsArchitectSection,
  FAQSection,
} from "@/components/evidence-architecture";

export default function EvidenceArchitecturePage() {
  return (
    <main>
      <EvidenceArchitectureSection />
      <SixLayerEvidenceModel />
      <EvidenceControlPlaneSection />
      <IntegrityControlsSection />
      <EvidenceManifestsSection />
      <EvidenceStatesSection />
      <AuditPackagesSection />
      <ProofAndValidationLadderSection />
      <EvidenceArchitectureReview />
      <SolutionsArchitectSection />
      <FAQSection />
    </main>
  );
}
