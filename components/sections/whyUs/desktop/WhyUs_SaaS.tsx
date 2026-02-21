"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import WhyUsSticky from "../../../whyUsSticky"

export default function WhyUsSaaS(): JSX.Element {
  const articles = [
    {
      title: "Discovery:",
      header: "Understanding Your SaaS Vision",
      content:
        "We dive deep into your goals and requirements to ensure that your SaaS product perfectly aligns with your business needs. We aim to get every detail right before moving forward.",
    },
    {
      title: "Proposals:",
      header: "Your Custom Roadmap to Success",
      content:
        "After understanding your vision, we provide a detailed roadmap. Our product requirement document (PRD) outlines every feature and integration, giving you a clear picture of how we'll bring your SaaS to life.",
    },
    {
      title: "Design:",
      header: "Crafting User-Centric Designs",
      content:
        "Our design team focuses on creating intuitive, user-friendly interfaces. Together, we'll fine-tune the visual and functional aspects of your SaaS until it's exactly what you envisioned.",
    },
    {
      title: "Development:",
      header: "Turning Ideas into a Scalable SaaS Product",
      content:
        "Our team takes the agreed-upon designs and brings them to life. We build your SaaS to be scalable, reliable, and future-proof, ensuring that the platform performs at its best.",
    },
    {
      title: "Delivery & Support:",
      header: "Launch and Grow with Confidence",
      content:
        "Once your SaaS is ready, we'll launch it smoothly and provide ongoing support to ensure long-term success. Whether it's troubleshooting, updates, or enhancements, we're here to help you grow.",
    },
  ]

  const Article = ({
    title,
    header,
    content,
    index,
  }: {
    title: string
    header: string
    content: string
    index: number
  }) => {
    const { ref, inView } = useInView({ threshold: 0.5 })
    const animationControls = useAnimation()

    useEffect(() => {
      if (inView) {
        animationControls.start("visible")
      } else {
        animationControls.start("hidden")
      }
    }, [inView, animationControls])

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={animationControls}
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.95 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
        className="sticky top-0 grid h-screen place-content-center"
      >
        <article className="grid h-80 w-[30rem] place-content-center gap-4 rounded-lg bg-background px-4">
          <h1 className="my-6 text-center text-4xl font-semibold">{title}</h1>
          <h2 className="my-6 text-center text-2xl font-semibold">{header}</h2>
          <p className="text-md text-center opacity-60">{content}</p>
        </article>
      </motion.div>
    )
  }

  return (
    <main>
      <section className="w-full text-white">
        <div className="flex justify-between px-16">
          {/* Animated Articles */}
          <div className="grid gap-8">
            {articles.map((article, index) => (
              <Article
                key={index}
                title={article.title}
                header={article.header}
                content={article.content}
                index={index}
              />
            ))}
          </div>

          {/* Sticky Sidebar */}
          <div className="sticky top-0 grid h-screen place-content-center">
            <WhyUsSticky
              title="SAAS DEVELOPMENT"
              header="Build Your Dream SaaS Product with Our Expert Development"
              subHeader="From initial idea to full-scale SaaS deployment, we're here to turn your vision into a scalable reality"
              CTA="Let's Build Your SaaS Together"
              section="1"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
