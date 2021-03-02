import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { AnimatePresence } from "framer-motion"

// Query Imports
import { useMemesQuery, useGetUserQuery, MemesQuery } from "@generated/graphql"

// Component Imports
import Loader from "./subcomponents/Loader"
import MemeCard from "@components/base/Cards/MemeCard"
import MemeContainer from "@components/base/Containers/MemeContainer"

const filterData = (word: string, data: MemesQuery) => {
  const re = new RegExp(word.replace(/\\/g, "\\\\"), "i")
  return data?.memes.filter(item => item.title.match(re))
}

const Memes: React.FC<{ search: string }> = ({ search }) => {
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
        <Loader />
      )}
    </>
  )
}

export default Memes
