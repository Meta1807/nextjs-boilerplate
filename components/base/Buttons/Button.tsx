import React from "react"
import { motion } from "framer-motion"
import tw from "twin.macro"
import ButtonInterface from "../Interfaces/ButtonProps"

const Button: React.FC<ButtonInterface> = ({
  onClick = () => undefined,
  name,
  src,
  icon,
  disabled,
  active,
  activeClasses,
}) => (
  <motion.button
    type="button"
    css={[
      tw`m-3 font-bold flex justify-center items-center transition-all ease-in-out duration-200 
      outline-none transform focus:(outline-none) noblur`,
      active && activeClasses,
    ]}
    onClick={() => onClick()}
    disabled={disabled}
    transition={{ duration: 0.05 }}
    whileHover={{ opacity: 1, scale: 1.05 }}
    whileTap={{ opacity: 0.8, scale: 0.9 }}
  >
    {src && <img src={src}></img>}
    <div tw="mr-2">{icon}</div>
    <span tw="subpixel-antialiased">{name}</span>
  </motion.button>
)

export default Button
