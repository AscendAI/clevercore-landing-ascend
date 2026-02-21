import { caseStudies } from "@/app/case-studies/data"

import SectionTitle from "../SectionTitle"
import { CarouselWrapper } from "./carousel/CarouselWrapper"

const CaseStudyCarousel = () => {
  return (
    <div className="mb-[20vh]">
      <div className="my-[20vh]">
        <SectionTitle>CASE STUDIES</SectionTitle>
        <p className="my-8 text-center font-bold md:text-4xl">
          Transforming Challenges into Success
        </p>
      </div>
      <CarouselWrapper caseStudies={caseStudies} />
    </div>
  )
}

export default CaseStudyCarousel
