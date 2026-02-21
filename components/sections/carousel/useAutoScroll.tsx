"use client"

import React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

export const useAutoScroll = () => {
  const plugin = React.useRef(
    AutoScroll({
      startDelay: 1,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  )

  return { plugin }
}
