import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import Link from "next/link";
import MembershipBenefits from "./membership-benefits";


function Membership() {
  return (
    <>
      <Nav />
      <div className="bg-ccaBlue">
        <div className="flex flex-col w-full max-w-6xl m-auto">
          <h1 className="text-white font-bold py-40 px-5 lg:px-0 text-left">
            Membership
          </h1>
        </div>
      </div>
      <div className="bg-gray">
        <div className="py-12 lg:py-32 max-w-7xl m-auto">
          <div className="mx-5 md:mx-12">
            <h3 className="pb-12 text-3xl font-bold underline">Why join?</h3>
            <div className="flex flex-wrap justify-between mb-24">
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  src="/assets/svg/blue-tick.svg"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Network and collaborate with peers.</p>
              </div>
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  src="/assets/svg/blue-tick.svg"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Access industry resources, including certification programs.
                </p>
              </div>
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  src="/assets/svg/blue-tick.svg"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Inform and influence regulation.</p>
              </div>
              <Link
              href="#membership-benefits"
            >
              <button
                type="button"
                className="mt-16 items-center bg-ccaBlue px-10 inline-flex py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white"
              >
                Membership benefits
                <img
                  className="ml-2"
                  src="/assets/svg/arrow-white-no-border.svg"
                  alt="Download icon"
                />
              </button>
            </Link>
            </div>
            <p className="pb-6 text-xl font-semibold underline">CCA services:</p>
            <p className="pb-6">The CCA is a not-for-profit industry association dedicated to improving the robustness of the crypto-lending industry. CCA uses member fees and contributions to provide a number of services, including.</p>
            <ul className="ml-5 md:ml-0 list-outside list-disc px-5">
              <li>Research and publications</li>
              <li>Member-accessible research portal (coming soon)</li>
              <li>Meetings and conferences</li>
              <li>Facilitation of information exchange between participants: online collaboration, working groups and committees, regular briefing calls</li>
            </ul>
            <p className="pt-5 pb-6 text-xl font-semibold underline">Who should join?</p>
            <ul className="ml-5 md:ml-0 list-outside list-disc px-5">
              <li>Organisations:  any firm engaged in crypto lending.</li>
              <li>Individuals:  any professionals, such as consultants, lawyers, accountants, traders with an interest in crypto lending. </li>
            </ul>
            <div className="bg-white py-10 px-5 my-5 shadow-lg">
            <p className="pb-6 text-xl font-semibold underline">How to become a member:</p>
              <p>You can either pay the membership fee via bank transfer (coming soon) or crypto payment.</p>
              <p className="pt-5 pb-6 text-md font-semibold underline">How to pay with Crypto:</p>
              <p className="break-words">Dues can be paid in USDC, USDT, or DAI to this address: 0x18da8E75970eF4A5F34944dCB41899d469EBb4ac on the Ethereum network.</p>
              <p className="pt-2">Once you have made the payment, please fill out the this <a href="https://docs.google.com/forms/d/e/1FAIpQLSegindINKmdUf3nSpRIDYQFCUBFD7sA0h4R30zSBcvBtoep8w/viewform" target="_blank" rel="noreferrer" className="underline font-bold">form</a> to make sure we register your membership.</p>
            </div>
            <h3 className="pb-6 text-3xl font-bold text-center py-16 underline">Types of membership</h3>
            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="bg-ccaBlue h-full py-12 shadow-2xl mb-5 mx-5 md:mx-2 px-3">
                <h4 className="text-white text-2xl font-semibold underline">Individual Members</h4>
                <p className="py-6 text-white italic">For single persons </p>
                <p className="text-white">Membership Fee:  <br />US$ 225/year</p>
                <p className="text-white pt-3">Joining Fee:  <br />None</p>
              </div>
              <div className="bg-ccaBlue h-full py-12 shadow-2xl mx-5 md:mx-2 mt-5 md:mt-0 px-3">
                <h4 className="text-white text-2xl font-semibold underline">Corporate Members</h4>
                <p className="italic py-6 text-white">For small firms (up to 1,000 employees)</p>
                <p className="text-white">Membership Fee:  <br />US$ 2,250/year</p>
                <p className="text-white pt-3">Joining Fee:  <br />US$ 1,000</p>
              </div>
              <div className="bg-ccaBlue mt-10 h-full py-12 shadow-2xl mx-5 md:mx-2 md:mt-0  px-3">
                <h4 className="text-white text-2xl font-semibold underline">Enterprise Members</h4>
                <p className="py-6 text-white italic">For large firms (over 1,000 employees) </p>
                <p className="text-white">Membership Fee: <br />US$ 12,500/year</p>
                <p className="text-white pt-3">Joining Fee:  <br />US$ 5,000</p>
              </div>
              <div className="bg-ccaBlue mt-10 h-full pt-12 pb-24 shadow-2xl mx-5 md:mx-2 md:mt-0 px-3">
                <h4 className="text-white text-2xl font-semibold underline">Charter Members</h4>
                <p className="py-6 text-white italic">For any firm</p>
                <p className="text-white">Membership Fee: <br />US$ 22,500/year</p>
              </div>
            </div>
            <div className="mt-10">
            <p className="pb-6 text-xl font-semibold underline">About the membership:</p>
            <ul className="ml-5 md:ml-0 list-outside list-disc px-5">
              <li>CCA activities are funded exclusively by membership dues.</li>
              <li className="py-2">Member dues are annual, and assessed on a voluntary basis. The CCA relies on its members’ understanding that a strong, coordinated set of capabilities supported by the crypto lending industry requires financial resources.</li>
              <li className="py-2">Fees are assessed annually, and are payable via bank or crypto transfer.  For organizations joining before 1 June 2023, joining fees are waived.</li>
              <li className="py-2">Corporations may nominate and vote for Board memberships annually.</li>
            </ul>
            <Link
              href="mailto:info@cryptocreditassociation.org"
            >
              <button
                type="button"
                className="mt-10 items-center bg-ccaBlue px-10 inline-flex py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white"
              >
                Get in touch to become a member
                <img
                  className="ml-2"
                  src="/assets/svg/arrow-white-no-border.svg"
                  alt="Download icon"
                />
              </button>
            </Link>
            </div>
          </div>
          <MembershipBenefits />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Membership;