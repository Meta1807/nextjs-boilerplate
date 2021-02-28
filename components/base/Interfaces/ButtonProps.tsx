import React from 'react';

export default interface ButtonProps {
  onClick?: Function,
  name: string,
  src?: string,
  icon?: React.ReactNode
}