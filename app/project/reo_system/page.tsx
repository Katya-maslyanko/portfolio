"use client";

import Sidebarproject from "@/components/Sidebarproject";
import ProjectLayout from "@/components/ProjectLayout";
import Link from "next/link";
import Headerproject from "@/components/Headerproject";

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="relative max-w-[1440px] mx-auto px-[24px] flex flex-col min-h-screen">
      <Headerproject />
      {/* Sidebar */}
      <Sidebarproject className="sidebar w-full z-10 py-[20px] md:fixed md:h-full" />

      {/* Main Content */}
      <div className="md:flex-1 content_pr relative md:ml-[324px]">
        <ProjectLayout />
      </div>

      {/* Footer */}
      <footer className="relative w-full mt-[40px] md:mt-[18px] md:pb-[18px] pb-[40px]" style={{ backgroundColor: "#fff", zIndex: 20 }}>
        <span className="block w-full h-[0.5px] bg-[#A2A2A2] mb-[18px]" />
        <div className="flex pr_flex flex-row md:flex-col justify-between items-start">
          <div className="w-[324px]">
            <Link
              href="/"
              data-cursor-hover
              className="text-blue-600 text-[14px] no-underline hover:text-[#4C4FFF] cursor-pointer transition-colors duration-200"
            >
              Назад к проектам
            </Link>
          </div>
          <div className="flex-1 mt-[4px]">
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
