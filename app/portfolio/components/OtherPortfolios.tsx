import React from "react"
import SectionTitle from "@/components/SectionTitle"
import { Portfolio } from "../data"
import OtherPortfolioCards from "./OtherPortfolioCards"

interface OtherPortfoliosProps {
  portfolios: Portfolio[]
  currentPortfolio: string
}

const OtherPortfolios: React.FC<OtherPortfoliosProps> = ({
  portfolios,
  currentPortfolio,
}) => {
  const shuffledPortfolios = portfolios
    .filter((portfolio) => portfolio.name !== currentPortfolio)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  return (
    <div>
      <div className="my-[10vh]">
        <SectionTitle>Other Success stories</SectionTitle>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shuffledPortfolios.map((portfolio) => (
          <OtherPortfolioCards key={portfolio.name} portfolio={portfolio} />
        ))}
      </div>
    </div>
  )
}

export default OtherPortfolios
