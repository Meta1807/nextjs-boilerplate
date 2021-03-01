import React from 'react';
import tw from 'twin.macro';

const Search = ({ search, searchHandler }) => (
  <div tw="flex justify-center">
    <div tw="mx-8 w-full md:w-1/4">
      <input
        type="text"
        tw="border border-gray-400 py-2 px-2 w-full rounded-lg focus:(outline-none)"
        onChange={(e) => searchHandler(e.target.value)}
        value={search}
        placeholder="search for memes ..."
      />
    </div>
  </div>
);

export default Search;
