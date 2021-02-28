import React from 'react';
import tw from 'twin.macro';
import ButtonInterface from '../Interfaces/ButtonProps';


const Button: React.FC<ButtonInterface> = ({ onClick = () => undefined, name, src, icon}) => (
  <button 
    type="button"
    tw="m-3 font-bold flex justify-center items-center transition-all ease-in-out duration-200 
    outline-none transform focus:(outline-none) hover:(scale-110)"
    onClick={() => onClick()}
  >
    { src && <img src={src}></img> }
    <div tw="mr-2">
      { icon }
    </div>
    <span>{name}</span>
  </button>
)

export default Button;
