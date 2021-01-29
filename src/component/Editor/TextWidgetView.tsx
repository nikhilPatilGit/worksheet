import { Input } from "@chakra-ui/react";
import React, { FC, useContext, useEffect, useState } from "react";
import { DocumentReducerContext } from "src/hooks/DocumentProvider";
import { DocumentAction } from "src/hooks/Common/Action";
import { TextWidget } from "../Widget/Model";

interface IProps {
  widget: TextWidget;
  isActive?: boolean;
  position?: { x: number; y: number };
}

const TextWidgetView: FC<IProps> = ({ ...props }) => {
  let offsetX, offsetY;

  const [mouseStatus, setMouseStatus] = useState({
    isMouseDown: false,
    isMouseUp: false,
  });

  const move = (e) => {
    const el = e.target;
    const left = props.position.x - 100;
    const top = props.position.y - 20;

    if(mouseStatus.isMouseDown){
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
    }
  };
  const add = (e) => {
    const el = e.target;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
    el.addEventListener("mousemove", move);
  };

  const [] = useState(false);
  const [cursorType, setCursorType] = useState("text");


  useEffect(() => {
    // dispatch(createActionResult<UpdateWidgetPosition>(ActionType.UpdatePosition, new UpdateWidgetPosition(props.widget.widgetId, new Position(props.position.x, props.position.y))));
  }, [props.position.x, props.position.y]);

  useEffect(() => {
    if (!props.isActive) {
      setMouseStatus({ isMouseDown: false, isMouseUp: false });
    }
  }, [props.isActive]);

  return (
    <Input
      onMouseDown={() => {
        setMouseStatus({ isMouseDown: true, isMouseUp: false });
      }}
      onMouseUp={() => {
        setMouseStatus({ isMouseDown: false, isMouseUp: true });       
      }}
      onMouseMove={add}
      w="200px"
      variant="filled"
      placeholder="Enter Input"
      onClick={() => setCursorType("text")}
      onMouseEnter={() => {
        setCursorType("all-scroll");
      }}
      cursor={cursorType}
    />
  );
};

export default TextWidgetView;
