import { Box, Center, Image, Text } from "@chakra-ui/react";
import React, {FC, useEffect} from "react";
import ReactCursorPosition from 'react-cursor-position';
import {firebase} from "../src/config/firebase";

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import nookies from "nookies";
import {firebaseAdmin} from "../src/config/firebaseAdmin";
import DashboardNavBar from "src/component/Dashboard/NavBar";
import { Dashboard } from "src/component/Dashboard";
import Layout from "src/component/Landing/Layout";


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        const cookies = nookies.get(ctx);
        const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
        const { uid, email } = token;

        return {
            props: { message: `Your email is ${email} and your UID is ${uid}.` },
        };
    } catch (err) {
        console.log(err);
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },

            props: {} as never,
        };
    }
};

const DashboardPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Dashboard />;
};

export default DashboardPage;

