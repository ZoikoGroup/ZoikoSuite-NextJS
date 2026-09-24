import { Metadata } from "next";
import {
  SubprocessorListHero,
  ScopeClassification,
  CurrentSubprocessorRegistry,
  SubprocessorDetail,
  ProcessingLocation,
  AuthorizationSafeguards,
  ChangeNoticeCenter,
  ObjectionRoute,
  DiligenceEvidence,
  DeploymentVariants,
  HistoricalChanges,
  FrequentlyAsked
} from "@/components/subprocessor-list";

export const metadata: Metadata = {
  title: "Subprocessor List | ZoikoSuite",
  description: "Know which subprocessors support ZoikoSuite.",
};

export default function SubprocessorListPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-color-grey-98-8">
      <SubprocessorListHero />
      <ScopeClassification />
      <CurrentSubprocessorRegistry />
      <SubprocessorDetail />
      <ProcessingLocation />
      <AuthorizationSafeguards />
      <ChangeNoticeCenter />
      <ObjectionRoute />
      <DiligenceEvidence />
      <DeploymentVariants />
      <HistoricalChanges />
      <FrequentlyAsked />
    </main>
  );
}
