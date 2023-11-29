
import { HTMLProps, ReactNode } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  icon?: ReactNode
  text?: String
}

export default function CustomizedInput({ icon, text, ...props }:InputProps) {

  return( 
    <div className="bg-gray-350 group p-2 min-h-[40px] items-center rounded-xl flex flex-row border hover:border-gray-400 border-transparent focus-within:border-gray-400 transition ease-in-out duration-500">
      <div className="min-h-[40px] min-w-[32px] flex justify-center items-center text-cyan-800 group-focus-within:text-gray-400 transition ease-in-out duration-500">
        {icon}
      </div>
      <input className='bg-transparent outline-none ring-0 pl-2 text-[#ffffff]' {...props}/>
    </div>
  )
} 