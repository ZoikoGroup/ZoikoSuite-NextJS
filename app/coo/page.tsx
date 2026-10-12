import {
  CooHero,
  OperatingContext,
  OperatingPriorities,
  OperatingModel,
  EndToEndConcept,
  RoleBoundaries,
  DefiningProperties,
  ClearAnswers,
  ContextBeforeConversion,
  LocalBriefingForm,
} from "@/components/coo";

export default function CooPage() {
  return (
    <main>
      <CooHero />
      <OperatingContext />
      <OperatingPriorities />
      <OperatingModel />
      <EndToEndConcept />
      <RoleBoundaries />
      <DefiningProperties />
      <ClearAnswers />
      <ContextBeforeConversion />
      <LocalBriefingForm />
    </main>
  );
}
