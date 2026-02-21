import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const PortfolioHeader = ({
  title,
  introduction,
  link,
  isReleased,
}: {
  title: string
  introduction: string
  link: string
  isReleased: boolean
}) => {
  return (
    <div className="container px-4 md:px-8">
      <div className="flex flex-col items-start pb-5">
        <p className="pb-6 text-lg text-muted-foreground md:text-xl">
          <span className="text-3xl text-primary md:text-4xl">{title}</span>
          <span className="mt-2 block md:mt-0">{introduction}</span>
        </p>
        {isReleased && (
          <Link href={link} className="pt-4" target="_blank" >
            <Button disabled={!isReleased} className="w-full md:w-auto rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600">
              Visit {title}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default PortfolioHeader
