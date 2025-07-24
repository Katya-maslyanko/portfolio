"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PortfolioGrid = () => {
  const router = useRouter();

  useEffect(() => {
    window.dispatchEvent(new Event("cursor-normal"));
  }, []);

  const handleClick = (path: string) => {
    try {
      window.dispatchEvent(new CustomEvent("route-change-start"));
      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        cursor.classList.add("cursor-expand");
      } else {
        console.warn("Custom cursor element not found");
      }
      console.log(`Navigating to ${path}`);
      setTimeout(() => {
        router.push(path);
      }, 400);
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid_project grid grid-cols-3 gap-[20px] md:gap-[4px]">
        <div
          className="col_div col-span-2 h-64 md:h-[409px] bg-gray-300 flex items-center justify-center relative overflow-hidden cursor-grow"
          style={{ backgroundColor: "#E2E8F0" }}
          onClick={() => handleClick("/project/reo_system")}
          data-cursor-hover
        >
          <video
            src="/videos/video_reo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>
        <div className="col_div col-span-1">
          <div
            className="h-[216px] bg-gray-900 flex items-center justify-center relative overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src="/img/dashboard.png"
                alt="Project 2"
                fill
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
              />
            </div>
          </div>
          <div className="col_div mt-[8px]">
            <h1
              onClick={() => handleClick("/project/reo_system")}
              className="mb-[4px] text-gray-700 text-[16px] hover:text-[#4C4FFF] transition-colors duration-300 cursor-grow"
            >
              Система мониторинга полигонов для ППК «РЭО»
            </h1>
            <p className="text-gray-700 text-[13px]">
              Создание дизайна системы для комплексного проекта, направленного на
              повышение экологической безопасности и эффективности управления
              размещения твердых коммунальных отходов.
            </p>
            <span
              className="mt-[4px] text-blue-600 text-[13px]"
              style={{ color: "#4C4FFF" }}
            >
              Продукт &gt;&gt; Дизайн-система
            </span>
          </div>
        </div>

        <div className="col_div col-span-1">
          <div>
            <h1
              onClick={() => handleClick("/project/quite_website")}
              className="mb-[4px] text-gray-700 text-[16px] hover:text-[#4C4FFF] transition-colors duration-300 cursor-grow"
            >
              Корпоративный сайт ГК «Тихие крылья»
            </h1>
            <p className="text-gray-700 text-[13px]">
              Создание лендинга для продажи беспилотников и услуг компании.
            </p>
            <span
              className="mt-[4px] text-blue-600 text-[13px]"
              style={{ color: "#4C4FFF" }}
            >
              UX/UI &gt;&gt; Лендинг
            </span>
          </div>
          <div className="mt-[20px]">
            <div
              className="h-[216px] bg-gray-400 mt-4 flex items-center justify-center relative overflow-hidden cursor-grow"
              onClick={() =>
                window.open("https://stellular-queijadas.netlify.app/", "_blank")
              }
              data-cursor-hover
            >
              <Image
                src="/img/image_processing.jpg"
                alt="Project 3"
                fill
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
              />
            </div>
            <div className="mt-[8px]">
              <h1
                onClick={() =>
                  window.open("https://stellular-queijadas.netlify.app/", "_blank")
                }
                className="mb-[4px] text-gray-700 text-[16px] hover:text-[#4C4FFF] transition-colors duration-300 cursor-grow"
              >
                Веб-приложение обработки изображения
              </h1>
              <p className="text-gray-700 text-[13px]">
                Создание функционального редактора изображений на HTML, CSS и JS
                с использованием нескольких методов обработки, а также
                вычислением цветов и масштабированием.
              </p>
              <span
                className="mt-[4px] text-blue-600 text-[13px] flex justify-between items-center"
                style={{ color: "#4C4FFF" }}
              >
                Веб-приложение &gt;&gt; Pet-проект{" "}
                <a
                  href="https://github.com/Katya-maslyanko/figma"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="ml-2"
                >
                  <Image
                    src="/github-fill.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </span>
            </div>
          </div>

          <div className="mt-[20px]">
            <div
              className="h-[216px] bg-gray-400 mt-4 flex items-center justify-center relative overflow-hidden cursor-grow"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1q5QKlLfBAnkYk_-c8Y7f4NSnQFcWkYGb/view?usp=sharing",
                  "_blank"
                )
              }
              data-cursor-hover
            >
              <Image
                src="/img/analysis.png"
                alt="Project 6"
                fill
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
              />
            </div>
            <div className="mt-[8px]">
              <h1
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1q5QKlLfBAnkYk_-c8Y7f4NSnQFcWkYGb/view?usp=sharing",
                    "_blank"
                  )
                }
                className="mb-[4px] text-gray-700 text-[16px] hover:text-[#4C4FFF] transition-colors duration-300 cursor-grow"
              >
                Конкурентный анализ сайтов
              </h1>
              <p className="text-gray-700 text-[13px]">
                Было проведено конкурентное исследование и UX/UI аудиты для
                агентства коммерческой недвижимости «Wise Group» для редизайна
                сайта визитки и неочевидных дизайнерских решений.
              </p>
              <span
                className="mt-[4px] text-blue-600 text-[13px] flex justify-between items-center"
                style={{ color: "#4C4FFF" }}
              >
                Конкурентный анализ &gt;&gt; UX/UI аудиты
              </span>
            </div>
          </div>
        </div>

        <div className="col_div col-span-2">
          <div
            className="h-[216px] md:h-[393px] h-image bg-gray-300 flex items-center justify-center relative overflow-hidden cursor-grow"
            style={{ backgroundColor: "#000" }}
            onClick={() => handleClick("/project/quite_website")}
            data-cursor-hover
          >
            <Image
              src="/img/quite_image.jpg"
              alt="Project 5"
              fill
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
            />
          </div>
          <div
            className="mt-5 h-64 md:h-[339px] mt_pr bg-gray-300 flex items-center justify-center cursor-grow"
            style={{ backgroundColor: "#E2E8F0" }}
            onClick={() => handleClick("/project/task_manager")}
            data-cursor-hover
          >
            <video
              src="/videos/video_task.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          <div className="mt-[8px]">
            <h1
              onClick={() => handleClick("/project/task_manager")}
              className="mb-[4px] text-gray-700 text-[16px] hover:text-[#4C4FFF] transition-colors duration-300 cursor-grow"
            >
              Веб-приложение управления проектами для оценки эффективности сотрудников
            </h1>
            <p className="text-gray-700 text-[13px]">
              Данное веб-приложение было разработано мною с помощью Next, React Flow
              и Django + DRF. Была реализована интересная фича как - виртуальная
              стратегическая карта.
            </p>
            <span
              className="mt-[4px] text-blue-600 text-[13px] flex justify-between items-center"
              style={{ color: "#4C4FFF" }}
            >
              Веб-приложение &gt;&gt; UX/UI дизайн &gt;&gt; Pet-проект{" "}
              <a
                href="https://github.com/Katya-maslyanko/project_manager"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
              >
                <Image
                  src="/github-fill.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  style={{ verticalAlign: "middle" }}
                />
              </a>
            </span>
          </div>
        </div>

        <div className="col_div col-span-3">
          <div
            className="h-[393px] h-image md:h-[216px] bg-gray-300 flex items-center justify-center relative overflow-hidden"
          >
            <Image
              src="/img/projects.jpg"
              alt="Project 4"
              fill
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
            />
          </div>

          <div className="mt-[8px]">
            <h1 className="mb-[4px] text-gray-700 text-[16px] hover:text-[#4C4FFF] transition-colors duration-300">
              Мои проекты, которые еще не видел свет
            </h1>
            <p className="text-gray-700 text-[13px]">
              Данные проекты были разработаны в рамке обучения, а также для клиентов.
              Часто создаю небольшие проекты для себя, чтобы тренироваться в дизайне.
            </p>
            <span
              className="mt-[4px] text-blue-600 text-[13px]"
              style={{ color: "#4C4FFF" }}
            >
              UX/UI дизайн &gt;&gt; Pet-проект &gt;&gt; Презентации
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
