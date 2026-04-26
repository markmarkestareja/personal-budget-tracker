"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [rotate, setRotate] = useState(false);

  function OpenAddBtn() {
    setRotate((prev) => !prev);
  }

  return (
    <div>
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="var(--primary)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6h10M4 12h16M7 12h13M4 18h10"
          />
        </svg>
        <svg
          onClick={OpenAddBtn}
          className={`cursor-pointer transition-transform duration-300 ${rotate ? "rotate-45" : "rotate-0"} ease-[cubic-bezier(0.35,1.56,0.64,1)]`}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 512 512"
        >
          <path
            fill="var(--primary)"
            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m149.3 277.3c0 11.8-9.5 21.3-21.3 21.3h-85.3V384c0 11.8-9.5 21.3-21.3 21.3h-42.7c-11.8 0-21.3-9.6-21.3-21.3v-85.3H128c-11.8 0-21.3-9.6-21.3-21.3v-42.7c0-11.8 9.5-21.3 21.3-21.3h85.3V128c0-11.8 9.5-21.3 21.3-21.3h42.7c11.8 0 21.3 9.6 21.3 21.3v85.3H384c11.8 0 21.3 9.6 21.3 21.3z"
          />
        </svg>
      </div>

      <div
        className={`inline-flex flex-col gap-4 p-8 bg-light-2 border border-light-3 rounded-lg w-auto fixed top-16 right-10 ${rotate ? "translate-x-0" : "translate-x-70"} transition-transform duration-400 ease-[cubic-bezier(0.35,1.56,0.64,1)]`}
      >
        <Link href="/"
          className="flex gap-2 text-dark hover:text-primary transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5V15a.5.5 0 0 0-.5-.5c-.413 0-.677-.102-.856-.236q-.273-.204-.424-.623c-.214-.588-.22-1.367-.22-2.141a.5.5 0 0 0-.147-.354l-.286-.287l-1.213-1.213c-.467-.467-.604-.78-.63-.955c-.02-.14.022-.234.122-.33c.214-.205.367-.344.54-.386c.103-.026.338-.044.76.378l3 3a.5.5 0 0 0 .708-.707L13 9.793V6.707l2.56 2.56a1.5 1.5 0 0 1 .44 1.061V17.5a.5.5 0 0 0 1 0v-7.172a2.5 2.5 0 0 0-.732-1.767L13 5.293V3.5A1.5 1.5 0 0 0 11.5 2zM12 5.5v3.293l-1.146-1.147c-.578-.578-1.154-.777-1.705-.643a1.5 1.5 0 0 0-.313.115A3 3 0 0 0 5 10a3 3 0 0 0 5.007 2.23c.017.578.075 1.21.273 1.753c.148.407.384.796.764 1.08l.006.006A1.5 1.5 0 0 0 10 16.5v.5H6v-.5A1.5 1.5 0 0 0 4.5 15H4V5h.5A1.5 1.5 0 0 0 6 3.5V3h4v.5A1.5 1.5 0 0 0 11.5 5h.5zm0 11v.009a.5.5 0 0 1-.5.491H11v-.5a.5.5 0 0 1 .5-.5h.5zM6 10a2 2 0 0 1 1.874-1.996c-.124.23-.187.51-.139.833c.071.482.378.983.911 1.516l.907.907A2 2 0 0 1 6 10M5 3v.5a.5.5 0 0 1-.5.5H4v-.5a.5.5 0 0 1 .5-.5zM4 16h.5a.5.5 0 0 1 .5.5v.5h-.5a.5.5 0 0 1-.5-.5zm8-12h-.5a.5.5 0 0 1-.5-.5V3h.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          Add Spending
        </Link>
        <Link href="/"
          className="flex gap-2 text-dark hover:text-primary transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <path d="M10 4.5H5.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V11" />
              <path d="M17.5 3.467a1.46 1.46 0 0 1-.017 2.05L10.5 12.5l-3 1l1-3l6.987-7.046a1.41 1.41 0 0 1 1.885-.104zm-2 2.033l.953 1" />
            </g>
          </svg>
          Create Budget
        </Link>
      </div>
    </div>
  );
}
