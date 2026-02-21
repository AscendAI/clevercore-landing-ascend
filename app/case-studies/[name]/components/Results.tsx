"use client"

import React from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import SectionTitle from "@/components/SectionTitle"

const Results = ({
  results,
  resultsTitle,
}: {
  results: string[]
  resultsTitle: string[]
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="my-16 sm:my-32">
        <SectionTitle>Results</SectionTitle>
        <p className="pt-6 text-center text-xl sm:pt-10 sm:text-2xl">
          Clevercore team worked on client&apos;s business needs and achieved the
          following results
        </p>
      </div>
      <motion.div
        className="mx-4 sm:mx-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {results.map((result, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-6 border-l-4 border-primary pl-4 sm:mb-8"
          >
            <span className="text-xl font-bold text-primary sm:text-3xl">
              {resultsTitle[index]}
            </span>
            <div>
              <p className="pt-2 text-lg text-muted-foreground sm:text-2xl">
                {result}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Results
