import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React, { FC } from "react";
import LandingPageNavBar from "../Landing/Navbar";


const AppLayout: FC = ({ ...props }) => {
    return (
      <Flex minH="100vh" direction="column">
        <Head>
          <title>Worksheet</title>
        </Head>
        <LandingPageNavBar />
        <Flex grow={1}>
          {props.children}  
        </Flex>
      </Flex>
    );
  };
  
  export default AppLayout;