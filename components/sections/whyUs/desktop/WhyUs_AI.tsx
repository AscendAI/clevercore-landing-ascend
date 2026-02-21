"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import WhyUsSticky from "../../../whyUsSticky"

export default function WhyUsAI(): JSX.Element {
  const articles = [
    {
      title: "Discovery:",
      header: "Spotting Automation Opportunities",
      content:
        "We take a close look at your existing processes and identify areas where AI and automation can provide the most impact. Our goal is to pinpoint inefficiencies and set the foundation for smarter, faster workflows.",
    },
    {
      title: "Proposals:",
      header: "Your AI-Driven Automation Strategy",
      content:
        "Our team delivers a proposal outlining the AI solutions that will streamline your processes. We provide a roadmap that explains how automation will work for your business, reducing manual effort and improving accuracy.",
    },
    {
      title: "Development & Integration:",
      header: "Bringing AI into Your Workflow",
      content:
        "We implement and integrate AI-powered automation tools into your existing systems. Whether it's improving efficiency or enabling smarter decisions, our AI solutions are tailored to meet your needs.",
    },
    {
      title: "Testing & Optimization:",
      header: "Perfecting Your Automation",
      content:
        "Once integrated, we test every element of the solution to ensure it works flawlessly. Our optimization phase guarantees that your AI tools are delivering the best possible results.",
    },
    {
      title: "Deployment & Support:",
      header: "Driving Long-Term Success with AI",
      content:
        "Once deployed, our team provides training and ongoing support to help you get the most out of your new AI solutions. We’re here to ensure your business continues to operate efficiently and effectively.",
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
        <article className="grid w-[35rem] place-content-center gap-4 rounded-lg bg-background p-6 transition-transform duration-500 hover:scale-105">
          <h1 className="my-6 text-center text-4xl font-semibold">{title}</h1>
          <h2 className="my-8 text-center text-2xl font-semibold">{header}</h2>
          <p className="text-md text-center opacity-60">{content}</p>
        </article>
      </motion.div>
    )
  }

  return (
    <main>
      <section className="w-full text-white">
        <div className="flex justify-between px-16">
          {/* Sticky Sidebar */}
          <div className="sticky top-0 grid h-screen place-content-center">
            <WhyUsSticky
              title="AI & AUTOMATION SOLUTIONS"
              header="Unlock the Power of AI to Streamline Your Business"
              subHeader="Discover how AI and automation can optimize workflows, reduce costs, and propel your business forward."
              CTA={`Ready to Transform with AI?`}
              section="2"
            />
          </div>

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
        </div>
      </section>
    </main>
  )
}
