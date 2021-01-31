import { Box, Center, Image, Text } from "@chakra-ui/react";
import React, {useEffect} from "react";
import ReactCursorPosition from 'react-cursor-position';
import {useRequireAuth} from "../src/hooks/Auth/AuthRequire";
import {useAuth} from "../src/hooks/Auth";

const Dashboard = ({...props}) => {

    const {user} = useAuth();

    useEffect(() => {
        console.log(user);
    });

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

    const handleImageUpload = async (event) => {
      const files = event.target.files;
      let formData = new FormData();
      formData.append('file', files[0]);

      await fetch('http://localhost:8080/uploadFile', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })

        console.log(event.movementX);
        console.log(event.movementY);        
    }

  return (
    <Box>       
          <Center>
            <input onChange={handleImageUpload} type="file" id="fileUpload" />
          </Center>
    </Box>
  );
};

export default Dashboard;