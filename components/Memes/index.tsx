import React from "react"
import { useMemesQuery } from "../../generated/graphql"
import tw from "twin.macro"

// Component Imports
import MemeCard from './subcomponents/MemeCard';
import MemeContainer from '../base/MemeContainer';

interface MemesProps {}

export const Memes: React.FC<MemesProps> = ({}) => {
  const { data, loading: memesLoading } = useMemesQuery()
  return (
    <div tw="min-h-screen flex flex-col justify-center items-center flex-wrap">
      <MemeContainer>
        {/* {memesLoading
          ? "loading.."
          : data?.memes.map(meme => (
              <div>
                <h1 tw="uppercase font-bold text-base">{meme.title}</h1>
                <img tw="w-40" src={meme.image_url} />
              </div>
            ))} */} 
        <MemeCard />
        <MemeCard />
        <MemeCard />
        <MemeCard />
        <MemeCard />
        <MemeCard />
      </MemeContainer>
    </div>
  )
}
