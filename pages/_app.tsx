import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { Portal, PortalManager } from "@chakra-ui/portal"
import { AuthProvider } from "src/hooks/Auth/AuthProvider";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <PortalManager>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      </PortalManager>
    </ChakraProvider>
  );
}

export default MyApp;
