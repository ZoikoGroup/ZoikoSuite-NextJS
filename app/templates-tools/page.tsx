import { Metadata } from "next";
import {
  TemplatesToolsHero,
  ApprovedJobs,
  TheCatalog,
  UtilityCardAnatomy,
  AssetDetailContract,
  PreviewDownloadDelivery,
  UtilityStateContract,
  InteractiveToolWorkspace,
  MethodologyDataHandling,
  WhereToGoMeanwhile,
  RequestTemplateTool,
  FrequentlyAskedQuestions,
} from "@/components/templates-tools";

export const metadata: Metadata = {
  title: "Templates & Tools | ZoikoSuite",
  description: "Practical resources for planning, evaluating, and getting work done.",
};

export default function TemplatesToolsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <TemplatesToolsHero />
      <ApprovedJobs />
      <TheCatalog />
      <UtilityCardAnatomy />
      <UtilityStateContract />
      <AssetDetailContract />
      <PreviewDownloadDelivery />
      <InteractiveToolWorkspace />
      <MethodologyDataHandling />
      <WhereToGoMeanwhile />
      <RequestTemplateTool />
      <FrequentlyAskedQuestions />
    </main>
  );
}
