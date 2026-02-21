import React from "react"
import Link from "next/link"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

const BookACall = () => {
  return (
    <div
      id="contact"
      className="container flex justify-center pb-40 pt-20 md:pt-32 "
    >
      <img
        src="/bookAcall.svg"
        alt=" Book a call"
        className="absolute z-0 mt-7 hidden rounded-lg opacity-50 md:block w-full h-[55vh]"
      />
      <img
        src="/bookCall.svg"
        alt="Book call bg"
        width={800}
        height={800}
        className="absolute z-0 mt-10 hidden md:block w-full h-[55vh]"
      />
      <Card className="z-10 flex h-[26.5rem] w-full flex-col items-center justify-center lg:w-full bg-none">
        <CardHeader className="">
          <CardTitle className="z-10 text-3xl font-extrabold md:text-4xl text-center">
            Are you ready to level up? Let&apos; Talk!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="z-10 pb-10 text-center text-xl">
            Whether it&apos;s optimizing your business with AI or breathe life
            into your SaaS vision, we&apos;re ready to help you take the first
            step.{" "}
            <span className="font-bold">Book a free consultation call</span>{" "}
            with <span className="font-bold">CLEVERCORE AI</span> and let&apos;s
            turn your goals into tangible success.
          </CardDescription>
        </CardContent>
        <Link
          href={`https://calendly.com/ascendai/meeting-with-ascend-ai`}
          target="_blank"
        >
          <Button className="cursor-pointer text-xl bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 rounded-xl">
            Book A Free Call!
          </Button>
        </Link>
      </Card>
    </div>
  )
}

export default BookACall
