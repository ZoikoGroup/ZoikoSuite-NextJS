import {
  RegionalHero,
  RegionalSupportPathways,
  RegionalProcess,
  RegionalEnquiryForm,
  RegionalDirectory,
  RegionalCommonQuestions,
  RegionalCta,
} from "@/components/regional-support";

export default function RegionalSupportPage() {
  return (
    <main>
      <RegionalHero />
      <RegionalSupportPathways />
      <RegionalProcess />
      <RegionalEnquiryForm />
      <RegionalDirectory />
      <RegionalCommonQuestions />
      <RegionalCta />
    </main>
  );
}
