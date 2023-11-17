'use client'

import CustomizedInput from "@/components/forms/input";
import { Envelope, Key } from "phosphor-react";


export default function SignIn() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-darkbackground">
      <div className="flex flex-col bg-cyan-800 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div>Graphy</div>
        <div className="flex flex-col text-center">
          <span className=" text-green-800 text-lg font-bold tracking-tight">Ola, seja bem vindo</span>
          <span>Insira suas credenciais para continuar</span>
        </div>
        <div className='flex flex-col gap-4'>
          <CustomizedInput placeholder='Email' text="oi" icon={<Envelope className='w-5 h-5' name='teste' />}/>
          <CustomizedInput placeholder='Senha' icon={<Key className='w-5 h-5' weight="fill" />}/>
        </div>
      </div>
    </main>
  )
}
