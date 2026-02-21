"use client"

import React, { useState } from "react"
import AutoScroll from "embla-carousel-auto-scroll"
import { motion } from "framer-motion"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Service } from "../../Service"

interface ServicesCarouselProps {
  services: {
    title: string
    icon: string
    description: string
  }[]
}

const ServicesCarousel = ({ services }: ServicesCarouselProps) => {
  const plugin = React.useRef(
    AutoScroll({
      startDelay: 1,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  )
  const [hoverIndex, setHoverIndex] = useState<number>()

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
        className="md:mx-0 xl:mx-20"
      >
        <CarouselContent className="cursor-pointer mx-20 md:mx-0">
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className="flex cursor-grab justify-center py-10 basis-full md:basis-1/3 md:py-20 lg:basis-1/4 xl:basis-1/5"
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
                  hoverIndex !== index && hoverIndex !== undefined
                    ? "blur-sm"
                    : ""
                }`}
              >
                <Service
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              </motion.li>
            </CarouselItem>
          ))}
        </CarouselContent>
      </motion.ul>
    </Carousel>
  )
}

export default ServicesCarousel
