import React, { useEffect, useState } from "react"
import Button from "../Buttons/Button"
import tw from "twin.macro"
import { motion, Variants } from "framer-motion"
import {
  useInsertMemesMutation,
  useDeleteMemeMutation,
  MemesDocument,
  GetUserDocument,
  GetUserQuery,
} from "../../../generated/graphql"

import { onHover, onLeave } from "./handlers/hover"

interface MemeCardInterface {
  id: number
  uid: string
  src: string
  title: string
  description: string
  saved: Boolean
}

const MemeCard: React.FC<MemeCardInterface> = ({
  id,
  uid,
  src,
  title,
  description,
  saved,
}) => {
  const [delayTimer, setDelayTimer] = useState(null)
  const [hovered, setHovered] = useState(false)
  const [insertMemes, insertResult] = useInsertMemesMutation({
    variables: {
      meme: {
        meme_id: id,
        user_id: "343d5987-306a-4815-8dcb-fa2fd0ff523b",
      },
    },
    refetchQueries: [
      {
        query: GetUserDocument,
        variables: {
          id: uid,
        },
      },
    ],
  })
  const [deleteMemes, deleteResult] = useDeleteMemeMutation({
    variables: {
      user_id: uid,
      meme_id: id,
    },
    refetchQueries: [
      {
        query: GetUserDocument,
        variables: {
          id: uid,
        },
      },
    ],
  })

  const clickHandler = () => {
    if (!insertResult.loading && !deleteResult.loading) {
      if (!saved) {
        insertMemes()
      } else {
        deleteMemes()
      }
    }
  }

  const variants: Variants = {
    initial: {
      opacity: 0,
    },
    show: {
      transition: {
        ease: "easeInOut",
        duration: 0.5,
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
    <motion.div
      tw="relative max-w-sm select-none mb-8 break-inside"
      variants={variants}
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
        <motion.div
          tw="w-full bg-white bg-opacity-75 absolute bottom-0"
          onMouseOver={() => onHover(delayTimer, setHovered)}
          onMouseLeave={() => onLeave(setDelayTimer, setHovered, 100)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.25 }}
          exit={{ opacity: 0 }}
        >
          <div tw="flex flex-row p-1 justify-between items-center">
            <h1 tw="uppercase font-bold text-sm w-2/3 m-1">{title}</h1>
            <Button
              name={saved ? "Saved" : "Save"}
              src="/icons/save.svg"
              onClick={() => clickHandler()}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default MemeCard
