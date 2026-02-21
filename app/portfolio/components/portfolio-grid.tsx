import PortfolioCard from "./portfolio-grid-card"
import { portfolios } from "../data"
const PortfolioGridList = () => {
  return (
    <div className="container mx-auto mb-32 px-4">
      <div className="grid grid-cols-1 gap-32">
        {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.title}
            portfolio={portfolio}
          />
        ))}
      </div>
    </div>
  )
}

export default PortfolioGridList
