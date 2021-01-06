import { List, ListItem } from "@chakra-ui/react";
import React, { FC, useContext } from "react";
import { DocumentStateContext } from "src/hooks/DocumentProvider";
import { DocumentState } from "src/hooks/DocumentProvider/DocumentState";
import { Sheet } from "src/hooks/DocumentProvider/Model";

import ReactCursorPosition from "react-cursor-position";
import SheetView from "./SheetView";
import { useEffect } from "react";

export const SheetListView = () => {
  const state: DocumentState = useContext(DocumentStateContext);
  useEffect(() => {
    console.log(state);
  });


  const sheetsList = state.sheets.map((sheet: Sheet) => (
    <ListItem key={sheet.sheetId}>
      <ReactCursorPosition>
        <SheetView sheet={sheet} />
      </ReactCursorPosition>
    </ListItem>
  ));

  return (
    <>
      <List spacing={3}>{sheetsList}</List>
    </>
  );
};

export default SheetListView;