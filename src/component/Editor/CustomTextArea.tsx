import { position, Textarea, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const CustomTextArea = ({ ...props }) => {
 
   let offsetX,offsetY;  

   const move = (e) =>
   {
     const el=e.target
     // console.log(`${e.pageX-offsetX}px`+" "+`${e.pageY-offsetY}px`);
     const left = parseInt(`${props.xValue}`) - 25;
     const top = parseInt(`${props.yValue}`) - 25;
     
     el.style.left = `${left}px`
     el.style.top = `${top}px`
   }
   const add = (e) =>
   {
     const el = e.target
     offsetX = e.clientX-el.getBoundingClientRect().left
     offsetY = e.clientY-el.getBoundingClientRect().top
     el.addEventListener('mousemove',move)
   }
   const remove = (e) => {
     const el = e.target;
     el.removeEventListener('mousemove',move)
   }
    
  useEffect(() => {
    console.log(mdStatus);
    if (!props.isActive) {
      setMdStatus(false);      
    }
  }, [props.isActive]);

  const [mdStatus, setMdStatus] = useState(false);

  return (
    <Text
    onMouseDown={() => setMdStatus(!mdStatus)}
    onMouseUp={() => setMdStatus(!mdStatus)}     
    onMouseMove={ (mdStatus && props.isActive) ? add : remove} 

      top= {20}
      left={20} 
      position="absolute"
      zIndex="9"
      w="50px"
      h="50px"
      bg="tomato"
    >
      Thread
    </Text>
  );
};