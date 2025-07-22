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
            src="/img/quiet_font.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Фирменный стиль для компании, у которой изначально отсутствовала брендовая идентичность, разработан с нуля. Выбран брутальный шрифт с четкими, массивными формами, подчеркивающий силу, надежность и технологичность бренда. Цветовая палитра включает глубокий синий и акцентный графитовый оттенки, создающие профессиональный и контрастный визуальный образ.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[22/12] z-[0]">
          <Image
            src="/img/quiet_cjm.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Customer Journey Map (CJM) описывает путь клиента от первого контакта с брендом до постпродажного взаимодействия. Анализ этапов — от осознания потребности до покупки и последующего обслуживания — выявил ключевые точки контакта и проблемные зоны. Это позволило оптимизировать процессы, сделать взаимодействие интуитивным и повысить удовлетворенность клиентов.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <video
            src="/videos/quite_main_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Главная страница компании создавалась с нуля для формирования мощного и функционального интерфейса, отражающего брендовую идентичность. Как дизайнер, я начала с глубокого анализа целевой аудитории и бизнес-целей, чтобы страница эффективно привлекала и удерживала пользователей. Разработана структура с упором на интуитивную навигацию: лаконичный заголовок четко передает ценность предложения, а контент организован в логической последовательности для естественного погружения в бренд.           </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[15/9] z-[0]">
          <video
            src="/videos/quite_video_service.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Создание страницы услуг с акцентом на удобство восприятия и навигации. Каждая услуга представлена в виде карточки с кратким описанием и ссылкой на подробную информацию, что позволяет пользователям быстро находить нужные решения. Визуальные элементы и четкая структура помогают выделить ключевые предложения, повышая конверсию и вовлеченность.          
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[15/9] z-[0]">
          <video
            src="/videos/quite_video_cataloog.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Создание каталога беспилотников с возможностью фильтрации и сортировки по различным параметрам. Каждая карточка содержит ключевую информацию о продукте, что позволяет пользователям быстро находить нужные модели.
          </p>
        </div>
        {/* Second Section: Two Side-by-Side Images */}
        <div className="col-span-1 relative h-[1100px] z-[0]">
          <Image
            src="/img/quiet_company.jpg"
            alt="Project preview 2"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-1 relative h-[1000px] z-[0]">
          <Image
            src="/img/quite_contact.jpg"
            alt="Project preview 3"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-1">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Реализация страницы &quot;О компании&quot; с акцентом на прозрачность и доверие. Включает разделы о миссии, ценностях и команде, что позволяет пользователям глубже понять философию бренда. Использованы визуальные элементы для создания эмоциональной связи с аудиторией, что способствует формированию лояльности и повышению доверия к компании.        
          </p>
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Страница контактов с формой обратной связи и картой для удобства связи с компанией. Включает контактные данные, что позволяет пользователям легко связаться с представителями компании.
          </p>
        </div>
      </div>
    </div>
  );
}