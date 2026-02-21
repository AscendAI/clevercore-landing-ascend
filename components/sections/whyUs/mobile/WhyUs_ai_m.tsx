import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/SectionTitle"

export function WhyUsAiMobile() {
  return (
      <Accordion type="multiple" className="w-full">
        {/* Discovery */}
        <AccordionItem value="item-1">
          <AccordionTrigger>Discovery:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Spotting Automation Opportunities</strong>
            </p>
            <p>
              We take a close look at your existing processes and identify areas
              where AI and automation can provide the most impact. Our goal is
              to pinpoint inefficiencies and set the foundation for smarter,
              faster workflows.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Proposals */}
        <AccordionItem value="item-2">
          <AccordionTrigger>Proposals:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Your AI-Driven Automation Strategy</strong>
            </p>
            <p>
              Our team delivers a proposal outlining the AI solutions that will
              streamline your processes. We provide a roadmap that explains how
              automation will work for your business, reducing manual effort and
              improving accuracy.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Development & Integration */}
        <AccordionItem value="item-3">
          <AccordionTrigger>Development & Integration:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Bringing AI into Your Workflow</strong>
            </p>
            <p>
              We implement and integrate AI-powered automation tools into your
              existing systems. Whether it&apos;s improving efficiency or enabling
              smarter decisions, our AI solutions are tailored to meet your
              needs.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Testing & Optimization */}
        <AccordionItem value="item-4">
          <AccordionTrigger>Testing & Optimization:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Perfecting Your Automation</strong>
            </p>
            <p>
              Once integrated, we test every element of the solution to ensure
              it works flawlessly. Our optimization phase guarantees that your
              AI tools are delivering the best possible results.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Deployment & Support */}
        <AccordionItem value="item-5">
          <AccordionTrigger>Deployment & Support:</AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Driving Long-Term Success with AI</strong>
            </p>
            <p>
              Once deployed, our team provides training and ongoing support to
              help you get the most out of your new AI solutions. We’re here to
              ensure your business continues to operate efficiently and
              effectively.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  )
}
