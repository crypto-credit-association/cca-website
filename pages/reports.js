import GetinTouch from "../src/components/layout/getInTouch";
import Nav from "../src/components/mission/nav";
import Footer from "../src/components/layout/footer";

function Reports() {
    return (
        <>
        <Nav />
            <div className="bg-blue-dark">
                <div className="flex flex-col py-40 max-w-7xl m-auto" style={{ background: `url('/images/blue-bg.png')`, backgroundPosition: 'center top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '1500px', margin: 'auto', }}>
                    <h1 className="text-white text-center font-bold md:pl-24 text-center md:text-left">
                        Crypto Credit Report
                    </h1>
                </div>
            </div>
            <div className="bg-gray md:px-24">
                <div className="max-w-7xl m-auto py-10">
                    <div>
                        <div className="mx-10">
                            <p className="text-center pt-12 max-w-4xl m-auto">The Crypto Credit Association is taking over the Credit reporting from Credmark. The quarterly reports are the definitive aggregate reports on the state of the crypto credit industry.
                                <br></br>
                                <br></br>
                                Every issue includes Credmark proprietary market data, as well as our expert analysis on trends in lending, DeFi, and adoption of Cryptocurrencies. Find all the reports below: </p>
                        </div>
                        <div className="border-b-2 border-gold w-48 md:w-72 block m-auto py-12"></div>
                    </div>
                    <div className="mx-10 pt-10 md:mx-0">
                        <h3 className="pb-6 text-3xl font-bold underline">2020</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 pb-4">
                            <a href="/pdf/CryptoCreditReport-Q1-2020.pdf" rel="noreferrer" target="_blank">
                                <p className="m-auto mb-5 bg-blue-dark text-white text-center font-bold h-64 w-48 px-5 shadow-2xl py-20 text-lg">
                                    Q1 Report <br></br> <img
                                        className="block m-auto pt-4"
                                        src='/svg/white-download.svg'
                                        alt="Download icon"
                                    /></p></a>
                            <a href="/pdf/CryptoCreditReport-Q2-2020.pdf" rel="noreferrer" target="_blank">
                                <p className="m-auto mb-5 bg-blue-dark text-white text-center font-bold h-64 w-48 px-5 shadow-2xl py-20 text-lg">
                                    Q2 Report <br></br> <img
                                        className="block m-auto pt-4"
                                        src='/svg/white-download.svg'
                                        alt="Download icon"
                                    /></p></a>
                            <a href="/pdf/CryptoCreditReport-Q3-2020.pdf" rel="noreferrer" target="_blank">
                                <p className="m-auto mb-5 bg-blue-dark text-white text-center font-bold h-64 w-48 px-5 shadow-2xl py-20 text-lg">
                                    Q3 Report <br></br> <img
                                        className="block m-auto pt-4"
                                        src='/svg/white-download.svg'
                                        alt="Download icon"
                                    /></p></a>
                            <a href="/pdf/CryptoCreditReport-Q4-2020.pdf" rel="noreferrer" target="_blank">
                                <p className="m-auto mb-5 bg-gold text-white text-center font-bold h-64 w-48 px-5 shadow-2xl py-20 text-lg">
                                    End of Year <br></br> <img
                                        className="block m-auto pt-4"
                                        src='/svg/white-download.svg'
                                        alt="Download icon"
                                    /></p></a>
                        </div>
                        <h3 className="pb-6 pt-12 text-3xl font-bold underline">2019</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 pb-4">
                            <a href="/pdf/CryptoCreditReport-Q2-2019.pdf" rel="noreferrer" target="_blank"><p className="m-auto mb-5 bg-blue-dark text-white text-center font-bold h-64 w-48 px-5 shadow-2xl py-20 text-lg">
                                Q2 Report <br></br> <img
                                    className="block m-auto pt-4"
                                    src='/svg/white-download.svg'
                                    alt="Download icon"
                                /></p></a>
                            <a href="/pdf/CryptoCreditReport-Q3-2019.pdf" rel="noreferrer" target="_blank">
                                <p className="m-auto mb-5 bg-blue-dark text-white text-center font-bold h-64 w-48 px-5 shadow-2xl py-20 text-lg">
                                    Q3 Report <br></br> <img
                                        className="block m-auto pt-4"
                                        src='/svg/white-download.svg'
                                        alt="Download icon"
                                    /></p></a>
                            <a href="/pdf/CryptoCreditReport-Q4-2019.pdf" rel="noreferrer" target="_blank">
                                <p className="m-auto mb-5 bg-gold text-white text-center font-bold h-64 w-48 px-5 shadow-2xl py-20 text-lg">
                                    End of Year <br></br> <img
                                        className="block m-auto pt-4"
                                        src='/svg/white-download.svg'
                                        alt="Download icon"
                                    /></p></a>
                        </div>
                        <GetinTouch />
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
}

export default Reports;