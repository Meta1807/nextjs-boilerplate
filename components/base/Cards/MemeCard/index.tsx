import React, { useEffect, useState, useContext } from "react"
import tw from "twin.macro"
import { motion, Variants } from "framer-motion"

// Query Imports
import { insertMeme, deleteMeme } from "./functions/mutations"

// Handler Imports
import { onHover, onLeave } from "./handlers/hover"
import clickHandler from "./handlers/clickHandler"

// Component Imports
import Button from "@components/base/Buttons/Button"
import SaveIcon from "@components/base/Navbar/icons/saved"
import Chevron from "./subcomponents/icons/Chevron"
import { modalContext } from "@components/base/Modal/ModalContext"

interface MemeCardInterface {
  index: number
  id: number
  uid: string
  src: string
  title: string
  description: string
  saved: Boolean
}

const MemeCard: React.FC<MemeCardInterface> = ({
  index,
  id,
  src,
  title,
  description,
  saved,
}) => {
  const [delayTimer, setDelayTimer] = useState(null)
  const [hovered, setHovered] = useState(false)
  const { selectedData, setSelectedData } = useContext(modalContext)
  const [saveMeme, insertResult] = insertMeme(
    "343d5987-306a-4815-8dcb-fa2fd0ff523b",
    id
  )
  const [removeMeme, deleteResult] = deleteMeme(
    "343d5987-306a-4815-8dcb-fa2fd0ff523b",
    id
  )
  const loading = !insertResult.loading && !deleteResult.loading

  const animationVariants: Variants = {
    initial: {
      opacity: 0,
    },
    show: {
      transition: {
        ease: "easeInOut",
        duration: 0.5 + index * 0.1,
        delay: 0.25,
      },
      opacity: 1,
    },
    exit: {
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
      opacity: 0,
    },
  }

  return (
    <>
      <motion.div
        tw="relative max-w-sm select-none mb-8 break-inside"
        variants={animationVariants}
        animate="show"
        initial="initial"
        exit="exit"
        key={id}
      >
        <img
          tw="w-96 object-cover rounded-lg"
          src={src}
          onMouseOver={() => onHover(delayTimer, setHovered)}
          onMouseLeave={() => onLeave(setDelayTimer, setHovered, 100)}
        />
        {hovered && (
          <>
            <motion.div
              tw="text-gray-400 w-8 absolute z-40 right-2.5 top-2.5 transform rotate-180 cursor-pointer"
              onMouseOver={() => onHover(delayTimer, setHovered)}
              onMouseLeave={() => onLeave(setDelayTimer, setHovered, 100)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.25 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setSelectedData({
                  url: src,
                })
              }
            >
              <Chevron />
            </motion.div>
            <motion.div
              tw="w-full bg-white bg-opacity-80 absolute bottom-0"
              onMouseOver={() => onHover(delayTimer, setHovered)}
              onMouseLeave={() => onLeave(setDelayTimer, setHovered, 100)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.25 }}
              exit={{ opacity: 0 }}
            >
              <div tw="flex flex-row py-1 px-2 justify-between items-center">
                <div tw="w-2/3 m-1">
                  <h1 tw="uppercase font-bold leading-none">{title}</h1>
                  <p tw="leading-none text-sm">{description}</p>
                </div>

                <Button
                  name={saved ? "Saved" : "Save"}
                  icon={<SaveIcon />}
                  onClick={() =>
                    clickHandler(loading, saved, saveMeme, removeMeme)
                  }
                  active={saved}
                  activeClasses={tw`text-orange-accent`}
                />
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </>
  )
}

export default MemeCard
