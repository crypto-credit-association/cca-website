import Head from 'next/head'
import Link from 'next/link'
import Subscribe from '../components/subscribe/subscribe'
import Footer from '../components/layout/footer'
import React from "react";
import Nav from '../components/layout/nav'


export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Crypto Credit Association</title>
        <meta name="description" content="Crypto Credit Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className="bg-ccaLightBlue">
          <div className="flex flex-col items-center justify-center py-32 heroBg">
            <h1 className="text-white text-center text-6xl justify-center font-bold pb-12">
              Crypto
              <br></br>
              Credit
              <br></br>
              Association
            </h1>
            <p className="text-white text-center font-semibold text-lg">
              Connecting professionals worldwide working in the <br></br> crypto credit industry.
            </p>
            <Link href="/about" rel="noreferrer"><p className="cursor-pointer flex text-white font-semibold pt-6">Find out more
            <img
              src="/assets/svg/arrow-white.svg"
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
            <Link href="/about" rel="noreferrer"><p className="flex text-white font-semibold pt-6">Find out more
            <img
              src="/svg/arrow-white.svg"
              className="ml-2 text-white"
              alt="Download icon"
            /></p></Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://gateway.credmark.com/v0/models/cmk/data?token=CMK&limit=1")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}