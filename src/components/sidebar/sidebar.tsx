import { Dialog, Transition } from '@headlessui/react';
import { X } from 'phosphor-react';
import { Fragment } from 'react';

interface SidebarProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({ isOpen, setOpen }: SidebarProps) {
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
                        <p onClick={() => setOpen(false)} className='cursor-pointer'><X color='#fff'/></p>
                      </div>
                    </div>
                  </Dialog.Title>
                </div>
                <hr  className="mt-6 h-px border-t-0 bg-gray-700" />
                <div className="relative flex-1 px-4 sm:px-6 bg-gray-900 max-h-[3.5rem]">
                  oi
                </div>
                <hr  className="h-px border-t-0 bg-gray-700" />
                <div className='flex flex-row items-center justify-between px-4 sm:px-6 py-4 text-white'>
                  Tema
                  <div className='flex flex-row gap-6'>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
  );
}
