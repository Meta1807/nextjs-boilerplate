import React from 'react';
import ActiveLink from './ActiveLink.jsx';
import Button from '@components/base/Buttons/Button';
import tw from 'twin.macro';
import { Url } from 'url';

interface MenuButtonProps {
  name: string,
  path: string,
  icon: React.ReactNode,
}

const MenuButton: React.FC<MenuButtonProps> = ({ name, icon, path }) => (
  <ActiveLink href={path} as={path} exact={true}>
    <Button icon={icon} name={name} />
  </ActiveLink>
)

export default MenuButton;