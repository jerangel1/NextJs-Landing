import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'


const Signin = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className='hidden md:block'>
                    <button type="button" className='text-15px font-medium space-links' onClick={openModal}>
                        Iniciar Sesión
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                <div className="relative mx-auto h-12 w-12">
                                                    <Image
                                                        src="/assets/logo/Logo.svg"
                                                        alt="Pronosticon Logo"
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-purple">
                                                    Inicia Sesión
                                                </h2>
                                                <p className="mt-2 text-center text-sm text-lightgrey">
                                                    Accede a tu cuenta
                                                </p>
                                            </div>
                                            <form className="mt-8 space-y-6" action="#" method="POST">
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="-space-y-px rounded-md shadow-sm">
                                                    <div>
                                                        <label htmlFor="email-address" className="sr-only">
                                                            Correo Electrónico
                                                        </label>
                                                        <input
                                                            id="email-address"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-offblack placeholder-lightgrey focus:z-10 focus:border-purple focus:outline-none focus:ring-purple sm:text-sm"
                                                            placeholder="Correo Electrónico"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="sr-only">
                                                            Contraseña
                                                        </label>
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="current-password"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-offblack placeholder-lightgrey focus:z-10 focus:border-purple focus:outline-none focus:ring-purple sm:text-sm"
                                                            placeholder="Contraseña"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-grey500 text-purple focus:ring-purple"
                                                        />
                                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-offblack">
                                                            Recordarme
                                                        </label>
                                                    </div>

                                                    <div className="text-sm">
                                                        <a href="#" className="font-medium text-purple hover:text-purple/80">
                                                            ¿Olvidaste tu contraseña?
                                                        </a>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-purple/80 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2"
                                                    >
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <LockClosedIcon className="h-5 w-5 text-white/80 group-hover:text-white" aria-hidden="true" />
                                                        </span>
                                                        Iniciar Sesión
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-green/10 px-4 py-2 text-sm font-medium text-green hover:bg-green/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Signin;
