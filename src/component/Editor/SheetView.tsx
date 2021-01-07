import { Box, List, ListItem } from "@chakra-ui/react";
import React, { FC, useContext, useEffect } from "react";
import { Sheet } from "src/hooks/DocumentProvider/Model";
import ImageLoader from "../../util/ImageLoader";
import { TextWidget, Widget } from "../Widget/Model";
import ReactCursorPosition from "react-cursor-position";
import TextWidgetView from "./TextWidgetView";
import { DocumentReducerContext } from "src/hooks/DocumentProvider";
import { DocumentAction } from "src/hooks/DocumentProvider/Action";
import { createActionResult } from "src/helper/Factories";
import { ActionType } from "src/hooks/DocumentProvider/Types";
import { Position } from "src/modals/Widget";

interface IProps {
  sheet: Sheet;
  isActive?: boolean;
  position?: { x: number; y: number };
}

const SheetView: FC<IProps> = ({ ...props }) => {
    const dispatch: React.Dispatch<DocumentAction> = useContext(
        DocumentReducerContext
      );
  useEffect(() => {
    
  });

  const widgetsList = props.sheet.widgets.map((widget: TextWidget) => (
    <ListItem
      top={widget.position.y}
      left={widget.position.x}
      zIndex="10"
      position="absolute"
      key={widget.widgetId}
    >
      <ReactCursorPosition>
        <TextWidgetView widget={widget} />
      </ReactCursorPosition>
    </ListItem>
  ));
  return (
    <Box
      draggable="false"
      onDrop={(event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const el = event.target as HTMLElement;
        let offsetX = event.clientX - el.getBoundingClientRect().left;
        let offsetY = event.clientY - el.getBoundingClientRect().top;
        let textWidget: TextWidget = new TextWidget();
        textWidget.position = new Position(offsetX - 100, offsetY - 20);
        textWidget.inputText = "Dummy";        
          dispatch(createActionResult<Widget>(ActionType.AddWidget, textWidget));
      }}
      onDragOver={(event) => {
        event.preventDefault();      
      }}
      position="relative"
    >
      <ImageLoader src={props.sheet.sheetUrl} />
      <List>{widgetsList}</List>
    </Box>
  );
};

export default SheetView;
