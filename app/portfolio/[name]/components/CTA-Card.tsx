'use client'
import React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const CtaCard = () => {
  return (
    <div className="container">
      <div className="mx-4 md:mx-20">
        <motion.div
          className="flex flex-col items-center justify-between bg-gradient-to-r from-[#0A0E22] to-[#130B39] px-6 py-8 md:flex-row"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-lg text-xl opacity-80">
            <motion.p
              className="py-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Have a business idea?
            </motion.p>
            <motion.p
              className="py-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let&apos;s start with a{" "}
              <span className="font-bold text-primary">free call</span>
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 md:mt-0"
          >
            <Link href='https://calendly.com/ascendai/meeting-with-ascend-ai' target="_blank">
            <Button className="border-2 bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:border-white/50 rounded-xl">
              Get In Touch
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default CtaCard
