import React from "react";

function GetinTouch(props) {
    return (
        <>
            <div>
                <h3 className="pt-24 pb-5 text-3xl font-bold">Want to become a board member? Get in touch!</h3>
            </div>
            <div className="max-w-6xl md:m-auto flex flex-wrap mx-auto py-10 md:pt-10 md:divide-x-2 divide-gold">
                <div className="w-full md:w-auto">
                    <p className="pt-8 pb-2.5 text-lg"> Paul Murphy</p>
                    <a href="mailto:paul@cca.com" target="_blank" rel="noreferrer"><p className="md:pb-8 text-lg">paul@cca.com</p></a>
                </div>
                <div className="md:px-3 pt-8 md:pt-0 md:ml-10">
                    <p className="md:px-10 pt-8 pb-2.5 text-lg">George Maddox</p>
                    <a href="mailto:george@cca.com" target="_blank" rel="noreferrer"><p className="md:px-10 pb-8 text-lg">george@cca.com</p></a>
                </div>
            </div>
        </>
    );
}

export default GetinTouch;