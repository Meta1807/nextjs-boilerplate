import React from 'react';
import Link from 'next/link';
import tw from 'twin.macro';

import MenuButton from './subcomponents/MenuButton';

// Icons exported from tsx as inline-svg to allow use of fill-current 
import Explore from './icons/explore';
import Saved from './icons/saved';

interface menuItem {
  title: string,
  path: string,
  icon: React.FC,
  onClick: Function,
}

const menuItems: Array<menuItem> = [
  {
    title: "Explore",
    path: "/",
    icon: <Explore />,
  },
  {
    title: "Saved",
    path: "/saved",
    icon: <Saved />,
  },
]

const Navbar: React.FC = () => (
  <div tw="fixed top-0 h-16 w-screen bg-white">
    <div tw="flex items-center h-full px-16 justify-between">
      <Link href="/">
        <div tw="flex cursor-pointer">
          <img src="/icons/nav/logo.svg" tw="mr-1.5"></img>
          <h1 tw="uppercase text-gray-600 font-bold select-none">
            Kesegaran.Compfest
          </h1>
        </div>
      </Link>
      <div tw="flex">
        { menuItems.map((item) => (
          <MenuButton
            name={item.title}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  </div>
)

export default Navbar