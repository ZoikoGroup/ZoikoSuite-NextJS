import {
  AccessibilityHeroSection,
  AccessibilityPrinciplesSection,
  AccessibilityStatusScopeSection,
  WhatIsBuiltAndTestedSection,
  WhereEnterpriseSoftwareFailsSection,
  TestingAndAssistiveTechnologySection,
  KnownLimitationsSection,
  AccessibilityIssueReportSection,
  ProcurementEvidenceSection,
  TestThisPageSection,
  AccessibilityFaqSection,
} from "@/components/accessibility";

export default function AccessibilityPage() {
  return (
    <main>
      <AccessibilityHeroSection />
      <AccessibilityPrinciplesSection />
      <AccessibilityStatusScopeSection />
      <WhatIsBuiltAndTestedSection />
      <WhereEnterpriseSoftwareFailsSection />
      <TestingAndAssistiveTechnologySection />
      <KnownLimitationsSection />
      <AccessibilityIssueReportSection />
      <ProcurementEvidenceSection />
      <TestThisPageSection />
      <AccessibilityFaqSection />
    </main>
  );
}
