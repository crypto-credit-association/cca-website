import { Fragment, useState } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { BellIcon, MenuIcon } from '@heroicons/react/outline'

import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Test(props) {
    return (
        <div className="my-5 sticky top-0 z-10 bg-white pr-5 shadow-sm">
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
                                            <div className="navItems mx-10 border-transparent inline-flex items-center text-sm font-medium">
                                                <Link
                                                    href="/"
                                                >
                                                    <img
                                                        width={150}
                                                        className="cursor-pointer h-14 mt-2 pl-5 w-40"
                                                        src="/images/crypto-credit-logo.png"
                                                        alt="Picante logo"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:ml-8 md:ml-0 sm:items-center">

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="navItemsDesktop ml-3 relative">
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
                                    <div className="hidden flex-wrap">
                                        <button
                                            type="button"
                                        >
                                            <p className="font-semibold text-orange text-sm">Log in</p>
                                        </button>
                                        <Link
                                            href="/careers"
                                        >
                                            <span className="btnNav border-transparent text-white text-xs bg-orange hover:cursor-pointer">
                                                Sign up
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="-mr-2 flex items-center">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="navbarBurger inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <img className="block h-6 w-6" aria-hidden="true"
                                                    src="/assets/svg/close-x-red.svg"
                                                    alt="Close icon"
                                                    width={30} />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
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
                                    <p className="border-transparent block pl-3 pr-4 border-l-4 text-base font-bold uppercase py-5"
                                    > Main </p>
                                    <Disclosure.Button
                                        as="a"
                                        href="/"
                                        className="border-transparent block pl-3 pr-4 py-1 border-l-4 text-base font-medium"
                                    >
                                        Home
                                    </Disclosure.Button>
                                </div>
                                <div className="pt-2 pb-3 space-y-1">
                                    <Link href="/about">
                                        <span className="border-transparent block pl-3 pr-4 py-1 border-l-4 text-base font-medium">About</span>
                                    </Link>
                                </div>
                                <div className="pt-2 pb-3 space-y-1">
                                    <Disclosure.Button
                                        as="a"
                                        href="/careers"
                                        className="border-transparent block pl-3 pr-4 py-1 border-l-4 text-base font-medium"
                                    >
                                        Careers
                                    </Disclosure.Button>
                                </div>
                                <div className="pt-2 pb-3 space-y-1 hidden">
                                    <Disclosure.Button
                                        as="a"
                                        href="/lite-paper"
                                        className="border-transparent block pl-3 pr-4 py-1 border-l-4 text-base font-medium"
                                    >
                                        Lite Paper
                                    </Disclosure.Button>
                                </div>
                                <div className="pt-2 pb-3 space-y-1">
                                    <Disclosure.Button
                                        as="a"
                                        href="/contact"
                                        className="border-transparent block pl-3 pr-4 py-1 border-l-4 text-base font-medium"
                                    >
                                        Contact
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden">
                                    <button
                                        type="button"
                                    >
                                        <p className="font-semibold text-orange text-base pl-4 py-1">Log in</p>
                                    </button>
                                </div>
                                <div className="mt-5">
                                    <Link
                                        href="/careers"
                                    >
                                        <span className="ml-4 px-4 py-2 rounded-md border-transparent text-white text-base bg-orange hover:cursor-pointer">
                                            Sign up
                                        </span>
                                    </Link>
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