
import { Widget } from "src/component/Widget/Model";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";

export type Position = {
  x: number;
  y: number;
};

export type MapActionState = Map<ActionType, (state: DocumentState, action: DocumentAction) => DocumentState>;

export enum ActionType {
  "AddNewSheet", "AddSheetArray", "AddWidget", "DeleteSheet", "DeleteWidget", "UpdateWidgetPosition"
}

export type SheetIndex = {
  sheet: Sheet;
  index: number;
}

export type UpdateWidgetPositionType = { 
  widgetId: string;
  position: Position;
};

export type DocumentAction = {
  type: ActionType.AddWidget;
  result: Widget;
}
| {
  type: ActionType.DeleteWidget;
  result: string;
}
| {
  type: ActionType.UpdateWidgetPosition;
  result: UpdateWidgetPositionType;
}
| {
  type: ActionType.AddNewSheet;
  result: SheetIndex;
}
| {
  type: ActionType.DeleteSheet;
  result: string;
}
| {
  type: ActionType.AddSheetArray;
  result: Sheet[];
}