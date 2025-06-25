import Image from "next/image";
import { GetStaticProps } from "next";
import {
  getClient,
  sanityClient,
  urlFor,
  usePreviewSubscription,
} from "../../sanity";
import { Post } from "../../typings";
import { motion } from "framer-motion";
import PortableText from "react-portable-text";

// import Link from "next/link";

function filterDataToSingleItem(data: Post, preview) {
  console.log(data);
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

function Post({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.post,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  const post = filterDataToSingleItem(previewData, preview);

  return (
    <section className="mb-8 bg-gray-50">
      <div className=" flex justify-center  ">
        <main className="p-5 mx-auto  text-black container max-w-5xl ">
          <article className="container ">
            <motion.div
              className=""
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
              viewport={{ once: true }}
            >
              {post?.title && (
                <h1 className="lg:text-5xl p-4 text-4xl text-center mt-10 mb-3 font-interr font-bold p-5 mx-auto">
                  {post.title}
                </h1>
              )}

              <div className="p-4 flex items-center space-x-2 px-4 justify-center">
                {post?.author.image && (
                  <Image
                    className="h-10 w-10 rounded-full p-2"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                    width={50}
                    height={50}
                  />
                )}{" "}
                <div className="pl-2">
                  {" "}
                  {post?.author.name && (
                    <span className="text-orange-600">
                      {""} {post.author.name}
                    </span>
                  )}{" "}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55 } }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center py-4 px-4">
                <img
                  src={urlFor(post.mainImage).url()}
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-xl"
                />
              </div>
              <PortableText
                className="py-8 px-8"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={post.body}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-6xl font-bold my-5" {...props} />
                  ),
                  h2: (props: any) => (
                    <h2 className="text-4xl font-bold my-5" {...props} />
                  ),
                  h3: (props: any) => (
                    <h2 className="text-3xl font-bold my-5" {...props} />
                  ),
                  li: ({ children }: any) => (
                    <li className="ml-4 list-disc"> {children} </li>
                  ),
                  link: ({ href, children }: any) => (
                    <a href={href} className="text-blue-400 hover:underline">
                      {children}
                    </a>
                  ),
                }}
              />
            </motion.div>
          </article>
        </main>
      </div>
    </section>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
        current
    }
}`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const query = `*[_type == "post" && slug.current == $slug]{
    _id,
    _createdAt,
    title,
    author-> {
        name,
        image,
    },

 mainImage,
 slug,
 body
}`;

  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const post = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { post, query, queryParams },
    },
    revalidate: 60,
  };
};

//  urlFor;
