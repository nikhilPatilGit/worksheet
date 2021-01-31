import { Box, Center, Image, Text } from "@chakra-ui/react";
import React, {useEffect} from "react";
import ReactCursorPosition from 'react-cursor-position';
import {useRequireAuth} from "../src/hooks/Auth/AuthRequire";
import {useAuth} from "../src/hooks/Auth";
import {firebase} from "../src/config/firebase";

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import nookies from "nookies";
import {firebaseAdmin} from "../src/config/firebaseAdmin";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        const cookies = nookies.get(ctx);
        const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
        const { uid, email } = token;

        return {
            props: { message: `Your email is ${email} and your UID is ${uid}.` },
        };
    } catch (err) {

        return {
            redirect: {
                permanent: false,
                destination: "/",
            },

            props: {} as never,
        };
    }
};

const Dashboard = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const {user} = useAuth();

    useEffect(() => {
        console.log(user);
    });

    const handleImageUpload = async (event) => {
      const files = event.target.files;
      let formData = new FormData();
      formData.append('file', files[0]);

      await fetch('http://localhost:8080/uploadFile', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })

        console.log(event.movementX);
        console.log(event.movementY);        
    }

  return (
    <Box>       
          <Center>
            <input onChange={handleImageUpload} type="file" id="fileUpload" />
          </Center>
    </Box>
  );
};

export default Dashboard;