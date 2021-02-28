import React from "react";
import Button from "../Buttons/Button";
import tw from "twin.macro";
import { motion } from "framer-motion";

interface MemeCardInterface {
  index: number,
  src: string,
  title: string,
  description: string,
}

const MemeCard: React.FC<MemeCardInterface> = ({ index, src, title, description }) => (
  <motion.div
    tw="max-w-sm select-none m-4 break-inside"
    animate={{ opacity: 1.0 }}
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
    key={index}
  >
    <img 
      tw="w-96 object-cover rounded-lg" 
      src={src}
    />
    <div tw="flex flex-row p-1 justify-between items-center">
      <h1 tw="uppercase font-bold text-sm w-2/3 m-1">
        {title}
      </h1>
      <Button 
        name="Save"
        src="/icons/save.svg"
      />
    </div>
  </motion.div>
)

export default MemeCard;
