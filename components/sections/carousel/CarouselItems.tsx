"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

import { CarouselItem } from "@/components/ui/carousel"
import OtherSuccessStoriesCard from "@/app/case-studies/components/OtherSuccessStoriesCard"

export const CarouselItems = ({
  caseStudies,
  plugin,
}: {
  caseStudies: any[]
  plugin: any
}) => {
  const [hoverIndex, setHoverIndex] = useState<number>()

  return (
    <>
      {caseStudies.map((service, index) => (
        <CarouselItem
          key={index}
          className="flex basis-full cursor-grab justify-center md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          onMouseEnter={() => {
            setHoverIndex(index)
            plugin.current.stop()
          }}
          onMouseLeave={() => {
            setHoverIndex(undefined)
            plugin.current.reset()
          }}
        >
          <motion.li
            className={`transition-all duration-500 ${
              hoverIndex == index && hoverIndex !== undefined ? "scale-95" : ""
            }`}
          >
            <OtherSuccessStoriesCard caseStudy={service} src="main" />
          </motion.li>
        </CarouselItem>
      ))}
    </>
  )
}
