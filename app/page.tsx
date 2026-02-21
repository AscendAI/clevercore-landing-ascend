import StarsWrapper from "@/components/canvas/StarsWrapper"
import BookACall from "@/components/sections/BookACall"
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel"
import Counter from "@/components/sections/Counter"
import HeroSection from "@/components/sections/HeroSection"
import Portfolio from "@/components/sections/Portfolio"
import Services from "@/components/sections/Services"
import WhyUs from "@/components/sections/WhyUs"
import WhyUsMobile from "@/components/sections/WhyUsMobile"
import SectionTitle from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <div className="relative h-full">
      <HeroSection />
      <Counter />
      <Services />
      <div className="hidden bg-gradient-to-t from-transparent from-10% via-violet-500/10 via-45% bg-cover bg-center md:block">
        <WhyUs />
      </div>
      <div className="bg-gradient-to-t from-transparent from-10% via-violet-500/10 via-45% bg-cover bg-center md:hidden">
        <WhyUsMobile />
      </div>
      <div className="bg-gradient-to-t from-transparent from-10% via-primary/20 via-45% bg-cover bg-center">
        <Portfolio />
      </div>
      <section className="bg-gradient-to-t from-transparent via-primary/10 to-transparent">
        <div className="container py-20">
          <SectionTitle>New Release</SectionTitle>
          <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="w-full md:w-1/2">
              <Image
                src="/portfolio/thumbnails/cover/Ascend-agents.png"
                alt="Reinforz AI cover"
                width={800}
                height={450}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold">Ascend Agents</h2>
              <p className="mt-4 text-lg text-muted-foreground">
              Cut Your Business Response Time From Hours To Seconds With AI
              No more missed leads, orders and appointments. Automate customer support with Ascend Agents.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {/* <Link href="/portfolio/Reinforz-AI" rel="noreferrer">
                  <Button className="rounded-xl py-6 text-lg">View Case Study</Button>
                </Link> */}
                <Link href="https://agents.ascendai.site/" target="_blank" rel="noreferrer">
                  <Button variant="default" className="rounded-xl py-6 text-lg">Try Now!</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseStudyCarousel />
      <BookACall />
      <StarsWrapper />
    </div>
  )
}
