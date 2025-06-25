import { useRouter } from "next/router";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { NavLink } from "./navlink";
import Image from "next/image";
import {
  BookmarkAltIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  XIcon,
  QuestionMarkCircleIcon,
  ChatIcon,
} from "@heroicons/react/outline";

const solutions = [
  // {
  //   name: "Packages",
  //   description: "Let us curate the perfect backlink profile for your Niche",
  //   href: "/link-building-packages",
  //   icon: CubeIcon,
  // },
  {
    name: "Services",
    description:
      "Quality guest postings, included 600+ word content and 1 Follow link.",
    href: "#services",
    icon: ChartBarIcon,
  },
  {
    name: "Contact Us",
    description: "Links posted directly into .",
    href: "#contact",
    icon: CursorClickIcon,
  },
];

const resources = [
  {
    name: "About",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/#about",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Reviews",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/#reviews",
    icon: ChatIcon,
  },
  {
    name: "Blog",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/#blog",
    icon: BookmarkAltIcon,
  },
];
// const recentPosts = [
//   { id: 1, name: "Boost your conversion rate", href: "#" },
//   {
//     id: 2,
//     name: "How to use search engine optimization to drive traffic to your site",
//     href: "#",
//   },
//   { id: 3, name: "Improve your customer experience", href: "#" },
// ];

const Z_INDEX = {
  zIndex: 1000,
};

export default function Example() {
  const { asPath } = useRouter();

  return (
    <Popover className="scroll-smooth  text-black  z-90" style={Z_INDEX}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image width={150} height={75} src="/logo.svg" alt="" />
            </Link>
          </div>
          <div className="  md:hidden">
            <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500  mt-2 mr-4">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div as="nav" className="hidden md:flex space-x-10 items-center ">
            <span className=" m:hidden blackspace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-black  hover:bg-blue-600 hover:text-white mr-2">
              <NavLink className="scroll-smooth" href="#services">
                Services
              </NavLink>
            </span>

            <a
              href="#about"
              className=" m:hidden blackspace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-black  hover:bg-blue-600 hover:text-white mr-2 "
            >
              About
            </a>

            <a href="#blog">
              <span className=" m:hidden blackspace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-black  hover:bg-blue-600 hover:text-white mr-2">
                Blog
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 sm:hidden">
            <a
              href="#contact"
              className=" m:hidden blackspace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-black  hover:bg-blue-600 hover:text-white mr-2"
            >
              Contact
            </a>
            <a
              href=""
              className="bg-blue-600 text-white m:hidden blackspace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-black  hover:bg-blue-600 hover:text-white mr-2"
            >
              07912882644
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute   top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden"
        >
          <div className="h-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 z-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <Image width={150} height={75} src="/logo.svg" alt="" />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="align-center">
                  {solutions.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <a
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className={` flex-shrink-0 h-6 w-6 ${
                              asPath === "/guest-posts"
                                ? "text-[#0468C8]"
                                : asPath === "/niche-edits"
                                ? "text-[#f6ad5a]"
                                : " text-blue-600"
                            }`}
                            aria-hidden="true"
                          />
                          <Popover.Button>
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </Popover.Button>
                        </a>
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 ">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base  font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <div className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600   ">
                  <a href="tel:07912882644">07912882644</a>
                </div>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Happy with our service?{" "}
                  <a
                    href="https://www.facebook.com/mikewireelectrical/reviews"
                    className={`  ${
                      asPath === "/guest-posts"
                        ? "text-[#0468C8]"
                        : asPath === "/niche-edits"
                        ? "text-[#f6ad5a]"
                        : " text-blue-600"
                    }`}
                  >
                    Leave a review
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
