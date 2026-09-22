import {
  CourseDetail,
  EnterpriseTeams,
  FAQ,
  FeaturedTraining,
  LearningPaths,
  LessonViewer,
  RelatedSupport,
  TrainingAcademyHero,
  TrainingCatalog,
  WhyTrainingAcademy,
} from "@/components/training-academy";

export default function Page() {
  return (
    <main>
      <TrainingAcademyHero />
      <LearningPaths />
      <FeaturedTraining />
      <TrainingCatalog />
      <CourseDetail />
      <LessonViewer />
      <WhyTrainingAcademy />
      <EnterpriseTeams />
      <RelatedSupport />
      <FAQ />
    </main>
  );
}