"use client";

import Image from "next/image";

export default function ProjectLayout() {
  return (
    <div className="pb-[40px] projcetlayout relative z-[1]">
      {/* Grid Container */}
      <div className="grid grid-cols-3 grid_facts md:gap-[8px]">
        {/* First Section: Full-width Image */}
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <Image
            src="/img/reo_font.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Разработка фирменного стиля для системы мониторинга полигонов для ППК «РЭО». Включает в себя создание цветовой палитры и типографики, что обеспечивает единый визуальный стиль и узнаваемость бренда. Также были учтены требования к доступности и удобству восприятия информации пользователями.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[20/9] z-[0]">
          <Image
            src="/img/reo_ui_kit.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Проработка UI-kit для системы мониторинга полигонов. Включает в себя разработку компонентов интерфейса, таких как кнопки, формы и выпадающие списки, что обеспечивает единообразие использования интерфейса. Также были учтены требования к адаптивности и доступности интерфейса для различных устройств и пользователей.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <Image
            src="/img/reo_login.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Реализация входа в систему с возможностью восстановления пароля. Были выполнены требования заказчика по входу в систему, включая безопасность и удобство использования. Также была разработана система восстановления пароля, что обеспечивает пользователям легкий доступ к их учетным записям в случае потери пароля.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <video
            src="/videos/reo_video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Разработка дашборда с боковым навигационным меню, функциями сортировки и фильтрации по федеральным органам, субъектам РФ и годам. Создание компонентов для карточек дашборда, блока сводной информации по субъектам РФ и модальных окон.          
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <video
            src="/videos/reo_video_projects.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Реализация страницы проектов полигонов с отображением карточек всех проектов в компактном формате, содержащих основную информацию о каждом проекте. Включены функции поиска и фильтрации проектов, сортировки, а также отображение проектов на географической карте с возможностью просмотра их местоположений.          
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/14] z-[0]">
          <Image
            src="/img/reo_project.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Реализация детальной страницы проекта полигонов с подробной информацией об объекте, включая технические характеристики, состояние и историю проекта, необходимые для внешних заказчиков. Все компоненты разработаны в тесном сотрудничестве с заказчиком.          
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <Image
            src="/img/reo_ai.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Разработан сложный инструмент интеграции с ИИ для анализа проектов полигонов, представляющий собой конструктор, позволяющий сотрудникам измерять площадь полигона, выявлять возможные нарушения и выполнять другие аналитические задачи. Раздел создан в сотрудничестве с ГК «Геоскан».        
          </p>
        </div>
        {/* Second Section: Two Side-by-Side Images */}
        {/* <div className="col-span-1 relative h-[300px] z-[0]">
          <Image
            src="/images/project-image-2.jpg"
            alt="Project preview 2"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[8px]"
          />
        </div>
        <div className="col-span-1 relative h-[300px] z-[0]">
          <Image
            src="/images/project-image-3.jpg"
            alt="Project preview 3"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[8px]"
          />
        </div>
        <div className="col-span-1"></div> Empty column to maintain 3-column grid */}
      </div>
    </div>
  );
}