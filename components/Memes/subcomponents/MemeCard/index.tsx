import React from "react";
import SaveButton from './buttons/Save';
import tw from "twin.macro";

const MemeCard: React.FC = () => (
  <div tw="max-w-sm select-none m-4">
    <img 
      tw="w-full h-80 object-cover rounded-lg" 
      src="https://i.kym-cdn.com/entries/icons/facebook/000/027/424/joke.jpg"
    />
    <div tw="flex flex-row p-1 justify-between">
      <h1 tw="uppercase font-bold text-sm w-2/3 m-1">
        Am I A Joke To You? asklfklsajfkla
      </h1>
      <SaveButton onClick={() => undefined} saved={false} />
    </div>
  </div>
)

export default MemeCard;
