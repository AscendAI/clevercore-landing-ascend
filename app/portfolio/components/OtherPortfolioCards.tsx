import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Portfolio } from "../data"

interface PortfolioCardProps {
  portfolio: Portfolio
}

const OtherPortfolioCards: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  return (
    <Card className="overflow-hidden rounded-lg border-2 shadow-lg duration-700 hover:border-primary">
      <div className="relative h-48 w-full md:h-64">
        <Image
          src={portfolio.imageUrl}
          alt={portfolio.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-bold md:text-xl">
          {portfolio.title}
        </CardTitle>
        <p className="text-sm text-gray-500">{portfolio.subTitle}</p>
      </CardHeader>
      <CardFooter>
        <Link
          href={`/portfolio/${portfolio.name}`}
          className="py-2text-sm px-4"
        >
          <Button className="bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 rounded-xl">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default OtherPortfolioCards
