import { EmailIcon } from "@chakra-ui/icons";
import { Button, Grid, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { NavDrawer } from "src/component/Drawer";
import CustomGridItem from "src/util/CustomGridItem";

import { Icon } from "@chakra-ui/react"
import { MdFileUpload } from "react-icons/md"
import { AccountManger } from "src/component/ProfileAccount";
import { UploadWorksheet } from "./UploadWorksheet";

const DashboardNavBar: FC = () => {

    const gridValues = {
        menuItem1D: "1/1/1/1",
        menuItem2D: "1/2/1/3",
        menuItem3D: "1/10/1/11",
        menuItem4D: "1/6/1/7",
        menuItem5D: "1/7/1/8",
        menuItem6D: "1/12/1/12",

        menuItem1M: "1/1/1/2",
        menuItem2M: "1/4/1/9",
        menuItem3M: "1/10/1/12",
    };

    const displayValues = {
        mDisplay: ["block", "block", "none", "none"],
        dDisplay: ["none", "none", "block", "block"],
    };


    return <Grid
        templateColumns="repeat(12, 1fr)"
        bg="secondry.background"
        gridGap={2}
        m={2}
    >
        <CustomGridItem displayStatus={displayValues.dDisplay} gridAreaM={gridValues.menuItem1M} gridAreaD={gridValues.menuItem1D}>
            <NavDrawer />
        </CustomGridItem>

        <CustomGridItem
            gridAreaD={gridValues.menuItem2D}>
            <Text color="secondry.white" fontSize="2xl" fontWeight="bold" fontFamily="Roboto">Dashboard</Text>
        </CustomGridItem>

        <CustomGridItem
            gridAreaD={gridValues.menuItem3D}>
           <UploadWorksheet />
        </CustomGridItem>

        <CustomGridItem
            gridAreaM={gridValues.menuItem3M}
            gridAreaD={gridValues.menuItem6D}
        >
            <AccountManger />
        </CustomGridItem>

    </Grid>
};

export default DashboardNavBar;