import StarsWrapper from "@/components/canvas/StarsWrapper"
import BookACall from "@/components/sections/BookACall"
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel"
import Counter from "@/components/sections/Counter"
import HeroSection from "@/components/sections/HeroSection"
import Portfolio from "@/components/sections/Portfolio"
import Services from "@/components/sections/Services"
import WhyUs from "@/components/sections/WhyUs"
import WhyUsMobile from "@/components/sections/WhyUsMobile"

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
      <CaseStudyCarousel />
      <BookACall />
      <StarsWrapper />
    </div>
  )
}

