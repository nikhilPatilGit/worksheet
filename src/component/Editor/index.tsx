import { Center, Flex, Image, Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import AppLayout from "../AppLayout";
import PDFViewer from "pdf-viewer-reactjs";
import { WorksheetView } from "./WorksheetView";
import HomeWorkView from "./HomeWorkView";
import { DocumentProvider } from "src/hooks/DocumentProvider";

export const Editor = () => {
  return (
    <DocumentProvider>
    <AppLayout>
        <HomeWorkView />
    </AppLayout>
    </DocumentProvider>
  );
};


// <Grid templateRows="400px" templateColumns="300px 400px">
// <Flex
//   whiteSpace="normal"
//   overflowY="scroll"
//   overflowX="scroll"
//   overflow="auto"
//   maxH="300px"
//   maxW="300px"
// >
//   <Image minH="500px" minW="500px" src="worksheet.jpg" alt="Segun Adebayo" />
  
//   {/* <Text minH="500px" minW="500px">
//     Lorem Ipsum is simply dummy text of the printing and typesetting
//     industry. Lorem Ipsum has been the industry's standard dummy text
//     ever since the 1500s, when an unknown printer took a galley of type
//     and scrambled it to make a type specimen book. It has survived not
//     only five centuries, but also the leap into electronic typesetting,
//     remaining essentially unchanged. It was popularised in the 1960s
//     with the release of Letraset sheets containing Lorem Ipsum passages,
//     and more recently with desktop publishing software like Aldus
//     PageMaker including versions of Lorem Ipsum.
//   </Text> */}
// </Flex>
// <Box>
//   Lorem Ipsum is simply dummy text of the printing and typesetting
//   industry. Lorem Ipsum has been the industry's standard dummy text ever
//   since the 1500s, when an unknown printer took a galley of type and
//   scrambled it to make a type specimen book. It has survived not only
//   five centuries, but also the leap into electronic typesetting,
//   remaining essentially unchanged. It was popularised in the 1960s with
//   the release of Letraset sheets containing Lorem Ipsum passages, and
//   more recently with desktop publishing software like Aldus PageMaker
//   including versions of Lorem Ipsum.
// </Box>
// </Grid>