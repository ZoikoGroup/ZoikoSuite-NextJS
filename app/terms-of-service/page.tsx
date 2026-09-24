import {
  TermsBreadcrumbSection,
  TermsMastheadSection,
  TermsMetadataBarSection,
  TermsReadingFrameSection,
} from "@/components/terms-of-service";

export const metadata = {
  title: "Terms of Service | ZoikoSuite",
  description:
    "The rules that apply when you access or use ZoikoSuite services and websites. Review the effective version, navigate by section, or download a copy for your records.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#FBFAF7]">
      <TermsBreadcrumbSection />
      <TermsMastheadSection />
      <TermsMetadataBarSection />
      <TermsReadingFrameSection />
    </main>
  );
}
