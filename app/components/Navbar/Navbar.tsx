'use client'

import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Resultados', href: '/resultados', current: false },
    { name: 'Sorteos', href: '/sorteos', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="bg-lightpink navbar fixed w-full top-0 z-50">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <div className="relative block h-10 w-10 lg:hidden">
                                    <Image
                                        src="/assets/logo/Logo.svg"
                                        alt="Pronosticon Logo"
                                        fill
                                        sizes="(max-width: 768px) 46px, 46px"
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative hidden h-16 w-12 lg:block">
                                    <Image
                                        src="/assets/logo/Logo.svg"
                                        alt="Pronosticon Logo"
                                        fill
                                        sizes="(max-width: 768px) 54px, 54px"
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* LINKS */}

                            <div className="hidden sm:ml-14 md:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-purple' : 'hover:text-purple',
                                                'px-3 py-4 text-15px font-medium space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Contactus />
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        <Signdialog />


                        {/* REGISTER DIALOG */}

                        <Registerdialog />


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
