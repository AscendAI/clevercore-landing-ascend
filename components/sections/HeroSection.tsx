import { Suspense } from "react"
import dynamic from "next/dynamic"

import { slideIn } from "../../lib/motion"
import { MotionDiv } from "../framer-motion-helper/motionTags"
import AnimatedHeroContent from "./hero/AnimatedHeroContent"
import HeroContent from "./hero/HeroContent"

// Dynamically import GlobeDemo with no SSR
const GlobeDemo = dynamic(
  () => import("./hero/globe_ui").then((mod) => mod.GlobeDemo),
  { ssr: false }
)

const HeroSection = () => {
  return (
    <div className="relative pt-32 min-h-screen overflow-x-hidden no-scrollbar">
      <section className="container z-10 grid grid-cols-1 items-center gap-6 pb-8 pt-6 md:grid-cols-2 md:py-10">
        <div className="z-20">
          <Suspense fallback={<HeroContent />}>
            <AnimatedHeroContent />
          </Suspense>
        </div>
        <MotionDiv
          animate="show"
          initial="hidden"
          variants={slideIn("right", "tween", 0.2, 1.5)}
          className="order-1 h-[350px] md:order-2 md:h-[600px]"
        >
          <Suspense
            fallback={
              <div className="w-full h-full bg-gray-100/10 animate-pulse rounded-lg" />
            }
          >
            <GlobeDemo />
          </Suspense>
        </MotionDiv>
      </section>
    </div>
  )
}

export default HeroSection
