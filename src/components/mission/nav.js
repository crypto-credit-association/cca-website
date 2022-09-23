import { Fragment, useState } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { BellIcon, MenuIcon } from '@heroicons/react/outline'

import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Test(props) {
    return (
        <div className="my-5 sticky top-0 z-10 bg-white pr-5">
            <main>
                <Disclosure as="nav">
                    {({ open }) => (
                        <>
                            <div className="relative">
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <div className="flex-shrink-0 flex items-center">
                                            <Link href="/">
                                                <img
                                                    width={150}
                                                    className="hidden cursor-pointer block"
                                                    src="/images/crypto-credit-logo.png"
                                                    alt="Crypto Credit logo"
                                                />
                                            </Link>
                                            <div className="navItems border-transparent inline-flex items-center text-sm font-medium">
                                                <Link
                                                    href="/"
                                                >
                                                    <img
                                                        width={200}
                                                        className="ccaLogo"
                                                        src="/images/crypto-credit-logo.png"
                                                        alt="CCA logo"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:ml-8 md:ml-0 sm:items-center">

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="navItemsDesktop mx-10 relative">
                                            <div>
                                                <Menu.Button>
                                                    <div className="navItems mx-10 border-transparent inline-flex items-center text-sm font-medium">
                                                        <Link
                                                            href="/about"
                                                        >
                                                            About the CCA
                                                        </Link>
                                                    </div>
                                                </Menu.Button>
                                                <Menu.Button>
                                                    <div className="navItems mx-10 border-transparent inline-flex items-center text-sm font-medium">
                                                        <Link
                                                            href="/membership"
                                                        >
                                                            Membership
                                                        </Link>
                                                    </div>
                                                </Menu.Button>
                                                <Menu.Button>
                                                    <div className="navItems mx-10 border-transparent inline-flex items-center text-sm font-medium">
                                                        <Link
                                                            href="/mission"
                                                        >
                                                           Mission
                                                        </Link>
                                                    </div>
                                                </Menu.Button>
                                                <Menu.Button>
                                                    <div className="navItems mx-10 border-transparent inline-flex items-center text-sm font-medium">
                                                        <Link
                                                            href="/reports"
                                                        >
                                                            Crypto Credit Report
                                                        </Link>
                                                    </div>
                                                </Menu.Button>
                                            </div>
                                        </Menu>
                                    </div>
                                    <div className="-mr-2 flex items-center">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="navbarBurger inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                                            <span className="sr-only text-white">Open main menu</span>
                                            {open ? (
                                                <img className="block h-6 w-6" aria-hidden="true"
                                                    src="/svg/close-x-red.svg"
                                                    alt="Close icon"
                                                    width={15} />
                                            ) : (
                                                <MenuIcon width={30} className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div>
                                    <Link
                                            href="/membership"
                                        >
                                        <button
                                            type="button"
                                            href="/memberships"
                                            className="ctaButton px-10 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Become a member
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden pl-2">
                                <div className="pt-2 pb-3 space-y-1">
                                    <Disclosure.Button
                                        as="a"
                                        href="/about"
                                        className="flex justify-center navItems"
                                    >
                                        About the CCA
                                    </Disclosure.Button>
                                </div>
                                <div className="pt-2 pb-3 space-y-1">
                                    <Link href="/membership">
                                        <span className="flex justify-center navItems">Membership</span>
                                    </Link>
                                </div>
                                <div className="pt-2 pb-3 space-y-1">
                                    <Disclosure.Button
                                        as="a"
                                        href="/mission"
                                        className="flex justify-center navItems"
                                    >
                                        Mission
                                    </Disclosure.Button>
                                </div>
                                <div className="pt-2 pb-3 space-y-1">
                                    <Disclosure.Button
                                        as="a"
                                        href="/reports"
                                        className="flex justify-center navItems"
                                    >
                                        Crypto Credit Report
                                    </Disclosure.Button>
                                </div>
                                <div className="pt-4 pb-3">
                                    <div className="flex items-center">
                                    </div>
                                    <div className="mt-3 space-y-1">

                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </main>
        </div>
    )
}