import * as React from "react";

export const Footer = () => {
    return (
        <>
        <div className="grid md:grid-cols-3 bg-white block pt-8 md:justify-items-center">
             <img className="block m-auto w-52" src="{logo}" alt="Logo" />
             <div className="block m-auto flex-1 py-8 md:pt-0 text-gray-900 text-lg">
            <div className="flex items-center space-x-4 md:pt-10">
            <a href="https://twitter.com/cc_assoc" target="_blank" rel="noreferrer"><img
                className="ml-2 text-white"
                src="{Twitter}"
                alt="Twitter icon"
              /></a>
               <a href="mailto:george@credmark.com" rel="noreferrer"><img
                className="ml-2 text-white"
                src="{Mail}"
                alt="Email icon"
              /></a>
            </div>
            </div>
             <div className="grid grid-cols-2 block m-auto">
             <p className="mb-4 font-semibold text-blue-dark text-sm hover:underline">About the CCA</p>
             <p className="mb-4 font-semibold text-blue-dark ml-4 text-sm hover:underline">Mission</p>
             <p className="mb-4 font-semibold text-blue-dark text-sm hover:underline">Membership</p>
             <p className="mb-4 font-semibold text-blue-dark ml-4 text-sm hover:underline">Crypto Credit Report</p>
        </div>
        </div>
        <p className="text-center text-sm py-8 bg-white">
          © {new Date().getFullYear()} Crypto Credit Association I All rights reserved.
        </p>

        </>
    );
};

export default Footer;