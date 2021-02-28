import React from "react"
import tw from "twin.macro"
import { useMemesQuery, MemesQuery } from "../../generated/graphql"

// Component Imports
import MemeCard from '@components/base/Cards/MemeCard';
import MemeContainer from '@components/base/Containers/MemeContainer';

const filterData = (word, data: MemesQuery) => {
  const re = new RegExp(word, "i")
  return data.memes.filter((item) => item.title.match(re))
}

interface MemesProps {
  search: string,
}

const Memes: React.FC<MemesProps> = ({ search }) => {
  const { data, loading: memesLoading } = useMemesQuery()
  return (
    <>
      { !memesLoading && (
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
            { filterData(search, data).map((item, index) => (
              <MemeCard index={index} key={index} src={item.image_url} description={item.description} title={item.title} />
            ))}
          </MemeContainer>
        </div>
      )}
    </>
  )
}

export default Memes;
