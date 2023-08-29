"use client";

import { useState } from "react";

function Post({ post, id }: any) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-[400px] h-[300px]  "
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div
        className="w-full h-full relative transition-transform duration-1000 "
        style={
          isHover
            ? { transformStyle: "preserve-3d", transform: "rotateY(180deg)" }
            : { transformStyle: "preserve-3d" }
        }
      >
        <img
          src={post.data.image.url}
          alt=""
          className="absolute w-full h-full rounded-[7%_93%_6%_94%/93%_6%_94%_7%] shadow-md"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
        />
        <div
          className="absolute w-full h-full bg-white rounded-[7%_93%_6%_94%/93%_6%_94%_7%] shadow-md"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span
            className={
              "bg-[#778da9] text-xl font-semibold p-2 text-white " +
              (id % 2 === 0 ? "-rotate-12" : "rotate-12")
            }
          >
            {post.data.title}
          </span>
          <p className="h-48 w-full px-8 my-4 overflow-hidden text-ellipsis ">
            {post.data.content[0].text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
