import React from "react"
import tw from "twin.macro"

const Search = ({ search, searchHandler }) => (
  <div tw="flex justify-center">
    <div tw="relative mx-8 w-full md:w-1/4">
      <div tw="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src="/icons/nav/search.svg" />
      </div>
      <input
        type="text"
        tw="border border-gray-400 py-2.5 pl-10 pr-2 h-full w-full rounded-lg focus:(outline-none)"
        onChange={e => searchHandler(e.target.value)}
        value={search}
        placeholder="search for memes ..."
      />
    </div>
  </div>
)

export default Search
