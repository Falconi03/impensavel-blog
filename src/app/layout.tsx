"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Wave from "./components/Wave";
import Blog from "./components/Blog";
import { createClient } from "@/prismicio";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impensavel",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const impensavel = useRef<HTMLDivElement>(null);
  const blog = useRef<HTMLDivElement>(null);

  const client = createClient();

  const posts = await client.getAllByType("posts");

  return (
    <html lang="pt">
      <body className={inter.className}>
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
        <Blog posts={posts} />
        <div className=" -translate-y-1">
          <Wave fill="#8fcb9b" />
        </div>
      </body>
    </html>
  );
}
