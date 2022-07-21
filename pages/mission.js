import Stats from "../src/components/mission/stats";
import Nav from "../src/components/mission/nav";
import Footer from "../src/components/layout/footer";

function Mission() {
    return (
        <>
            <Nav />
            <div className="bg-blue-dark">
                <div className="flex flex-col max-w-7xl m-auto">
                    <h1 className="text-white font-bold md:pl-24 py-40 text-center md:text-left">
                        Mission
                    </h1>
                </div>
            </div>
            <div className="max-w-7xl m-auto">
                <img className="w-96 justify-center hidden md:flex ml-auto md:mr-12 lg:mr-20 z-10 -mt-20 md:-mt-40 pointer-events-none" src="/images/mixed-tiles.png" alt="color tiles" />
            </div>
            <div className="bg-gray md:-mt-40">
                <div className="max-w-7xl m-auto px-12 py-12">
                    <div className="md:mx-12">
                        <h3 className="pb-6 text-3xl font-bold">Our Vision</h3>
                        <div class="border-b-2 border-gold w-48"></div>
                        <ul className="ml-5 md:ml-0 py-6 list-outside list-disc">
                            <li>Define and publish standards.</li>
                            <li>Establish audit and certification mechanisms for companies in the crypto credit space.</li>
                            <li>Work with regulatory bodies to encourage these bodies to work together to ensure consistent rules.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:mx-12">
                            <h3 className="pt-12 pb-6 text-3xl font-bold">Standards</h3>
                            <div class="border-b-2 border-gold w-56"></div>
                            <p className="py-6">CCA sub-committees will work with Members to define standards in three key  areas as data and the market value/need differ significantly:</p>
                            <ul className="list-inside list-disc">
                                <li>consumer credit</li>
                                <li>private company credit, and</li>
                                <li>public company ratings</li>
                            </ul>
                            <a href="/standards" rel="noreferrer"><p className="flex font-semibold pt-6">Find out more<img
                                className="ml-2"
                                src="/svg/arrow-white.svg"
                                alt="Download icon"
                            /></p></a>
                        </div>
                        <div>
                            <h3 className="pt-12 pb-6 text-3xl font-bold">Audit</h3>
                            <div class="border-b-2 border-gold w-56"></div>
                            <p className="py-6">Certain processes defined by the CCA will require third-party audit and certification services.The CCA will publish references to companies capable of providing these services.</p>
                            <a href="/audits" rel="noreferrer"><p className="flex font-semibold">Find out more<img
                                className="ml-2"
                                src="/svg/arrow-white.svg"
                                alt="Download icon"
                            /></p></a>
                        </div>
                        <div className="md:mx-12">
                            <h3 className="pt-12 pb-6 text-3xl font-bold">Regulatory</h3>
                            <div class="border-b-2 border-gold w-56"></div>
                            <p className="py-6">Regulatory uniformity is absolutely essential to the crypto credit industry.
                                In order for that to happen, the CCA must work very closely with regulators across the world in order to ensure that their work is in line with CCA guidelines. </p>
                            <a href="/regulations" rel="noreferrer"><p className="flex font-semibold">Find out more<img
                                className="ml-2"
                                src="/svg/arrow-white.svg"
                                alt="Download icon"
                            /></p></a>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-light">
                    <div className="max-w-7xl m-auto flex flex-col py-20">
                        <h3 className="text-white text-center text-3xl justify-center font-bold pb-6">Crypto Credit in numbers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <Stats title="$1 Billion" stats="Value locked in DeFi in 2020" />
                            <Stats title="1 Million" stats="Active DeFi users" />
                            <Stats title="$40 Billion" stats="Total assets in the industry in 2020" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Mission;