import React from "react"
import Image from "next/image"
import Link from "next/link"
import LinkedIn from "public/linkedin_icon.png"
import Rafid from "public/team/Rafid.png"
import Refat from "public/team/Refat.png"
import Yaseen from "public/team/Yaseen.png"



import { buttonVariants } from "../ui/button"
import SectionTitle from "../SectionTitle"

const TeamInfo =[
  {
    name: "Rafid Hamid",
    img: "/team/Rafid.png",
    role: "Tech lead"
  },
  {
  name: "Yaseen Nur",
  img: "/team/Yaseen.png",
  role: "Founder & CEO"
},    
  {
  name: "Refatul Islam",
  img: "/team/Refat.png",
  role: "Senior Software Engineer"
},]
const image = [ Rafid, Yaseen, Refat]

function OurTeam() {
  return (
    <div className="my-20 flex flex-col items-center justify-center gap-20 ">
      <SectionTitle>OUR TEAM</SectionTitle>
      <h1 className="mb-12 text-3xl font-extrabold leading-tight  md:text-4xl">
        {`Let's`} Meet Our Team
      </h1>
      <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
        {TeamInfo.slice(0, 3).map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <div  className="relative ">
              <Image
                src={image[i]}
                height={300}
                width={300}
                alt={`${member.name}`}
                className="rounded-full hover:scale-105 hover:duration-300"
              />
              <Image
                src={LinkedIn}
                width={100}
                alt="LinkedIn"
                className="absolute bottom-0 right-0"
              />
            </div>
            <h1 className="mb-5 mt-20 text-3xl font-bold">{member.name}</h1>
            <h1 className="text-lg">{member.role}</h1>
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
