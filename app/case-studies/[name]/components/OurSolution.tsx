"use client"

import React from "react"
import { motion } from "framer-motion"

const OurSolution = ({
  ourSolution,
  ourSolutionTitle,
}: {
  ourSolution: string[]
  ourSolutionTitle: string[]
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120,
      },
    },
  }

  return (
    <div className="container mx-auto border-b-2 px-4 py-20 sm:px-8 sm:py-40">
      <div className="md:flex">
        {/* Title Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold sm:text-5xl">
            Our <span className="text-primary">Solution:</span>
          </h2>
        </motion.div>

        {/* Solutions List Section */}
        <motion.div
          className="mt-8 w-full md:mt-0 md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          {ourSolution.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-6 p-4 sm:mb-8"
            >
              <span className="text-lg font-bold text-primary sm:text-2xl">
                {ourSolutionTitle[index]}
              </span>
              <p className="mt-2 text-base text-muted-foreground sm:text-xl">
                {solution}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default OurSolution
