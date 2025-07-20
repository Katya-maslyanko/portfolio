"use client";

import Image from "next/image";

export default function ProjectLayout() {
  return (
    <div className="pb-[40px] relative z-[1]">
      {/* Grid Container */}
      <div className="grid grid-cols-3 gap-[18px]">
        {/* First Section: Full-width Image */}
        <div className="col-span-3 relative w-full aspect-[16/8] z-[0]">
          <Image
            src="/img/task_interview.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
           Было проведено глубинное интервью с пятью руководителями проектов ЦПД, чтобы уточнить проблемы, связанные с эффективностью работы студенческих команд.
           Определение ролей студентов, распределение задач, учет времени
и оценка эффективности работы являются ключевыми аспектами,
требующими внимания и улучшения.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[19/10] z-[0]">
          <Image
            src="/img/task_analysis.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Целевая аудитория данного сервиса для управления проектами включает
несколько ключевых групп, каждая из которых сталкивается с уникальными
вызовами в рамках управления проектами. Также был проведен анализ аналогов и конкурентов для нахождения новых идей для данной системы. <a href="https://drive.google.com/file/d/1YCpfdZtbLGaoL1Vy0vcl335E7GXWcXFy/view?usp=sharing">Анализ аналогов и конкурентов.</a>
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <Image
            src="/img/task_wireframe.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Создание Wireframe стало ключевым этапом проектирования. Как дизайнер, я разработала низкоуровневые эскизы для визуализации структуры и расположения ключевых элементов интерфейса. Вайрфреймы были спроектированы с упором на простоту и функциональность: определены зоны для заголовка, призыва к действию, контентных блоков и навигации, чтобы обеспечить интуитивный пользовательский путь.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <video
            src="/videos/task_video_dashboard.mov"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            В системе предусмотрены три роли: администратор, куратор проекта и участник проекта. Для каждой роли были спроектированы и реализованы индивидуальные дашборды, отображающие специфические данные, соответствующие их задачам и функциям.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[15/9] z-[0]">
          <video
            src="/videos/task_video_project.mov"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Страница задач предлагает три формата
отображения: список, Kanban-доска и хронологию. Список позволяет
структурировать задачи с возможностью фильтрации по статусу, приоритету
и исполнителю, а также сортировки по срокам, сложности задачи, что
упрощает планирование и контроль. Kanban-доска, представленная на рисунке
16-17, визуализирует рабочий процесс через колонки («К исполнению», «В
процессе», «Завершено»), поддерживая интуитивное перетаскивание задач с
помощью drag-and-drop. Хронология отображает задачи на временной шкале,
помогая отслеживать сроки и зависимости, что особенно ценно для ЦПД, так
как одним из требований является визуализация задач с помощью диаграммы
Ганта.
          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/16] z-[0]">
          <video
            src="/videos/task_video_detail_task.mov"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
Кроме того, имеется боковая
панель, которая предоставляет детальную информацию о задаче и позволяет
удобно редактировать данные, назначать исполнителей, а также добавлять
комментарии для улучшения коммуникации между участниками проекта. В
данном компоненте находится раздел сложности задачи, который
автоматически рассчитывает трудозатраты.          </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[16/9] z-[0]">
          <video
            src="/videos/task_video_map.mov"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover duration-300"
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Важной частью системы является стратегическая карта, которая
позволяет визуализировать цели и задачи проекта. Она помогает
участникам проекта видеть общую картину, отслеживать прогресс и
приоритизировать задачи. Карта обеспечивает наглядность и понимание
стратегических целей, что способствует более эффективному управлению
проектом и повышению продуктивности команды. Данная фича была реализована
с помощью библиотеки React Flow, что позволило создать интерактивную и
настраиваемую карту, которая легко адаптируется под различные проекты и
требования. Также здесь использовались WebSocket для отображения данных в реальном времени.
        </p>
        </div>
        <div className="col-span-3 relative w-full aspect-[18/13] z-[0]">
          <Image
            src="/img/task_comand.jpg"
            alt="Project preview 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-3 z-[0] relative">
          <p className="mt-[4px] text-gray-700 text-[13px]">
            Также была реализована страница команды, которая позволяет
просматривать информацию о каждом участнике проекта, его роли, задачах и
вкладе в проект. Это способствует лучшему пониманию командной динамики и
помогает в управлении ресурсами. Страница команды также включает
возможность добавления новых участников, что упрощает процесс
формирования команды и управления ею.
          </p>
        </div>
      </div>
    </div>
  );
}