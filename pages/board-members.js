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
                    <h3 className="pb-6 text-3xl font-bold">Executive Directors</h3>
                    <div className="border-b-2 border-gold w-64 mb-10"></div>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        <BoardMembers
                            img="/images/george.png"
                            name="George Maddox"
                            title="Executive Director"
                            bio=" George is a bilingual 20-year resident of Tokyo, who launched his Financial Services career as Controller at Credit Suisse, UBS and Merrill Lynch, following a successful foray in marketing & advertising for Formula 1 Racing's Benetton Team." />
                    </div>
                    <h3 className="pb-6 text-3xl font-bold pt-12">Board Members</h3>
                    <div className="border-b-2 border-gold w-64 mb-12"></div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        <BoardMembers
                            img="/images/paul-murphy.png"
                            name="Paul Murphy"
                            title="Board Member"
                            bio=" Born in Argentina, Paul has lived and worked all over the world. He used to write a lot of code. Now he’s kind of rusty. He does whatever needs doing, whether or not it’s fun."
                            bioTwo="He believes the answer to most questions can be found in musical and opera scores." />
                        <BoardMembers
                            img="/images/serge-ugarte.png"
                            name="Serge Ugarte"
                            title="Board Member"
                            bio="Serge has a background in strategy and business development. Having held senior positions at Cisco, Accenture, and having founded his own research & management consulting, Serge has kean leadership skills. Currently, he specialises in disruptive architectures, such as blockchain, machine learning, and AI." />
                        <BoardMembers
                            img="/images/darshain.png"
                            name="Darshan Vaidya"
                            title="Board Member"
                            bio="Darshan is the founder of X-Margin, a Zero-Knowledge Cross Margin Solution for trading firms. His experience ranges from options trading in Cryptocurrency and strong programming skills."
                            bioTwo="He is also the Founder of Well Fed Foundation - a food redistribution charity using technology." />
                    </div>
                    <GetinTouch />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BoardMembersPage;