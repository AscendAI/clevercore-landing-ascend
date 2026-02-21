import SectionTitle from "../SectionTitle"
import WhyUsAI from "./whyUs/desktop/WhyUs_AI"
import WhyUsSaaS from "./whyUs/desktop/WhyUs_SaaS"

const WhyUs = () => {
  return (
    <div className="">
      <div className="container">
        <div className="">
          <SectionTitle>WHY CHOOSE US</SectionTitle>
        </div>
        <WhyUsAI />
        <div className="h-[20vh]"></div>
        <WhyUsSaaS />
      </div>
    </div>
  )
}

export default WhyUs
