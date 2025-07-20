"use client";

import './globals.css';
import { Manrope } from 'next/font/google';
import Loading from './loading';
import CustomCursor from '../components/CustomCursor';
import { useState } from 'react';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="ru">
      <head>
        <title>Екатерина Масоянко - Портфолио</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Портфолио Екатерины Масоянко - UX/UI дизайнер и веб-разработчик" />
      </head>
      <body className={manrope.className}>
        <CustomCursor />
        <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
        {!isLoading && children}
      </body>
    </html>
  );
}