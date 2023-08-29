"use client";

import { useState } from "react";

function BurgerButton() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative w-10 h-8 cursor-pointer block"
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
          "block absolute h-1 w-full bg-white rounded-lg opacity-100 left-0 rotate-0 transition-[.25s_ease-in-out] top-1/2 -translate-y-1/2 origin-[left_center] " +
          (active && "w-0 opacity-0")
        }
      />
      <span
        className={
          "block absolute h-1 w-full bg-white rounded-lg top-full transition-[.25s_ease-in-out] -translate-y-full origin-[left_center] " +
          (active ? "-rotate-45 left-[5px]" : " left-0 rotate-0")
        }
      />
    </div>
  );
}

export default BurgerButton;
