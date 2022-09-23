import Nav from "../src/components/mission/nav";
import Footer from "../src/components/layout/footer";
import GetinTouch from "../src/components/layout/getInTouch";
import Link from "next/link";


function Membership() {
  return (
    <>
      <Nav />
      <div className="bg-blue-dark">
        <div className="flex flex-col w-full max-w-6xl m-auto">
          <h1 className="text-white font-bold py-40 px-5 lg:px-0 text-left">
            Membership
          </h1>
        </div>
      </div>
      <div className="bg-gray">
        <div className="py-12 max-w-7xl m-auto">
          <div className="mx-5 md:mx-12">
            <h3 className="pb-12 text-3xl font-bold underline">Why join</h3>
            <div className="flex flex-wrap justify-between mb-24">
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  src="/svg/blue-tick.svg"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Network and collaborate with peers.</p>
              </div>
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  src="/svg/blue-tick.svg"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Inform and influence regulation.</p>
              </div>
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  src="/svg/blue-tick.svg"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Access industry materials and certification programs.
                </p>
              </div>
              </div>
              <p className="pb-6 text-xl font-semibold underline">CCA services:</p>
              <p className="pb-6">The CCA is a not-for-profit industry association dedicated to improving the robustness of the crypto-lending industry. CCA uses member fees and contributions to provide a number of services, including.</p>
              <ul className="ml-5 md:ml-0 list-outside list-disc px-5">
                    <li>Relevant research materials and publications</li>
                    <li>Member-accessible research portal</li>
                    <li>Meeting and conference services</li>
                    <li>Facilitation of information exchange between participants:  online collaboration, working groups and committees, regular briefing calls</li>
                  </ul>
                  <Link
                            href="/statutes-and-rules"
                        >
                            <button
                                type="button"
                                href="/memberships"
                                className="my-10 items-center bg-blue-dark px-10 inline-flex py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white"
                            >
                                Learn more about our statutes and rules
                                <img
                                className="ml-2"
                                src="/svg/arrow-white.svg"
                                alt="Download icon"
                            />
                            </button>
                        </Link>
              <p className="pt-5 pb-6 text-xl font-semibold underline">Who should join?</p>
              <ul className="ml-5 md:ml-0 list-outside list-disc px-5 pb-12">
                    <li>Organisations:  any firm engaged in crypto lending.</li>
                    <li>Individuals:  any professionals, such as consultants, lawyers, accountants, traders with an interest in crypto lending. </li>
                  </ul>            
              <h3 className="pb-6 text-3xl font-bold text-center pb-16 underline">Types of membership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-blue-dark md:w-96 h-full py-12 shadow-2xl mx-10 md:m-auto">
                  <h4 className="text-white text-2xl font-semibold underline px-5">Individual Members</h4>
                  <p className="py-6 text-white px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Donec ultrices tincidunt arcu non sodales neque sodales.</p>
                  <p className="py-6 text-white px-5">Membership fee:  USD $225</p>
                </div>
                <div className="bg-blue-dark md:w-96 h-full py-12 shadow-2xl mx-5 md:m-auto">
                  <h4 className="text-white text-2xl font-semibold underline px-5">Corporate Members</h4>
                  <p className="py-6 text-white px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Donec ultrices tincidunt arcu non sodales neque sodales.</p>
                  <p className="py-6 text-white px-5">Membership fee:  USD $2,250</p>
                </div>
                <div className="bg-blue-dark mt-10 md:w-96 h-full py-12 shadow-2xl mx-5 md:m-auto">
                  <h4 className="text-white text-2xl font-semibold underline px-5">Charter Members</h4>
                  <p className="py-6 text-white px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Donec ultrices tincidunt arcu non sodales neque sodales.</p>
                  <p className="py-6 text-white px-5">Membership fee:  USD 22,500*</p>
                  <p className="py-6 px-5 font-semibold text-white">*Charter memberships will only be available in 2022. A Charter Member in good standing will always be recognized as such.</p>
                </div>
            </div>
            <GetinTouch />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Membership;