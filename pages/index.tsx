import {Box, Center, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React, { FC, useContext, useEffect } from "react";
import Layout from "../src/component/Landing/Layout";
import LandingPageNavBar from "../src/component/Landing/Navbar";
import {firebaseAdmin} from "../src/config/firebaseAdmin";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import nookies from "nookies";
import { AuthReducerContext } from "src/hooks/Auth";
import { Action } from "src/hooks/Common/Action";
import { createActionResult } from "src/helper/Factories";
import { ActionType } from "src/hooks/Common/Types";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        const cookies = nookies.get(ctx);
        const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

        // the user is authenticated!
        const { uid, email, name } = token;
        

        // ctx.res.writeHead(302, { Location: '/dashboard' });
        // ctx.res.end();

        return {
          props: { message: `Your email is ${email} and your UID is ${uid}.`, isAuthenticated: true },
        };
    } catch (err) {
        return { props: {} as never };
    }
};

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch: React.Dispatch<Action> = useContext(
    AuthReducerContext
  );

  useEffect(() => {
    dispatch(createActionResult<boolean>(ActionType.SetAuthStatus, props.isAuthenticated));
  }, []);

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
