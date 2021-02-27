import React, { ReactNode } from 'react';
import tw from 'twin.macro';

const MemeContainer: React.FC<{ children: ReactNode} > = ({ children }) => (
  <div tw="flex justify-center items-center flex-wrap">
    {children}
  </div>
)

export default MemeContainer;
