"use client";

import React, { useState } from "react";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";

const Facts = () => {
  const [imageSrc, setImageSrc] = useState("/img/fact-image1.jpg");
  return (
    <div className="container mx-auto px-4 mt-[52px]">
      <div className="grid grid-cols-3 gap-[20px]">
        <div className="col-span-1"></div>
        <div className="col-span-1">
            <div className="col-span-1 h-[240px] flex items-end justify-center">
                <Image
                width={450}
                height={380}
                src={imageSrc}
                alt="Fact Image"
                className="w-full h-full object-cover"
                style={{ backgroundColor: "#E2E8F0" }}
                onMouseEnter={() => setImageSrc("/img/fact-image2.jpeg")}
                onMouseLeave={() => setImageSrc("/img/fact-image1.jpeg")}
                />
            </div>
            <p className="mt-[4px] text-[12px]" style={{ color: "#A2A2A2" }}>
                Рис 1. Фото
            </p>
        </div>
        <div className="col-span-1 h-[240px] flex items-end">
          <Image
            width={100}
            height={100}
            src="/img/QR_Code.png"
            alt="Fact Image 2"
            className="w-[100px] h-[100px] object-cover"
            style={{ backgroundColor: "#E2E8F0" }}
          />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <ul className="space-y-[18px]">
            <li className="group flex flex-col space-y-1 hover:scale-105 hover:text-[#4C4FFF] transition-all duration-300 hover:bg-gray-100 rounded-md px-2 py-1">
              <div className="flex items-center pb-[12px] space-x-2">
                <ArrowUpLeft className="text-[#4C4FFF] w-[32px] h-[32px]" />
                <span className="ml-[4px] text-gray-700 text-[16px] group-hover:text-[#4C4FFF]">
                  С отличием окончила университет по специальности веб-технологии.
                </span>
              </div>
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
            </li>
            <li className="group flex flex-col space-y-1 hover:scale-105 hover:text-[#4C4FFF] transition-all duration-300 hover:bg-gray-100 rounded-md px-2 py-1">
              <div className="grid grid-cols-[auto_1fr] gap-x-2 items-start pb-[12px]">
                <ArrowUpLeft className="text-[#4C4FFF] w-[32px] h-[32px]" />
                <div className="flex flex-col">
                  <span className="ml-[4px] text-gray-700 text-[16px] group-hover:text-[#4C4FFF]">
                    Владею современным стеком
                    <span className="box-sizing px-[4px]">
                      <span className="inline-block border border-gray-300 rounded-[8px] px-[6px] py-[1.5px] mx-1 hover:bg-[#4C4FFF] hover:text-[#FFFFFF] hover:border-[#4C4FFF] transition-all duration-300">
                        Next
                      </span>
                      <span className="inline-block ml-[4px] border border-gray-300 rounded-[8px] px-[6px] py-[1.5px] mx-1 hover:bg-[#4C4FFF] hover:text-[#FFFFFF] hover:border-[#4C4FFF] transition-all duration-300">
                        React + TypeScript
                      </span>
                      <span className="inline-block ml-[4px] border border-gray-300 rounded-[8px] px-[6px] py-[1.5px] mx-1 hover:bg-[#4C4FFF] hover:text-[#FFFFFF] hover:border-[#4C4FFF] transition-all duration-300">
                        Vue 
                      </span>
                      <span className="inline-block ml-[4px] border border-gray-300 rounded-[8px] px-[6px] py-[1.5px] mx-1 hover:bg-[#4C4FFF] hover:text-[#FFFFFF] hover:border-[#4C4FFF] transition-all duration-300">
                        HTML с БЭМ
                      </span>
                      <span className="inline-block ml-[4px] border border-gray-300 rounded-[8px] px-[6px] py-[1.5px] mx-1 hover:bg-[#4C4FFF] hover:text-[#FFFFFF] hover:border-[#4C4FFF] transition-all duration-300">
                        CSS/SCSS
                      </span>
                      <span className="inline-block ml-[4px] border border-gray-300 rounded-[8px] px-[6px] py-[1.5px] mx-1 hover:bg-[#4C4FFF] hover:text-[#FFFFFF] hover:border-[#4C4FFF] transition-all duration-300">
                        JavaScript
                      </span>
                      <span className="inline-block ml-[4px] border border-gray-300 rounded-[8px] px-[6px] py-[1.5px] mx-1 hover:bg-[#4C4FFF] hover:text-[#FFFFFF] hover:border-[#4C4FFF] transition-all duration-300">
                        Django + DRF
                      </span>
                    </span>
                    и даже экспериментировала с нейронными сетями, создавая перцептрон и генетический алгоритм.
                  </span>
                </div>
              </div>
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
            </li>
            <li className="group flex flex-col space-y-1 hover:scale-105 hover:text-[#4C4FFF] transition-all duration-300 hover:bg-gray-100 rounded-md px-2 py-1">
              <div className="flex items-center space-x-2 pb-[12px]">
                <ArrowUpLeft className="text-[#4C4FFF] w-[32px] h-[32px]" />
                <span className="ml-[4px] text-gray-700 text-[16px] group-hover:text-[#4C4FFF]">
                  Уверенно использую Git для управления проектами.
                </span>
              </div>
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
            </li>
            <li className="group flex flex-col space-y-1 hover:scale-105 hover:text-[#4C4FFF] transition-all duration-300 hover:bg-gray-100 rounded-md px-2 py-1">
              <div className="flex items-center space-x-2 pb-[12px]">
                <ArrowUpLeft className="text-[#4C4FFF] w-[32px] h-[32px]" />
                <span className="ml-[4px] text-gray-700 text-[16px] group-hover:text-[#4C4FFF]">
                  Обожаю латте с халвой от Skuratov Coffee — идеальное топливо для креативности.
                </span>
              </div>
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
            </li>
            <li className="group relative flex flex-col space-y-1 hover:scale-105 hover:text-[#4C4FFF] transition-all duration-300 hover:bg-gray-100 rounded-md px-2 py-1">
              <div className="flex items-center space-x-2 pb-[12px]">
                <ArrowUpLeft className="text-[#4C4FFF] w-[32px] h-[32px]" />
                <span className="ml-[4px] text-gray-700 text-[16px] group-hover:text-[#4C4FFF]">
                  Дома у меня живет милый пудель, который добавляет радости в повседневную жизнь.
                </span>
              </div>
              <Image
                src="/img/dog_image.jpg"
                alt="Poodle"
                className="absolute left-1/2 transform -translate-y-1/2 w-[150px] h-[150px] object-cover rounded-[8px] opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300 group-hover:scale-110"
                width={150}
                height={150}
                style={{ backgroundColor: "#E2E8F0" }}
              />
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Facts;