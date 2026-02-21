import Link from "next/link"

import SectionTitle from "../SectionTitle"
import { Button } from "../ui/button"
import { WhyUsAiMobile } from "./whyUs/mobile/WhyUs_ai_m"
import { WhyUsSaasMobile } from "./whyUs/mobile/WhyUs_saas_m"

const WhyUsMobile = () => {
  return (
    <div className="container">
      <SectionTitle>Ascend with us</SectionTitle>
      <div>
        <SectionTitle className="py-10 text-lg">
          AI & AUTOMATION SOLUTIONS
        </SectionTitle>
        <p className="py-6">
          <strong className="text-bold text-xl">
            Unlock the Power of AI to Streamline Your Business
          </strong>
        </p>
        <p className="py-6 text-xl text-muted-foreground">
          Discover how AI and automation can optimize workflows, reduce costs,
          and propel your business forward.
        </p>
      </div>
      <WhyUsAiMobile />
      <Link href={`https://calendly.com/ascendai/meeting-with-ascend-ai`} target="_blank">
        <Button className="my-8 bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 rounded-xl">Ready to Transform with AI?</Button>
      </Link>
      <div className="h-[10vh]" />
      <WhyUsSaasMobile />
      <div className="h-[10vh]" />
    </div>
  )
}

export default WhyUsMobile
