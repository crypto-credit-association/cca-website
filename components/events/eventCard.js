import * as React from 'react'

function EventCard(props) {
    return (
        <>
            <div className="mt-10 md:mt-0 rounded-lg bg-white shadow-lg overflow-hidden">
                <div className="relative w-full bg-gray-500">
                    <a href={props.url} rel="noreferrer"><img
                        alt={props.alt}
                        src={props.img}
                        className='w-full object-cover'
                    /></a>
                </div>
                <div className="relative flex flex-col p-5">
                <h2 className="flex-1 flex items-center justify-center mx-3 mb-5 text-base font-semibold text-center leading-5">
                        {props.title}
                    </h2>
                    <p className="mx-3 text-base font-light text-center leading-5 pb-5">{props.description}</p>
                    <button
                        className="bg-ccaBlue mx-4 px-10 w-auto h-auto flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white">
                        <a href={props.url} target="_blank" rel="noreferrer" className="text-white">{props.cta}</a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default EventCard;