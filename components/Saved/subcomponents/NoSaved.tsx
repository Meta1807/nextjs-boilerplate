import React from 'react';
import Link from 'next/link';
import tw from 'twin.macro';

const NoSaved: React.FC = () => (
  <div tw="w-full px-8 lg:px-36 select-none">
    <div
      tw="flex flex-col justify-center items-center flex-wrap bg-gray-200 w-full rounded-lg py-16"
    >
      <p tw="mb-2.5 text-gray-400 text-lg">
        You have no saved memes. Explore now!
      </p>
      <Link href="/">
        <button
          type="submit"
          tw="bg-blue-500 text-white px-4 py-2 rounded-lg transform transition-all 
              focus:(outline-none) hover:(scale-105)"
        >
          Explore
        </button>
      </Link>
    </div>
  </div>
)

export default NoSaved;
