import {
  SolutionBriefHeroSection,
  WhatIsZoikoSuiteSection,
  OperatingModelSection,
  ArchitectureLayersSection,
  WhereItFitsSection,
  GovernanceClaimsSection,
  AdoptionAndProofSection,
  BookDemoSection,
  FaqSection,
} from "@/components/solution-brief";

export default function SolutionBriefPage() {
  return (
    <main>
      <SolutionBriefHeroSection />
      <WhatIsZoikoSuiteSection />
      <OperatingModelSection />
      <ArchitectureLayersSection />
      <WhereItFitsSection />
      <GovernanceClaimsSection />
      <AdoptionAndProofSection />
      <BookDemoSection />
      <FaqSection />
    </main>
  );
}
