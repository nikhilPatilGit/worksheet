import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

import { IconType } from "react-icons/lib";


interface IProps {
  icons: { icon: IconType; iconName: string, iconId: string }[];
  iconPressed: ((iconName: string, event: React.MouseEvent) => void);
}

const IconsList: FC<IProps> = ({ ...props }) => {
  const icons = props.icons;
  const listItems = icons.map((i, index) => (
    <ListItem onClick={(event: React.MouseEvent) => {
        props.iconPressed(i.iconId, event);        
    }} key={index}>
        <a href="#">
          <ListIcon  as={i.icon} color="green.500" />
          {i.iconName}
        </a>
    </ListItem>
  ));
  return <List spacing={3}>{listItems}</List>;
};

const CustomListPopver: FC<IProps> = ({ ...props }) => {
  return (
    <Popover>
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <PopoverContent ml={"60px"} maxW="200px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <IconsList iconPressed={props.iconPressed} icons={props.icons} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CustomListPopver;
