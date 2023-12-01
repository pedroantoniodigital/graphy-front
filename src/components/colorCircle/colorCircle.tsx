import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ColoredCircleProps {
  rightHalfColor?: string;
  leftHalfColor?: string;
}

export default function ColoredCircle({ rightHalfColor, leftHalfColor }: ColoredCircleProps) {

  console.log(rightHalfColor);
  
  return !leftHalfColor ? (
    <circle className={twMerge(`bg-${rightHalfColor} w-[50px] h-[50px] transform rotate-45 rounded-full`)}></circle>
  ) : (
    <div className="relative w-[50px] h-[50px] transform rotate-45">
      <div className={`absolute w-[25px] h-full bg-${leftHalfColor} rounded-l-full`} />
      <div className={`absolute left-[25px] w-[25px] h-full bg-${rightHalfColor} rounded-r-full`} />
    </div>
  );
}
