"use client";

import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";
import PortfolioGrid from "@/components/Portfolio";
import Facts from "@/components/Facts";
import Footer from "@/components/Footer";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function Home() {
  return (
    <div className="relative max-w-[1440px] mx-auto px-[24px] py-[20px] flex flex-col">
      {/* Sidebar сверху на мобилке */}
      <Sidebar className="mb-10 md:mb-0" />

      {/* Основной контент */}
      <div className="md:ml-[344px]">
        <Skills />

        <div className="mt-[52px]">
          <PortfolioGrid />
        </div>

        <div className="mt-[52px]">
          <FadeInWhenVisible>
            <Facts />
          </FadeInWhenVisible>
        </div>

        <div className="mt-[52px]">
          <FadeInWhenVisible>
            <Footer />
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
}

