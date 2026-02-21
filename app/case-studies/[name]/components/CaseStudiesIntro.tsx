import React from "react"

const CaseStudiesIntro = ({ intro }: { intro: string }) => {
  return (
    <div className="mt-16 px-4 text-center text-xl text-muted-foreground sm:mt-20 sm:px-8 lg:mt-40 lg:px-40 ">
      {intro}
    </div>
  )
}

export default CaseStudiesIntro
