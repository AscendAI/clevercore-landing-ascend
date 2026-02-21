import { notFound } from "next/navigation"

import OtherSuccessStories from "../components/OtherSuccessStories"
import { caseStudies } from "../data"
import CaseStudyDetails from "./CaseStudiesDetails"

interface CaseStudyPageProps {
  params: { name: string }
}

const CaseStudyPage = ({ params }: CaseStudyPageProps) => {
  const caseStudy = caseStudies.find((cs) => cs.name === params.name)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="">
      <CaseStudyDetails caseStudy={caseStudy!} />
      <div className="container my-40">
        <OtherSuccessStories
          caseStudies={caseStudies}
          currentCaseStudy={caseStudy!.name}
        />
      </div>
    </div>
  )
}

export default CaseStudyPage
