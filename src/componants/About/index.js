import React from "react";
import Image from "next/image";
function index() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12 ">
            <div className=" p-8">
              <Image
                className="relative"
                src="/logoicon.svg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            {/* <div className="flex justify-center p-6 mt-4  bg-gray-50/20 rounded-xl">
              <Image src={"/IPAF.png"} width={150} height={75} />
              <Image src={"/Nic cert.svg"} width={150} height={75} />
            </div> */}
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Qualified, affordable and professional electrical engineering.
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">
              No job too big or small, Mike Wire Electrical are a team of fully
              qualified electrical engineers with decades expirience in
              electrical engineering
            </p>
            <p className="mt-6 text-xl leading-relaxed text-gray-900">
              View some of the work we have completed in our gallery, or get in
              touch with us to discuss a job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
