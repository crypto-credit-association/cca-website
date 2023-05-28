import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import Head from "next/head";
import MediaPanel from "../components/media/mediaCard";

function Media() {
  return (
    <>
      <Head>
        <title>Media | Crypto Credit Association</title>
        <meta name="description" content="Media | Crypto Credit Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="bg-ccaBlue">
        <div className="flex flex-col max-w-7xl m-auto">
          <h1 className="text-white font-bold md:pl-24 py-40 text-center md:text-left">
            Media
          </h1>
        </div>
      </div>
      <div className="bg-gray">
        <div className="max-w-7xl m-auto py-6 md:py-12">
          <div className="mx-5">
            <div className="md:mx-12">
              <h2 className="py-12 text-2xl font-bold text-ccaBlue">Here, you&apos;ll find all the latest updates, news, and educational content from the Crypto Credit Association.</h2>
              <MediaPanel />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Media;