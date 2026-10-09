import {
  TopSection,
  LightTopicSection,
  QuestionsRouterSection,
  DetailsSection,
  JourneySection,
  RolesSection,
  PropertiesSection,
  FaqSection,
  LightCtaSection,
  BriefingSection,
} from "@/components/controller-light";

export const metadata = {
  title: "Controller | ZoikoSuite",
  description:
    "Explore how ownership, review checkpoints, exceptions and supporting evidence can be organized around cross-functional business workflows.",
};

export default function ControllerLightPage() {
  return (
    <main>
      <TopSection />
      <LightTopicSection />
      <QuestionsRouterSection />
      <DetailsSection />
      <JourneySection />
      <RolesSection />
      <PropertiesSection />
      <FaqSection />
      <LightCtaSection />
      <BriefingSection />
    </main>
  );
}
