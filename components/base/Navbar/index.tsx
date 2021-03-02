import React, { useState } from "react"
import Link from "next/link"
import tw from "twin.macro"
import { motion, AnimatePresence } from "framer-motion"

import MenuButton from "./subcomponents/MenuButton"

// Icons exported from tsx as inline-svg to allow use of fill-current
import Explore from "./icons/explore"
import Saved from "./icons/saved"

interface menuItem {
  title: string
  path: string
  icon: React.ReactNode
}

const menuItems: Array<menuItem> = [
  {
    title: "Explore",
    path: "/",
    icon: <Explore />,
  },
  {
    title: "Saved",
    path: "/saved",
    icon: <Saved />,
  },
]

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div tw="fixed top-0 h-16 w-screen bg-white z-40">
      <div tw="flex items-center h-full px-8 md:px-16 justify-between">
        <Link href="/">
          <div tw="flex cursor-pointer">
            <img src="/icons/nav/logo.svg" tw="mr-1.5"></img>
            <h1 tw="hidden md:block uppercase text-gray-600 font-bold select-none">
              Kesegaran.Compfest
            </h1>
          </div>
        </Link>
        <button
          type="submit"
          css={[
            tw`rounded-lg text-black w-8 md:hidden focus:outline-none transition-all`,
            show && tw`ring-2 ring-gray-600`,
          ]}
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div tw="hidden md:flex">
          {menuItems.map((item, index) => (
            <MenuButton
              key={index}
              name={item.title}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            tw="absolute top-16 flex flex-col items-center justify-center w-full bg-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {menuItems.map((item, index) => (
              <MenuButton
                key={index}
                name={item.title}
                path={item.path}
                icon={item.icon}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
