import React from 'react';
import tw from 'twin.macro';

const SocialIcon: React.FC<{ src: string }> = ({ src }) => (
  <img tw="w-8 mx-2" src={src} />
)

const Footer: React.FC = () => (
  <div tw="h-24 w-full bg-white">
    <div tw="flex justify-between items-center h-full px-16">
      <div tw="flex flex-row">
        <img src="/icons/nav/logo_footer.svg" tw="mr-1.5"></img>
        <h1 tw="uppercase text-gray-400 font-bold select-none">
          Kesegaran.Compfest
        </h1>
      </div>
      <div tw="flex items-center">
        <SocialIcon src="/icons/social/facebook.svg" />
        <SocialIcon tw="w-8" src="/icons/social/twitter.svg" />
        <SocialIcon tw="w-8" src="/icons/social/youtube.svg" />
        <SocialIcon tw="w-8" src="/icons/social/instagram.svg" />
        <SocialIcon tw="w-8" src="/icons/social/linkedin.svg" />
        <SocialIcon tw="w-8" src="/icons/social/line.svg" />
      </div>
      <p tw="text-gray-400">© 2021 ADRIAN ARDIZZA</p>
    </div>
  </div>
)

export default Footer;
