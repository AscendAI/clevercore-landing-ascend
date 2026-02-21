import React from "react"
import Link from "next/link"

import { LayoutGrid } from "../ui/layoutGrid"

export function PortfolioGrid() {
  return (
    <div className="h-screen w-full py-20">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">CleverCore AI</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200 line-clamp-2">
        An advanced AI-powered platform designed to revolutionize the way
        individuals and organizations interact with and process spoken content.
      </p>
      <Link href="/portfolio/CleverCore-AI">Read More</Link>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Whisper AI</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200 line-clamp-2">
        An advanced conversational assistant designed to help users navigate and
        excel in social interactions
      </p>
      <Link href="/portfolio/Whisper-AI">Read More</Link>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">InstaDM AI</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200 line-clamp-2">
        A cutting-edge platform designed to revolutionize Instagram outreach by
        leveraging artificial intelligence to automate and scale direct
        messaging campaigns.
      </p>
      <Link href="/portfolio/InstaDM-AI">Read More</Link>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">NLCyber</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200 line-clamp-2">
        A centralized platform designed to simplify cybersecurity by aggregating
        the latest news, connecting users with trusted companies, and
        highlighting essential events. It empowers businesses and professionals
        to make informed decisions, contributing to a safer digital environment
      </p>
      <Link href="/portfolio/NLCyber">Read More</Link>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/portfolio/thumbnails/cover/cleverCore.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/portfolio/thumbnails/cover/whisper.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/portfolio/thumbnails/cover/ascend.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/portfolio/thumbnails/cover/nlc.png",
  },
]
