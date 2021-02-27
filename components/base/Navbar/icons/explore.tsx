import React from 'react';
import tw from 'twin.macro';

const explore: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" css={[tw`fill-current`]}>
  <path d="M6 22H18C18.178 22 18.348 21.97 18.512 21.926L14.753 18.167C13.962 18.691 13.018 19 12 19C9.243 19 7 16.757 7 14C7 11.243 9.243 9 12 9C14.757 9 17 11.243 17 14C17 15.018 16.691 15.963 16.167 16.753L19.926 20.512C19.97 20.348 20 20.178 20 20V8L14 2H6C4.896 2 4 2.896 4 4V20C4 21.104 4.896 22 6 22Z" fill="current"/>
  <path d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z" fill="current"/>
  </svg>
);

export default explore;