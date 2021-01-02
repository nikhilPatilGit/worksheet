import { Widget } from "src/component/Widget/Model";
import { UpdateWidgetPosition } from "src/modals/Widget";
import { DocumentState } from "./DocumentState";
import { Sheet, SheetIndex } from "./Model";

export type MapActionState = Map<
  ActionType,
  (state: DocumentState, action: DocumentAction) => DocumentState
>;

export enum ActionType {
  "AddNewSheet",
  "AddSheetArray",
  "AddWidget",
  "DeleteSheet",
  "DeleteWidget",
  "UpdatePosition",
}

export type DocumentAction =
| {
  type: ActionType.UpdatePosition;
  result: UpdateWidgetPosition;
}
  | {
      type: ActionType.AddWidget;
      result: Widget;
    }
  | {
      type: ActionType.DeleteWidget;
      result: string;
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
    };
