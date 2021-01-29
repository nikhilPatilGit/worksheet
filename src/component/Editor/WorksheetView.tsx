import {
  Flex,
  Image,
  VStack,
  HStack,
  Spacer,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  IconButton
} from "@chakra-ui/react";
import React from "react";
import Link from 'next/link'

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import CustomListPopver from "../../util/CustomListPopover";
import {HiDuplicate, HiTrash} from "react-icons/hi";

const UpdateWorksheet = () => {
  return <Flex w="100%" direction="row" >
    <Spacer />
    <CustomListPopver
        iconPressed={(iconId: string) => console.log(iconId)}
        icons={[
          { icon: HiDuplicate, iconName: "Duplicate", iconId: "duplicate" },
          { icon: HiTrash, iconName: "Delete Worksheet", iconId: "delete" },
        ]}
    >
      <IconButton
          aria-label="Search database"
          icon={<BiDotsHorizontalRounded size={24} />}
      />
    </CustomListPopver>
    <Spacer />
    <Popover>
  <PopoverTrigger>
    <BiDotsHorizontalRounded size={24} />
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Header</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        <Button colorScheme="blue">Button</Button>
      </PopoverBody>
      <PopoverFooter>This is the footer</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
  </Flex>;
}

export const WorksheetView = () => {
  return (
    <Flex bg="#C0C0C0" justify="center" overflow="auto" flexGrow={1}>
      <VStack pt={20} spacing={10}>
        <UpdateWorksheet />
        <Image
          width="816px"
          height="1056px"
          minH="1056px"
          minW="816px"
          src="worksheet.jpg"
          alt="Segun Adebayo"
        />
        <Image
          width="816px"
          height="1056px"
          minH="1056px"
          minW="816px"
          src="worksheet.jpg"
          alt="Segun Adebayo"
        />
      </VStack>
    </Flex>
  );
};

{
  /* 
    <Flex pt={10} flexGrow={1} justifyContent="center">
<VStack>
         <Image minH="500px" minW="500px" src="worksheet.jpg" alt="Segun Adebayo" />
         <Image minH="500px" minW="500px" src="worksheet.jpg" alt="Segun Adebayo" />
    </VStack>
    </Flex>

*/
}
