import { Grid } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import CustomGridItem from "../../../util/CustomGridItem";
import {NavText} from "./navText";
import { AuthSwitch } from "./AuthSwitch";
import { NavDrawer } from "src/component/Drawer";


const LandingPageNavBar: FC = ({ }) => {
  const [show, setShow] = useState(false);


  // row-start/col-start/row-end/col-end

  const gridValues = {
    menuItem1D: "1/1/1/1",
    menuItem2D: "1/2/1/3",
    menuItem3D: "1/4/1/6",
    menuItem4D: "1/6/1/7",
    menuItem5D: "1/7/1/8",
    menuItem6D: "1/11/1/11",

    menuItem1M: "1/1/1/2",
    menuItem2M: "1/4/1/9",    
    menuItem3M: "1/10/1/12",
  };

  const displayValues = {
    mDisplay: ["block", "block", "none", "none"],
    dDisplay: ["none", "none", "block", "block"],
  };

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      bg="secondry.background"
      gridGap={2}
      m={2}
    >

      <CustomGridItem displayStatus={displayValues.mDisplay} gridAreaM={gridValues.menuItem1M} gridAreaD={gridValues.menuItem1D}>
        <NavDrawer />  
      </CustomGridItem>

      <CustomGridItem 
      gridAreaM={gridValues.menuItem2M}
      gridAreaD={gridValues.menuItem2D}>
        <NavText text={"EASIFIE"} size={"3xl"} fontFamily={"Roboto"} />        
      </CustomGridItem>

      <CustomGridItem
        displayStatus={displayValues.dDisplay}
        gridAreaD={gridValues.menuItem3D}
      >
        <NavText placement="start" text={"What is Easifie?"} size={"md"}  />
      </CustomGridItem>

      <CustomGridItem
        displayStatus={displayValues.dDisplay}
        gridAreaD={gridValues.menuItem4D}
      >
        <NavText text={"Demo"} size={"md"}/>
      </CustomGridItem>

      <CustomGridItem
        displayStatus={displayValues.dDisplay}
        gridAreaD={gridValues.menuItem5D}
      >
        <NavText url="/dashboard" placement="start" text={"Dashboard"} size={"md"}/>
      </CustomGridItem>

      <CustomGridItem
        gridAreaM={gridValues.menuItem3M}
        gridAreaD={gridValues.menuItem6D}
      >
        <AuthSwitch />
      </CustomGridItem>

    </Grid>
  );
};

export default LandingPageNavBar;
