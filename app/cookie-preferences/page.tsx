import {
  CookiePreferencesHeaderSection,
  CategoryControlsSection,
  SignalsAreInputsToTheSameResolverSection,
  WhatThisChoiceAppliesToSection,
  AToggleIsNotAValidControlUntilItsEnforcedSection,
  ErrorsNeverSilentlyDefaultToAcceptanceSection,
  OnOfIsAFirstClassJourneySection,
  ConnectedNotDuplicativeSection,
  CommonQuestionsAlternativeSection,
} from "@/components/cookie-preferences";

export default function CookiePreferencesPage() {
  return (
    <main>
      <CookiePreferencesHeaderSection />
      <CategoryControlsSection />
      <SignalsAreInputsToTheSameResolverSection />
      <WhatThisChoiceAppliesToSection />
      <AToggleIsNotAValidControlUntilItsEnforcedSection />
      <ErrorsNeverSilentlyDefaultToAcceptanceSection />
      <OnOfIsAFirstClassJourneySection />
      <ConnectedNotDuplicativeSection />
      <CommonQuestionsAlternativeSection />
    </main>
  );
}
