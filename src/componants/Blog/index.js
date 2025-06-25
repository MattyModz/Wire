import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../../sanity";
import Link from "next/link";
import Image from "next/image";
export default function Blogcard({ posts }) {
  return (
    <section className=" text-black bg-body-dark font-inerr p-4 mb-8">
      <div className="container  lg:grid grid-cols-2   gap-3 ">
        {posts.map((post, index) =>
          index === 0 ? (
            <motion.div
              className="col-span-2 sm:w-full lg:flex  items-center "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
            >
              <div className="">
                <Link
                  key={post._id}
                  href={`/post/${post.slug.current}`}
                  passHref
                >
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt=""
                    width={500}
                    height={300}
                    className="rounded-xl"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-full ">
                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5 ">
                  <div className="bg-blue-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block ">
                    <svg
                      className="w-3.5 h-3.5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span>Featured</span>
                  </div>
                  <Link
                    key={post._id}
                    href={`/post/${post.slug.current}`}
                    passHref
                  >
                    <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                      {post.title}
                    </h1>
                  </Link>
                  <p className="pt-2 text-sm font-medium">
                    by {post.author.name}
                    <span className="mx-1">April 23rd, 2022</span> ·{" "}
                    <span className="mx-1 text-gray-600">5 min. read</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="w-full  py-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: index * 0.1 },
              }}
              viewport={{ once: true }}
            >
              <Link key={post._id} href={`/post/${post.slug.current}`} passHref>
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt=""
                  width={500}
                  height={500}
                  className="flex rounded-t-xl mb-4"
                />
              </Link>
              <div className="bg-purple-500  items-center px-3  py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>Lifestyle</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                <Link
                  key={post._id}
                  href={`/post/${post.slug.current}`}
                  passHref
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500">{post.description}</p>
              <p className="pt-2 text-xs font-medium">
                {post.author.name}· <span className="mx-1">April 17, 2021</span>{" "}
                · <span className="mx-1 text-gray-600">3 min. read</span>
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
