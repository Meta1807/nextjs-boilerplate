import React, { ReactNode } from 'react';
import Link from 'next/link';
import tw from 'twin.macro';
import { useRouter } from 'next/router';

// Code snippet for active navclass taken from: 
// https://stackoverflow.com/questions/60324081/adding-active-class-for-nav-link-in-next-js

const NavLink = ({ href, as, exact, children, ...props }) => {
  const { asPath } = useRouter();
  const segment = (p) => new URL(p, 'http://localhost:3000').pathname.split('/').filter(s => s);
  const currentPath = segment(asPath);
  const targetPath = segment(as || href);

  const isActive = currentPath.length >= targetPath.length
    && targetPath.every((p, i) => currentPath[i] === p)
    && (!exact || targetPath.length === currentPath.length);

  const child = React.Children.only(children);
  return (
    <Link href={href} as={as} {...props}>
      <div css={[isActive && tw`text-blue-600`]}>
        {React.cloneElement(child)}
      </div>
    </Link>
  );
}

export default NavLink;