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
                    <div className="bg-white my-20 p-20">
                        <h2>Need help? Contact us below.</h2>
                    </div>
                </div>
            </div>
            <div className="bg-blue-dark">
                <div className="flex flex-col max-w-7xl m-auto py-20">
                    <h3 className="text-white font-bold text-center md:text-left pb-5">
                        Statutes
                    </h3>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3 className="text-white font-bold text-center md:text-left pt-10 pb-5">
                        Limitations
                    </h3>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Legal;