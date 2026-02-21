"use client"

import React from "react"
import { motion } from "framer-motion"

const BusinessChallenges = ({
  businessChallenges,
  businessChallengesTitle,
}: {
  businessChallenges: string[]
  businessChallengesTitle: string[]
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
    <div className="container mx-auto border-b-2 px-4 py-20 sm:px-8 sm:py-40">
      <div className="md:flex">
        {/* Title Section */}
        <div className="flex w-full md:w-1/2">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Business <span className="text-primary">Challenges:</span>
          </h2>
        </div>

        {/* Challenges List Section */}
        <motion.div
          className="mt-8 w-full md:mt-0 md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          {businessChallenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-6 sm:mb-8"
            >
              <span className="text-lg font-bold text-primary sm:text-2xl">
                {businessChallengesTitle[index]}
              </span>
              <p className="mt-2 text-base text-muted-foreground sm:text-xl">
                {challenge}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BusinessChallenges
