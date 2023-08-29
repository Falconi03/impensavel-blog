function Post({ post, id }: any) {
  return (
    <>
      <div
        className={
          "flex flex-col lg:flex-row relative my-5" +
          (id % 2 === 0 ? " justify-start" : " justify-end")
        }
      >
        <div
          className={`w-[300px] h-[250px] lg:w-[400px] lg:h-[300px] rounded-[50px] shadow-md overflow-hidden flex group`}
        >
          <img
            src={post.data.image.url}
            alt=""
            className="w-full object-cover group-hover:scale-110 transition-all duration-300 "
          />
        </div>

        <div
          className={
            "flex flex-col bg-white lg:absolute  w-[260px] lg:w-[300px] h-[200px] lg:h-[250px] top-1/2 -translate-y-1/2 m-3 rounded-[7%_93%_6%_94%/93%_6%_94%_7%] shadow-md" +
            (id % 2 === 0 ? " right-20 items-start" : " left-20 items-end")
          }
        >
          <span
            className={
              "bg-[#778da9] text-xl font-semibold p-2 text-white " +
              (id % 2 === 0 ? "-rotate-12" : "rotate-12")
            }
          >
            {post.data.title}
          </span>
          <p className="h-48 w-full px-8 mt-4 overflow-hidden text-ellipsis hover:scale-110 transition-all duration-300">
            {post.data.content[0].text}
          </p>
          <span className="text-blue-800 underline px-6 pb-4">Leia mais.</span>
        </div>
      </div>
    </>
  );
}

export default Post;
