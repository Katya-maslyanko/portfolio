"use client";

import Headerproject from "@/components/Headerproject";
import Sidebarproject from "@/components/Sidebarproject_1";
import ProjectLayout from "@/components/ProjectLayout_1";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="relative max-w-[1440px] mx-auto px-[24px]">
      <Headerproject />
      {/* Sidebar */}
      <Sidebarproject className="fixed top-0 left-0 w-[324px] z-10 py-[20px]" />
      {/* Main Content */}
      <div className="ml-[344px] relative pt-[80px] min-h-[100vh]">
        <ProjectLayout />
      </div>
      {/* Footer */}
      <footer className="relative w-full mt-[40px] pb-[40px] z-[20]" style={{ backgroundColor: "#fff" }}>
        <span className="block w-full h-[0.5px] bg-[#A2A2A2] mb-[18px]" />
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
                В сотрудничестве с ГК «Тихие крылья» мы разработали и внедрили корпоративный сайт, который отражает современный имидж компании. Новый лендинг имеет удобную навигацию, подробную информацию об услугах и беспилотниках, что значительно повысило конверсию. Дополнительные страницы позволяют детализировать продукты и услуги, улучшая пользовательский опыт. Также был разработан фирменный стиль, который включает логотип и элементы дизайна, что способствует созданию единого визуального стиля компании.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}