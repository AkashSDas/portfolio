import "@/styles/globals.css";

import { useRef } from "react";

import Navbar from "@/components/navbar";
import { chakraTheme } from "@/lib/chakra-ui";
import { ScrollContext } from "@/lib/context";
import { ChakraProvider } from "@chakra-ui/react";
import localFont from "@next/font/local";

import type { AppProps } from "next/app";
export const cubano = localFont({
  src: "../../public/fonts/cubano.ttf",
  variable: "--font-cubano",
  preload: true,
  weight: "400",
  style: "normal",
});

export const gtWalsheimPro = localFont({
  src: [
    {
      path: "../../public/fonts/GTWalsheimPro/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTWalsheimPro/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTWalsheimPro/bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gtwalsheimpro",
});

export default function App({ Component, pageProps }: AppProps) {
  var experienceRef = useRef();
  var workRef = useRef();
  var articlesRef = useRef();
  var contactRef = useRef();

  return (
    <div className={`${gtWalsheimPro.variable} ${cubano.variable}`}>
      <ChakraProvider theme={chakraTheme}>
        <ScrollContext.Provider
          value={{
            experienceRef,
            workRef,
            articlesRef,
            contactRef,
          }}
        >
          {/* <Navbar /> */}
          <Component {...pageProps} />
        </ScrollContext.Provider>
      </ChakraProvider>
    </div>
  );
}
