import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";

function Audits() {
    return (
        <>
        <Nav />
            <div className="bg-ccaBlue">
                <div className="flex flex-col w-full max-w-7xl m-auto">
                    <h1 className="text-white font-bold py-40 px-5 lg:px-0 text-left">
                        Audits
                    </h1>
                </div>
            </div>
            <div className="bg-gray">
                <div className="max-w-7xl m-auto py-12 md:py-20 px-5 lg:px-0">
                    <div>
                        <h3 className="pb-6 text-3xl font-bold">Audits and Certificates</h3>
                        <p className="leading-loose">Certain processes defined by the CCA will require third-party audit and certification services.The CCA will publish references to companies capable of providing these services.</p>
                            <p className="mt-5">Companies publishing credit events, for example, will need to be audited to ensure that their procedures are in line with the procedures published by the CCA.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Audits;