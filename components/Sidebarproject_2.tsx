"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
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
      className={`fixed top-0 left-0 w-[324px] text-[13px] text-black p-4 flex flex-col ${className}`}
    >
      <div>
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
                  "https://github.com/Katya-maslyanko/project_manager",
                  "_blank"
                )
              }
            >
              <Image
                src={isHovered ? "/icons/logo_task_hover.svg" : "/icons/logo_task.svg"}
                alt="Logo"
                className="w-6 h-6 mr-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                width={150}
                height={50}
              />
            </div>
          </div>
          <div>
            <h1 className="text-gray-700 text-[16px] mt-[18px]">
              Веб-приложение управления проектами для оценки эффективности сотрудников
            </h1>
            <p className="mt-[4px] text-gray-700 text-[13px]">
              Данное веб-приложение было разработано мною с помощью Next, React Flow и Django + DRF. Была реализована интересная фича как - виртуальная стратегическая карта.
            </p>
            <span className="mt-[4px] text-blue-600 text-[13px] block mb-[18px]" style={{ color: "#4C4FFF" }}>
              Веб-приложение &gt;&gt; UX/UI дизайн &gt;&gt; Pet-проект
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
              Цель работы
            </h2>
            <p className="text-gray-700 text-[13px]">
              Разработать веб-приложение для автоматизации
              управления проектами и оценки производительности команд в
              образовательных и малых бизнес-проектах, обеспечивающего контроль задач,
              визуализацию целей через стратегическую карту и аналитику нагрузки для
              повышения продуктивности на 30%.            
            </p>
            <a
              href="https://github.com/Katya-maslyanko/project_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[4px] text-blue-600 text-[13px] block hover:text-blue-700 transition-colors duration-200"
              style={{ color: "#4C4FFF" }}
            >
              Ссылка на GitHub
            </a>
          </div>
          <div className="mt-8">
            <h2 className="mb-[4px] text-gray-700 text-[14px] font-[400] hover:text-[#4C4FFF] transition-colors duration-300">
              Решаемые задачи
            </h2>
            <ul className="list-none space-y-2">
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">1.</span>
                <span className="text-gray-700">Провести анализ предметной области</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">2.</span>
                <span className="text-gray-700">Исследовать потребности целевой аудитории</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">3.</span>
                <span className="text-gray-700">Проанализировать аналоги и конкуренты</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">4.</span>
                <span className="text-gray-700">Спроектировать архитектуру и базы данных.</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">5.</span>
                <span className="text-gray-700">Разработать прототипа интерфейса в Figma.</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">6.</span>
                <span className="text-gray-700">Реализовать функционал.</span>
              </li>
              <li className="text-[13px] flex items-center">
                <span className="w-5 text-[#4C4FFF] mr-2">7.</span>
                <span className="text-gray-700">Провести комплексное тестирование.</span>
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