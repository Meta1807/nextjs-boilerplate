import React from "react"
import tw from "twin.macro"

// Component Imports
import MemeCard from '../base/Cards/MemeCard';
import MemeContainer from '../base/Containers/MemeContainer';

interface MemesProps {}

const Memes: React.FC<MemesProps> = ({}) => {
  return (
    <div tw="flex flex-col items-center flex-wrap">
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
      </MemeContainer>
    </div>
  )
}

export default Memes;
