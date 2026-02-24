import React from "react"
import Image from "next/image"
import Link from "next/link"
import LinkedIn from "public/linkedin_icon.png"
import Yaseen from "public/team/Yaseen.png"
import Louis from "public/louis_ceo.png"



import { buttonVariants } from "../ui/button"
import SectionTitle from "../SectionTitle"

const TeamInfo = [
  {
    name: "Louis Taborn",
    img: "/louis_ceo.png",
    role: "Founder & CEO"
  },
  {
    name: "Yaseen Nur",
    img: "/team/Yaseen.png",
    role: "CTO"
  },
]
const image = [Louis, Yaseen]

function OurTeam() {
  return (
    <div className="my-20 flex flex-col items-center justify-center gap-20 ">
      <SectionTitle>OUR TEAM</SectionTitle>
      <h1 className="mb-12 text-3xl font-extrabold leading-tight  md:text-4xl">
        {`Let's`} Meet Our Team
      </h1>
      <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
        {TeamInfo.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative h-64 w-64">
              <Image
                src={image[i]}
                fill
                alt={`${member.name}`}
                className="rounded-full object-cover hover:scale-105 hover:duration-300"
              />
              <Image
                src={LinkedIn}
                width={80}
                alt="LinkedIn"
                className="absolute bottom-0 right-0"
              />
            </div>
            <h1 className="mb-2 mt-8 text-2xl font-bold">{member.name}</h1>
            <h1 className="text-lg text-muted-foreground">{member.role}</h1>
          </div>
        ))}
      </div>
      <Link
        href="/team"
        rel="noreferrer"
        className={buttonVariants({
          variant: "outline",
          className:
            "bg-gradient-to-r from-indigo-900/[0.1] via-violet-900/[0.3] via-80% to-purple-900/[0.3]",
        })}
      >
        See Full Team
      </Link>
    </div>
  )
}

export default OurTeam
