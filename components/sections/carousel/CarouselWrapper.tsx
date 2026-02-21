"use client"

import React from "react"
import { motion } from "framer-motion"

import { Carousel, CarouselContent } from "@/components/ui/carousel"

import { CarouselItems } from "./CarouselItems"
import { useAutoScroll } from "./useAutoScroll"

export const CarouselWrapper = ({ caseStudies }: { caseStudies: any[] }) => {
  const { plugin } = useAutoScroll()

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="h-full w-full"
    >
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <CarouselContent className="cursor-pointer">
          <CarouselItems caseStudies={caseStudies} plugin={plugin} />
        </CarouselContent>
      </motion.ul>
    </Carousel>
  )
}
