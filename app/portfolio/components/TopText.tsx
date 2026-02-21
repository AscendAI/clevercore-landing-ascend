import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const PortfolioTopText = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold leading-tight  md:text-4xl">
        Portfolio
      </h1>
      <p className="max-w-[700px] py-6 text-lg text-muted-foreground">
        At Clevercore AI, we specialize in transforming your ideas into fully
        realized SaaS solutions, no matter the platform—web, mobile, or desktop.
        Our team is dedicated to delivering high-quality results at affordable
        rates, ensuring that your vision becomes a reality without breaking the
        bank.
      </p>
    </div>
  )
}

export default PortfolioTopText
