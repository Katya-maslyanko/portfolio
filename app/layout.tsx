import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <title>Kat_masl</title>
        <meta name="description" content="Портфолио Екатерины Маслянко - UX/UI Дизайнер и Frontend Разработчик" />
      </head>
      <body className={`${manrope.variable} font-sans`}>{children}</body>
    </html>
  );
}