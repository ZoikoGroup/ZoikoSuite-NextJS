import Link from "next/link";
import {
  GeneralCounselHeroSection,
  WhatDoesZoikoSuiteProvideSection,
  SourceFirstHumanJudgmentSection,
  ContractDocumentSystemsAuthoritativeSection,
  TwoLayersNeverTheSameSection,
  SummaryFirstDetailOnRequestSection,
  SourceChangeNotLegalConclusionSection,
  EverySupportPointDeclaresAnchoredSection,
  CoverageNeverTravelsWithoutSourceSection,
  ClassificationSupportsPolicySection,
  DiligenceRoutesLegalReviewSection,
  WhatAnEvaluationCanCoverSection,
  GeneralCounselFAQSection,
  GovernGlobalOperationsGeneralCounselCTA,
} from "@/components/general-counsel";

export const metadata = {
  title: "For General Counsel | ZoikoSuite",
  description:
    "Keep legal obligations connected to the decisions they govern. Connect contracts, obligations, jurisdiction context, authority, approvals and evidence to business execution.",
};

export default function GeneralCounselPage() {
  return (
    <main>
      {/* Mobile Top Breadcrumbs Bar */}
      <div className="block lg:hidden w-full bg-white border-b border-slate-200 px-4 sm:px-6 py-2.5 text-[11.5px] text-slate-500 font-normal">
        <Link href="/" className="text-[#0284c7] hover:underline">
          Home
        </Link>
        <span className="mx-1.5 text-slate-400">/</span>
        <Link href="/solutions" className="text-[#0284c7] hover:underline">
          Solutions
        </Link>
        <span className="mx-1.5 text-slate-400">/</span>
        <span className="text-slate-900 font-semibold">General Counsel</span>
      </div>

      <GeneralCounselHeroSection />
      <WhatDoesZoikoSuiteProvideSection />
      <SourceFirstHumanJudgmentSection />
      <ContractDocumentSystemsAuthoritativeSection />
      <TwoLayersNeverTheSameSection />
      <SummaryFirstDetailOnRequestSection />
      <SourceChangeNotLegalConclusionSection />
      <EverySupportPointDeclaresAnchoredSection />
      <CoverageNeverTravelsWithoutSourceSection />
      <ClassificationSupportsPolicySection />
      <DiligenceRoutesLegalReviewSection />
      <WhatAnEvaluationCanCoverSection />
      <GeneralCounselFAQSection />
      <GovernGlobalOperationsGeneralCounselCTA />
    </main>
  );
}
