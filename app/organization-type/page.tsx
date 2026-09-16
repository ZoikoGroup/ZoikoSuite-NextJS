import {
  OrganizationSection,
  OrganizationTypeExplanation,
  NinePatternsSection,
  TwoSeparateAxesSection,
  SharedGovernanceSection,
  ProductProofSection,
  ComparePatternsSection,
  TransitionWithoutInventingSection,
  HumanAuthoritySection,
  TechnicalAndTrustDiligenceSection,
  BookEnterpriseDemoSection,
  FAQSection,
} from "@/components/organization-type";

export default function OrganizationType() {
  return (
    <main>
      <OrganizationSection />
      <OrganizationTypeExplanation />
      <NinePatternsSection />
      <TwoSeparateAxesSection />
      <SharedGovernanceSection />
      <ProductProofSection />
      <ComparePatternsSection />
      <TransitionWithoutInventingSection />
      <HumanAuthoritySection />
      <TechnicalAndTrustDiligenceSection />
      <BookEnterpriseDemoSection />
      <FAQSection />
    </main>
  );
}
