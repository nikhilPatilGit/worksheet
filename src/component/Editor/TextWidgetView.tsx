import { Input } from "@chakra-ui/react";
import React, { FC, useContext, useEffect, useState } from "react";
import { createActionResult } from "src/helper/Factories";
import { DocumentReducerContext } from "src/hooks/DocumentProvider";
import { DocumentAction } from "src/hooks/DocumentProvider/Action";
import { ActionType } from "src/hooks/DocumentProvider/Types";
import { Position, UpdateWidgetPosition } from "src/modals/Widget";
import { TextWidget } from "../Widget/Model";

interface IProps {
  widget: TextWidget;
  isActive?: boolean;
  position?: { x: number; y: number };
}

const TextWidgetView: FC<IProps> = ({ ...props }) => {
  let offsetX, offsetY;

  const move = (e) => {
    const el = e.target;
    // console.log(`${e.pageX-offsetX}px`+" "+`${e.pageY-offsetY}px`);
    const left = props.position.x - 25;
    const top = props.position.y - 25;

    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  };
  const add = (e) => {
    const el = e.target;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
    el.addEventListener("mousemove", move);
  };
  const remove = (e) => {
    const el = e.target;
    el.removeEventListener("mousemove", move);
  };

  const [mdStatus, setMdStatus] = useState(false);
  const [cursorType, setCursorType] = useState("text");

  const dispatch: React.Dispatch<DocumentAction> = useContext(
    DocumentReducerContext
  );

  useEffect(() => {
      // dispatch(createActionResult<UpdateWidgetPosition>(ActionType.UpdatePosition, new UpdateWidgetPosition(props.widget.widgetId, new Position(props.position.x, props.position.y))));
  }, [props.position.x, props.position.y]);

  useEffect(() => {
    if (!props.isActive) {
      setMdStatus(false);
    }
  }, [props.isActive]);

  return (
    <Input
      onMouseDown={() => setMdStatus(!mdStatus)}
      onMouseUp={() => setMdStatus(!mdStatus)}
      onMouseMove={mdStatus && props.isActive ? add : remove}
      w="200px"
      variant="filled"
      placeholder="Enter Input"
      onClick={()=>setCursorType("text")}
      onMouseEnter={()=>{
        setCursorType("all-scroll");
    }}
      cursor={cursorType}      
    />
  );
};

export default TextWidgetView;
