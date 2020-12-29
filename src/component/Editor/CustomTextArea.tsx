import { position, Textarea, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const CustomTextArea = ({ ...props }) => {
 
   let offsetX,offsetY;  

   const move=e=>
   {
     const el=e.target
     console.log(`${e.pageX-offsetX}px`+" "+`${e.pageY-offsetY}px`);
     const left = parseInt(`${props.xValue}`) - 25;
     const top = parseInt(`${props.yValue}`) - 25;
     
     el.style.left = `${left}px`
     el.style.top = `${top}px`
   }
   const add=e=>
   {
     const el=e.target
     offsetX=e.clientX-el.getBoundingClientRect().left
     offsetY=e.clientY-el.getBoundingClientRect().top
     el.addEventListener('mousemove',move)
   }
   const remove=e=>{
     const el=e.target
     el.removeEventListener('mousemove',move)
   }
    
  const [position, setPosition] = useState({
    xValue: 20,
    yValue: 20,
    shouldMove: false,
  });

  const [mouseEvents, setMouseEvents] = useState({
    isMouseDown: false,
    isMouseUp: false,
    isMouseMove: false,
  });

//   useEffect(() => {
//     if (position.xValue !== props.xValue && position.yValue !== props.yValue) {
//         if(mouseEvents.isMouseDown && props.isActive){

//             let finalXValue = 0;
//             let finalYValue = 0;
//             if (props.xValue > position.xValue) {
//               finalXValue = props.xValue;
//               console.log("Moving Forward");
//             } else if (props.xValue < position.xValue) {
//               finalXValue = props.xValue;
//               console.log("Moving Backward");
//             }
  
//             if (props.yValue > position.yValue) {
//                 console.log("Moving Downwards");
//               finalYValue = props.yValue;
//             } else if (props.yValue < position.yValue) {
//               finalYValue = props.xValue;
//               console.log("Moving Upwards");
//             }

//             // setPosition({
//             //     ...position,
//             //     xValue: finalXValue,
//             //     yValue: finalYValue,
//             // });

//             // console.log(finalXValue + " " + finalYValue);

//             setTimeout(()=>{
//                 console.log(finalXValue + " " + finalYValue);
//                 setPosition({
//                     ...position,
//                     xValue: finalXValue,
//                     yValue: finalYValue,
//                     });
                
//             }, 30);
//         }
//     }
//   }, [props]);

  useEffect(() => {
    if (!props.isActive) {
      setMouseEvents({
        isMouseDown: false,
        isMouseUp: false,
        isMouseMove: false,
      });
    }
  }, [props.isActive]);

  return (
    <Text

    //onMouseDown={add} 
    onMouseUp={remove}
    onMouseMove={add}

      top= {20} //{position.yValue}
      left={20} //{position.xValue}
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




// onMouseUp={() => {
//     if (mouseEvents.isMouseDown) {
//       setMouseEvents({
//         isMouseUp: true,
//         isMouseMove: false,
//         isMouseDown: false,
//       });
//     }
//   }}
//   onMouseDown={() =>
//     setMouseEvents({
//       ...mouseEvents,
//       isMouseUp: false,
//       isMouseDown: true,
//     })
//   }
//   onMouseMove={(event) => {
//     if (mouseEvents.isMouseDown && props.isActive) {

//     //   let finalXValue = 0;
//     //   let finalYValue = 0;
//     //   if (props.xValue > position.xValue) {
//     //     finalXValue = props.xValue - 5;
//     //   } else if (props.xValue < position.xValue) {
//     //     finalXValue = props.xValue + 5;
//     //   }

//     //   if (props.yValue > position.xValue) {
//     //     finalYValue = props.yValue - 5;
//     //   } else if (props.yValue < position.yValue) {
//     //     finalYValue = props.xValue + 5;
//     //   }
//     //   console.log(finalXValue + " " + finalYValue);
//       //   setPosition({
//       //     ...position,
//       //     xValue: finalXValue,
//       //     yValue: finalYValue,
//       //     shouldMove: false
//       //   });
//     }
//   }}