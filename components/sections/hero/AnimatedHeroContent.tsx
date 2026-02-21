"use client"

import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"

import { Button } from "@/components/ui/button"
import {
  MotionDiv,
  MotionP,
} from "@/components/framer-motion-helper/motionTags"

import { heroTexts } from "./heroSectionTexts"
import { useHeroDescription } from "./useHeroDescription"

const AnimatedHeroContent = () => {
  const { currentDescription, descriptions } = useHeroDescription()
  const { typewriterWords, buttonText, calendlyLink } = heroTexts

  const buttonVariantsWithFade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="h-[100px] md:h-[150px] text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
        <Typewriter
          typeSpeed={50}
          deleteSpeed={50}
          loop={true}
          delaySpeed={3000}
          words={typewriterWords}
        />
      </h1>

      <div className="relative h-[180px] max-w-[700px] md:min-h-[110px] lg:h-[130px]">
        <MotionP
          key={currentDescription}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="text-lg text-muted-foreground lg:text-xl"
        >
          {descriptions[currentDescription]}
        </MotionP>
      </div>

      <div className="mt-4 flex gap-4">
        <MotionDiv
          initial="hidden"
          animate="show"
          variants={buttonVariantsWithFade}
        >
          <Link href={calendlyLink} target="_blank" rel="noreferrer">
            <Button>{buttonText}</Button>
          </Link>
        </MotionDiv>
      </div>
    </div>
  )
}

export default AnimatedHeroContent
