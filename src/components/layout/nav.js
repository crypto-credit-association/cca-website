import React from "react";
import Link from 'next/link'

function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const hide = (e) =>{
        if(e && e.relatedTarget){
          e.relatedTarget.click();
        }
        setNavbarOpen(false);
      }
    return (
        <>
            <nav className="bg-gray md:py-6 relative flex flex-wrap lg:flex-nowrap items-center justify-between px-2 py-3 m-auto">
                <div className="max-w-7xl m-auto container flex flex-wrap lg:flex-nowrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="lg:hidden w-36 mt-3 mr-12">
                            <Link href="/">
                                <img src="/images/crypto-credit-logo.png" alt="Logo" width={224} />
                            </Link>
                        </div>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            onBlur={hide}
                        >
                            <img alt="hamburger menu"/>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <div className="flex flex-col w-full lg:flex-row list-none justify-evenly">
                            <Link
                                href="/cca">
                                <span className="nav px-12 py-2 justify-center flex items-center text-md hover:opacity-75">About the CCA</span>
                            </Link>
                            <Link
                                href="/membership">
                                <span className="nav px-12 py-2 justify-center flex items-center text-md hover:opacity-75">Membership</span>
                            </Link>
                            <div>
                            <Link href="/">
                                <img className="hidden lg:flex w-56" alt="Logo" />
                            </Link>
                        </div>
                            <Link
                                href="/mission">
                                <span className="nav px-12 py-2 justify-center flex items-center text-md hover:opacity-75">Mission</span>
                            </Link>
                            <Link
                                href="/reports">
                                <div className="nav px-12 py-2 justify-center flex items-center text-md hover:opacity-75">Crypto Credit Reports</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;