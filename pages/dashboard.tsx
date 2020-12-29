import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import ReactCursorPosition from 'react-cursor-position';

const Dashboard = ({...props}) => {

    const {
        detectedEnvironment: {
          isMouseDetected = false,
          isTouchDetected = false
        } = {},
        elementDimensions: {
          width = 0,
          height = 0
        } = {},
        isActive = false,
        isPositionOutside = false,
        position: {
          x = 0,
          y = 0
        } = {}
      } = props;

    const handleMouseMove = (event: MouseEvent) => {
        console.log(event.movementX);
        console.log(event.movementY);        
    }

  return (
    <Box position="relative" w="300px" h="300px">       
        <Image
        position="absolute"
        top="0"
        left="0"
        src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />        
        <Text position="absolute" zIndex="9">
        {`x: ${x}`}<br />
      {`y: ${y}`}<br />
      {`width:: ${width}`}<br />
      {`height: ${height}`}<br />
      {`isActive: ${isActive}`}<br />
      {`isPositionOutside: ${isPositionOutside ? 'true' : 'false'}`}<br />
      {`isMouseDetected: ${isMouseDetected ? 'true' : 'false'}`}<br />
            {`isTouchDetected: ${isTouchDetected ? 'true' : 'false'}`}
      </Text>       
    </Box>
  );
};

export default Dashboard;
