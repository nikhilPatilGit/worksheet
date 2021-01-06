import { Center, Flex, Grid, VStack, Image } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import {
  DocumentReducerContext,
  DocumentStateContext,
} from "src/hooks/DocumentProvider";
import { ActionType } from "src/hooks/DocumentProvider/Types";
import { DocumentState } from "src/hooks/DocumentProvider/DocumentState";
import { Sheet } from "src/hooks/DocumentProvider/Model";

import ImageLoader from "../../util/ImageLoader";
import { ImageWidget, TextWidget, Widget, WidgetType } from "../Widget/Model";
import WorksheetToolbar from "./WorksheetToolbar";

import lodash from "lodash";
import { DocumentAction } from "src/hooks/DocumentProvider/Action";
import { createActionResult } from "src/helper/Factories";
import { Position } from "src/modals/Widget";
import SheetView from "./SheetView";
import { SheetListView } from "./SheetListView";

export const HomeWorkView = () => {
  const state: DocumentState = useContext(DocumentStateContext);
  const dispatch: React.Dispatch<DocumentAction> = useContext(
    DocumentReducerContext
  );

  useEffect(() => {
    console.log(state);
  });

  useEffect(() => {

    // let documentResult: DocumentResult<Sheet[]> = new DocumentResult<Sheet[]>("AddSheet", sheets);
    // let documentWidget: DocumentResult<Widget>  = new DocumentResult<Widget>("AddSheet", new TextWidget("TextWidget"));

    // dispatch(createActionResult<Sheet[]>(ActionType.AddSheetArray, sheets));
  }, []);

  return (
    <Flex bg="#C0C0C0" justify="center" overflow="auto" flexGrow={1}>
      <Grid m="5" templateColumns="2fr 1fr">
        <Center>
        <VStack pt={20} spacing={10}>
          <WorksheetToolbar />         
          <SheetListView />
        </VStack>
        </Center>
        <VStack pt={20} spacing={10}>
          <Center>
            <Image
              boxSize="100px"
              objectFit="cover"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
            />
          </Center>
          <Center>
            <Image
              boxSize="100px"
              objectFit="cover"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
              draggable="true"
            />
          </Center>
          
        </VStack>
      </Grid>
    </Flex>
  );
};

export default HomeWorkView;
