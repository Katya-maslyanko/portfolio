"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    linkRefs.current.forEach((link) => {
      if (link) {
        const span = link.querySelector("span");
        if (span) {
          span.style.width = `${link.offsetWidth}px`;
          span.style.transformOrigin = "left";
        }
      }
    });
  }, []);

  return (
    <aside
      className={`fixed top-0 left-0 w-[324px] h-screen text-[13px] text-black p-4 flex flex-col ${className}`}
    >
      <div className="mb-6">
        <div>
          <Link
            href="/"
            className="text-blue-600 no-underline text-[16px] hover:no-underline block relative pb-[18px] font-[400]"
          >
            Екатерина Маслянко
          </Link>
          <span
            className="absolute bottom-0 left-0 w-full h-[0.5px]"
            style={{ backgroundColor: "#A2A2A2" }}
          />
        </div>
        <div className="flex-shrink-0 mt-[18px]">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                window.open(
                  "https://reo.ru/tpost/iv0b4x0dr1-reo-vnedril-iskusstvennii-intellekt-v-mo",
                  "_blank"
                )
              }
            >
              <img
                src={isHovered ? "/icons/logo_reo_hover.svg" : "/icons/logo_reo.svg"}
                alt="Logo"
                className="w-6 h-6 mr-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          </div>
          <div>
            <h1 className="text-gray-700 text-[16px] mt-[18px]">
              Система мониторинга полигонов для ППК «РЭО»
            </h1>
            <p className="mt-[4px] text-gray-700 text-[13px]">
              Дизайн системы для управления размещением ТКО, направленный на повышение экологической безопасности.
            </p>
            <span className="mt-[4px] text-blue-600 text-[13px] block" style={{ color: "#4C4FFF" }}>
              Продукт &gt;&gt; Дизайн-система
            </span>
          </div>
        </div>
        <span
          className="absolute mt-[18px] left-0 w-full h-[0.5px]"
          style={{ backgroundColor: "#A2A2A2" }}
        />
        <div className="flex-grow overflow-y-auto mt-[18px]">
          <div className="mt-4">
            <h2 className="mb-[4px] text-gray-700 text-[14px] font-[400] hover:text-[#4C4FFF] transition-colors duration-300">
              Моя роль и вклад
            </h2>
            <p className="text-gray-700 text-[13px]">
              Проектирование UI, прототипирование, разработка UI-kit и тестирование для интуитивного интерфейса.
            </p>
            <a
              href="https://www.behance.net/gallery/207611979/PPK-monitoring-system"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[4px] text-blue-600 text-[13px] block hover:text-blue-700 transition-colors duration-200"
              style={{ color: "#4C4FFF" }}
            >
              Кейс на Behance
            </a>
          </div>
          <div className="mt-8">
            <h2 className="mb-[4px] text-gray-700 text-[14px] font-[400] hover:text-[#4C4FFF] transition-colors duration-300">
              Этапы работы
            </h2>
            <ul className="list-none space-y-2">
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">1.</span>
                <span className="text-gray-700">Анализ требований и бизнес-процессов.</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">2.</span>
                <span className="text-gray-700">Создание прототипов интерфейса.</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">3.</span>
                <span className="text-gray-700">Разработка UI-kit и визуального стиля.</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">4.</span>
                <span className="text-gray-700">Тестирование удобства интерфейса.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flex-grow {
          scrollbar-width: thin;
          scrollbar-color: #a2a2a2 transparent;
        }
        .flex-grow::-webkit-scrollbar {
          width: 6px;
        }
        .flex-grow::-webkit-scrollbar-thumb {
          background-color: #a2a2a2;
          border-radius: 3px;
        }
        .flex-grow::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;