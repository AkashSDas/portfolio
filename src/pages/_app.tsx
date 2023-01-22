import "@/styles/globals.css";

import { chakraTheme, cubano, gtWalsheimPro } from "@/lib/chakra-ui";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${gtWalsheimPro.variable} ${cubano.variable}`}>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}
