"use client";
import ScrollToTopButton from "@/components/UI/ScrollToTop/ScrollToTop";
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

import "./globals.scss";
import { languages } from "./i18n/settings";
import ReactQueryWrapper from "./ReactQueryWrapper";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir="ltr" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ReactQueryWrapper>
          {children}
          <ScrollToTopButton />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
