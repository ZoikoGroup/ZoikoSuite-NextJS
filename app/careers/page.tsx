import {
  CareersHeroSection,
  WhatWeBuildSection,
  TeamsDisciplinesSection,
  HowWeWorkSection,
  WhereWeHireSection,
  WhyJoinSection,
  InclusionAccessibilityBelongingSection,
  OpenRolesFinderSection,
  JobDetailStructuralExampleSection,
  HiringProcessSection,
  ResponsibleAiRecruitingSection,
  CareersSafetySection,
  ContinueStorySection,
  CareersFaqSection,
} from "@/components/careers";

export const metadata = {
  title: "Careers | ZoikoSuite",
  description:
    "Build systems that make complex work accountable. Explore teams, hiring process, open roles, and how we work at ZoikoSuite.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHeroSection />
      <WhatWeBuildSection />
      <TeamsDisciplinesSection />
      <HowWeWorkSection />
      <WhereWeHireSection />
      <WhyJoinSection />
      <InclusionAccessibilityBelongingSection />
      <OpenRolesFinderSection />
      <JobDetailStructuralExampleSection />
      <HiringProcessSection />
      <ResponsibleAiRecruitingSection />
      <CareersSafetySection />
      <ContinueStorySection />
      <CareersFaqSection />
    </main>
  );
}
