import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { Portal, PortalManager } from "@chakra-ui/portal"
import {AuthProvider} from "../src/hooks/Auth";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
    primary: {
        lightGreen: "#20c589",
        green: "#1EB980",
        darkGreen: "#045D56",
    },
    secondry: {
        orange: "#FF6859",
        yellow: "#FFCF44",
        purple: "#583fcf",
        purpleLight: "#5f47d1",
        blue: "#72DEFF",
        gray: "#8c8c8c",
        grayLight: "#a7a5a6",
    },
};


const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <PortalManager>
          {/*<AuthProvider>*/}
          <Component {...pageProps} />
          {/*</AuthProvider>*/}
      </PortalManager>
    </ChakraProvider>
  );
}

export default MyApp;
