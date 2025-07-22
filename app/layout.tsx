"use client";

import './globals.css';
import { Manrope } from 'next/font/google';
import Loading from './loading';
import CustomCursor from '../components/CustomCursor';
import { useState, useEffect } from 'react';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateNetworkStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  return (
    <html lang="ru">
      <head>
        <title>Екатерина Маслянко - Портфолио</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Портфолио Екатерины Маслянко - UX/UI дизайнер и веб-разработчик" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={manrope.className}>
        <CustomCursor />
        <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
        {!isLoading && children}
      </body>
    </html>
  );
}
