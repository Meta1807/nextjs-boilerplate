import React from "react"
import tw from "twin.macro"
import { AnimatePresence } from "framer-motion"

// Query Imports
import { useGetUserQuery } from "@generated/graphql"

// Component Imports
import NoSaved from "./subcomponents/NoSaved"
import MemeContainer from "@components/base/Containers/MemeContainer"
import MemeCard from "@components/base/Cards/MemeCard"

const Saved: React.FC = ({}) => {
  const { data, loading: userLoading } = useGetUserQuery({
    variables: {
      id: "343d5987-306a-4815-8dcb-fa2fd0ff523b",
    },
  })
  return (
    <AnimatePresence>
      <div tw="flex flex-col items-center flex-wrap">
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
      </div>
    </AnimatePresence>
  )
}

export default Saved
