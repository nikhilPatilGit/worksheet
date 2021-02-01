import { Box, Center, Flex, Spacer, StackDivider, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React, { FC } from "react";
import Footer from "../Footer";
import LandingPageNavBar from "../Navbar";

const Layout: FC = ({ ...props }) => {
  return (
    <Flex bg="#1A202C" minH="100vh" direction="column">
      <Head>
        <title>Worksheet</title>
      </Head>
      <LandingPageNavBar />
      <Flex bg="#1A202C" grow={1}>
        {props.children}  
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
