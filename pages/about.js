function About() {
    return (
        <>
            <div className="bg-blue-dark">
                <div className="flex flex-col max-w-7xl m-auto">
                    <h1 className="text-white font-bold md:pl-24 py-40 text-center md:text-left">
                        About the CCA
                    </h1>
                </div>
            </div>
            <div className="max-w-7xl m-auto">
                <img className="w-96 justify-center hidden md:flex ml-auto md:mr-12 lg:mr-20 z-10 -mt-20 md:-mt-40 pointer-events-none" alt="color tiles" />
            </div>
            <div className="bg-gray md:-mt-40">
                <div className="max-w-7xl m-auto">
                    <div className="mx-5 py-6 md:py-12">
                        <div className="md:mx-12">
                            <h2 className="pt-12 pb-6 text-3xl font-bold">Why was the CCA founded?</h2>
                            <div class="border-b-2 border-gold w-28 md:w-96"></div>
                            <p className="py-6 max-w-3xl text-justify">The Association was founded to lead the global digital assets credit narrative through the development and implementation of formalized standards, professionalism and good governance.  The aim is to work closely with regulators to ensure the Association’s voice is heard timely.</p>
                        </div>
                    </div>
                    <div className="max-w-5xl bg-blue-dark py-12 shadow-2xl mx-5 md:m-auto">
                        <h3 className="text-white text-center text-4xl font-semibold underline">Who should join?</h3>
                        <p className="py-6 text-white px-5 md:px-12">There is only one thing you can guarantee in business - constant change.
                            <br></br>
                            The association is meant for individuals and firms looking to chart and navigate change, maintain a finger-on-the-pulse of how the crypto credit industry is growing and evolving, stay on top of emerging trends, and keep up-to-date with the latest information, rules, regulations and standards. </p>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <p className="text-white px-5 md:px-12">1. Define and publish standards for</p>
                                <ul className="ml-5 md:ml-0 list-outside list-disc  px-5 md:px-20">
                                    <li className="text-white">Reporting of credit events</li>
                                    <li className="text-white">Computation of credit scores</li>
                                    <li className="text-white">Dissemination of credit data</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-white px-5 md:px-12 pt-10 md:pt-0">2. Establish audit and certification frameworks
                                </p>
                                <ul className="ml-5 md:ml-0 list-outside list-disc  px-5 md:px-20">
                                    <li className="text-white">Reporting of credit events</li>
                                    <li className="text-white">Computing and reporting of credit data</li>
                                    <li className="text-white">Work with relevant regulators to develop a governance framework
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mx-12 py-12">
                        <div className="md:mx-12">
                            <h3 className="pb-6 text-3xl font-bold">Executive Directors</h3>
                            <div class="border-b-2 border-gold w-64 mb-10"></div>
                            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;