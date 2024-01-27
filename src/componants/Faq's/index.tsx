import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import PortableText from "react-portable-text";
function Faq({ data }) {
  return (
    <section className="h-full bg-body-dark pb-16 container max-w-5xl">
      <div className="text-center">
        <h1 className="text-blue-400 font-boold lg:text-6xl text-5xl font-bold ">
          FAQ&apos;S
        </h1>
        <p className="text-white py-2 text-3xl">
          Take a look at our most frequently asked questions!
        </p>
        {data.map((d) => (
          <div key={d.quesiton} className="">
            <div className="w-full px-4 ">
              <div className="container w-full max-w-5xl rounded-2xl bg-white p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-400 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                        <span className="text-xl">{d.question}</span>
                        <ChevronRightIcon
                          className={`${
                            open ? "rotate-90 transform" : ""
                          } h-5 w-5 text-white`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl lg:text-2xl text-gray-500 ">
                        <PortableText
                          className="py-8"
                          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                          content={d.answer}
                          serializers={{
                            h1: (props: any) => (
                              <h1
                                className="text-6xl font-bold my-5"
                                {...props}
                              />
                            ),
                            h2: (props: any) => (
                              <h2
                                className="text-4xl font-bold my-5"
                                {...props}
                              />
                            ),
                            h3: (props: any) => (
                              <h2
                                className="text-3xl font-bold my-5"
                                {...props}
                              />
                            ),
                            li: ({ children }: any) => (
                              <li className="ml-4 list-disc"> {children} </li>
                            ),
                            link: ({ href, children }: any) => (
                              <a
                                href={href}
                                className="text-blue-400 hover:underline"
                              >
                                {children}
                              </a>
                            ),
                          }}
                        />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
