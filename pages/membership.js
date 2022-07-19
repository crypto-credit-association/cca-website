import Navbar from "../src/components/layout/nav";
import Footer from "../src/components/layout/footer";

function Membership() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-dark">
        <div className="flex flex-col w-full max-w-6xl m-auto">
          <h1 className="text-white font-bold md:pl-24 py-40 text-center md:text-left">
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
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Regulatory thought leadership<br></br> and good practice</p>
              </div>
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Networking and collaboration</p>
              </div>
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Access to certification<br></br> and licensing programs</p>
              </div>
              <div className="border-l-2 border-gold pr-6 pt-6">
                <img
                  className="ml-6 w-8"
                  alt="Tick icon"
                /><p className="ml-6 pb-6 text-base mt-2">Connect With (or Be) a Mentor</p>
              </div>
              </div>
              <p className="pb-6 text-xl font-semibold underline">Member opportunities:</p>
              <ul className="ml-5 md:ml-0 list-outside list-disc px-5 md:px-16 pb-12">
                    <li>Active advocate and strategic leadership for the industry.  Fight for what’s best for your business and your customers, or at the very least, stay on top of what is being advocated for on your behalf.</li>
                    <li>Access to the membership directory, increased exposure to new markets and potential clients.  Excellent opportunity to network with other professionals and entrepreneurs in the field.</li>
                    <li>Taking advantage of association resources can help you earn and maintain an edge over non-member competitors, thanks to access to inside information and advanced training opportunities.</li>
                    <li>The association has members at every stage of their career, from junior employees just getting started to industry veterans who have built thriving, successful businesses.  A great way to either give or receive support, advice and mentorship from other players in the industry.</li>
                  </ul>
            
            <h3 className="pb-6 text-3xl font-bold text-center pb-16 underline">Types of membership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl m-auto">
                <div className="bg-blue-dark md:w-96 h-full py-12 shadow-2xl mx-5 md:m-auto">
                  <h4 className="text-white text-center text-2xl font-semibold underline">Ordinary Members</h4>
                  <p className="py-6 text-white px-5 md:px-12">Ordinary Members enjoy full voting rights. Ordinary Members are required to pay Membership Fees according to their age.</p>
                  <p className="py-6 text-white px-5 md:px-12">A Founding Member is an Ordinary Member firm that joined the Consortium within three months of its creation. Founding Members will elect the first Board of Directors and hire the first Executive Director. Thereafter Board of Directors and Executive directors will be elected by all Ordinary Members. The Founding Member designation is an honorific that will be used as long as the firm is a Consortium member in good standing.</p>
                  <p className="py-6 text-white px-5 md:px-12">All Ordinary Members will be for-profit corporations. </p>
                </div>
                <div className="bg-blue-dark mt-10 md:w-96 h-full py-12 shadow-2xl mx-5 md:m-auto">
                  <h4 className="text-white text-center text-2xl font-semibold underline">Advisory Members</h4>
                  <p className="py-6 text-white px-5 md:px-12 font-semibold">Advisory Members will include:</p>
                  <ul className="ml-5 md:ml-0 list-outside list-disc px-5 md:px-16">
                    <li className="text-white">Regulators who wish to have first-class visibility into the work being done by the CCA.</li>
                    <li className="text-white">Distributed Organizations (unincorporated DeFi projects) that wish to contribute to the evolution of crypto credit.</li>
                  </ul>
                  <p className="py-6 text-white px-5 md:px-12 font-semibold">Advisory memberships will:</p>
                  <ul className="ml-5 md:ml-0 list-outside list-disc px-5 md:px-16">
                    <li className="text-white">Be agreed on an annual basis by the Consortium Board.</li>
                    <li className="text-white">Not be required to pay membership fees.</li>
                    <li className="text-white">Not be eligible for Board membership, and</li>
                    <li className="text-white">will not be allowed a vote.</li>
                  </ul>
                </div>
            </div>
            <h3 className="pt-24 md:pt-12 pb-6 text-3xl font-bold underline">Membership fee</h3>
            <p>Ordinary Members will be required to pay an annual fee in order to cover the costs of running the Consortium.</p>
            <br></br>
            <p>Two tiers of membership fees will be charged: Established and Startup. Both will afford members identical rights. Companies will be eligible to pay the Startup fee if they are less than 5 years old. </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Membership;