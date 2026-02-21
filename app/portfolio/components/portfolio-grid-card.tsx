"use client"

import Link from "next/link"

import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { HoverImage } from "@/components/ui/hoverImage"

import { Portfolio } from "../data"
import { Button } from "@/components/ui/button"

interface PortfolioCardProps {
  portfolio: Portfolio
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  return (
    <div
      className={`flex flex-col ${
        portfolio.reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-6 md:items-start`}
    >
      <HoverImage
        imageUrl={portfolio.thumbnail}
        className="w-full rounded-3xl hover:border-2 md:w-1/2"
      >
        {portfolio.isReleased && <Link href={portfolio.link}>Visit</Link>}
      </HoverImage>
      <Card
        className={`h-full w-full rounded-3xl p-6 md:w-1/2 md:p-11 ${
          portfolio.reverse
            ? "bg-gradient-to-l from-primary/10 to-background"
            : "bg-gradient-to-r from-primary/10 to-background"
        }`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <CardTitle>{portfolio.title}</CardTitle>
          </div>
          <div className="mt-4 md:mt-8">
            <CardDescription className="text-base">
              {portfolio.introduction}
            </CardDescription>
          </div>
          <div className="mt-4">
            <Link
              href={`/portfolio/${portfolio.name}`}
              className=" text-white"
            >
              <Button className="bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 rounded-xl" >
              Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PortfolioCard
