import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/SectionTitle"
import Link from "next/link"

export function WhyUsSaasMobile() {
  return (
    <>
      <div>
        <SectionTitle className="py-10 text-lg">SAAS DEVELOPMENT</SectionTitle>
        <p className="py-6">
          <strong className="text-bold text-xl">
            Build Your Dream SaaS Product with Our Expert Development
          </strong>
        </p>
        <p className="py-6 text-xl text-muted-foreground">
          From initial idea to full-scale SaaS deployment, we&apos;re here to turn
          your vision into a scalable reality
        </p>
      </div>
      <Accordion type="multiple" className="w-full">
        {/* Discovery */}
        <AccordionItem value="item-1">
          <AccordionTrigger>Discovery:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Understanding Your SaaS Vision</strong>
            </p>
            <p>
              We dive deep into your goals and requirements to ensure that your
              SaaS product perfectly aligns with your business needs. We aim to
              get every detail right before moving forward.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Proposals */}
        <AccordionItem value="item-2">
          <AccordionTrigger>Proposals:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Your Custom Roadmap to Success</strong>
            </p>
            <p>
              After understanding your vision, we provide a detailed roadmap.
              Our product requirement document (PRD) outlines every feature and
              integration, giving you a clear picture of how we&apos;ll bring your
              SaaS to life.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Design */}
        <AccordionItem value="item-3">
          <AccordionTrigger>Design:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Crafting User-Centric Designs</strong>
            </p>
            <p>
              Our design team focuses on creating intuitive, user-friendly
              interfaces. Together, we&apos;ll fine-tune the visual and functional
              aspects of your SaaS until it&apos;s exactly what you envisioned.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Development */}
        <AccordionItem value="item-4">
          <AccordionTrigger>Development:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Turning Ideas into a Scalable SaaS Product</strong>
            </p>
            <p>
              Our team takes the agreed-upon designs and brings them to life. We
              build your SaaS to be scalable, reliable, and future-proof,
              ensuring that the platform performs at its best.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Delivery & Support */}
        <AccordionItem value="item-5">
          <AccordionTrigger>Delivery & Support:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Launch and Grow with Confidence</strong>
            </p>
            <p>
              Once your SaaS is ready, we&apos;ll launch it smoothly and provide
              ongoing support to ensure long-term success. Whether it&apos;s
              troubleshooting, updates, or enhancements, we&apos;re here to help you
              grow.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link href={`https://calendly.com/ascendai/meeting-with-ascend-ai`} target="_blank">
      <Button className="my-8 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600">Let&apos;s build your SaaS together</Button>
      </Link>
    </>
  )
}
