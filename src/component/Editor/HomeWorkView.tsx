import { Flex, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { DocumentReducerContext, DocumentStateContext } from "src/hooks/DocumentProvider";
import { ActionType, DocumentAction } from "src/hooks/DocumentProvider/Types";
import { DocumentState } from "src/hooks/DocumentProvider/DocumentState";
import { Sheet } from "src/hooks/DocumentProvider/Model";

import ImageLoader from "../util/ImageLoader";
import { TextWidget, Widget } from "../Widget/Model";
import WorksheetToolbar from "./WorksheetToolbar";

import lodash from 'lodash';

export const HomeWorkView = () => {
  const state: DocumentState = useContext(DocumentStateContext);
  const dispatch: React.Dispatch<DocumentAction> = useContext(
    DocumentReducerContext
  );

  useEffect(() => {
    console.log(state);
  });

  useEffect(() => {
    let sheet = new Sheet();
    sheet.sheetId = "123";
    let sheets: Sheet[] = [sheet, sheet];
    // let documentResult: DocumentResult<Sheet[]> = new DocumentResult<Sheet[]>("AddSheet", sheets);  
    // let documentWidget: DocumentResult<Widget>  = new DocumentResult<Widget>("AddSheet", new TextWidget("TextWidget"));

    dispatch({type: ActionType.AddSheetArray, result: sheets});
    

  }, []);

  return (
    <Flex bg="#C0C0C0" justify="center" overflow="auto" flexGrow={1}>
      <VStack pt={20} spacing={10}>
        <WorksheetToolbar />
        <ImageLoader src="https://bit.ly/sage-adebayo" />
        <ImageLoader src="worksheet.jpg" />
      </VStack>
    </Flex>
  );
};

export default HomeWorkView;
