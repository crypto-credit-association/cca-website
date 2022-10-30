import * as React from 'react'
import { Icon } from "@iconify/react";


function EventCard(props) {
    return (
        <>
            <div className="mt-10 md:mt-0 rounded-lg bg-white shadow-lg overflow-hidden transition ease-in-out duration-500">
                <div className="relative w-full bg-gray-500">
                    <a href={props.url} rel="noreferrer"><img
                        alt={props.alt}
                        src={props.img}
                        className='w-full object-cover'
                    /></a>
                </div>
                <div className="relative flex flex-col py-5">
                <h2 className="flex-1 flex items-center justify-center mx-3 mb-5 text-base font-semibold text-center leading-5">
                        {props.title}
                    </h2>
                    <p className="mx-3 text-base font-light text-center leading-5">{props.description}</p>
                    <button
                        className="bg-blue-dark mx-8 md:mx-7 mt-5 mb-4 py-2 md:py-5 px-3 w-8 h-8 w-auto h-auto flex items-center justify-center rounded-md md:text-sm text-lg font-semibold focus:outline-none text-white cursor-pointer">
                        <a href={props.url} target="_blank" rel="noreferrer">{props.cta}</a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default EventCard;