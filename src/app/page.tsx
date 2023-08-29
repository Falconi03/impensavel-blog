import { createClient } from "@/prismicio";
import Wave from "./components/Wave";
import Sobre from "./components/Sobre";
import Blog from "./components/Blog";

export default async function Home() {
  const client = createClient();

  const posts = await client.getAllByType("posts");

  return (
    <main>
      <div className="relative w-full">
        <img
          src="/foto-de-fundo.jpg"
          alt=""
          className="w-full h-[600px] object-cover "
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] flex flex-col text-end">
          <span className="text-white uppercase text-sm xl:text-2xl font-bold lg:whitespace-nowrap text-left bg-[#00000080] p-3 rounded-md">
            {
              '"Impensável", és a poesia dos limites, A pintura de palavras que o pensamento não cria'
            }
          </span>
        </div>
        <div className="absolute w-full rotate-180 bottom-[-10px]">
          <Wave fill="#FFF" />
        </div>
      </div>
    </main>
  );
}
