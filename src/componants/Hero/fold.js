import React from "react";
import Image from "next/image";
function Fold() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <div
          className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative mx-auto h-full max-w-7xl"></div>
        </div>

        <div className="relative pb-6  ">
          <main className="mx-auto  max-w-7xl px-4 sm:mt-16">
            <div className="flex justify-center ">
              {" "}
              <div className="flex justify-center    bg-gray-50/20 rounded-xl">
                <Image src={"/IPAF.png"} width={100} height={50} />
                <Image src={"/logoicon.svg"} width={100} height={50} />
                <Image src={"/Nic cert.svg"} width={100} height={50} />
              </div>
            </div>
            <div className="text-center py-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Leading Electrical contractor
                </span>{" "}
                <span className="block text-blue-600 xl:inline">
                  Serving The North West
                </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                We are a NIC EIC approved contractors with over 15 years
                experience in the electrical industry.
              </p>
              <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#gallary"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                  >
                    View Gallery
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Fold;
