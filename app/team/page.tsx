"use client"

import React, { Suspense, useState } from "react"
import Members from "./members"
import StarsCanvas from "@/components/canvas/stars"

const Team = () => {

  return (
    <main className="container h-full">
      <div className="flex flex-col items-center space-y-3 text-center">
        <h1 className="mt-32 text-3xl font-extrabold leading-tight  md:text-4xl">
          Meet Our Team
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A synergistic blend of diverse talents and skills working
          collaboratively toward a common goal.
        </p>
      </div>   
        <Members/>
      <div className="absolute inset-0 -z-10 mb-24">
        <StarsCanvas />
      </div>
    </main>
  )
}

export default Team
