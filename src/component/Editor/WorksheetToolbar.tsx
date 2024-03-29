import { Flex, Spacer, Button, IconButton, Input } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiDuplicate, HiTrash } from "react-icons/hi";
import { createActionResult } from "src/helper/Factories";
import { DocumentReducerContext } from "src/hooks/DocumentProvider";
import { ActionType } from "src/hooks/Common/Types";
import CustomListPopver from "../../util/CustomListPopover";
import {Action} from "../../hooks/Common/Action";

const WorksheetToolbar = () => {
  const dispatch: React.Dispatch<Action> = useContext(
    DocumentReducerContext
  );
  const hiddenFileInput = useRef(null);

  const handleClick = (event: React.MouseEvent) => {
    // dispatch({
    //   type: ActionType.AddNewSheet,
    //   result: {
    //     sheet: new Sheet(),
    //     index: 1,
    //   },
    // });


    dispatch(createActionResult<string>(ActionType.DeleteSheet, "123"));
    //hiddenFileInput.current.click();
  };

  return (
    <Flex w="100%" direction="row">
      <Spacer />
      <Button
        size="sm"
        onClick={(event: React.MouseEvent) => handleClick(event)}
      >
        Add Worksheet
      </Button>
      <Input
        ref={hiddenFileInput}
        type="file"
        placeholder="Basic usage"
        display="none"
      />
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
