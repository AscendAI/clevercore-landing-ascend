import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Yaseen from "public/team/Yaseen.png"
import Louis from "public/louis_ceo.png"

import { Card } from "@/components/ui/card"

import { TeamInfo } from "./teamInfo"

const Members = () => {
  const [HoverIndex, setHoverIndex] = useState<number>()
  const image = [
    Louis,
    Yaseen,
  ]
  return (
    <motion.ul
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.6,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-[-190rem] flex flex-wrap justify-center pt-[190rem] sm:mt-[0rem] sm:pt-[0rem]"
    >
      <div className="relative my-5 flex flex-wrap justify-center">
        {TeamInfo.map((info, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            {info.name !== "" ? (
              <Card
                className={`m-5 flex h-[25rem] w-[18rem] flex-col items-center text-center transition-all duration-500 hover:scale-[105%] hover:duration-300 ${HoverIndex !== index && HoverIndex !== undefined ? `blur-sm` : ``
                  }`}
                onMouseLeave={() => setHoverIndex(undefined)}
                onMouseEnter={() => setHoverIndex(index)}
              >
                <div className="relative h-[18rem] w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={image[index]!}
                    alt={info.name}
                    fill
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>

                <h1 className="pt-5 text-xl font-semibold">{info.name}</h1>
                <h1 className="pt-2 text-lg font-semibold text-muted-foreground">
                  {info.role}
                </h1>
              </Card>
            ) : (
              <div></div>
            )}
          </motion.li>
        ))}
      </div>
    </motion.ul>
  )
}

export default Members
