"use client";

import Post from "./Post";
import { Variants, motion } from "framer-motion";
import { FaPencilAlt } from "react-icons/fa";
import { Fredericka_the_Great } from "next/font/google";
import Link from "next/link";

const fredericka = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin-ext"],
});

const cardVariantsFromLeft: Variants = {
  offscreen: {
    x: -800,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      delay: 0.5,
      duration: 1.6,
    },
  },
};
const cardVariantsFromRight: Variants = {
  offscreen: {
    x: 800,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      delay: 0.5,
      duration: 1.6,
    },
  },
};

function Blog({ posts }: { posts: any }) {
  return (
    <div className="flex flex-col bg-[#8fcb9b] items-center py-12 gap-12 relative">
      <div className="w-full flex items-center justify-center text-5xl">
        <div className="flex w-fit">
          <span
            className={
              fredericka.className +
              "  py-2 overflow-hidden animate-[typing_steps(34)_4s_infinite]"
            }
          >
            Blog
          </span>
          <FaPencilAlt className="animate-[writting_4s_infinite]" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {posts.map((post: any, id: number) => {
          return (
            <Link
              href={`/blog?post=${post.uid}`}
              key={id}
              className="relative xl:after:content-[''] xl:after:border after:border-black after:absolute after:left-1/2 after:h-96 after:top-0 first:after:top-1/2 first:after:h-[200px] last:after:h-[200px] last:after:top-[-20px]"
            >
              <div>
                <span className="absolute -top-3 xl:top-1/2 left-1/2 -translate-x-1/2 bg-[#8fcb9b] z-10 w-fit whitespace-nowrap">
                  {post.data.created_at}
                </span>
                <motion.div
                  className={`w-full lg:w-[700px] 2xl:w-[800px] overflow-hidden ${
                    id % 2 === 0
                      ? "xl:translate-x-1/2 xl:pl-14"
                      : "xl:-translate-x-1/2 xl:pr-14"
                  }`}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.div
                    variants={
                      id % 2 === 0
                        ? cardVariantsFromLeft
                        : cardVariantsFromRight
                    }
                  >
                    <Post post={post} id={id} />
                  </motion.div>
                </motion.div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
