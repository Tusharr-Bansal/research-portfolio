import ProjectHero from "@/components/projects/comment-category-classification/ProjectHero";
import ResearchJourney from "@/components/projects/comment-category-classification/ResearchJourney";
import ExperiementalSetup from "@/components/projects/comment-category-classification/ExperimentalSetup";
import ResultComparison from "@/components/projects/comment-category-classification/ResultComparison";
export default function CommentCategoryClassificationPage() {
  return (
    <main className="bg-[#09090B] text-white">
      <ProjectHero />
      <ResearchJourney />
      <ExperiementalSetup />
      <ResultComparison />
      
    </main>
  );
}