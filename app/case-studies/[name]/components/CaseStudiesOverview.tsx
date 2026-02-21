import React from "react"

import SectionTitle from "@/components/SectionTitle"

const CaseStudiesOverview = ({ overview }: { overview: string }) => {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-40">
      {/* Section Title */}
      <div className="mb-12 sm:mb-16">
        <SectionTitle>Overview</SectionTitle>
        <p className="pt-10 text-2xl sm:pt-20 sm:text-3xl lg:text-4xl">
          About <span className="text-primary">The Client</span>
        </p>
      </div>

      {/* Overview Text */}
      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
        {overview}
      </p>
    </div>
  )
}

export default CaseStudiesOverview
