import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { CaseStudy } from "../data"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

const CaseStudyCards: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="group mx-auto h-[480px] w-[90%] overflow-hidden rounded-md border-2 p-2 text-black dark:bg-background dark:text-white">
      <figure className="relative h-80 w-full overflow-hidden rounded-md bg-background p-2 transition-all duration-300 group-hover:h-72">
        <div
          style={{
            background:
              "linear-gradient(123.9deg, #130B39 1.52%, rgba(0, 0, 0, 0) 68.91%)",
          }}
          className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 group-hover:opacity-100"
        ></div>
        <Image
          src={caseStudy.image}
          alt="case study image"
          width={600}
          height={600}
          className="absolute -bottom-1 right-0 h-64 w-[80%] rounded-lg border-4 object-cover transition-all duration-300 group-hover:-bottom-5 group-hover:border-4 group-hover:border-[#76aaf82d]"
        />
      </figure>
      <article className="space-y-2 p-4">
        <h1 className="text-xl font-semibold capitalize text-primary">{caseStudy.title}</h1>
        <p className="text-base leading-[120%] line-clamp-3 ">{caseStudy.preview}</p>
        <Link
          href={`/case-studies/${caseStudy.name}/`}
          className="flex translate-y-2 gap-1 pt-2 text-base font-normal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white"
        >
          Learn More
          <span>
            <ChevronRight />
          </span>
        </Link>
      </article>
    </div>
  )
}

export default CaseStudyCards
