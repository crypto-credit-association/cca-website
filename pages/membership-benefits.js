import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import Link from "next/link";


function MembershipBenefits() {
    return (
        <>
            <div id="membership-benefits" className="bg-gray">
                <div className="max-w-7xl m-auto">
                    <div className="mx-5 md:mx-12">
                        <h3 className="pb-6 text-3xl font-bold py-16 underline">Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className="bg-ccaBlue h-full py-12 shadow-2xl mb-5 mx-5 md:mx-2 px-3">
                                <h4 className="text-white text-2xl font-semibold underline">Individual Members</h4>
                                <ul>
                                    <li className="py-2 text-white">Access to members-only content.</li>
                                    <li className="py-2 text-white">50% discount on <a className="underline text-white" href="http://www.usteta.org/crypto-logic-integrity-committee/" target="_blank" rel="noreferrer">Individual CLIC</a>  membership.</li>
                                </ul>
                            </div>
                            <div className="bg-ccaBlue h-full py-12 shadow-2xl mx-5 md:mx-2 mt-5 md:mt-0 px-3">
                                <h4 className="text-white text-2xl font-semibold underline">Corporate Members</h4>
                                <ul>
                                    <li className="py-2 text-white">Access to members-only content.</li>
                                    <li className="py-2 text-white">50% discount on <a className="underline text-white" href="http://www.usteta.org/crypto-logic-integrity-committee/" target="_blank" rel="noreferrer">Corporate CLIC</a>  membership.</li>
                                </ul>
                            </div>
                            <div className="bg-ccaBlue mt-10 h-full py-12 shadow-2xl mx-5 md:mx-2 md:mt-0  px-3">
                                <h4 className="text-white text-2xl font-semibold underline">Enterprise Members</h4>
                                <ul>
                                    <li className="py-2 text-white">Access to members-only content.</li>
                                    <li className="py-2 text-white">50% discount on <a className="underline text-white" href="http://www.usteta.org/crypto-logic-integrity-committee/" target="_blank" rel="noreferrer">Silver, Gold, or Platinum CLIC</a>  membership.</li>
                                </ul>
                            </div>
                            <div className="bg-ccaBlue mt-10 h-full pt-12 pb-24 shadow-2xl mx-5 md:mx-2 md:mt-0 px-3">
                                <h4 className="text-white text-2xl font-semibold underline">Charter Members</h4>
                                <ul>
                                    <li className="py-2 text-white">Access to members-only content.</li>
                                    <li className="py-2 text-white">No membership fees due for 10 years.</li>
                                    <li className="py-2 text-white">10% discount on Corporate or Enterprise membership fees after 10 years.</li>
                                    <li className="py-2 text-white">50% discount on <a className="underline text-white" href="http://www.usteta.org/crypto-logic-integrity-committee/" target="_blank" rel="noreferrer">Corporate, Silver, Gold, or Platinum CLIC</a> membership.</li>
                                </ul>
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
                </div>
            </div>
        </>
    );
}

export default MembershipBenefits;