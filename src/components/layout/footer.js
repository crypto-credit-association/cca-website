import * as React from "react";
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <div className="footerTop flex flex-wrap bg-white pt-8">
        <img className="block m-auto w-52" src="/images/crypto-credit-logo.png" width={224} alt="Logo" />
        <div className="block m-auto flex-1 py-8 md:pt-0 text-gray-900 text-lg">
          <div className="flex items-center space-x-4 md:pt-10">
            <a href="https://twitter.com/cc_assoc" target="_blank" rel="noreferrer"><img
              className="ml-2 text-white"
              src="/svg/twitter.svg"
              alt="Twitter icon"
            /></a>
            <a href="mailto:george@credmark.com" rel="noreferrer"><img
              className="ml-2 text-white"
              src="/svg/mail.svg"
              alt="Email icon"
            /></a>
          </div>
        </div>
        <div className="flex flex-wrap block m-auto">
          <div className="gridLeft">
            <Link href="/about">
            <p className="gridIndividual text-blue-dark text-sm">About</p>
            </Link>
            <Link href="/mission">
            <p className="gridIndividual text-blue-dark ml-4 text-sm hover:underline">Mission</p>
            </Link>
            <Link href="/membership">
            <p className="gridIndividual text-blue-dark text-sm hover:underline">Membership</p>
          </Link>
          </div>
          <div>
          <Link href="/board-members">
            <p className="gridIndividual text-blue-dark ml-4 text-sm hover:underline">Board</p>
          </Link>
          <Link href="/reports">
            <p className="gridIndividual text-blue-dark ml-4 text-sm hover:underline">Reports</p>
          </Link>
          </div>
        </div>
      </div>
      <p className="footerBottom text-center text-sm py-8 bg-white">
        © {new Date().getFullYear()} Crypto Credit Association I All rights reserved.
      </p>

    </>
  );
};

export default Footer;