import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';
import Logo1 from '../Images/logo1.png';
import Logout from './Logout';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="bg-white drop-shadow-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/home" className="-m-1.5 p-4">
            <img className="h-14 w-auto left-24" src={Logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only"></span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-24">
          <li className='list-none'><Link className="text-base font-semibold leading-6 text-gray-900 hover:underline underline-offset-4" to='/home'>Inicio</Link></li>
          <li className='list-none'><Link className="text-base font-semibold leading-6 text-gray-900 hover:underline underline-offset-4" to='/colleague'>Colaboradores</Link></li>
          <li className='list-none'><Link className="text-base font-semibold leading-6 text-gray-900 hover:underline underline-offset-4" to='/visitors'>Visitantes</Link></li>
          <li className='list-none'><Link className="text-base font-semibold leading-6 text-gray-900 hover:underline underline-offset-4" to='/keys'>Llaves</Link></li>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button type="button" className="text-base font-semibold leading-6 text-red-600 hover:text-red-800 hover:underline underline-offset-4" onClick={() => setModalOpen(true)}>
            Cerrar sesión <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
      <Logout openmodal={modalOpen} onClose={setModalOpen}/>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/home" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={Logo1} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      
                    </>
                  )}
                </Disclosure>
                <li className='list-none'><Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to='/home'>Inicio</Link></li>
                <li className='list-none'><Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to='/colleague'>Colaboradores</Link></li>
                <li className='list-none'><Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to='/'>Visitantes</Link></li>
                <li className='list-none'><Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to='/'>Llaves</Link></li>
              </div>
              <div className="py-6">
                <button
                  href="/"
                  className="text-base font-semibold leading-6 text-red-600 hover:text-red-800"
                  onClick={() => setModalOpen(true)}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}