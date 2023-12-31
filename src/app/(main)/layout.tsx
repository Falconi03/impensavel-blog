"use client";

import { createClient } from "@/prismicio";
import { useEffect, useRef, useState } from "react";
import { AllDocumentTypes } from "../../../prismicio-types";
import Header from "../components/Header";
import Sobre from "../components/Sobre";
import Wave from "../components/Wave";
import Blog from "../components/Blog";

export default function Layout({ children }: { children: React.ReactNode }) {
  const impensavel = useRef<HTMLDivElement>(null);
  const blog = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<AllDocumentTypes[] | null>(null);

  const client = createClient();

  const getPost = async () => {
    setPosts(await client.getAllByType("posts"));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Header
        impensavel={impensavel.current?.offsetTop}
        blog={blog.current?.offsetTop}
      />
      {children}
      <div ref={impensavel}>
        <Sobre />
      </div>
      <div className=" rotate-180 bottom-[-10px] translate-y-1" ref={blog}>
        <Wave fill="#8fcb9b" />
      </div>
      {posts && <Blog posts={posts} />}
      <div className=" -translate-y-1">
        <Wave fill="#8fcb9b" />
      </div>
    </>
  );
}
