"use client"

import React from "react"
import { motion } from "framer-motion"
import { CiMobile3 } from "react-icons/ci"
import { GrDesktop } from "react-icons/gr"
import { TbWorldWww } from "react-icons/tb"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import SectionTitle from "@/components/SectionTitle"

import PortfolioHeader from "./PortfolioHeader"

const PortfolioOverview = ({
  title,
  introduction,
  link,
  background,
  isReleased,
  platform,
}: {
  title: string
  introduction: string
  link: string
  isReleased: boolean
  background: {
    location: string
    industry: string
    duration: string
    services: string[]
  }
  platform: string[]
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:flex-row">
      <div className="z-10 flex w-full flex-col items-start gap-4 pb-5 md:w-2/5">
        <PortfolioHeader
          title={title}
          introduction={introduction}
          link={link}
          isReleased={isReleased}
        />
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-10 bg-[#D9D9D914] py-10 md:w-[35%] md:p-4 md:py-56">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ms-8 md:ms-16 flex flex-col items-start"
        >
          <SectionTitle className="mb-2 text-xl tracking-tight">
            Location:
          </SectionTitle>
          <p className="text-xl md:text-4xl">{background.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ms-8 md:ms-16 flex flex-col items-start"
        >
          <SectionTitle className="mb-2 text-xl tracking-tight">
            Industry:
          </SectionTitle>
          <p className="text-xl md:text-4xl">{background.industry}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ms-8 md:ms-16 flex flex-col items-start"
        >
          <SectionTitle className="mb-2 text-xl tracking-tight">
            Project Duration:
          </SectionTitle>
          <p className="text-xl md:text-4xl">{background.duration}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ms-8 md:ms-16 flex flex-col items-start"
        >
          <SectionTitle className="mb-2 text-xl tracking-tight">
            Services:
          </SectionTitle>
          <p className="text-xl md:text-4xl">
            {background.services.join(", ")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ms-8 md:ms-16 flex flex-col items-start"
        >
          <SectionTitle className="mb-2 text-xl tracking-tight">
            Platforms:
          </SectionTitle>
          {/* <p className="text-xl md:text-4xl">{platform.join(", ")}</p> */}
          <div className="flex gap-4">
            {platform.map((item, index) => {
              if (item === "Web") {
                return (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="p-0 hover:bg-transparent cursor-auto" variant={"ghost"}>
                          <TbWorldWww key={index} size={50} className="" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Web</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              }
              if (item === "Mobile") {
                return (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="p-0 hover:bg-transparent cursor-auto" variant={"ghost"}>
                        <CiMobile3 key={index} size={50} className="flex" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Mobile</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              }
              if (item === "Desktop") {
                return (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="p-0 hover:bg-transparent cursor-auto" variant={"ghost"}>
                        <GrDesktop key={index} size={50} className="flex" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Desktop</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              }
              return null
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PortfolioOverview
