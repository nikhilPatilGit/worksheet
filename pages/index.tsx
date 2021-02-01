import {Box, Center, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React, { FC } from "react";
import Layout from "../src/component/Landing/Layout";
import LandingPageNavBar from "../src/component/Landing/Navbar";
import {firebaseAdmin} from "../src/config/firebaseAdmin";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import nookies from "nookies";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        const cookies = nookies.get(ctx);
        const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

        // the user is authenticated!
        const { uid, email, name } = token;

        // ctx.res.writeHead(302, { Location: '/dashboard' });
        // ctx.res.end();

        return {
            props: {},
        };
    } catch (err) {
        return { props: {} as never };
    }
};

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
            Landing Area
    </Layout>
  );
};

export default Home;

// <Box
//     bg={"#1A202C"}
// >This is the landing page</Box>
