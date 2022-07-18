function Audits() {
    return (
        <>
            <div className="bg-blue-dark">
                <div className="flex flex-col w-full py-32 max-w-7xl m-auto">
                    <h1 className="text-white text-center text-6xl font-bold">
                        Audits
                    </h1>
                    <div class="border-b-2 border-gold w-56 m-auto mt-5"></div>
                </div>
            </div>
            <div className="bg-gray">
                <div className="max-w-7xl m-auto px-10 md:px-24 py-12 md:py-20">
                    <div className="md:mx-12">
                        <h3 className="pb-6 text-3xl font-bold">Audits and Certificates</h3>
                        <p className="leading-loose">Certain processes defined by the CCA will require third-party audit and certification services.The CCA will publish references to companies capable of providing these services.</p>
                            <p className="my-5">Companies publishing credit events, for example, will need to be audited to ensure that their procedures are in line with the procedures published by the CCA.</p>
                            <p>Companies publishing credit scores, for example, will need to have their computational pipeline certified so that clients can know that the data they provide is reliable.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Audits;