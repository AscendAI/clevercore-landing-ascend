"use client"

import React from "react"
import { motion } from "framer-motion"

const BusinessValue = ({
  BusinessValue,
  BusinessValueTitle,
}: {
  BusinessValue: string[]
  BusinessValueTitle: string[]
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <div className="container mx-auto border-b-2 px-4 py-20 sm:px-8 sm:py-40">
      <div className="md:flex">
        {/* Title Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold sm:text-5xl">
            Business <span className="text-primary">Value:</span>
          </h2>
        </motion.div>

        {/* Value List Section */}
        <motion.div
          className="mt-8 w-full md:mt-0 md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          {BusinessValue.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-6 rounded-lg p-4 shadow-sm sm:mb-8"
            >
              <span className="text-lg font-bold text-primary sm:text-2xl">
                {BusinessValueTitle[index]}
              </span>
              <p className="mt-2 text-base text-muted-foreground sm:text-xl">
                {value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BusinessValue
