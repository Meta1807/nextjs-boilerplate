import React from "react"
import { useGetUserQuery } from "../../generated/graphql"
import tw from "twin.macro"
import { AnimatePresence } from "framer-motion"

// Component Imports
import NoSaved from "./subcomponents/NoSaved"
import MemeContainer from "@components/base/Containers/MemeContainer"
import MemeCard from "@components/base/Cards/MemeCard"

const Saved: React.FC = ({}) => {
  const { data, loading: memesLoading } = useGetUserQuery({
    variables: {
      id: "343d5987-306a-4815-8dcb-fa2fd0ff523b",
    },
  })
  return (
    <div tw="flex flex-col items-center flex-wrap">
      {data?.users_by_pk.user_memes.length === 0 ? (
        <NoSaved />
      ) : (
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
              {!memesLoading &&
                data?.users_by_pk.user_memes.map((item, index) => (
                  <MemeCard
                    index={index}
                    key={index}
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
    </div>
  )
}

export default Saved
