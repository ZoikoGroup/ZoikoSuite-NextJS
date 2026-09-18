import React from "react";
import HeroSection from "@/components/integration-catalog/HeroSection";
import TrustStripSection from "@/components/integration-catalog/TrustStripSection";
import DiscoveryToolbar from "@/components/integration-catalog/DiscoveryToolbar";
import CategoryNavigationSection from "@/components/integration-catalog/CategoryNavigationSection";
import ResultsGridSection from "@/components/integration-catalog/ResultsGridSection";
import DetailDrawerSection from "@/components/integration-catalog/DetailDrawerSection";
import EvidenceGovernanceSection from "@/components/integration-catalog/EvidenceGovernanceSection";
import WorkflowExamplesSection from "@/components/integration-catalog/WorkflowExamplesSection";
import PlatformOperationsSection from "@/components/integration-catalog/PlatformOperationsSection";
import RequestIntegrationSection from "@/components/integration-catalog/RequestIntegrationSection";
import EnterpriseCTASection from "@/components/integration-catalog/EnterpriseCTASection";
import FAQSection from "@/components/integration-catalog/FAQSection";

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] flex flex-col items-center justify-start overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Strip Section */}
      <TrustStripSection />

      {/* 3. Discovery Toolbar & Filter Bar */}
      <DiscoveryToolbar />

      {/* 4. Category Navigation (Browse by System Tier) */}
      <CategoryNavigationSection />

      {/* 5. Results Grid (All Integrations) */}
      <ResultsGridSection />

      {/* 6. Connector Detail Drawer (CrowdStrike Falcon Preview) */}
      <DetailDrawerSection />

      {/* 7. Cryptographic Lineage (Evidence Governance) */}
      <EvidenceGovernanceSection />

      {/* 8. Continuous Assurance Flow Examples */}
      <WorkflowExamplesSection />

      {/* 9. Platform Operations & Access Controls */}
      <PlatformOperationsSection />

      {/* 10. Request a Custom Integration Form */}
      <RequestIntegrationSection />

      {/* 11. Enterprise CTA Section */}
      <EnterpriseCTASection />

      {/* 12. Frequently Asked Questions (FAQ) */}
      <FAQSection />
    </main>
  );
}
