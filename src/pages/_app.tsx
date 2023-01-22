import "@/styles/globals.css";

import Navbar from "@/components/navbar";
import { chakraTheme, cubano, gtWalsheimPro } from "@/lib/chakra-ui";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${gtWalsheimPro.variable} ${cubano.variable}`}>
      <ChakraProvider theme={chakraTheme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}
