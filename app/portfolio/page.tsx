import React from "react"
import PortfolioTopText from "./components/TopText"
import PortfolioGridList from "./components/portfolio-grid"
import { PortfolioCardStack } from "./components/portfolioCardStack"


const Portfolio = () => {
  return (
    <div className="container mt-24 lg:mt-2">
      <section className="container grid h-[100vh] grid-cols-1 items-center justify-between gap-8 overflow-hidden pb-8 pt-6 md:grid-cols-2 md:py-10">
        <div>
          <PortfolioTopText />
        </div>
        <div className="">
          <PortfolioCardStack />
        </div>
      </section>
      <section>
        <PortfolioGridList />
      </section>
    </div>
  )
}

export default Portfolio
