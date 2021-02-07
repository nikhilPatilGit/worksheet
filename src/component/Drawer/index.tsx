import { HamburgerIcon } from '@chakra-ui/icons'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { NavText } from '../Landing/Navbar/navText';

export const NavDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (<>
        <HamburgerIcon onClick={onOpen} color="secondry.white" w={8} h={8}  />
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="secondry.background" color="secondry.white">
            <DrawerHeader borderBottomWidth="1px">
                <NavText text={"EASIFIE"} size={"3xl"} fontFamily={"Roboto"} />  
            </DrawerHeader>
            <DrawerBody>
            <NavText text={"Dashboard"} size={"md"}/>
            <NavText text={"Dashboard"} size={"md"}/>
            <NavText text={"Dashboard"} size={"md"}/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>)
}