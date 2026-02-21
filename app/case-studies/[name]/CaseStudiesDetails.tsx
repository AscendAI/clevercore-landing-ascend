import { CaseStudy } from "../data"
import BusinessChallenges from "./components/BusinessChallenges"
import BusinessValue from "./components/BusinessValue"
import CaseStudiesIntro from "./components/CaseStudiesIntro"
import CaseStudiesOverview from "./components/CaseStudiesOverview"
import CaseStudiesTitle from "./components/CaseStudiesTitle"
import OurSolution from "./components/OurSolution"
import Results from "./components/Results"

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy
}

const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = ({ caseStudy }) => (
  <div>
    <div className="container relative">
      <img
        src="/backgrounds/portfolio_top.svg"
        className="absolute top-0 z-[-1] h-screen w-full opacity-80"
        alt="background"
      />
      <CaseStudiesTitle intro={caseStudy.preview} name={caseStudy.title} />
      <CaseStudiesIntro intro={caseStudy.intro} />
      <CaseStudiesOverview overview={caseStudy.background} />
    </div>
    <div className="bg-gradient-to-b from-transparent from-5% via-blue-600/10 via-25% to-90% bg-cover bg-center">
      <div className="container">
        <BusinessChallenges
          businessChallenges={caseStudy.businessChallenges}
          businessChallengesTitle={caseStudy.businessChallengesTitle}
        />
        <OurSolution
          ourSolution={caseStudy.ourSolution}
          ourSolutionTitle={caseStudy.ourSolutionTitle}
        />
        <BusinessValue
          BusinessValue={caseStudy.businessValues}
          BusinessValueTitle={caseStudy.businessValuesTitle}
        />
      </div>
      <div className="container relative">
        <img
          src="/backgrounds/portfolio_mid.svg"
          className="absolute z-[-1] h-screen w-full"
          alt="background"
        />
        <Results
          results={caseStudy.results}
          resultsTitle={caseStudy.resultsTitle}
        />
      </div>
    </div>
  </div>
)

export default CaseStudyDetails
