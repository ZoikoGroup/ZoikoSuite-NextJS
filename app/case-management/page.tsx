import React from "react";
import CaseManagementHero from "@/components/case-management/CaseManagementHero";
import CaseOverviewSection from "@/components/case-management/CaseOverviewSection";
import InvestigationSection from "@/components/case-management/InvestigationSection";
import EvidenceSection from "@/components/case-management/EvidenceSection";
import CommunicationsSection from "@/components/case-management/CommunicationsSection";
import DecisionHistorySection from "@/components/case-management/DecisionHistorySection";
import AuthorityAndHandoffsSection from "@/components/case-management/AuthorityAndHandoffsSection";
import AssistanceSection from "@/components/case-management/AssistanceSection";
import TrustAndProofSection from "@/components/case-management/TrustAndProofSection";
import FAQSection from "@/components/case-management/FAQSection";
import FinalConversionSection from "@/components/case-management/FinalConversionSection";

export default function CaseManagementPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col justify-start items-center overflow-x-hidden">
      <CaseManagementHero />
      <CaseOverviewSection />
      <InvestigationSection />
      <EvidenceSection />
      <CommunicationsSection />
      <DecisionHistorySection />
      <AuthorityAndHandoffsSection />
      <AssistanceSection />
      <TrustAndProofSection />
      <FAQSection />
      <FinalConversionSection />
    </main>
  );
}
