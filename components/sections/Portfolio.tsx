import Link from "next/link"

import SectionTitle from "../SectionTitle"
import { Button } from "../ui/button"
import { PortfolioGrid } from "./PortfolioGrid"

const CaseStudies = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-[-1] bg-[url(/backgrounds/case.svg)] bg-center bg-no-repeat"></div>
      <div className="container mt-20 flex flex-col items-center justify-center">
        <SectionTitle>Portfolio</SectionTitle>
        <h1 className="mt-20 text-center text-3xl font-extrabold leading-tight md:text-4xl ">
          Our Work Showcase
        </h1>
        <PortfolioGrid />
        <Link href="/portfolio" rel="noreferrer">
          <Button
            className="text-xl font-normal py-6 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600"
          >
            Show Full Portfolio
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CaseStudies
