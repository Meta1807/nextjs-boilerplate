import React, { useEffect } from "react"
import tw from "twin.macro"
import {
  useMemesQuery,
  useGetUserQuery,
  MemesQuery,
  useInsertMemesMutation,
  useDeleteMemeMutation,
} from "../../generated/graphql"
import { motion, AnimatePresence } from "framer-motion"

// Component Imports
import MemeCard from "@components/base/Cards/MemeCard"
import MemeContainer from "@components/base/Containers/MemeContainer"

const filterData = (word: string, data: MemesQuery) => {
  const re = new RegExp(word.replace(/\\/g, "\\\\"), "i")
  return data?.memes.filter(item => item.title.match(re))
}

interface MemesProps {
  search: string
}

const Memes: React.FC<MemesProps> = ({ search }) => {
  const { data, loading: memesLoading } = useMemesQuery()
  const userData = useGetUserQuery({
    variables: {
      id: "343d5987-306a-4815-8dcb-fa2fd0ff523b",
    },
  })

  return (
    <>
      {!memesLoading ? (
        <div tw="flex flex-col items-center flex-wrap min-h-screen">
          <MemeContainer>
            {/* {memesLoading
              ? "loading.."
              : data?.memes.map(meme => (
                  <div>
                    <h1 tw="uppercase font-bold text-base">{meme.title}</h1>
                    <img tw="w-40" src={meme.image_url} />
                  </div>
                ))} */}
            <AnimatePresence>
              {filterData(search, data)?.map((item, index) => (
                <MemeCard
                  index={index}
                  id={item.id}
                  uid={userData?.data?.users_by_pk.id}
                  key={item.id}
                  src={item.image_url}
                  description={item.description}
                  title={item.title}
                  saved={userData?.data?.users_by_pk.user_memes.some(
                    i => i.meme_id === item.id
                  )}
                />
              ))}
            </AnimatePresence>
          </MemeContainer>
        </div>
      ) : (
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
      )}
    </>
  )
}

export default Memes
