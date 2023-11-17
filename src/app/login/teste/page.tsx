'use client';

import CustomizedInput from '@/components/forms/input'
import Image from 'next/image'
import { Envelope, Key } from 'phosphor-react'

export default function Testando() {

  return (
    <main className="flex min-h-screen flex-col sm:flex-row items-center justify-center gap-16 bg-gray-200">
      <div className='flex flex-col space-y-8'>
        <div className='flex flex-row text-center items-center space-x-4 brightness-90'>
          <div className='border-2 rounded-[100%] border-purple-700'>
            <Image 
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert brightness-90 z-auto"
              src="/images/icone-github-violet.png"
              alt="Next.js Logo"
              width={80}
              height={90}
              priority
            />
          </div>
          <span className='text-[#ffffff] font-bold brightness-90'>
            Github Clone
          </span>
        </div>
        <div className='text-[#ffffff] font-roboto text-5xl font-bold whitespace-nowrap' style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.4)' }}>
          Efetue o <span className='text-purple-700'>login</span> <br/> para continuar
        </div>
      </div>
      <div className=' bg-gray-300 w-[450px] h-[446px] p-12 rounded-[8px]'>
        <div className='flex flex-col gap-4'>
          <CustomizedInput placeholder='Email' icon={<Envelope className='w-5 h-5' name='teste' />}/>
          <CustomizedInput placeholder='Senha' icon={<Key className='w-5 h-5' weight="fill" />}/>
        </div>
        <a href='https://github.com/pedroantoniodigital/TS-FRONT/compare/main...develop' target='_blank'>
          <div className='font-roboto text-[12px] p-2 text-purple-700 hover:text-purple-600 transition ease-in-out duration-500'>
            Esqueceu sua senha?
          </div>
        </a>
        <div className='bg-purple-700 text-[#ffffff] hover:bg-purple-600 transition ease-in-out duration-500 cursor-pointer font-roboto font-bold flex justify-center text-center mt-4 p-3 rounded-[8px]'>
          <button className='tracking-widest'>
            ENTRAR
          </button>
        </div>
        <div className='flex justify-center mt-4 text-[#ffffff]'>
          Não tem uma conta? <span className=' text-purple-700 hover:text-purple-600 transition ease-in-out duration-500 ml-1'>Registre-se</span>
        </div>
        <div className='flex flex-row justify-around mt-4'>
          <div className='bg-gray-700 brightness-[0.7] w-[40%] h-[1px]'/>
          <div className='bg-gray-700 brightness-[0.7] w-[40%] h-[1px]'/>
        </div>
        <div className='flex flex-row items-center justify-around mt-4 text-[#ffffff]'>
          <div>
            Ou entre com
          </div>
          <div className='bg-[#323138] hover:bg-[#54525e] cursor-pointer text-center transition ease-in-out duration-500 w-[200px] h-[40px] flex items-center justify-center rounded-[8px]'>
            <Image 
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/images/icone-github-violet.png"
              alt="Next.js Logo"
              width={30}
              height={30}
              priority
            />
            <span className='font-roboto font-bold ml-2 text-[#fffffff]'>
              GITHUB
            </span>
          </div>
        </div>
      </div>  
    </main> 
  )
}
