import type { Metadata } from "next";
import {
  EnterpriseSalesHero,
  EnterprisePriorities,
  EnterpriseTopics,
  EnterpriseSteps,
  EnterpriseRoutes,
  EnterpriseConsideredConversation,
  EnterpriseFaq,
  EnterpriseClosingCta,
  EnterpriseInquiryForm,
} from "@/components/enterprise-sales";

export const metadata: Metadata = {
  title: "Enterprise Sales · ZoikoSuite",
  description:
    "Let’s discuss your enterprise priorities. Tell us what you need to evaluate across teams, operations, or business functions. We’ll direct your inquiry to the appropriate team.",
};

export default function EnterpriseSalesPage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <EnterpriseSalesHero />
      <EnterprisePriorities />
      <EnterpriseTopics />
      <EnterpriseSteps />
      <EnterpriseRoutes />
      <EnterpriseConsideredConversation />
      <EnterpriseFaq />
      <EnterpriseClosingCta />
      <EnterpriseInquiryForm />
    </main>
  );
}
