import React from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";

const MemeCard: React.FC<{ index: number }> = ({ index }) => (
  <motion.div
    tw="max-w-sm select-none m-4"
    animate={{ opacity: 1.0 }}
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    transition={{ ease: "easeInOut", duration: 0.5, delay: 1.0 + (index * 0.25) }}
    key={index}
  >
    <img 
      tw="w-full h-80 object-cover rounded-lg" 
      src="https://i.kym-cdn.com/entries/icons/facebook/000/027/424/joke.jpg"
    />
    <div tw="flex flex-row p-1 justify-between">
      <h1 tw="uppercase font-bold text-sm w-2/3 m-1">
        Am I A Joke To You? asklfklsajfkla
      </h1>
      <button 
        type="button"
        tw="m-3 font-bold flex justify-center items-center transition-all 
        transform focus:(outline-none) hover:(scale-105)"
      >
        <img src="/icons/save.svg" tw="mr-2"></img>
        <span>Save</span>
      </button>
    </div>
  </motion.div>
)

export default MemeCard;
