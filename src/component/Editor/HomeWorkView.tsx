import { Center, Flex, Grid, VStack, Image } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import {
  DocumentStateContext,
} from "src/hooks/DocumentProvider";
import { DocumentState } from "src/hooks/DocumentProvider/DocumentState";

import WorksheetToolbar from "./WorksheetToolbar";

import { SheetListView } from "./SheetListView";
import { testWidgetConverter, textWidgetConverter } from "src/converters/WidgetConverter";
import { TextWidget } from "src/modals/Widget";
import { Position } from "src/modals/Position";
import { getDocumentById, storeDocumentInCollection } from "src/api/firebase";
import { isObjectKeyPresent } from "src/helper/TypeChecks";

export const HomeWorkView = () => {
  const state: DocumentState = useContext(DocumentStateContext);

  useEffect(() => {
    console.log(state);
  });

  useEffect(() => {

    let t = new TextWidget();
    t.inputText = "Nikhil";
    t.position = new Position(10,10);

    let p = new TextWidget();
    
    //storeDocumentInCollection<TextWidget>("sheets/sheet-id-1/widgets", t.widgetId, t, textWidgetConverter);

    (async ()=>{
       // console.log(await getDocumentById<TextWidget>("sheets/sheet-id-1/widgets", "12e94606-8ef5-4245-a415-0800cf63e870", textWidgetConverter));
    })();

    
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
        </VStack>
      </Grid>
    </Flex>
  );
};

export default HomeWorkView;
