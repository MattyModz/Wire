import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className="box-border px-4 mx-auto border-solid md:px-6 lg:px-8 max-w-7xl tails-selected-element">
      <div className="relative flex flex-col items-center justify-between leading-7 text-gray-900 border-0 border-gray-200 md:flex-row md:items-center">
        <a
          href="#"
          title=""
          className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
        >
          <Image width={150} height={75} src="/logo.svg" alt="" />
        </a>
        <ul className="box-border flex mx-auto my-6 space-x-6">
          <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
            <Link
              href="/"
              className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
            >
              Home
            </Link>
          </li>
          <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
            <Link
              href="#about"
              className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
            >
              About
            </Link>
          </li>
          <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
            <Link
              href="#gallary"
              className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
            >
              Gallery
            </Link>
          </li>
          <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
            <Link
              href="#blog"
              className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="box-border right-0 flex justify-center w-full mt-4 space-x-3 border-solid md:w-auto md:justify-end md:absolute md:mt-0">
          <a
            href="https://www.facebook.com/mikewireelectrical/"
            className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700"
          >
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <path
                d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H7"
                className=""
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="pt-4 mt-4 mb-4 leading-7 text-center text-gray-600 border-t border-gray-200 md:mt-5 md:pt-5 md:mt-6 md:pt-6">
        <p className="box-border mt-0 text-sm border-0 border-solid">
          © {new Date().getFullYear()}, Mikewire-Electrical. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
