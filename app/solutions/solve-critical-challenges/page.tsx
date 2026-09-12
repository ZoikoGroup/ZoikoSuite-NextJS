import {
  SolveCriticalChallengesHeroSection,
  WhatDoesSolveMeanSection,
  SystemsOfRecordStaySection,
  TheTenChallengesSection,
  OneNewEntitySixChallengesSection,
  WhatEachChallengeDoesNotEstablishSection,
  TheSamePatternInEveryChallengeSection,
  WhyNoChallengeLinksToChildPageSection,
  WhereChallengeClaimsGetVerifiedSection,
  BringTheChallengeThatKeepsRecurringSection,
  ScopeBoundariesRoutesFAQSection,
  GovernGlobalOperationsSolveCTA,
} from "@/components/solve-critical-challenges";

export const metadata = {
  title: "Solve Critical Challenges | ZoikoSuite",
  description:
    "Solve critical challenges without separating execution from governance. Recognize operating challenges and evaluate governed operating models.",
};

export default function SolveCriticalChallengesPage() {
  return (
    <main>
      <SolveCriticalChallengesHeroSection />
      <WhatDoesSolveMeanSection />
      <SystemsOfRecordStaySection />
      <TheTenChallengesSection />
      <OneNewEntitySixChallengesSection />
      <WhatEachChallengeDoesNotEstablishSection />
      <TheSamePatternInEveryChallengeSection />
      <WhyNoChallengeLinksToChildPageSection />
      <WhereChallengeClaimsGetVerifiedSection />
      <BringTheChallengeThatKeepsRecurringSection />
      <ScopeBoundariesRoutesFAQSection />
      <GovernGlobalOperationsSolveCTA />
    </main>
  );
}
