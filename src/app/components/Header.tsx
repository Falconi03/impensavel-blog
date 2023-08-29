"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

function Header(props: {
  impensavel: number | undefined;
  blog: number | undefined;
}) {
  const [active, setActive] = useState(false);

  return (
    <header className="bg-primary text-white py-1 px-6 fixed w-full flex justify-between top-0 z-20 items-center">
      <Link
        href="/"
        className="bg-[url(/impensavel.png)] bg-no-repeat bg-cover bg-center w-32 h-16"
      />
      <nav
        className={
          "absolute sm:flex sm:justify-center sm:items-center text-2xl sm:h-full sm:w-fit sm:rounded-none top-full sm:top-1/2 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2  bg-primary bg-right-top transition-all duration-1000 ease-in-out " +
          (active
            ? "h-screen w-full p-4"
            : "h-[0vh] w-0 overflow-hidden rounded-bl-full")
        }
      >
        <ul className="flex flex-col sm:flex-row  sm:items-center m-0 gap-8 sm:gap-20 list-none ">
          <li
            onClick={() => {
              setActive(!active);
              props.impensavel &&
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
            }}
            className="w-fit cursor-pointer bg-gradient-to-r from-[#008448] to-[#05ff8e] bg-[length:0%_1px] bg-no-repeat transition-all ease-in-out duration-300 bg-left-bottom text-white hover:bg-[length:100%_1px] hover:drop-shadow-[0px_0px_4px_rgba(255,255,255)]"
          >
            Início
          </li>
          <li
            onClick={() => {
              setActive(!active);
              props.impensavel &&
                window.scrollTo({
                  top: props.impensavel - 150,
                  behavior: "smooth",
                });
            }}
            className="w-fit cursor-pointer bg-gradient-to-r from-[#008448] to-[#05ff8e] bg-[length:0%_1px] bg-no-repeat transition-all ease-in-out duration-300 bg-left-bottom text-white hover:bg-[length:100%_1px] hover:drop-shadow-[0px_0px_4px_rgba(255,255,255)]"
          >
            Impensavel
          </li>
          <li
            onClick={() => {
              setActive(!active);
              props.blog &&
                window.scrollTo({
                  top: props.blog - 150,
                  behavior: "smooth",
                });
            }}
            className="w-fit cursor-pointer bg-gradient-to-r from-[#008448] to-[#05ff8e] bg-[length:0%_1px] bg-no-repeat transition-all ease-in-out duration-300 bg-left-bottom text-white hover:bg-[length:100%_1px] hover:drop-shadow-[0px_0px_4px_rgba(255,255,255)]"
          >
            Blog
          </li>
        </ul>
      </nav>
      <div className="sm:flex text-xl gap-4 items-center">
        {/* <FaFacebook className="transition-all duration-300 ease-in-out hover:scale-125 hover:text-[#1877f2]" /> */}
        <a
          href="https://www.instagram.com/im.pensavel/?igshid=MzRlODBiNWFlZA%3D%3D"
          className="hover:animate-[jelloHorizontal_0.9s_both]"
        >
          <FaInstagram className="text-3xl transition-all duration-300 ease-in-out  hover:text-[#d6249f]" />
        </a>

        {/* <FaLinkedin className="transition-all duration-300 ease-in-out hover:scale-125 hover:text-[#0a66c2]" /> */}
      </div>
      <div
        className="relative w-10 h-8 cursor-pointer block sm:hidden "
        onClick={() => setActive(!active)}
      >
        <span
          className={
            "block absolute h-1 w-full bg-white rounded-lg transition-[.50s_ease-in-out] top-0 origin-[left_center] " +
            (active ? "rotate-45 left-[5px]" : " left-0 rotate-0")
          }
        />
        <span
          className={
            "block absolute h-1 w-full bg-white rounded-lg left-0 rotate-0 transition-[.25s_ease-in-out] top-1/2 -translate-y-1/2 origin-[left_center] " +
            (active ? "w-0 opacity-0" : "w-full opacity-100")
          }
        />
        <span
          className={
            "block absolute h-1 w-full bg-white rounded-lg top-full transition-[.25s_ease-in-out] -translate-y-full origin-[left_center] " +
            (active ? "-rotate-45 left-[5px]" : " left-0 rotate-0")
          }
        />
      </div>
    </header>
  );
}

export default Header;
