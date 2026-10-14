import {
  HeroSection,
  TopicsSection,
  ProcessSection,
  EnquiryFormSection,
  ConversationSection,
  DirectorySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/european-enterprise-sales";

export const metadata = {
  title: "European Enterprise Sales | ZoikoSuite",
  description:
    "Talk with our European enterprise sales team about a multi-entity rollout — markets, constraints, stakeholders, and timeline.",
};

export default function EuropeanEnterpriseSalesPage() {
  return (
    <main>
      <HeroSection />
      <TopicsSection />
      <ProcessSection />
      <EnquiryFormSection />
      <ConversationSection />
      <DirectorySection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
