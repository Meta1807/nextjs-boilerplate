import React from 'react';
import ActiveLink from './ActiveLink.jsx';
import tw from 'twin.macro';
import { Url } from 'url';

interface MenuButtonProps {
  name: string,
  path: string,
  icon: React.ReactNode,
}

const MenuButton: React.FC<MenuButtonProps> = ({ name, icon, path }) => (
  <ActiveLink href={path} as={path} exact={true}>
    <button 
      type="button"
      tw="m-3 font-bold flex justify-center items-center transition-all 
      transform focus:(outline-none) hover:(scale-105)"
    >
      <div tw="mr-2">{icon}</div>
      <span>{name}</span>
    </button>
  </ActiveLink>
)

export default MenuButton;