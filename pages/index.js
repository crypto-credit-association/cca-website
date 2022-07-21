import Head from 'next/head'
import Footer from '../src/components/layout/footer'
import Image from 'next/image'
import Nav from '../src/components/mission/nav'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Credit Association</title>
        <meta name="description" content="Crypto Credit Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className="bg-blue-light">
          <div className="hidden md:flex flex-col items-center justify-center py-32 heroBg">
            <h1 className="text-white text-center text-6xl justify-center font-bold pb-12">
              Connect
              <br></br>
              Crypto
              <br></br>
              People
            </h1>
            <p className="text-white text-center font-semibold text-lg">
              Connecting professionals worldwide working in the <br></br> crypto credit industry.
            </p>
            <Link href="/about" rel="noreferrer"><p className="flex text-white font-semibold pt-6">Find out more
            <img
              src="/svg/arrow-white.svg"
              className="ml-2 text-white"
              alt="Download icon"
            /></p></Link>
          </div>
        </div>
        <div className="bg-blue-light">
          <div className="flex md:hidden flex-col items-center justify-center py-32 max-w-5xl">
            <h1 className="text-white text-center text-6xl justify-center font-bold pb-12">
              Connect
              <br></br>
              Crypto
              <br></br>
              People
            </h1>
            <p className="px-5 text-white text-center font-semibold text-lg">
              Connecting professionals worldwide working in the <br></br> crypto credit industry.
            </p>
            <a href="/about" rel="noreferrer"><p className="flex text-white font-semibold pt-6">Find out more
            <img
              className="ml-2 text-white"
              src="/images/arrow-white.svg"
              alt="Download icon"
            /></p></a>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
