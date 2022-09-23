import Nav from "../src/components/mission/nav";
import Footer from "../src/components/layout/footer";

function Legal() {
    return (
        <>
            <Nav />
            <div className="bg-blue-dark">
                <div className="flex flex-col max-w-7xl m-auto">
                    <h1 className="text-white font-bold md:pl-24 py-40 text-center md:text-left">
                        Legal
                    </h1>
                </div>
            </div>
            <div className="bg-gray">
                <div className="flex flex-col max-w-7xl m-auto">
                    <div className="bg-white mx-4 my-10 lg:my-20 py-10 p-5 lg:p-20">
                        <div className="flex flex-col max-w-7xl m-auto">
                            <h3 className="font-bold text-left pb-5 text-3xl">
                                Statutes
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h3 className="font-bold text-left pt-10 pb-5 text-3xl">
                                Limitations
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <h2 className="pb-4 text-xl pt-10 lg:pt-20">Need help? Contact us at:</h2>
                        <p>
                            Baarerstrasse 10
                            <br />
                            6300 Zug
                            <br />
                            Switzerland
                            <br />
                            <br />
                            <a className="cursor-pointer" href="mailto:contact@cryptocreditassociation.org" target="_blank" rel="noreferrer">contact@cryptocreditassociation.org</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Legal;