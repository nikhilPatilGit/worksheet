
import { Widget } from "src/component/Widget/Model";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";

export type MapActionState = Map<ActionType, (state: DocumentState, action: DocumentAction) => DocumentState>;
// export type ActionType = "AddSheet" | "AddSheetArray" | "AddWidget";

export enum ActionType {
  "AddSheet", "AddSheetArray", "AddWidget"
}

export type DocumentAction = {
  type: ActionType.AddWidget;
  result: Widget;
}
| {
  type: ActionType.AddSheet;
  result: Sheet;
}
| {
  type: ActionType.AddSheetArray;
  result: Sheet[];
}