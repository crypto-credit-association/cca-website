import Nav from "../src/components/mission/nav";
import Footer from "../src/components/layout/footer";
import BoardMembers from "../src/components/members/boardMembers";
import GetinTouch from "../src/components/layout/getInTouch";


function BoardMembersPage() {
    return (
        <>
            <Nav />
            <div className="bg-blue-dark">
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
                            img="/images/paul-murphy.png"
                            name="Paul Murphy"
                            title="Chair"
                            bio="Co-Founder of Credmark, which was originally formed to provide credit scores for Ethereum addresses. One of Paul’s startups was acquired by FICO. He knows more about consumer credit and corporate ratings that any normal person should."
                            bioTwo="Paul lives in Italy where he tries to balance his love of crypto data with his love of olive oil and cheese." />
                    <BoardMembers
                            img="/images/george-maddock.png"
                            name="George Maddock"
                            title="Board Member"
                            bio=" George is a bilingual 20-year resident of Tokyo, who launched his Financial Services career as Controller at Credit Suisse, UBS and Merrill Lynch, following a successful foray in marketing & advertising for Formula 1 Racing's Benetton Team." />
                        <BoardMembers
                            img="/images/john-salomon.png"
                            name="John Salomon"
                            title="Board Member"
                            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Donec ultrices tincidunt arcu non sodales neque sodales." />
                        <BoardMembers
                            img="/images/darshain.png"
                            name="Darshan Vaidya"
                            title="Board Member"
                            bio="Darshan is the founder of X-Margin, a Zero-Knowledge Cross Margin Solution for trading firms. His experience ranges from options trading in Cryptocurrency and strong programming skills."
                            bioTwo="He is also the Founder of Well Fed Foundation - a food redistribution charity using technology." />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BoardMembersPage;