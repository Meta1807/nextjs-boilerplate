import React from "react"
import tw from "twin.macro"
import { AnimatePresence, motion, Variants } from "framer-motion"

// Query Imports
import { useGetUserQuery } from "@generated/graphql"

// Component Imports
import NoSaved from "./subcomponents/NoSaved"
import MemeContainer from "@components/base/Containers/MemeContainer"
import MemeCard from "@components/base/Cards/MemeCard"

const animationStates: Variants = {
  base: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  start: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Saved: React.FC = ({}) => {
  const { data, loading: userLoading } = useGetUserQuery({
    variables: {
      id: "343d5987-306a-4815-8dcb-fa2fd0ff523b",
    },
  })
  return (
    <AnimatePresence>
      <motion.div
        tw="flex flex-col items-center flex-wrap"
        variants={animationStates}
        initial="start"
        animate="base"
        exit="exit"
      >
        {data?.users_by_pk.user_memes.length === 0 ? (
          <NoSaved />
        ) : (
          <div tw="flex flex-col items-center flex-wrap min-h-screen">
            <MemeContainer>
              <AnimatePresence>
                {!userLoading &&
                  data?.users_by_pk.user_memes.map((item, index) => (
                    <MemeCard
                      index={index}
                      key={item.meme.id}
                      id={item.meme.id}
                      uid={data?.users_by_pk.id}
                      src={item.meme.image_url}
                      description={item.meme.description}
                      title={item.meme.title}
                      saved={true}
                    />
                  ))}
              </AnimatePresence>
            </MemeContainer>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default Saved
