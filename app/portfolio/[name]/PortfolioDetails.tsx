import React from "react"
import Image from "next/image"

import { ImageContainer } from "@/components/ui/imageContainer"
import SectionTitle from "@/components/SectionTitle"

import { Portfolio } from "../data"
import EndResult from "./components/EndResult"
import PortfolioHeader from "./components/PortfolioHeader"
import PortfolioOverview from "./components/PortfolioOverview"
import TechStack from "./components/TechStack"
import CtaCard from "./components/CTA-Card"
import FeatureTop from "./components/FeatureTop"
import FeatureBottom from "./components/FeatureBottom"

interface PortfolioDetailsProps {
  portfolio: Portfolio
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({ portfolio }) => {
  return (
    <div>
      <div className="container relative">
        <img
          src="/backgrounds/portfolio_top.svg"
          className="absolute top-0 z-[-1] h-screen w-full opacity-80"
          alt="background"
        />
        <ImageContainer
          titleComponent={
            <>
              <div>
                <span className="text-5xl font-extrabold">
                  {portfolio.name}
                </span>
                <br />
                <span className="text-5xl leading-none">{portfolio.subTitle}</span>
              </div>
            </>
          }
        >
          <Image
            alt="large"
            layout="responsive"
            width={1899}
            height={1099}
            src={portfolio.imageUrl}
            className="hidden h-full rounded-xl md:block border-2"
          />
          <Image
            alt="small"
            layout="responsive"
            width={775}
            height={1600}
            src={portfolio.imageUrl}
            className="block h-full w-full md:hidden"
          />
        </ImageContainer>
        <div>
          <SectionTitle className="pb-32">Overview</SectionTitle>
          <PortfolioOverview
            title={portfolio.title}
            introduction={portfolio.introduction}
            link={portfolio.link}
            background={portfolio.background}
            isReleased={portfolio.isReleased}
            platform={portfolio.platforms}
          />
          <img
            src="/backgrounds/portfolio_mid.svg"
            className="absolute z-[-1] h-screen w-full"
            alt="background"
          />
          <TechStack techStacks={portfolio.techStacks} />
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent from-50% via-blue-600/10 via-85% bg-cover bg-center">
        <div className="container">
          <SectionTitle className="py-32">Core Features</SectionTitle>
          <FeatureTop features={portfolio.coreFeatures} featuresTitle={portfolio.coreFeaturesTitle} imageUrl={portfolio.img1} />
          <div className="h-[10vh]"/>
          <FeatureBottom features={portfolio.coreFeatures} featuresTitle={portfolio.coreFeaturesTitle} imageUrl={portfolio.img2} />
          <div className="h-[30vh]"/>
          <EndResult endResult={portfolio.endProduct} similar={portfolio.similarProjects} />
        </div>
      </div>
      <div className="h-[30vh]"/>
      <CtaCard/>
    </div>
  )
}

export default PortfolioDetails
