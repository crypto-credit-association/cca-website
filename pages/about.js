import Nav from "../src/components/mission/nav";
import Footer from "../src/components/layout/footer";
import Link from "next/link";

function About() {
    return (
        <>
            <Nav />
            <div className="bg-blue-dark">
                <div className="flex flex-col max-w-7xl m-auto">
                    <h1 className="text-white font-bold md:pl-24 py-40 text-center md:text-left">
                        Crypto Credit Association
                    </h1>
                </div>
            </div>
            <div className="bg-gray">
                <div className="max-w-7xl m-auto">
                    <div className="mx-5 py-6 md:py-12">
                        <div className="md:mx-12">
                            <h2 className="pt-12 pb-6 text-3xl font-bold">What is the CCA?</h2>
                            <div className="border-b-2 border-gold w-28 md:w-96"></div>
                            <p className="pt-10 pb-3">The Crypto Credit Association is responsible for the development and dissemination of formal standards for the crypto-based credit industry. </p>
                            <p>The CCA maintains a set of self-governance principles for the sector, and serves as an advisory body to stakeholders in both private industry and government around the world.</p>
                            <p className="py-3">Our objectives:</p>
                            <ul className="ml-5 md:ml-0 list-outside list-disc px-5">
                                <li>Define and publish standards.</li>
                                <li>Establish audit and certification mechanisms for companies in the crypto credit space.</li>
                                <li>Work with regulatory bodies to encourage the development of consistent rules.</li>
                            </ul>
                            <p className="pt-3">CCA is a not-for-profit organisation incorporated in Switzerland, supported by membership dues and external grant funding.</p>
                            <Link
                            href="/statutes-and-rules"
                        >
                            <button
                                type="button"
                                className="mt-10 items-center bg-blue-dark px-10 inline-flex py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white"
                            >
                                Learn more about our statutes and rules
                                <img
                                className="ml-2"
                                src="/svg/arrow-white.svg"
                                alt="Download icon"
                            />
                            </button>
                        </Link>
                        </div>
                    </div>
                    <div className="mx-5 py-6">
                        <div className="md:mx-12">
                            <h2 className="pt-12 pb-6 text-3xl font-bold">Why was the CCA founded?</h2>
                            <div className="border-b-2 border-gold w-28 md:w-96"></div>
                            <p className="pt-10 pb-3">Crypto-based lending is a new, comparatively unregulated space. The rapid evolution of technology and business practices bears the risk of unethical, irresponsible, or simply uninformed actors provoking regulatory overreach that can stifle innovation and the opportunities inherent in this sector.  The CCA aims to prevent and mitigate potential market volatility from bad practices, and to pre-empt the need for highly restrictive regulations by fostering the creation of a thoughtful, informed, and pragmatic code of conduct for industry participants.</p>
                            <Link
                            href="/board-members"
                        >
                            <button
                                type="button"
                                className="mt-5 items-center bg-blue-dark px-10 inline-flex py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white"
                            >
                                Learn more about board members
                                <img
                                className="ml-2"
                                src="/svg/arrow-white.svg"
                                alt="Download icon"
                            />
                            </button>
                        </Link>
                        </div>
                    </div>
                    <div className="max-w-6xl bg-blue-dark mt-10 lg:mt-24 py-12 shadow-2xl mx-5 md:m-auto">
                        <h3 className="px-5 md:px-12 text-white text-4xl">Who should join?</h3>
                        <p className="py-6 text-white px-5 md:px-12">CCA membership is open to any commercial entity with activities in the crypto lending space.
                            <br></br>
                            Associate membership consists of interested individuals and external entities with an interest in, and an ability to contribute towards, the development of the association’s objectives.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;