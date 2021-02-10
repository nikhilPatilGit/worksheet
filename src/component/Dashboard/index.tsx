import { Flex } from "@chakra-ui/react";
import Head from 'next/head'
import React, { FC } from "react";
import DashboardNavBar from "./NavBar";

export const Dashboard: FC = ({ ...props }) => {
  return <Flex bg="#1A202C" minH="100vh" direction="column">            
   <Head>
        <title>Dashboard</title>
    </Head>
        <DashboardNavBar />
        <Flex bg="#1A202C" grow={1}>
          {props.children}  
        </Flex>
  </Flex>
};

export default Dashboard;