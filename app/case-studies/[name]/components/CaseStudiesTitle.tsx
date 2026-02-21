import React from "react"

const CaseStudiesTitle = ({ name, intro }: { name: string; intro: string }) => {
  return (
    <div className="px-4 pt-16 text-center sm:px-8 sm:pt-20 lg:px-40">
      <p className="py-6 text-3xl font-bold text-primary sm:py-10 sm:text-4xl lg:text-5xl">
        {name}
      </p>
      <p className="text-lg sm:text-2xl lg:text-3xl">{intro}</p>
    </div>
  )
}

export default CaseStudiesTitle
