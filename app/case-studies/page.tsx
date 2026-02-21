import CaseStudyCard from "./components/CaseStudiesCard";
import { caseStudies } from "./data";
import OtherSuccessStoriesCard from "./components/OtherSuccessStoriesCard";

const CaseStudies = () => (
  <div className="container mx-auto p-6 pt-40">
    <h1 className="mb-6 py-20 text-center text-3xl font-bold">Case Studies</h1>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((caseStudy) => (
        <div key={caseStudy.name} className="w-full">
          <div className="hidden md:block">
            <CaseStudyCard caseStudy={caseStudy} />
          </div>
          <div className="block md:hidden">
            <OtherSuccessStoriesCard caseStudy={caseStudy} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CaseStudies;
