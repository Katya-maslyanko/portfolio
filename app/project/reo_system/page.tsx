"use client";

import Headerproject from "@/components/Headerproject";
import Sidebarproject from "@/components/Sidebarproject";
import ProjectLayout from "@/components/ProjectLayout";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="relative max-w-[1440px] mx-auto px-[24px]">
      <Headerproject />
      {/* Sidebar */}
      <Sidebarproject className="sidebar fixed top-0 left-0 w-[324px] z-10 py-[20px]" />
      {/* Main Content */}
      <div className="ml-[344px] relative pt-[80px]">
        <ProjectLayout />
      </div>
      {/* Footer */}
      <footer className="relative w-full mt-[40px] pb-[40px]" style={{ backgroundColor: "#fff" }}>
        <span
          className="block w-full h-[0.5px] bg-[#A2A2A2] mb-[18px]"
        />
        <div className="flex justify-between items-start">
          <div className="w-[324px]">
            <Link
              href="/"
              data-cursor-hover
              className="text-blue-600 text-[14px] no-underline hover:text-[#4C4FFF] cursor-pointer transition-colors duration-200"
            >
              Назад к проектам
            </Link>
          </div>
          <div className="flex-1 col-span-2 max-w-[calc(100%-344px)]">
            <h2 className="text-blue-600 text-[14px] mt-[0px] font-[400] mb-[8px]">
              Результат проекта
            </h2>
            <p className="text-gray-700 text-[13px] leading-[1.5]">
              В сотрудничестве с ГК «Геоскан» мы разработали и внедрили инновационный ИИ-конструктор для анализа данных полигонов, обеспечивающий точное измерение площади, выявление нарушений и глубокую аналитику. Была создана продуманная логическая структура системы, гарантирующая интуитивное использование для сотрудников и внешних заказчиков. Интерфейс сочетает функциональность, доступность и единый визуальный стиль, что значительно повысило эффективность управления проектами и удовлетворенность пользователей.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}