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
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
        </div>
        <div className="flex-shrink-0 mt-[18px]">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                window.open(
                  "https://silentwings.ru/",
                  "_blank"
                )
              }
            >
              <img
                src={isHovered ? "/icons/logo_quite_hover.svg" : "/icons/logo_quite.svg"}
                alt="Logo"
                className="w-6 h-6 mr-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          </div>
          <div>
            <h1 className="text-gray-700 text-[16px] mt-[18px]">
              Корпоративный сайт ГК «Тихие крылья»
            </h1>
            <p className="mt-[4px] text-gray-700 text-[13px]">
              Создание лендинга для продажи беспилотников и услуг компании.
            </p>
            <span className="mt-[4px] text-blue-600 text-[13px] block" style={{ color: "#4C4FFF" }}>
              UX/UI &gt;&gt; Лендинг
            </span>
          </div>
        </div>
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
        <div className="flex-grow overflow-y-auto mt-[18px]">
          <div className="mt-4">
            <h2 className="mb-[4px] text-gray-700 text-[14px] font-[400] hover:text-[#4C4FFF] transition-colors duration-300">
              Проблемы
            </h2>
            <p className="text-gray-700 text-[13px]">
              Старый сайт не отражал современный имидж ГК «Тихие крылья», имел неудобную навигацию и недостаток информации об услугах и беспилотниках, что снижало конверсию. Отсутствовали дополнительные страницы для детализации продуктов.
            </p>
            <a
              href="https://silentwings.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[4px] text-blue-600 text-[13px] block hover:text-blue-700 transition-colors duration-200"
              style={{ color: "#4C4FFF" }}
            >
              Сайт лендинга
            </a>
          </div>
          <div className="mt-8">
            <h2 className="mb-[4px] text-gray-700 text-[14px] font-[400] hover:text-[#4C4FFF] transition-colors duration-300">
              Целевая аудитория
            </h2>
            <p className="text-gray-700 text-[13px]">
              Корпоративные клиенты (50%) выбирают дроны для логистики и мониторинга, ценя надежность и интеграцию. Госорганизации (30%) ищут сертифицированные решения для безопасности, тогда как частные лица (15%), такие как фотографы, предпочитают простые в использовании дроны. Партнеры (5%) ориентированы на выгодные условия перепродажи.            
            </p>
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