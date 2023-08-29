import { createClient } from "@/prismicio";
import { Fredericka_the_Great } from "next/font/google";
import Wave from "../../components/Wave";

const fredericka = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin-ext"],
});

async function PostPage({ searchParams }: { searchParams: { post: string } }) {
  const client = createClient();
  const post = await client.getByUID("posts", searchParams.post);

  return (
    <div className="flex flex-col items-center pb-[72px]">
      <div className="overflow-hidden max-h-[70vh] flex items-center relative">
        {post.data.image.url && (
          <img
            src={post.data.image.url}
            alt={post.data.image.alt ? post.data.image.alt : ""}
            className=" w-full object-cover pt-[72px]"
          />
        )}
        <div className="absolute w-full rotate-180 bottom-0">
          <Wave fill="#FFF" />
        </div>
      </div>
      <h1 className={fredericka.className + " text-4xl py-16"}>
        {post.data.title}
      </h1>
      <p className="w-2/3">{post.data.content[0]?.text}</p>
    </div>
  );
}

export default PostPage;
