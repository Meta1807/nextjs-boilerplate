import React from 'react';
import tw from 'twin.macro';

interface SaveButtonProps {
  saved: Boolean,
  onClick: Function,
} 

const SaveButton: React.FC<SaveButtonProps> = ({ onClick, saved }: SaveButtonProps) => (
  <button 
    type="button"
    tw="m-3 font-bold flex justify-center items-center transition-all 
    transform focus:(outline-none) hover:(scale-105)"
    onClick={() => onClick()}
  >
    <img src="/icons/save.svg" tw="mr-2"></img>
    <span>{saved ? "Saved" : "Save"}</span>
  </button>
)

export default SaveButton;
