"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
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
    // <aside
    //   className={`fixed top-0 left-0 w-[324px] h-screen text-[13px] text-black p-4 flex flex-col ${className}`}
    // >
      <aside
        className={`fixed top-0 left-0 w-[324px] text-[13px] text-black p-4 flex flex-col screen ${className}`}
      >
      <div className="mb-6">
        <div>
          <Link
            href="#"
            className="text-blue-600 no-underline text-[16px] hover:no-underline block relative pb-[18px] font-[400]"
          >
            Екатерина Маслянко
          </Link>
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
        </div>
        <p className="mt-[18px] text-[12px]" style={{ color: "#A2A2A2" }}>
          Обо мне
        </p>
        <span className="mt-[4px] text-[13px] leading-[1.5] text-gray-500 max-w-[342px]">
          Привет). Я UX/UI-дизайнер и frontend-разработчик, перфекционистка,
          превращающая идеи в продукты, которые цепляют пользователей и бизнес.
          <br />
          Могу спроектировать интуитивный и понятный интерфейс, разработать его и
          довести до идеала.
          <br />
          <br />
          <span className="block mb-[12px] span_none">
            Моя страсть — создавать с нуля. Всегда готова учиться новому, прохожу
            работу в команде и несу ответственность за каждый пиксель и строку
            кода.
          </span>
        </span>
      </div>

      <div className="flex-grow" />

      <div className="mt-auto mb-[32px] contact">
        <div className="pb-[18px]">
          <h1 className="font-semibold mb-[16px] text-gray-500 text-[16px] font-[400] ">
            Контакты
          </h1>
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
        </div>
        <ul className="list-none pl-0" style={{ paddingLeft: "0px" }}>
          {[
            { href: "https://www.superjob.ru/resume/ux-55750517.html", text: "CV >> Резюме" },
            { href: "https://t.me/Kat_masl", text: "Telegram" },
            {
              href: "mailto:ekaterina.maslianko@yandex.ru",
              text: "Email (ekaterina.maslianko@yandex.ru)",
            },
            { href: "https://www.behance.net/katyamaslyanko", text: "Behance" },
            { href: "https://github.com/Katya-maslyanko/", text: "GitHub" },
          ].map((item, index) => (
            <li key={index} className="relative group text_sidebar">
              <Link
                href={item.href}
                className="text-gray-500 hover:text-blue-600 no-underline block relative cursor-grow"
                style={{ color: "#000" }}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
              >
                {item.text}
                <span className="absolute bottom-[-2px] left-0 h-[1px] bg-blue-600 w-0 transition-all duration-300 ease-out" />
              </Link>
              <style jsx>{`
                .group:hover span {
                  width: 100%;
                }
              `}</style>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;