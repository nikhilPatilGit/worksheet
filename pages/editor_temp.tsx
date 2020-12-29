import {
  Box,
  Flex,
  Grid,
  List,
  ListItem,
  Image,
  Text,
  Center,
  VStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Portal, PortalManager } from "@chakra-ui/portal";
import React, { useEffect, useState } from "react";
import Layout from "../src/component/Landing/Layout";
import Dashboard from "./dashboard";
import ReactCursorPosition from "react-cursor-position";
import ResizeTextarea from "react-textarea-autosize";
import TextareaAutosize from "react-textarea-autosize";
import { url } from "inspector";

import Draggable, { DraggableCore } from "react-draggable";
import { CustomTextArea } from "../src/component/Editor/CustomTextArea";

export const AutoResizeTextarea = React.forwardRef((props, ref) => {
  return (
    <Textarea
      width="200px"
      top="50"
      left="50"
      position="absolute"
      zIndex="9"
      placeholder="Basic usage"
      minH="unset"
      overflow="hidden"
      resize="none"
      minRows={1}
      as={ResizeTextarea}
      {...props}
    />
  );
});

const CustomTextAreaA = ({ ...props }) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false,
    } = {},
    elementDimensions: { width = 0, height = 0 } = {},
    isActive = false,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {},
  } = props;

  const [mouseEvents, setMouseEvents] = useState({
    isMouseDown: false,
    isMouseUp: false,
    isMouseMove: false,
  });

  return (
    <Textarea
      w="100px"
      h="20px"
      onMouseUp={() => {
        if (mouseEvents.isMouseDown) {
          setMouseEvents({
            isMouseUp: true,
            isMouseMove: false,
            isMouseDown: false,
          });
        }
      }}
      onMouseDown={() =>
        setMouseEvents({
          ...mouseEvents,
          isMouseUp: false,
          isMouseDown: true,
        })
      }
      onMouseMove={(event) => {
        //console.log(event);
        if (mouseEvents.isMouseDown) {
          setTimeout(() => {
            let x = Math.abs(event.clientX - 50);
            let y = Math.abs(event.clientY - 74 - 50);
            console.log(x + " " + y);
            setPosition({
              ...position,
              xValue: parseInt(`${x}`),
              yValue: parseInt(`${y}`),
            });
          }, 0);
        }
      }}
      onDrag={(event) => {
        event.preventDefault();
        // setTimeout(() => {

        // }, 100);

        // setPosition({
        //   ...position,
        //   xValue: Math.abs(event.clientX - 50),
        //   yValue: Math.abs(event.clientY - 74 - 50)
        // });
      }}
      position="absolute"
      zIndex="9"
      top={position.yValue}
      left={position.xValue}
      draggable="false"
    />
  );
};

const Worksheet = ({ ...props }) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false,
    } = {},
    elementDimensions: { width = 0, height = 0 } = {},
    isActive = false,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {},
  } = props;

  let xValue = 20; // Math.abs(parseInt(`${x}`) - 50);
  let yValue = 20; // Math.abs(parseInt(`${y}`) - 50);

  const [position, setPosition] = useState({
    xValue: 20,
    yValue: 20,
  });

  const [mouseEvents, setMouseEvents] = useState({
    isMouseDown: false,
    isMouseUp: false,
    isMouseMove: false,
  });

  // useEffect(() => {
  //   if (!isActive) {
  //     console.log("Iam outside");
  //   }
  // }, [isActive]);

  //const [display, setDisplay] = useState("block");

  const [isLongPressed, setLongPressed] = useState(false);

  //   useEffect(() => {
  // //    console.log(mouseEvents);
  //     if(mouseEvents.isMouseDown && mouseEvents.isMouseMove && !mouseEvents.isMouseUp){
  //       console.log("we are moving");
  //       setLongPressed(() => !isLongPressed);
  //     }
  //     else if(mouseEvents.isMouseUp && !mouseEvents.isMouseDown && !mouseEvents.isMouseMove){
  //       console.log("we have stopped moving");
  //       setLongPressed(() => !isLongPressed);
  //     }

  //   },[mouseEvents]);

  const onLongPress = () => {
    setLongPressed(() => !isLongPressed);
  };

  const onClick = () => {
    console.log("click is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  //const longPressEvent = UseLongPress(onLongPress, onClick, defaultOptions);

  var rref = React.createRef();

  return (
    <Box ref={rref} w="400px" h="auto" position="relative" boxSize="lg">
      <Image
        onDragOver={(event) => {
          event.preventDefault();          
          console.log("Drag Over "+parseInt(`${y}`));
        }}
        onDrop={(event) => {
          event.preventDefault();
          console.log(event.clientX);
          console.log(event.clientY);
          //     setPosition({
          //   xValue: Math.abs(event.clientX -  rref.current.getBoundingClientRect().left -50),
          //   yValue: Math.abs(event.clientY - rref.current.getBoundingClientRect().top - 250)
          // });
        }}
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        src="worksheet.jpg"
        alt="Segun Adebayo"
        draggable="false"
      />
      <Text position="absolute" zIndex="10" top={10} left={200}>
        {`x: ${x}`}
        <br />
        {`y: ${y}`}
        <br />
      </Text>

      <ReactCursorPosition>
        <CustomTextArea xValue={(parseInt(`${x}`))} yValue={(parseInt(`${y}`))} />
      </ReactCursorPosition>
    </Box>
  );
};

const editorr = () => {
  return (
    <Layout>
      <Grid m="5" templateColumns="2fr 1fr">
        <Center>
          <List spacing={10}>
            <ListItem justifyContent="center">
              <ReactCursorPosition>
                <Worksheet />
              </ReactCursorPosition>
            </ListItem>
          </List>
        </Center>

        <Textarea bg="grey" draggable="true" w="100px" resize="horizontal" />
      </Grid>
    </Layout>
  );
};

export default editorr;
