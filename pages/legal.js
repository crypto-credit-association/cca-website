import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import Link from "next/link";

function Legal() {
    return (
        <>
            <Nav />
            <div className="bg-ccaBlue">
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
                                The Crypto Credit Association is a not for profit member-run industry association, incorporated in Switzerland. Our <Link href="/board-members" className="underline">board of directors</Link> is elected by members in good standing.
                            </p>
                            <p>You may download a copy of the CCA&apos;s Articles of Association <a
                                href="/assets/pdf/cca-articles-of-association.pdf"
                                download
                                rel="noopener"
                                className="underline">here</a>.</p>
                            <h3 className="font-bold text-left text-3xl pb-4 pt-10 lg:pt-20">
                                GDPR Compliance
                            </h3>
                            <p>GDPR Compliance</p>
                            <p>The CCA website does not use cookies, nor does it store any identifying data about visitors.</p>
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