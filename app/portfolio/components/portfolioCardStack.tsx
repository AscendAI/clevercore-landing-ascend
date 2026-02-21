"use client"

import Image from "next/image"

import { CardStack } from "@/components/ui/cardStack"

export function PortfolioCardStack() {
  return (
    <div className="hidden h-[40rem] w-full items-center justify-center md:flex">
      <CardStack items={CARDS} />
    </div>
  )
}

const CARDS = [
  {
    id: 0,
    content: (
      <Image
        alt="rz"
        layout="fill"
        objectFit="cover"
        src="/portfolio/thumbnails/cover/reinforz.png"
        className="h-full rounded-3xl"
      ></Image>
    ),
  },
  {
    id: 1,
    content: (
      <Image
        alt="cc"
        layout="fill"
        objectFit="cover"
        src="/portfolio/thumbnails/cover/cleverCore.png"
        className="h-full rounded-3xl"
      ></Image>
    ),
  },
  {
    id: 2,
    content: (
      <Image
        alt="insta"
        layout="fill"
        objectFit="cover"
        src="/portfolio/thumbnails/cover/ascend.png"
        className="h-full rounded-3xl"
      ></Image>
    ),
  },
  {
    id: 3,
    content: (
      <Image
        alt="pindrop"
        layout="fill"
        objectFit="cover"
        src="/portfolio/thumbnails/cover/pindrop.png"
        className="h-full rounded-3xl"
      ></Image>
    ),
  },
  {
    id: 4,
    content: (
      <Image
        alt="unibox"
        layout="fill"
        objectFit="cover"
        src="/portfolio/thumbnails/cover/unibox.png"
        className="h-full rounded-3xl"
      ></Image>
    ),
  },
  {
    id: 5,
    content: (
      <Image
        alt="whisper"
        layout="fill"
        objectFit="cover"
        src="/portfolio/thumbnails/cover/whisper.png"
        className="h-full rounded-3xl"
      ></Image>
    ),
  },
  {
    id: 6,
    content: (
      <Image
        alt="sagar"
        layout="fill"
        objectFit="cover"
        src="/portfolio/thumbnails/cover/sagar.png"
        className="h-full rounded-3xl"
      ></Image>
    ),
  },
  {
    id: 7,
    content: (
      <Image
        alt="nlc"
        layout="fill"
        objectFit="cover"
        src="/portfolio/thumbnails/cover/nlc.png"
        className="h-full rounded-3xl"
      ></Image>
    ),
  },
]
