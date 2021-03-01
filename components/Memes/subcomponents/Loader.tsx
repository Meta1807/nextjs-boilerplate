import React from "react"
import { motion } from "framer-motion"
import tw from "twin.macro"

const Loader: React.FC = () => (
  <div tw="w-full h-full flex flex-col items-center justify-center text-gray-500 font-bold uppercase">
    <p tw="mb-4">Loading Your Memes</p>
    <motion.img
      src="/icons/nav/logo.svg"
      tw="w-8 mr-1.5"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: [0.37, 0.83, 0.83, 0.37],
      }}
    />
  </div>
)

export default Loader
