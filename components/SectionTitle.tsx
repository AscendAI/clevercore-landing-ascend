import React from "react"

import { cn } from "@/lib/utils"

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?:string
}) => {
  return (
    <div
      className={cn(
        `text-center text-2xl uppercase tracking-[1rem] opacity-50`,
        className
      )}
    >
      {children}
    </div>
  )
}

export default SectionTitle
