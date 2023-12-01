'use client'

import { useRouter } from "next/navigation";

import CustomizedInput from "@/components/forms/input";
import { Envelope, Key } from "phosphor-react";

export default function SignUp() {

  const { push } = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-darkbackground">
      <div className="flex flex-col bg-cyan-800 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl w-full max-w-[30rem]">
        <div className="flex flex-row items-center justify-center gap-1 py-4">
          <svg width="32px" height="32px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#fff" /><path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#fff" /><path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#fff" /><path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#2ca58d" /></svg>
          <p className="text-lg text-white bold font-semibold">GRAPHY</p>
        </div>
        <div className="flex flex-col text-center py-4 gap-1">
          <span className=" text-green-800 text-2xl font-bold tracking-tight ">Registro</span>
          <span className=" text-cyan-200 text-base font-medium tracking-tight">Insira suas credenciais para continuar</span>
          <span className=" text-subtitle text-sm font-semibold tracking-tight py-4">Registre-se com seu Email</span>
        </div>
        <div className='flex flex-col gap-4'>
          <CustomizedInput placeholder='Email' text="oi" icon={<Envelope className='w-5 h-5' name='teste' />} />
          <CustomizedInput placeholder='Senha' icon={<Key className='w-5 h-5' weight="fill" />} />
        </div>
        <div className="flex flex-row justify-between items-center pt-4">
          <div className="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 cursor-pointer bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="link-checkbox" className="text-sm text-gray-250 ms-2">Mantenha-me conectado.</label>
          </div>
          <p className="text-sm text-green-800 font-semibold cursor-pointer hover:underline">Esqueceu sua senha?</p>
        </div>
        <div className="mt-4">
          <button className="bg-green-800 min-h-[48px] min-w-full rounded-lg text-white font-medium">
            Logar
          </button>
        </div>
        <hr  className="my-6 h-px border-t-0 bg-gray-700" />
        <div className="flex justify-center text-sm text-white font-semibold divide-y divide-dashed cursor-pointer hover:underline">
          <p onClick={() => push('/login/sign-in')}> Não possui uma conta?</p>
        </div>
      </div>
    </main>
  )
}
