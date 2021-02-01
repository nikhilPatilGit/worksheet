import { Box, Heading, Grid, Text, Button, useToast, SimpleGrid, Image } from "@chakra-ui/react";
import React, { FC, useContext, useEffect, useState } from "react";
import CustomGridItem from "../../../util/CustomGridItem";
import {LoginModal} from "../../SignIn/LoginModal";
import {useAuth} from "../../../hooks/Auth";
import {NavText} from "./navText";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const LandingPageNavBar: FC = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  // row-start/col-start/row-end/col-end

  const gridValues = {
    logo: "1/1/1/2",
    drawerIcon: "1/12/1/12",
    menuItem1M: "3/1/3/span 12",
    menuItem1D: "1/3/1/4",
    menuItem2M: "4/1/4/span 12",
    menuItem2D: "1/4/1/5",
    menuItem3M: "5/1/5/span 12",
    menuItem3D: "1/5/1/6",
  };

  const displayValues = {
    mDisplay: ["block", "block", "none", "none"],
    dDisplay: ["none", "none", "block", "block"],
  };

  return (
    <Grid
      templateRows={[
        show ? "repeat(5, 1fr)" : "1",
        "repeat(5, 1fr)",
        "50px",
        "50px",
      ]}
      templateColumns="repeat(7, 130px)"
      bg="#303a4e"
      gridGap={2}
      m={2}
    >
      <CustomGridItem gridAreaM={gridValues.logo} gridAreaD={gridValues.logo}>
        <NavText text={"EASIFIE"} size={"3xl"} fontFamily={"Roboto"} />
      </CustomGridItem>

      <CustomGridItem
        displayStatus={displayValues.dDisplay}
        gridAreaM={gridValues.drawerIcon}
        gridAreaD={gridValues.drawerIcon}
      >
        <LoginModal />
      </CustomGridItem>

      <CustomGridItem
        displayStatus={displayValues.mDisplay}
        gridAreaM={gridValues.drawerIcon}
        gridAreaD={gridValues.drawerIcon}
      >
        <svg
          fill="white"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() =>  handleToggle()}
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </CustomGridItem>

      <CustomGridItem
        displayStatus={[show ? "block": "none", "none", "block", "block"]}
        gridAreaM={gridValues.menuItem1M}
        gridAreaD={gridValues.menuItem1D}
      >
        <NavText text={"What is Easifie?"} size={"md"}  />
      </CustomGridItem>

      <CustomGridItem
        displayStatus={[show ? "block": "none", "none", "block", "block"]}
        gridAreaM={gridValues.menuItem2M}
        gridAreaD={gridValues.menuItem2D}
      >
        <NavText text={"Demo"} size={"md"}/>
      </CustomGridItem>

      <CustomGridItem
        displayStatus={[show ? "block": "none", "none", "block", "block"]}
        gridAreaM={gridValues.menuItem3M}
        gridAreaD={gridValues.menuItem3D}
      >
        <NavText text={"Dashboard"} size={"md"}/>
      </CustomGridItem>

    </Grid>
  );
};

export default LandingPageNavBar;
