import Nav from "../src/components/mission/nav";
import Footer from "../src/components/layout/footer";
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
        <div className="py-12 lg:py-32 max-w-7xl m-auto">
          <div className="mx-5 md:mx-12">
            <h3 className="pb-12 text-3xl font-bold underline">Why join?</h3>
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
                /><p className="ml-6 pb-6 text-base mt-2">Access industry resources, including certification programs.
                </p>
              </div>
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  src="/svg/blue-tick.svg"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Inform and influence regulation.</p>
              </div>
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
                  <p className="pt-5 pb-6 text-xl font-semibold underline">About the memberhsip:</p>
                    <p>CCA activities are funded exclusively by membership dues.</p>
                    <p>Member dues are annual, and assessed on a voluntary basis. The CCA relies on its members’ understanding that a strong, coordinated set of capabilities supported by the crypto lending industry requires financial resources.</p>
                    <p>Fees are assessed annually, and are payable via bank or crypto transfer.  Note: for organizations joining before 01 June 2023, joining fees are waived.</p>
              <h3 className="pb-6 text-3xl font-bold text-center py-16 underline">Types of membership</h3>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="bg-blue-dark h-full py-12 shadow-2xl mb-5 mx-5 md:mx-2">
                  <h4 className="text-white text-2xl font-semibold underline px-5">Individual Members</h4>
                  <p className="pt-6 text-white px-5">For single persons</p>
                  <p className="py-6 text-white px-5">Membership fee: US$225 / year (no joining fee)</p>
                </div>
                <div className="bg-blue-dark h-full py-12 shadow-2xl mx-5 md:mx-2 mt-5 md:mt-0">
                  <h4 className="text-white text-2xl font-semibold underline px-5">Corporate Members</h4>
                  <p className="py-6 text-white px-5">For smaller firms.  Grants access to CCA activities and services for entire organization and its staff.  May vote for board of directors candidates.</p>
                  <p className="py-6 text-white px-5">Membership fee: US$2,250 / year (joining fee:  US$1,000)</p>
                </div>
                <div className="bg-blue-dark mt-10 h-full py-12 shadow-2xl mx-5 md:mx-2  md:mt-0">
                  <h4 className="text-white text-2xl font-semibold underline px-5">Enterprise Members</h4>
                  <p className="pt-6 text-white px-5">For mid-size firms.  May nominate board of directors candidates.</p>
                  <p className="py-6 text-white px-5">Membership fee:  US$12,500 / year (joining fee:  US$2,500)</p>
                </div>
                <div className="bg-blue-dark mt-10 h-full py-12 shadow-2xl mx-5 md:mx-2  md:mt-0">
                  <h4 className="text-white text-2xl font-semibold underline px-5">Charter Members</h4>
                  <p className="pt-6 text-white px-5">For larger firms.  May nominate board of directors candidates.</p>
                  <p className="py-6 text-white px-5">Membership fee: US$22,500 / year (joining fee:  US$5,000)*</p>
                  <p className="py-6 px-5 font-semibold text-white">*Charter memberships will only be available in 2022. A Charter Member in good standing will always be recognized as such.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Membership;