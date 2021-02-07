import { AccountMangerPopup } from "./AccountMangerPopup";
import React, { useContext, useEffect } from "react";
import { Grid, Box, Link, Icon, Image, Text } from "@chakra-ui/react";
import {firebase} from "../../../config/firebase";
import { AuthState } from "src/hooks/Auth/AuthState";
import { AuthStateContext } from "src/hooks/Auth";
import { useState } from "react";
import _ from "lodash";

import { IoMdArrowDropdown } from 'react-icons/io';
import { ChevronDownIcon } from '@chakra-ui/icons'


export const AccountManger = () => {

  const authState: AuthState = useContext(AuthStateContext);

  const [username, setUsername] = useState<string>("Guest");
  const [profilePicture, setProfilePicture] = useState<string>("default_icon.png");

  useEffect(() => {
    if(_.isString(authState.currentUser.name)){
      setUsername(authState.currentUser.name);
    }

    if(_.isString(authState.currentUser.photoUrl)){
      setProfilePicture(authState.currentUser.photoUrl);
    }
  }, [authState.currentUser]);

  const formatUserName = (): string => {
    let name: string = "Guest";
    return name;
  };

  const formatProfilePic = (): string => {
    let profilePic: string = "default_icon.png";
    return profilePic;
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const handleSignOut = async () => {
    await firebase.auth().signOut();
  };

  return (
    <AccountMangerPopup togglePopup={isOpen} handleSignOut={handleSignOut}>
      <Grid
        justifyItems="center"
        alignItems="center"
        w={["100px", "100px", "180px", "180px"]}
        h="50px"
        templateColumns={[
          "repeat(2, 40px)",
          "repeat(2, 40px)",
          "40px fit-content(100px) 40px",
          "40px fit-content(100px) 40px",
        ]}
        gap={2}
      >
        <Box as={Link} onClick={open} p={1} size="40px">
          <Image rounded="full" src={profilePicture} />
        </Box>
        <Text
          as={Link}
          onClick={open}
          style={{ textDecoration: "none" }}
          textAlign="center"
          fontWeight="bold"
          fontSize="lg"
          color="text.white"
          display={["none", "none", "block", "block"]}
        >
          {username}
        </Text>
        <Link onClick={open}>
          <ChevronDownIcon color="text.white" w={8} h={8} />
        </Link>
      </Grid>
    </AccountMangerPopup>
  );
};
