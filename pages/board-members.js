import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import BoardMembers from "../components/members/boardMembers";

function BoardMembersPage() {
    return (
        <>
            <Nav />
            <div className="bg-ccaBlue">
                <div className="flex flex-col max-w-7xl m-auto">
                    <h1 className="text-white font-bold py-40 px-5 lg:px-0 text-left">
                        Board and Governance
                    </h1>
                </div>
            </div>
            <div className="bg-gray">
                <div className="max-w-7xl m-auto px-5 lg:px-0 py-16">
                <p className="pb-10 lg:pb-24 pt-0 lg:pt-10 text-2xl font-base">The CCA is governed by an elected Board of Directors. The Directors are responsible for governance and planning of all Association activity. Over time we expect special interest committees to form and focus on specific aspects of this activity.</p>
                    <h3 className="pb-6 text-3xl font-bold pt-12">Board Members</h3>
                    <div className="border-b-2 border-gold w-64 mb-12"></div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    <BoardMembers
                            img="/assets/paul-murphy.png"
                            name="Paul Murphy"
                            title="Chair"
        bio="Co-Founder of Credmark, which was originally formed to provide credit scores for Ethereum addresses. One of Paul&apos;s startups was acquired by FICO. He knows more about consumer credit and corporate ratings that any normal person should."
                            bioTwo="Paul lives in Italy where he tries to balance his love of crypto data with his love of olive oil and cheese." />
                    <BoardMembers
                            img="/assets/george-maddock.png"
                            name="George Maddock"
                            title="Board Member"
                            bio=" George is a bilingual 20-year resident of Tokyo, who launched his Financial Services career as Controller at Credit Suisse, UBS and Merrill Lynch, following a successful foray in marketing & advertising for Formula 1 Racing&apos;s Benetton Team." />
                        <BoardMembers
                            img="/assets/darshain.png"
                            name="Darshan Vaidya"
                            title="Board Member"
                            bio="Darshan is co-founder of Credora, a technology firm that is leveraging privacy-preserving technology to build confidence in credit markets. Credora enables real-time credit analytics and powers transparent and efficient markets. Darshan&apos;s background is from derivatives trading and risk management, having worked for 12 years across investment banks and market making firms in traditional and crypto markets." />
                        <BoardMembers
                            img="/assets/john.png"
                            name="John Salomon"
                            title="Board Member"
                            bio="John Salomon is an information security professional with over 25 years of international, cross-sector experience in technology and leadership roles.  His in-depth knowledge of security risk management and regulatory considerations in the global financial sector includes a strong understanding of the challenges around the increasing prevalence of fintech and crypto services as established parts of the industry.  John is a member of the Cybersecurity Advisory Network (CyAN); he is a Swiss national and resides in Spain." />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BoardMembersPage;
