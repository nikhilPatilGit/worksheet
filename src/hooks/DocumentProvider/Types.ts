
import { Widget } from "src/component/Widget/Model";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";


export type DocumentAction = {
    type: "AddWidget";
    result: Widget;
  }
  | {
    type: "AddSheet";
    result: Sheet[];
  }

export type MapActionState = Map<ActionType, (ActionType: DocumentState, action: DocumentAction) => DocumentState>;
export type ActionType = "AddSheet" | "AddWidget";
