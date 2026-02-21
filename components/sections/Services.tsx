import { providedServices } from "@/lib/texts"

import SectionTitle from "../SectionTitle"
import ServicesCarousel from "./services/ServicesCarousel"

const Services = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-[-1] bg-[url(/backgrounds/service.svg)] bg-center bg-no-repeat"></div>

      <div id="services" className="container md:py-10">
        <SectionTitle>SERVICES</SectionTitle>

        {/* Title and Subtitle Section */}
        <div className="relative z-10 mb-20 mt-16 flex flex-col items-center text-center">
          <h1 className="mb-12 text-3xl font-extrabold leading-tight md:text-4xl">
            Creating a Digital Ecosystem Tailored to Your Needs
          </h1>
        </div>

        {/* Carousel */}
        <ServicesCarousel services={providedServices} />
      </div>
    </div>
  )
}

export default Services
