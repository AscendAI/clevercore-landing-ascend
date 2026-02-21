"use client"

import { useEffect, useState } from "react"

import { heroTexts } from "@/components/sections/hero/heroSectionTexts"

export const useHeroDescription = () => {
  const [currentDescription, setCurrentDescription] = useState(0)
  const { descriptions, descriptionDuration } = heroTexts

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentDescription((prev) => (prev + 1) % descriptions.length)
    }, descriptionDuration)

    return () => clearTimeout(timeout)
  }, [currentDescription, descriptions.length, descriptionDuration])

  return {
    currentDescription,
    descriptions,
  }
}
