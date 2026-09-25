import React from "react";
import SidebarNav from "./SidebarNav";
import ControllerIdentitySection from "./ControllerIdentitySection";
import ScopeApplicabilitySection from "./ScopeApplicabilitySection";
import DataCategoriesSection from "./DataCategoriesSection";
import PurposesMatrixSection from "./PurposesMatrixSection";
import LegitimateInterestsSection from "./LegitimateInterestsSection";
import SpecialCategorySection from "./SpecialCategorySection";
import RecipientsDisclosuresSection from "./RecipientsDisclosuresSection";
import InternationalTransfersSection from "./InternationalTransfersSection";
import RetentionSection from "./RetentionSection";
import AutomatedDecisionSection from "./AutomatedDecisionSection";
import UkPrivacyRightsSection from "./UkPrivacyRightsSection";
import SubmitRequestSection from "./SubmitRequestSection";
import ComplaintsAuthoritySection from "./ComplaintsAuthoritySection";
import OtherMattersSection from "./OtherMattersSection";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import RelatedDestinationsSection from "./RelatedDestinationsSection";

export default function UkPrivacyNoticeReadingFrame() {
  return (
    <section className="w-full bg-[#FBFAF7] py-6 sm:py-9 pb-12 sm:pb-[70px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-11 items-start justify-between">
          {/* Left Column: Mobile sticky bar / Desktop sticky rail */}
          <SidebarNav />

          {/* Right Column: Legal Content Body */}
          <div className="w-full lg:max-w-[800px] flex-1 flex flex-col min-w-0">
            <ControllerIdentitySection />
            <ScopeApplicabilitySection />
            <DataCategoriesSection />
            <PurposesMatrixSection />
            <LegitimateInterestsSection />
            <SpecialCategorySection />
            <RecipientsDisclosuresSection />
            <InternationalTransfersSection />
            <RetentionSection />
            <AutomatedDecisionSection />
            <UkPrivacyRightsSection />
            <SubmitRequestSection />
            <ComplaintsAuthoritySection />
            <OtherMattersSection />
            <ContactSection />
            <FaqSection />
            <RelatedDestinationsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
