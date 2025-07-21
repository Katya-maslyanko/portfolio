"use client";

import Headerproject from "@/components/Headerproject";
import Sidebarproject from "@/components/Sidebarproject_2";
import ProjectLayout from "@/components/ProjectLayout_2";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="relative max-w-[1440px] mx-auto px-[24px] flex flex-col min-h-screen">
      <Headerproject />
      {/* Sidebar */}
      <Sidebarproject className="sidebar w-full z-10 py-[20px]" />
      {/* Main Content */}
      <div className="md:flex-1 content_pr relative">
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
              Даннная система дорабатывается, чтобы внедрить в реальный бизнес-процесс Центра проектной деятельности (ЦПД) Московского политехнического университета. Данная система позволяет
              автоматизировать управление проектами и оценку производительности команд, обеспечивая контроль задач,
              визуализацию целей через стратегическую карту и аналитику нагрузки для повышения продуктивности на 30%.
              <br />
              Также можно ознакомиться с проектом на <a href="https://github.com/Katya-maslyanko/project_manager">GitHub</a>, где размещен исходный код и документация. А также можно посмотреть всю <a href="https://drive.google.com/file/d/1-Wu_1KixkQkSa56T9-0Sz294llnY2qE6/view?usp=sharing">демонстрацию работы</a> системы в видеоформате.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}