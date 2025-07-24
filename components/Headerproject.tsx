"use client";

import Link from "next/link";

export default function Headerproject() {
  return (
    <header className="fixed top-0 left-[364px] right-[24px] bg-white z-[9999] h-[42px] pt-[20px] header_none" style={{ zIndex: 10000, backgroundColor: "#fff" }}>
      <div className="py-4 flex justify-end items-end relative">
        <Link
          href="/"
          className="text-[16px] text-black no-underline hover:no-underline font-[400] cursor-grow pb-[18.5px] relative header-link"
          data-cursor-hover
          style={{ color: "#000" }}
        >
          <p className="inline-block mr-[8px]">←</p>Назад к портфолио
          <span className="absolute bottom-[-2px] left-0 h-[1px] bg-[#4c4fff] w-0 transition-all duration-300 ease-out" />
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-[#A2A2A2]" />
      </div>
    </header>
  );
}