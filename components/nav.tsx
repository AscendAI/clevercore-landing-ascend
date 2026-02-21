"use client"

import * as React from "react"
import Image from "next/legacy/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { AiOutlineHome, AiOutlineQuestionCircle } from "react-icons/ai"
import { BsStars, BsTelephone } from "react-icons/bs"
import { FaBook } from "react-icons/fa"
import { RiTeamLine } from "react-icons/ri"

import { Button } from "./ui/button"

export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { icon: <FaBook />, title: "Portfolio", path: "/portfolio" },
    {
      icon: <AiOutlineQuestionCircle />,
      title: "Case Studies",
      path: "/case-studies",
    },
    { icon: <BsTelephone />, title: "Contact", path: "/#contact" },
    { icon: <RiTeamLine />, title: "Team", path: "/team" },
  ]

  return (
    <nav className="bg-opacity/50 fixed top-0 z-50 w-full border-b pt-2 backdrop-blur-md md:border-0">
      <div className="mx-auto max-w-screen-xl px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between py-3 md:ml-5 md:block md:py-5">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/cc_Logo.png" alt="Clevercore AI" height={24} width={24} />
            <span className="text-lg font-bold text-white tracking-tight">Clevercore AI</span>
          </Link>
          <div className="md:hidden">
            <button
              className="rounded-md p-2 text-gray-100 outline-none focus:border focus:border-gray-400"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`mt-4 pb-3 md:mt-0 md:block md:pb-0 md:text-xl ${state
            ? "overflow absolute right-0 mr-[1rem] w-[14rem] flex-auto border-[1px] border-solid border-white bg-black text-center leading-6 md:border-none md:bg-transparent lg:border-none lg:bg-transparent"
            : "hidden"
            }`}
        >
          <ul
            className={`items-right justify-center space-y-8 px-[2rem] md:mr-0 md:flex md:space-x-6 md:space-y-0 lg:mr-[3rem] ${state ? "p-[2rem] md:p-0 lg:p-0" : "hidden"
              }`}
          >
            {menus.map((item, idx) => (
              <li
                key={idx}
                className={`flex justify-center duration-300 hover:scale-105 hover:text-white ${state
                  ? "text-white md:text-[#8F9BB7] lg:text-[#8F9BB7]"
                  : "text-[#8F9BB7]"
                  }`}
              >
                <div
                  className={`${state ? "mr-[4px] mt-[4px] md:hidden lg:hidden" : "hidden"
                    }`}
                >
                  {item.icon}
                </div>
                <Link href={item.path} onClick={() => setState(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`https://calendly.com/ascendai/meeting-with-ascend-ai`}
          target="_blank"
        >
          <Button className="hidden md:block">Book A Free Call</Button>
        </Link>
      </div>
    </nav>
  )
}
