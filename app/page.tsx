"use client";

import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";
import PortfolioGrid from "@/components/Portfolio";
import Facts from "@/components/Facts";
import Footer from "@/components/Footer";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function Home() {
  return (
    <div className="relative max-w-[1440px] mx-auto px-[24px] py-[20px]">
      {/* Sidebar */}
      <Sidebar className="fixed top-0 left-0 w-[324px] z-10 sm:static sm:w-full sm:h-auto" />

      {/* Main Content смещено на ширину Sidebar */}
      <div className="ml-[344px] sm:ml-0 sm:mt-[20px]">
        <div className="mt-0">
          <Skills />
        </div>

        <div className="mt-[52px]">
          <PortfolioGrid />
        </div>

        <div className="mt-[52px]">
          <FadeInWhenVisible>
            <Facts />
          </FadeInWhenVisible>
        </div>

        {/* Footer: ПОСЛЕ Facts, на всю ширину, с анимацией */}
        <div className="mt-[52px]">
          <FadeInWhenVisible>
            <Footer />
          </FadeInWhenVisible>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          /* Sidebar becomes top full width */
          aside {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            padding: 16px !important;
          }
          /* Main content margin reset and margin top */
          div.ml-[344px] {
            margin-left: 0 !important;
            margin-top: 20px !important;
          }
          /* Skills flex row to column */
          .skills-container > div {
            flex-direction: column !important;
          }
          /* Portfolio grid 3 columns to 1 column */
          .portfolio-grid > div {
            grid-template-columns: 1fr !important;
          }
          /* Portfolio grid items uniform height */
          .portfolio-grid > div > div {
            height: auto !important;
          }
          /* Facts grid 3 columns to 1 column */
          .facts-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
