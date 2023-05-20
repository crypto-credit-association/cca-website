import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import Stats from "../components/mission/stats";

function Mission() {
    return (
        <>
            <Nav />
            <div className="bg-ccaBlue">
                <div className="flex flex-col max-w-7xl m-auto">
                    <h1 className="text-white font-bold md:pl-24 py-40 px-5 lg:px-0 text-left">
                        Mission
                    </h1>
                </div>
            </div>
            <div className="bg-gray">
                <div className="max-w-7xl m-auto px-5 lg:px-12 py-12">
                    <div>
                        <h3 className="pb-6 text-3xl font-bold">Our Goals</h3>
                        <div className="border-b-2 border-gold w-48"></div>
                        <ul className="ml-5 md:ml-0 py-6 list-outside list-disc">
                            <li>Define and publish norms, standards, and practices relevant to under-collateralized crypto lending.</li>
                            <li>Establish audit and certification mechanisms.</li>
                            <li>Encourage and inform sensible, actionable, and consistent regulation around the world.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <h3 className="pt-12 pb-6 text-3xl font-bold">Standards</h3>
                            <div className="border-b-2 border-gold w-56"></div>
                            <p className="py-6">CCA sub-committees will work with Members to define standards in three key  areas as data and the market value/need differ significantly:</p>
                            <ul className="list-inside list-disc">
                                <li>Consumer credit</li>
                                <li>Corporate ratings</li>
                            </ul>
                        </div>
                        <div className="md:mx-12">
                            <h3 className="pt-12 pb-6 text-3xl font-bold">Regulatory</h3>
                            <div className="border-b-2 border-gold w-56"></div>
                            <p className="py-6">Regulatory uniformity is absolutely essential to the crypto credit industry.
                                In order for that to happen, the CCA must work very closely with regulators across the world in order to ensure that their work is in line with CCA guidelines. </p>
                        </div>
                    </div>
                </div>
                <div className="bg-ccaLightBlue">
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