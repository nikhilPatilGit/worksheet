import { Flex, Spacer, Button, IconButton, Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineUpload, HiDuplicate, HiTrash } from "react-icons/hi";
import CustomListPopver from "../util/CustomListPopover";
import { WorksheetView } from "./WorksheetView";

const WorksheetToolbar = () => {
    const hiddenFileInput = useRef(null);

    const handleClick = (event: React.MouseEvent) => {
        hiddenFileInput.current.click();
      };

    return (
      <Flex w="100%" direction="row">
        <Spacer />
        <Button size="sm" onClick={(event: React.MouseEvent) => handleClick(event)}>Add Worksheet</Button>
        <Input  ref={hiddenFileInput} type="file" placeholder="Basic usage" display="none" />      
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
      </Flex>
    );
  };

  export default WorksheetToolbar;