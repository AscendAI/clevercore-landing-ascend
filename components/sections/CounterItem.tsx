"use client"

import React from "react"
import CountUp from "react-countup"

import { MotionDiv, MotionP } from "../framer-motion-helper/motionTags"

interface CounterItemProps {
  end: number
  label: string
  description: string
}

const CounterItem: React.FC<CounterItemProps> = ({
  end,
  label,
  description,
}) => {
  return (
    <div className="text-center px-4">
      <MotionDiv
        className="mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          <CountUp end={end} duration={2} enableScrollSpy scrollSpyOnce />
        </span>
        <span className="text-2xl font-medium text-muted-foreground ml-2">
          {label}
        </span>
      </MotionDiv>
      <MotionP
        className="text-muted-foreground italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </MotionP>
    </div>
  )
}

export default CounterItem
