import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    }
  }
}

const MemeContainer: React.FC<{ children: ReactNode} > = ({ children }) => (
  <motion.div
    tw="flex justify-center items-center flex-wrap px-8"
    variants={container}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
)

export default MemeContainer;
