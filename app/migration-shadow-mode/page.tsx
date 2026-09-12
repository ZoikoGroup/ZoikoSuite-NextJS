import {
  MigrationShadowModeHeroSection,
  WhatIsMigrationShadowModeSection,
  SevenPhasesNoPromisedDurationSection,
  CurrentTruthFirstTargetSecondSection,
  FiveOutcomesRecordedPerScopeSection,
  CorrectingDataSeparateAuthoritySection,
  StateBoundaryBeforeShowingComparisonSection,
  CurrentVersusProposedCauseNamedSection,
  WhatWasActuallyTestedSection,
  EightDispositionsSection,
  FifteenGatesSection,
  ReversibilityStatedTruthfullySection,
  MigrationShadowModeFaqSection,
  WhereMigrationClaimsGetVerifiedSection,
  StartFromProcessYouWouldNotRiskBreakingSection,
  MigrationGovernGlobalOperationsSection,
} from "@/components/migration-shadow-mode";

export const metadata = {
  title: "Migration & Shadow Mode | ZoikoSuite",
  description:
    "Prove the operating model before production activation. Map current systems, validate data and evidence, and compare proposed behavior with current operation.",
};

export default function MigrationShadowModePage() {
  return (
    <main>
      <MigrationShadowModeHeroSection />
      <WhatIsMigrationShadowModeSection />
      <SevenPhasesNoPromisedDurationSection />
      <CurrentTruthFirstTargetSecondSection />
      <FiveOutcomesRecordedPerScopeSection />
      <CorrectingDataSeparateAuthoritySection />
      <StateBoundaryBeforeShowingComparisonSection />
      <CurrentVersusProposedCauseNamedSection />
      <WhatWasActuallyTestedSection />
      <EightDispositionsSection />
      <FifteenGatesSection />
      <ReversibilityStatedTruthfullySection />

      {/* Desktop FAQ section position (untouched for desktop) */}
      <div className="hidden lg:block">
        <MigrationShadowModeFaqSection />
      </div>

      <WhereMigrationClaimsGetVerifiedSection />
      <StartFromProcessYouWouldNotRiskBreakingSection />

      {/* Mobile FAQ section position (strictly matches mobile flow) */}
      <div className="block lg:hidden">
        <MigrationShadowModeFaqSection />
      </div>

      {/* Mobile Next Step CTA & Insights Subscription Footer */}
      <MigrationGovernGlobalOperationsSection />
    </main>
  );
}
