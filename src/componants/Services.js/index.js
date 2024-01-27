import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { ChevronRightIcon } from "@heroicons/react/solid";
import screenshotReporting from "../../../public/screenshots/reporting.png";
import screenshotVatReturns from "../../../public/screenshots/vat-returns.png";

import { Disclosure } from "@headlessui/react";
import D1 from "../../../public/1.jpeg";
import D2 from "../../../public/2.jpeg";
import D3 from "../../../public/3.jpeg";
import D4 from "../../../public/4.jpeg";

export function PrimaryFeatures({
  indus,
  comm,
  plan,
  dom,
  plandesc,
  indusdesc,
  domdesc,
}) {
  const features = [
    {
      title: "Domestic",
      description: "Domestic electrical engineering services we offer",
      image1: D1,
      image2: D2,
      image3: D3,

      image4: D4,

      test: indus,
    },

    {
      title: "Industrial",
      description: "Industrial electrical engineering services we offer",
      image: screenshotVatReturns,

      test: dom,
    },

    {
      title: "Commercial",
      description: "Commercial electrical engineering services we offer",
      image: screenshotReporting,

      test: plan,
    },
  ];

  const [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-10 pb-28 sm:py-32  "
    >
      <div></div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            View the Electrical services we offer.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Our team of fully qualified NIC and EIC electrical engineers work in
            all electrical engineering capacitys, contact us, we&apos;d love to
            discuss how we can help you.
          </p>
          <div className="flex justify-center p-6 mt-4  bg-gray-50/20 rounded-xl">
            <Image src={"/IPAF.png"} width={150} height={75} />
            <Image src={"/Nic cert.svg"} width={150} height={75} />
          </div>
        </div>

        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        "group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6",
                        selectedIndex === featureIndex
                          ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                          : "hover:bg-white/10 lg:hover:bg-white/5"
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg [&:not(:focus-visible)]:focus:outline-none",
                            selectedIndex === featureIndex
                              ? "text-blue-600 lg:text-white"
                              : "text-blue-100 hover:text-white lg:text-white"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-white"
                            : "text-blue-100 group-hover:text-white"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <motion.div
                      className="mt-10  rounded-xl shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{
                        opacity: 1,
                        x: 5,
                      }}
                    >
                      <div className="grid lg:grid-cols-2 ">
                        <div className=" p-6 mt-4  bg-white/10 rounded-xl font-bold ">
                          {feature.test.map((item, index) => (
                            <div className="" key={item[0]}>
                              <motion.div
                                className=" text-2xl pl-3 rounded-xl m-2 bg-white/10 text-gray-100"
                                initial={{ opacity: 0, x: 5 }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{ once: false }}
                              >
                                <Disclosure>
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-l font-medium text-white  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                                        {item.service}

                                        <ChevronRightIcon
                                          className={`${
                                            open ? "rotate-90 transform" : ""
                                          } h-5 w-5 text-white`}
                                        />
                                      </Disclosure.Button>
                                      <Disclosure.Panel className=" font-normal text-sm   text-white ">
                                        <li className="p-4">
                                          {item.description}
                                        </li>
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              </motion.div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}

// items: "Full rewires",
//     items: "Partial rewires",
//     items: "Additional sockets",
//     items: "Extra lights",
//     items: "USB Sockets",
//     items: "Landlord certificates (ECIR)",
//     items: "Decorative lights",
//     items: "Outside sockets ",
