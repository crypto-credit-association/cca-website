import Nav from "../src/components/mission/nav";
import Footer from "../src/components/layout/footer";
import Link from "next/link";

function Statutes() {
    return (
        <>
            <Nav />
            <div className="bg-blue-dark">
                <div className="flex flex-col max-w-7xl m-auto">
                    <h1 className="text-white font-bold py-40 px-5 lg:px-0 text-left">
                        Statutes and Rules
                    </h1>
                </div>
            </div>
            <div className="bg-gray px-5 lg:px-0 py-10 lg:py-20">
                <div className="flex flex-col max-w-7xl m-auto">
                    <div className="flex flex-col max-w-7xl m-auto">
                        <h3 className="font-bold text-left pb-5 text-3xl">
                            Statutes
                        </h3>
                        <div className="border-b-2 border-gold w-36"></div>
                        <p className="pt-5 lg:pt-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="pt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link
                            href="/membership"
                        >
                            <button
                                type="button"
                                href="/memberships"
                                className="mt-10 w-80 items-center bg-blue-dark px-10 inline-flex py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white"
                            >
                                Learn more about a membership
                                <img
                                className="ml-2"
                                src="/svg/arrow-white.svg"
                                alt="Download icon"
                            />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-blue-dark px-5 lg:px-0 py-10 lg:py-20">
                <div className="flex flex-col max-w-7xl m-auto">
                    <div className="flex flex-col max-w-7xl m-auto">
                        <h3 className="text-white font-bold text-left pb-5 text-3xl">
                            Rules
                        </h3>
                        <div className="border-b-2 border-gold w-36"></div>
                        <p className="text-white pt-5 lg:pt-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="text-white pt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link
                            href="/membership"
                        >
                            <button
                                type="button"
                                href="/memberships"
                                className="mt-10 w-80 items-center bg-white text-blue-dark px-10 inline-flex py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm"
                            >
                                Learn more about a membership
                                <img
                                className="ml-2"
                                src="/svg/arrow-blue.svg"
                                alt="Download icon"
                            />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Statutes;