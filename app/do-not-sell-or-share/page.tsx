import HeroSection from '@/components/do-not-sell-or-share/HeroSection';
import StatusStatesSection from '@/components/do-not-sell-or-share/StatusStatesSection';
import GpcSignalExperienceSection from '@/components/do-not-sell-or-share/GpcSignalExperienceSection';
import WhatThisChoiceMeansSection from '@/components/do-not-sell-or-share/WhatThisChoiceMeansSection';
import ScopeSelectionSection from '@/components/do-not-sell-or-share/ScopeSelectionSection';
import ManualFormSection from '@/components/do-not-sell-or-share/ManualFormSection';
import ConfirmationSection from '@/components/do-not-sell-or-share/ConfirmationSection';
import EdgeCasesSection from '@/components/do-not-sell-or-share/EdgeCasesSection';
import RelatedRightsSection from '@/components/do-not-sell-or-share/RelatedRightsSection';
import AssuranceBandSection from '@/components/do-not-sell-or-share/AssuranceBandSection';
import FaqSection from '@/components/do-not-sell-or-share/FaqSection';

export default function DoNotSellOrShare() {
  return (
    <div className="relative size-full" data-node-id="1306:14142" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 250, 247) 0%, rgb(251, 250, 247) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1440w light">
      <HeroSection />
      <StatusStatesSection />
      <GpcSignalExperienceSection />
      <WhatThisChoiceMeansSection />
      <ScopeSelectionSection />
      <ManualFormSection />
      <ConfirmationSection />
      <EdgeCasesSection />
      <RelatedRightsSection />
      <AssuranceBandSection />
      <FaqSection />
    </div>
  );
}