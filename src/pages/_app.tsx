import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import Header from "@/section/common/header";

import chakraTheme from "@chakra-ui/theme";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
