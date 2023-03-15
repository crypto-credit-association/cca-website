import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'


const projects = [
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Mission',
        href: '/mission',
    },
]

const documentation = [
    {
        name: 'Membership',
        href: '/membership',
    },
    {
        name: 'Board Members',
        href: '/board-members',
    },
]

const learn = [
    {
        name: 'Blog',
        href: '/blog',
    },
    {
        name: 'Events',
        href: '/events',
    },
    {
        name: 'Reports',
        href: '/reports',
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <>
            <Popover className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-10 w-auto sm:h-10"
                                        src="../assets/crypto-credit-logo.png"
                                        alt="Crypto Credit Association Logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6 text-ccaBlue" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">
                            <Popover className="relative pt-1">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-ccaBlue' : 'text-ccaBlue',
                                                'workSans group text-ccaBlue rounded-md inline-flex items-center text-base'
                                            )}
                                        >
                                            <span>Organization</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-ccaBlue' : 'text-ccaBlue',
                                                    'ml-2 h-5 w-5'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {projects.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                            >
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>

                            <Popover className="relative pt-1">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-ccaBlue' : 'text-ccaBlue',
                                                'workSans group rounded-md inline-flex items-center text-base'
                                            )}
                                        >
                                            <span>Association</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-ccaBlue' : 'text-ccaBlue',
                                                    'ml-2 h-5 w-5'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {documentation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                            >
                                                                <div>
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>


                            <Popover className="relative pt-1">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-ccaBlue' : 'text-ccaBlue',
                                                'workSans group rounded-md inline-flex items-center text-base'
                                            )}
                                        >
                                            <span>Resources</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-ccaBlue' : 'text-ccaBlue',
                                                    'ml-2 h-5 w-5'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {learn.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                            >
                                                                <div>
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>

                            <Link
                                href="/membership"
                            >
                                <button
                                    type="button"
                                    href="/memberships"
                                    className="ctaButton px-10 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-ccaBlue"
                                >
                                    Become a member
                                </button>
                            </Link>

                        </Popover.Group>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6 text-credmarkpurple" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <Link
                                        href="/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="text-credmarkpurple"> Home </span>
                                    </Link>
                                </div>
                                <Popover className="relative pt-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className=
                                                'group text-credmarkpurple rounded-md inline-flex items-center text-base pt-5'

                                            >
                                                <span>About</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-credmarkpurple' : 'text-credmarkpurple',
                                                        'ml-2 h-5 w-5'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}

                                            >
                                                <Popover.Panel>
                                                    <div className="overflow-hidden">
                                                        <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                                                            {projects.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 p-3 flex items-start rounded-lg text-credmarkpurple"
                                                                >
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-credmarkpurple">{item.name}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <Popover className="relative pt-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className=
                                                'group text-credmarkpurple rounded-md inline-flex items-center text-base pt-5'

                                            >
                                                <span>Organization</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-credmarkpurple' : 'text-credmarkpurple',
                                                        'ml-2 h-5 w-5'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}

                                            >
                                                <Popover.Panel>
                                                    <div className="overflow-hidden">
                                                        <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                                                            {projects.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 p-3 flex items-start rounded-lg text-credmarkpurple"
                                                                >
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-credmarkpurple">{item.name}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <Popover className="relative pt-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className=
                                                'group text-credmarkpurple rounded-md inline-flex items-center text-base pt-5'

                                            >
                                                <span>Resources</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-credmarkpurple' : 'text-credmarkpurple',
                                                        'ml-2 h-5 w-5'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}

                                            >
                                                <Popover.Panel>
                                                    <div className="overflow-hidden">
                                                        <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                                                            {learn.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 p-3 flex items-start rounded-lg text-credmarkpurple"
                                                                >
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-credmarkpurple">{item.name}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}