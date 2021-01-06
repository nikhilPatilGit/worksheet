import { Center, Flex, Grid, VStack, Image } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import {
  DocumentStateContext,
} from "src/hooks/DocumentProvider";
import { DocumentState } from "src/hooks/DocumentProvider/DocumentState";

import WorksheetToolbar from "./WorksheetToolbar";

import { SheetListView } from "./SheetListView";

export const HomeWorkView = () => {
  const state: DocumentState = useContext(DocumentStateContext);

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
