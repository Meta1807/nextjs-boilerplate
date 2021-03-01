import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import tw from "twin.macro"

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

const MemeContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div
    tw="px-8 md:masonry-3 lg:px-16 lg:masonry-4"
    variants={container}
    initial="hidden"
    animate="show"
    exit="hidden"
    transition={{
      duration: 0.5,
    }}
  >
    {children}
  </motion.div>
)

export default MemeContainer
