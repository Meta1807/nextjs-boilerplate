import React from "react";
import tw from "twin.macro";

// Component Imports
import NoSaved from './subcomponents/NoSaved';

const Saved: React.FC = ({}) => {
  return (
    <div tw="flex flex-col items-center flex-wrap">
      <NoSaved />
      
      {/* <MemeContainer>
        {memesLoading
          ? "loading.."
          : data?.memes.map(meme => (
              <div>
                <h1 tw="uppercase font-bold text-base">{meme.title}</h1>
                <img tw="w-40" src={meme.image_url} />
              </div>
          ))}
        <MemeCard />
        <MemeCard />
        <MemeCard />
        <MemeCard />
        <MemeCard />
        <MemeCard />
      </MemeContainer> */}
    </div>
  )
}

export default Saved;
