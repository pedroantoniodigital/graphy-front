import { Dialog, Transition } from '@headlessui/react';
import { X } from 'phosphor-react';
import { Fragment } from 'react';
import ColoredCircle from '../colorCircle/colorCircle';

import { Typewriter } from 'react-simple-typewriter'

interface SidebarProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({ isOpen, setOpen }: SidebarProps) {
  // const { text } = use

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0"
        open={isOpen}
        onClose={setOpen}
      >
        <div className="absolute inset-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black/30 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-[23rem]">
                <div className="h-full flex flex-col py-4 bg-cyan-800 shadow-xl overflow-hidden">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      <div className='flex flex-row justify-between items-center'>
                        <p className='text-white font-medium text-sm'>Customização de Tema</p>
                        <div className='flex flex-row justify-center items-center gap-3'>
                          <p className='cursor-pointer text-red-500 border border-red-500 text-xs rounded-md p-2'>Resetar</p>
                          <p onClick={() => setOpen(false)} className='cursor-pointer'><X color='#fff' /></p>
                        </div>
                      </div>
                    </Dialog.Title>
                  </div>
                  <hr className="mt-6 h-px border-t-0 bg-gray-700" />
                  <div className="flex flex-row items-center justify-center flex-1 px-4 sm:px-6 bg-gray-900 max-h-[4rem]">
                    <svg width="32px" height="32px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#fff" /><path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#fff" /><path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#fff" /><path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#2ca58d" /></svg>
                    <p className="text-lg text-white bold font-semibold">GRAPHY</p>
                  </div>
                  <hr className="h-px border-t-0 bg-gray-700" />
                  <div className='flex flex-row items-center justify-between px-4 sm:px-6 py-4 text-white'>
                    Tema
                    <div className='flex flex-row gap-4 items-center'>
                      <div className='border-2 border-gray-370 rounded-md p-[0.7rem] cursor-pointer'>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div className='border-2 border-gray-370 rounded-md p-[0.7rem] cursor-pointer'>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" stroke="#fff" />
                          <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" stroke="#fff" />
                          <path d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z" fill="#fff" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <hr className="h-px border-t-0 bg-gray-700" />

                  <div className="px-4 sm:px-6 py-4 text-white text-sm">
                    Paleta de cores
                  </div>

                  <div className='flex flex-row justify-around pb-4'>
                    <ColoredCircle rightHalfColor='green-800' />
                    <ColoredCircle rightHalfColor='green-800' leftHalfColor='red-500' />
                    <ColoredCircle rightHalfColor='green-800' leftHalfColor='red-500' />
                    <ColoredCircle rightHalfColor='green-800' leftHalfColor='red-500' />
                    <ColoredCircle rightHalfColor='green-800' leftHalfColor='red-500' />
                  </div>

                  <hr className="h-px border-t-0 bg-gray-700" />

                  <div className='flex flex-row items-center justify-between px-4 sm:px-6 py-4'>
                    <div className=" text-white text-sm">
                      Resolução de tela
                    </div>
                    <div className='flex flex-row justify-center items-center gap-4'>
                      <div className='flex justify-center border-2 border-gray-370 rounded-md w-[50px] h-[50px] cursor-pointer items-center'>
                        <div className='border-2 border-gray-370 rounded-md w-8 h-8 cursor-pointer'>
                        </div>
                      </div>
                      <div className='flex justify-center border-2 border-gray-370 rounded-md w-[50px] h-[50px] cursor-pointer items-center'>
                        <div className='border-2 border-gray-370 rounded-md w-4 h-8 cursor-pointer'>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="h-px border-t-0 bg-gray-700" />

                  <div className='flex flex-row items-center justify-between px-4 sm:px-6 py-4'>
                    <div className=" text-white text-sm">
                      Posicao do Menu
                    </div>
                    <div className='flex flex-row justify-center items-center gap-4'>
                      <div className='flex justify-center border-2 border-gray-370 rounded-md w-[50px] h-[50px] cursor-pointer items-center'>
                        <div className='dashedSideBorder'>
                        </div>
                      </div>
                      <div className='flex justify-center border-2 border-gray-370 rounded-md w-[50px] h-[50px] cursor-pointer items-center'>
                        <div className='dashedNavBorder'>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="h-px border-t-0 bg-gray-700" />
                </div>

                <div className='absolute bottom-8 right-[50%] translate-x-[50%] text-white font-bold'>
                  <Typewriter 
                    words={['Gráficos', 'Relatórios', 'Excel', 'Cebola' ]}
                    loop={Infinity}
                    cursor={false}
                    cursorStyle='...'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
