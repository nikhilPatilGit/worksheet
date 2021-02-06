import { AccountMangerPopup } from "./AccountMangerPopup";
import React, { useContext, useEffect } from "react";
import { Grid, Box, Link, Icon, Image, Text } from "@chakra-ui/react";

export const AccountManger = () => {

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

  const handleSignOut = async () => {};

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
          <Image rounded="full" src={formatProfilePic()} />
        </Box>
        <Text
          as={Link}
          onClick={open}
          style={{ textDecoration: "none" }}
          textAlign="center"
          fontWeight="bold"
          fontSize="lg"
          display={["none", "none", "block", "block"]}
        >
          {formatUserName()}
        </Text>
        <Link onClick={open}>
          <Icon name="chevron-down" size="40px" />
        </Link>
      </Grid>
    </AccountMangerPopup>
  );
};
