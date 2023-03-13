import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import EventCard from "../components/events/eventCard";

function Events() {
    return (
        <>
            <Nav />
            <div className="bg-ccaBlue">
                <div className="flex flex-col py-40 max-w-7xl m-auto" style={{ background: `url('/images/blue-bg.png')`, backgroundPosition: 'center top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '1500px', margin: 'auto', }}>
                    <h1 className="text-white lg:pl-24 font-bold md:pl-24 px-5 lg:px-0 text-left">
                        Events
                    </h1>
                </div>
            </div>
            <div className="bg-gray md:px-24">
                <div className="mx-10 pt-10 md:mx-0">
                    <h3 className="pb-6 text-3xl font-bold underline">Past Events</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 pt-5 pb-10">
                <EventCard alt="Crypto Credit Association - Welcome!" img="/assets/cca-welcome.png"cta="Watch video" url="https://www.youtube.com/watch?v=9I_hVyip9eo"
                        title="Crypto Credit Association - Welcome!" description="The board of directors of the CCA discuss the association and its goals and objectives.  We give a brief overview of the state of the crypto lending industry, current major challenges, as well as trends and predictions, and how the CCA intends to help solve these." />
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Events;