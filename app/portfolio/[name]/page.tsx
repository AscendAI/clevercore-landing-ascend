import React from "react"
import { notFound } from "next/navigation"

import { portfolios } from "../data"
import PortfolioDetails from "./PortfolioDetails"
import OtherPortfolios from "../components/OtherPortfolios"

interface PortfolioDetailsPageProps {
  params: { name: string }
}
const PortfolioDetailsPage = ({ params }: PortfolioDetailsPageProps) => {
  const portfolio = portfolios.find(
    (portfolio) => portfolio.name === params.name
  )

  if (!portfolio) {
    notFound()
  }
  return (
    <div>
      <PortfolioDetails portfolio={portfolio!} />
      <div className="container my-40">
        <div className="mb-6 py-20 text-center text-3xl font-bold">
          <OtherPortfolios portfolios={portfolios} currentPortfolio={portfolio!.name} />
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetailsPage
