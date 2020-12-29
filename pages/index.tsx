import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React, { FC } from "react";
import Layout from "../src/component/Landing/Layout";
import LandingPageNavBar from "../src/component/Landing/Navbar";

const Home: FC = ({ ...props }) => {
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  
  return (
    <Layout>
        This is the Landing Page
    </Layout>
  );
};

export default Home;
