
import { Widget } from "src/component/Widget/Model";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";

export type MapActionState = Map<ActionType, (state: DocumentState, action: DocumentAction) => DocumentState>;
// export type ActionType = "AddSheet" | "AddSheetArray" | "AddWidget";

export enum ActionType {
  "AddNewSheet", "AddSheetArray", "AddWidget"
}

export type NewSheet = {
  result: Sheet;
  index: number;
}

export type DocumentAction = {
  type: ActionType.AddWidget;
  result: Widget;
}
| {
  type: ActionType.AddNewSheet;
  result: NewSheet;
}
| {
  type: ActionType.AddSheetArray;
  result: Sheet[];
}