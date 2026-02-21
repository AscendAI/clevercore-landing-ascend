import SectionTitle from "@/components/SectionTitle";
import { CaseStudy } from "../data";
import CaseStudyCard from "./CaseStudiesCard";
import OtherSuccessStoriesCard from "./OtherSuccessStoriesCard";

interface OtherSuccessStoriesProps {
  caseStudies: CaseStudy[];
  currentCaseStudy: string;
}

const OtherSuccessStories: React.FC<OtherSuccessStoriesProps> = ({
  caseStudies,
  currentCaseStudy,
}) => {
  const shuffledCaseStudies = caseStudies
    .filter((caseStudy) => caseStudy.name !== currentCaseStudy)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div>
      <div className="mb-[10vh] mt-[30vh]">
        <SectionTitle>Other success stories</SectionTitle>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shuffledCaseStudies.map((caseStudy) => (
          <OtherSuccessStoriesCard key={caseStudy.name} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  );
};

export default OtherSuccessStories;
