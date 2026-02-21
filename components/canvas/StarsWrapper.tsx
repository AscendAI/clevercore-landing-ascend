"use client"

import dynamic from "next/dynamic"

const StarsCanvas = dynamic(() => import("@/components/canvas/stars"), {
  ssr: false,
})

export default function StarsWrapper() {
  return (
    <div className="absolute inset-0 -z-10">
      <StarsCanvas />
    </div>
  )
}
