import React from "react";

function Submit() {
  return (
    <section className="">
      <div className="px-8 py-8 mx-auto max-w-7xl">
        <div className="relative px-6 py-10 overflow-hidden border border-blue-100 rounded-2xl lg:p-16 lg:flex lg:flex-col lg:items-center lg:justify-between">
          <div className="absolute top-0 left-0 z-10 hidden h-full p-4 mt-1 ml-3 -mt-4 -ml-4 transform -rotate-90 lg:block">
            <svg
              className="w-auto h-full fill-current text-blue-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 390 390"
            >
              <defs></defs>
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 z-10 hidden h-full p-4 mt-1 ml-3 -mb-4 -mr-4 transform rotate-90 md:block"></div>

          <h3 className="relative z-20 mb-4 -mt-1 text-4xl font-bold text-white">
            Thanks for getting in touch...
          </h3>
          <p className="relative z-20 mb-6 text-lg text-white">
            We will get back to you as soon as possible!
          </p>
          <div className="relative z-20 flex flex-col items-center w-full space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
            <a
              href="#_"
              className="block w-full px-5 py-3 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-blue-600 rounded-md md:inline-flex md:shadow-sm md:w-auto hover:bg-blue-500 focus:outline-none focus:shadow-outline"
            >
              View our gallary
            </a>
            <a
              href="#_"
              className="block w-full px-5 py-3 text-base font-medium leading-6 text-center text-blue-600 transition duration-150 ease-in-out bg-blue-100 rounded-md md:inline-flex md:shadow-sm md:w-auto hover:bg-blue-50 focus:outline-none focus:shadow-outline"
            >
              View our blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Submit;
