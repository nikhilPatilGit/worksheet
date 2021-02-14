import { Flex } from "@chakra-ui/react";
import Head from 'next/head'
import React, { FC } from "react";
import { DashProvider } from "src/hooks/Dashboard";
import { Processor } from "./Layout";
import DashboardNavBar from "./NavBar";

export const Dashboard: FC = ({ ...props }) => {
  return (
    <DashProvider>
      <Flex bg="#1A202C" minH="100vh" direction="column">
        <Head>
          <title>Dashboard</title>
        </Head>
        <DashboardNavBar />
        <Flex bg="#1A202C" grow={1}>
          <Processor />
        </Flex>
      </Flex>
    </DashProvider>
  )
};

export default Dashboard;